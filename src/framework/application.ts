import express from 'express';
import { Provider } from './interfaces';
import { toStringToken } from './utils';

export class Application {
  private http: express.Express;
  private providers: Provider[];
  private container: Map<string, any>;

  constructor() {
    this.http = express();
    this.providers = [];
    this.container = new Map();
  }

  public register(providers: Provider[]) {
    this.providers = this.providers.concat(providers);
    return this;
  }

  public async bootstrap() {
    for (const provider of this.providers) {
      // @ts-ignore
      const { provide, factory, value, inject = [] } = provider;
      const token = toStringToken(provide);
      let instance;
      if (value) {
        instance = value;
      }
      if (factory) {
        const args = inject.map((arg: any) => {
          const subtoken = toStringToken(arg);
          const value = this.container.get(subtoken);
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
      this.container.set(token, instance);
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
