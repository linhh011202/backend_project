import { InjectionToken, Provider, Type } from './interfaces';

function toStringToken(token: Function | string) {
  return typeof token === 'string' ? token : token.name;
}

export class DIContainer {
  private key2value: Map<string, any>;
  private providers: Provider[];

  constructor(providers: Provider[]) {
    this.key2value = new Map();
    this.providers = providers;
  }

  public async bootstrap() {
    for (const provider of this.providers) {
      // @ts-ignore
      const { provide, factory, value, inject = [] } = provider;
      const token = toStringToken(provide);
      if (this.key2value.has(token)) {
        continue;
      }
      let instance;
      if (value) {
        instance = value;
      }
      if (factory) {
        const args = inject.map((arg: any) => {
          const subtoken = toStringToken(arg);
          const value = this.key2value.get(subtoken);
          if (!value) {
            throw new Error(`Missing dependency '${subtoken}' when creating '${token}'`);
          }
          return value;
        });
        instance = await factory(...args);
      }
      if (!instance) {
        throw new Error(`Can not create '${token}'`);
      }
      this.key2value.set(token, instance);
    }
  }

  public get<TInput = any, TOutput = TInput>(token: InjectionToken<TInput>) {
    const key = toStringToken(token);
    const instance = this.key2value.get(key);
    if (!instance) {
      throw new Error(`Not found instance '${key}'`);
    }
    return instance as TOutput;
  }

  public resolve<T = any>(cls: Type<T>) {
    const params = Reflect.getOwnMetadata('design:paramtypes', cls) ?? [];
    const args = params.map((param: any) => this.get(param));
    return new cls(...args);
  }
}
