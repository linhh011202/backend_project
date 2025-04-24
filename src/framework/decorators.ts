import 'reflect-metadata';
import { HttpMetadata, HttpMethod } from './constants';
import { ClassOrInstance, RequestGuard, RequestMiddleware } from './interfaces';

const HttpRequest = (method: string, path?: string): MethodDecorator => {
  return (target, prop, descriptor) => {
    Reflect.defineMetadata(HttpMetadata.Method, method, descriptor.value!);
    Reflect.defineMetadata(HttpMetadata.Path, path || '', descriptor.value!);
  };
};

export const Get = (path?: string) => HttpRequest(HttpMethod.Get, path);

export const Post = (path?: string) => HttpRequest(HttpMethod.Post, path);

export const Put = (path?: string) => HttpRequest(HttpMethod.Put, path);

export const Patch = (path?: string) => HttpRequest(HttpMethod.Patch, path);

export const Delete = (path?: string) => HttpRequest(HttpMethod.Delete, path);

export const Controller = (prefix?: string): ClassDecorator => {
  return target => {
    Reflect.defineMetadata(HttpMetadata.Prefix, prefix || '', target);
  };
};

export const UseMiddlewares = (...middlewares: ClassOrInstance<RequestMiddleware>[]): MethodDecorator => {
  return (target, prop, descriptor) => {
    Reflect.defineMetadata(HttpMetadata.Middlewares, middlewares, descriptor.value!);
  };
};

export const UseGuards = (...guards: ClassOrInstance<RequestGuard>[]): MethodDecorator => {
  return (target, prop, descriptor) => {
    Reflect.defineMetadata(HttpMetadata.Guards, guards, descriptor.value!);
  };
};

export const Permissions = (...permissions: string[]): MethodDecorator => {
  return (target, prop, descriptor) => {
    Reflect.defineMetadata(HttpMetadata.Permissions, permissions, descriptor.value!);
  };
};
