import { Request, Response, NextFunction } from 'express';

export interface Type<T = any> extends Function {
  new (...args: any[]): T;
}

export type ClassOrInstance<T = any> = T | Type<T>;

export type InjectionToken<T = any> = string | Type<T>;

export interface ValueProvider<T = any> {
  provide: InjectionToken<T>;
  value: T;
}

export interface FactoryProvider<T = any> {
  provide: InjectionToken<T>;
  inject?: InjectionToken[];
  factory: (...args: any[]) => T | Promise<T>;
}

export type Provider<T = any> = ValueProvider<T> | FactoryProvider<T>;

export interface RequestMiddleware {
  handle(req: Request, res: Response, next: NextFunction): void | Promise<void>;
}
