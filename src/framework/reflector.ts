import { HttpMetadata } from './constants';
import { ClassOrInstance, RequestMiddleware, Type } from './interfaces';

export namespace HttpMetadataReflector {
  export function prefix(Controller: Type) {
    return Reflect.getMetadata(HttpMetadata.Prefix, Controller) as string;
  }

  export function method(fn: Function) {
    return Reflect.getMetadata(HttpMetadata.Method, fn) as string;
  }

  export function path(fn: Function) {
    return Reflect.getMetadata(HttpMetadata.Path, fn) as string;
  }

  export function middlewares(fn: Function) {
    let middlewares = Reflect.getMetadata(HttpMetadata.Middlewares, fn);
    if (middlewares == null) {
      middlewares = [];
    }
    return middlewares as ClassOrInstance<RequestMiddleware>[];
  }
}
