import dotenv from 'dotenv';

export class EnvService {
  private key2value: Record<string, string>;

  constructor(opts: dotenv.DotenvConfigOptions) {
    const { parsed = {} } = dotenv.config(opts);
    // @ts-ignore
    this.key2value = { ...process.env, ...parsed };
  }

  public get<TOutput = string>(key: string, fallback?: TOutput) {
    const value = this.key2value[key] as TOutput;
    if (value === undefined) {
      return fallback;
    }
    return value;
  }

  public number(key: string, fallback?: number) {
    const value = this.get(key);
    if (value === undefined) {
      return fallback;
    }
    return +value;
  }
}
