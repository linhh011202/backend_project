import dotenv from 'dotenv';

export class EnvService {
  private key2value: Record<string, any>;

  constructor(options: dotenv.DotenvConfigOptions) {
    const { parsed = {} } = dotenv.config(options);
    this.key2value = { ...process.env, ...parsed };
  }

  public get<T = any>(key: string, fallback?: T) {
    return this.key2value[key] ?? fallback;
  }

  public number(key: string, fallback?: number) {
    let value = this.get<number>(key, fallback);
    if (typeof value === 'string') {
      return +value;
    }
    return value;
  }

  public string(key: string, fallback?: string) {
    return this.get<String>(key, fallback);
  }
}
