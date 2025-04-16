export interface Type<T = any> extends Function {
  new (...args: any[]): T;
}

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
