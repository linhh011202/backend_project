import express from 'express';
import { DIContainer } from './di-container';
import { Provider, Type } from './interfaces';
import { HttpMetadataReflector } from './reflector';
import { HttpExecutionContext } from './context';

type ApplicationConfig = {
  providers: Provider[];
  controllers: Type[];
};

export class Application {
  private http: express.Express;
  private container: DIContainer;
  private controllers: Type[];

  constructor(config: ApplicationConfig) {
    const { providers, controllers } = config;
    this.http = express();
    this.container = new DIContainer(providers);
    this.controllers = controllers;
  }

  public async bootstrap() {
    await this.container.bootstrap();
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

        // @ts-ignore
        router[method](path, async (req: express.Request, res: express.Response, next: express.NextFunction) => {
          const ctx = new HttpExecutionContext(req, res, next);
          try {
            const result = await handler.call(controller, ctx);
            res.status(200).json(result);
          } catch (error: any) {
            res.status(500).json({ message: error.message });
          }
        });
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
