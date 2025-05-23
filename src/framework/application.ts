import express from 'express';
import { HttpExecutionContext } from './context';
import { DIContainer } from './di-container';
import { ClassOrInstance, Provider, RequestMiddleware, Type } from './interfaces';
import { HttpMetadataReflector } from './reflector';

type ApplicationConfig = {
  providers: Provider[];
  controllers: Type[];
  middlewares: ClassOrInstance<RequestMiddleware>[];
};

export class Application {
  private http: express.Express;
  private container: DIContainer;
  private controllers: Type[];
  private middlewares: ClassOrInstance<RequestMiddleware>[];

  constructor(config: ApplicationConfig) {
    const { providers, controllers, middlewares } = config;
    this.http = express();
    this.container = new DIContainer(providers);
    this.controllers = controllers;
    this.middlewares = middlewares;
  }

  public async bootstrap() {
    await this.container.bootstrap();

    // global middlewares
    const $middlewares = this.middlewares.map(middleware => {
      if (typeof middleware === 'object') {
        return middleware.handle.bind(middleware);
      }
      const instance = this.container.resolve(middleware);
      return instance.handle.bind(instance);
    });

    for (const ControllerClass of this.controllers) {
      const router = express.Router();
      const prefix = HttpMetadataReflector.prefix(ControllerClass);
      const controller = this.container.resolve(ControllerClass);

      const prototype = Object.getPrototypeOf(controller);
      const properties = Object.getOwnPropertyNames(prototype);

      for (const property of properties) {
        const handler = controller[property] as Function;
        if (typeof handler !== 'function') {
          continue;
        }

        const path = HttpMetadataReflector.path(handler);
        const method = HttpMetadataReflector.method(handler);
        if (method == null) {
          continue;
        }

        const middlewares = HttpMetadataReflector.middlewares(handler).map(middleware => {
          if (typeof middleware === 'object') {
            return middleware.handle.bind(middleware);
          }
          const instance = this.container.resolve(middleware);
          return instance.handle.bind(instance);
        });

        const guards = HttpMetadataReflector.guards(handler).map(guard => {
          if (typeof guard === 'object') {
            return guard;
          }
          return this.container.resolve(guard);
        });

        // @ts-ignore
        router[method](
          path,
          ...$middlewares,
          ...middlewares,
          async (req: express.Request, res: express.Response, next: express.NextFunction) => {
            const ctx = new HttpExecutionContext(req, res, next, handler);
            try {
              for (const guard of guards) {
                const ok = await guard.can(ctx);
                if (!ok) {
                  res.status(403).json({ message: 'Forbidden' });
                  return;
                }
              }
              const result = await handler.call(controller, ctx);
              if (!res.headersSent) {
                res.status(200).json(result);
              }
            } catch (error: any) {
              res.status(500).json({ message: error.message });
            }
          }
        );
      }

      prefix ? this.http.use(prefix, router) : this.http.use(router);
    }
  }

  public enable(setting: string) {
    this.http.enable(setting);
    return this;
  }

  public disable(setting: string) {
    this.http.disable(setting);
    return this;
  }

  public use(...args: any[]) {
    this.http.use(...args);
    return this;
  }

  public listen(port: number, callback: (error?: Error) => void) {
    this.http.listen(port, callback);
  }
}
