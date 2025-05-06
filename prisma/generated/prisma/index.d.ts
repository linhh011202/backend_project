
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model permission
 * 
 */
export type permission = $Result.DefaultSelection<Prisma.$permissionPayload>
/**
 * Model role
 * 
 */
export type role = $Result.DefaultSelection<Prisma.$rolePayload>
/**
 * Model role_permission
 * 
 */
export type role_permission = $Result.DefaultSelection<Prisma.$role_permissionPayload>
/**
 * Model user
 * 
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Permissions
 * const permissions = await prisma.permission.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Permissions
   * const permissions = await prisma.permission.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.permission`: Exposes CRUD operations for the **permission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Permissions
    * const permissions = await prisma.permission.findMany()
    * ```
    */
  get permission(): Prisma.permissionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.role`: Exposes CRUD operations for the **role** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roles
    * const roles = await prisma.role.findMany()
    * ```
    */
  get role(): Prisma.roleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.role_permission`: Exposes CRUD operations for the **role_permission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Role_permissions
    * const role_permissions = await prisma.role_permission.findMany()
    * ```
    */
  get role_permission(): Prisma.role_permissionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.userDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    permission: 'permission',
    role: 'role',
    role_permission: 'role_permission',
    user: 'user'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "permission" | "role" | "role_permission" | "user"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      permission: {
        payload: Prisma.$permissionPayload<ExtArgs>
        fields: Prisma.permissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.permissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$permissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.permissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$permissionPayload>
          }
          findFirst: {
            args: Prisma.permissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$permissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.permissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$permissionPayload>
          }
          findMany: {
            args: Prisma.permissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$permissionPayload>[]
          }
          create: {
            args: Prisma.permissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$permissionPayload>
          }
          createMany: {
            args: Prisma.permissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.permissionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$permissionPayload>[]
          }
          delete: {
            args: Prisma.permissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$permissionPayload>
          }
          update: {
            args: Prisma.permissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$permissionPayload>
          }
          deleteMany: {
            args: Prisma.permissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.permissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.permissionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$permissionPayload>[]
          }
          upsert: {
            args: Prisma.permissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$permissionPayload>
          }
          aggregate: {
            args: Prisma.PermissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePermission>
          }
          groupBy: {
            args: Prisma.permissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<PermissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.permissionCountArgs<ExtArgs>
            result: $Utils.Optional<PermissionCountAggregateOutputType> | number
          }
        }
      }
      role: {
        payload: Prisma.$rolePayload<ExtArgs>
        fields: Prisma.roleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.roleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.roleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolePayload>
          }
          findFirst: {
            args: Prisma.roleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.roleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolePayload>
          }
          findMany: {
            args: Prisma.roleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolePayload>[]
          }
          create: {
            args: Prisma.roleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolePayload>
          }
          createMany: {
            args: Prisma.roleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.roleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolePayload>[]
          }
          delete: {
            args: Prisma.roleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolePayload>
          }
          update: {
            args: Prisma.roleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolePayload>
          }
          deleteMany: {
            args: Prisma.roleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.roleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.roleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolePayload>[]
          }
          upsert: {
            args: Prisma.roleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolePayload>
          }
          aggregate: {
            args: Prisma.RoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRole>
          }
          groupBy: {
            args: Prisma.roleGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.roleCountArgs<ExtArgs>
            result: $Utils.Optional<RoleCountAggregateOutputType> | number
          }
        }
      }
      role_permission: {
        payload: Prisma.$role_permissionPayload<ExtArgs>
        fields: Prisma.role_permissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.role_permissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$role_permissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.role_permissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$role_permissionPayload>
          }
          findFirst: {
            args: Prisma.role_permissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$role_permissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.role_permissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$role_permissionPayload>
          }
          findMany: {
            args: Prisma.role_permissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$role_permissionPayload>[]
          }
          create: {
            args: Prisma.role_permissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$role_permissionPayload>
          }
          createMany: {
            args: Prisma.role_permissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.role_permissionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$role_permissionPayload>[]
          }
          delete: {
            args: Prisma.role_permissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$role_permissionPayload>
          }
          update: {
            args: Prisma.role_permissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$role_permissionPayload>
          }
          deleteMany: {
            args: Prisma.role_permissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.role_permissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.role_permissionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$role_permissionPayload>[]
          }
          upsert: {
            args: Prisma.role_permissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$role_permissionPayload>
          }
          aggregate: {
            args: Prisma.Role_permissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRole_permission>
          }
          groupBy: {
            args: Prisma.role_permissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<Role_permissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.role_permissionCountArgs<ExtArgs>
            result: $Utils.Optional<Role_permissionCountAggregateOutputType> | number
          }
        }
      }
      user: {
        payload: Prisma.$userPayload<ExtArgs>
        fields: Prisma.userFieldRefs
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          create: {
            args: Prisma.userCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.userCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.userUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.userCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    permission?: permissionOmit
    role?: roleOmit
    role_permission?: role_permissionOmit
    user?: userOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type PermissionCountOutputType
   */

  export type PermissionCountOutputType = {
    role_permission: number
  }

  export type PermissionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role_permission?: boolean | PermissionCountOutputTypeCountRole_permissionArgs
  }

  // Custom InputTypes
  /**
   * PermissionCountOutputType without action
   */
  export type PermissionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermissionCountOutputType
     */
    select?: PermissionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PermissionCountOutputType without action
   */
  export type PermissionCountOutputTypeCountRole_permissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: role_permissionWhereInput
  }


  /**
   * Count Type RoleCountOutputType
   */

  export type RoleCountOutputType = {
    role_permission: number
    user: number
  }

  export type RoleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role_permission?: boolean | RoleCountOutputTypeCountRole_permissionArgs
    user?: boolean | RoleCountOutputTypeCountUserArgs
  }

  // Custom InputTypes
  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleCountOutputType
     */
    select?: RoleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeCountRole_permissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: role_permissionWhereInput
  }

  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeCountUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput
  }


  /**
   * Models
   */

  /**
   * Model permission
   */

  export type AggregatePermission = {
    _count: PermissionCountAggregateOutputType | null
    _avg: PermissionAvgAggregateOutputType | null
    _sum: PermissionSumAggregateOutputType | null
    _min: PermissionMinAggregateOutputType | null
    _max: PermissionMaxAggregateOutputType | null
  }

  export type PermissionAvgAggregateOutputType = {
    id: number | null
  }

  export type PermissionSumAggregateOutputType = {
    id: number | null
  }

  export type PermissionMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type PermissionMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type PermissionCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type PermissionAvgAggregateInputType = {
    id?: true
  }

  export type PermissionSumAggregateInputType = {
    id?: true
  }

  export type PermissionMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type PermissionMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type PermissionCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type PermissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which permission to aggregate.
     */
    where?: permissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of permissions to fetch.
     */
    orderBy?: permissionOrderByWithRelationInput | permissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: permissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned permissions
    **/
    _count?: true | PermissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PermissionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PermissionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PermissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PermissionMaxAggregateInputType
  }

  export type GetPermissionAggregateType<T extends PermissionAggregateArgs> = {
        [P in keyof T & keyof AggregatePermission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePermission[P]>
      : GetScalarType<T[P], AggregatePermission[P]>
  }




  export type permissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: permissionWhereInput
    orderBy?: permissionOrderByWithAggregationInput | permissionOrderByWithAggregationInput[]
    by: PermissionScalarFieldEnum[] | PermissionScalarFieldEnum
    having?: permissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PermissionCountAggregateInputType | true
    _avg?: PermissionAvgAggregateInputType
    _sum?: PermissionSumAggregateInputType
    _min?: PermissionMinAggregateInputType
    _max?: PermissionMaxAggregateInputType
  }

  export type PermissionGroupByOutputType = {
    id: number
    name: string
    _count: PermissionCountAggregateOutputType | null
    _avg: PermissionAvgAggregateOutputType | null
    _sum: PermissionSumAggregateOutputType | null
    _min: PermissionMinAggregateOutputType | null
    _max: PermissionMaxAggregateOutputType | null
  }

  type GetPermissionGroupByPayload<T extends permissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PermissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PermissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PermissionGroupByOutputType[P]>
            : GetScalarType<T[P], PermissionGroupByOutputType[P]>
        }
      >
    >


  export type permissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    role_permission?: boolean | permission$role_permissionArgs<ExtArgs>
    _count?: boolean | PermissionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["permission"]>

  export type permissionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["permission"]>

  export type permissionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["permission"]>

  export type permissionSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type permissionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["permission"]>
  export type permissionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role_permission?: boolean | permission$role_permissionArgs<ExtArgs>
    _count?: boolean | PermissionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type permissionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type permissionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $permissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "permission"
    objects: {
      role_permission: Prisma.$role_permissionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["permission"]>
    composites: {}
  }

  type permissionGetPayload<S extends boolean | null | undefined | permissionDefaultArgs> = $Result.GetResult<Prisma.$permissionPayload, S>

  type permissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<permissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PermissionCountAggregateInputType | true
    }

  export interface permissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['permission'], meta: { name: 'permission' } }
    /**
     * Find zero or one Permission that matches the filter.
     * @param {permissionFindUniqueArgs} args - Arguments to find a Permission
     * @example
     * // Get one Permission
     * const permission = await prisma.permission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends permissionFindUniqueArgs>(args: SelectSubset<T, permissionFindUniqueArgs<ExtArgs>>): Prisma__permissionClient<$Result.GetResult<Prisma.$permissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Permission that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {permissionFindUniqueOrThrowArgs} args - Arguments to find a Permission
     * @example
     * // Get one Permission
     * const permission = await prisma.permission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends permissionFindUniqueOrThrowArgs>(args: SelectSubset<T, permissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__permissionClient<$Result.GetResult<Prisma.$permissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Permission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {permissionFindFirstArgs} args - Arguments to find a Permission
     * @example
     * // Get one Permission
     * const permission = await prisma.permission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends permissionFindFirstArgs>(args?: SelectSubset<T, permissionFindFirstArgs<ExtArgs>>): Prisma__permissionClient<$Result.GetResult<Prisma.$permissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Permission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {permissionFindFirstOrThrowArgs} args - Arguments to find a Permission
     * @example
     * // Get one Permission
     * const permission = await prisma.permission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends permissionFindFirstOrThrowArgs>(args?: SelectSubset<T, permissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__permissionClient<$Result.GetResult<Prisma.$permissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Permissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {permissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Permissions
     * const permissions = await prisma.permission.findMany()
     * 
     * // Get first 10 Permissions
     * const permissions = await prisma.permission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const permissionWithIdOnly = await prisma.permission.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends permissionFindManyArgs>(args?: SelectSubset<T, permissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$permissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Permission.
     * @param {permissionCreateArgs} args - Arguments to create a Permission.
     * @example
     * // Create one Permission
     * const Permission = await prisma.permission.create({
     *   data: {
     *     // ... data to create a Permission
     *   }
     * })
     * 
     */
    create<T extends permissionCreateArgs>(args: SelectSubset<T, permissionCreateArgs<ExtArgs>>): Prisma__permissionClient<$Result.GetResult<Prisma.$permissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Permissions.
     * @param {permissionCreateManyArgs} args - Arguments to create many Permissions.
     * @example
     * // Create many Permissions
     * const permission = await prisma.permission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends permissionCreateManyArgs>(args?: SelectSubset<T, permissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Permissions and returns the data saved in the database.
     * @param {permissionCreateManyAndReturnArgs} args - Arguments to create many Permissions.
     * @example
     * // Create many Permissions
     * const permission = await prisma.permission.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Permissions and only return the `id`
     * const permissionWithIdOnly = await prisma.permission.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends permissionCreateManyAndReturnArgs>(args?: SelectSubset<T, permissionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$permissionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Permission.
     * @param {permissionDeleteArgs} args - Arguments to delete one Permission.
     * @example
     * // Delete one Permission
     * const Permission = await prisma.permission.delete({
     *   where: {
     *     // ... filter to delete one Permission
     *   }
     * })
     * 
     */
    delete<T extends permissionDeleteArgs>(args: SelectSubset<T, permissionDeleteArgs<ExtArgs>>): Prisma__permissionClient<$Result.GetResult<Prisma.$permissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Permission.
     * @param {permissionUpdateArgs} args - Arguments to update one Permission.
     * @example
     * // Update one Permission
     * const permission = await prisma.permission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends permissionUpdateArgs>(args: SelectSubset<T, permissionUpdateArgs<ExtArgs>>): Prisma__permissionClient<$Result.GetResult<Prisma.$permissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Permissions.
     * @param {permissionDeleteManyArgs} args - Arguments to filter Permissions to delete.
     * @example
     * // Delete a few Permissions
     * const { count } = await prisma.permission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends permissionDeleteManyArgs>(args?: SelectSubset<T, permissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Permissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {permissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Permissions
     * const permission = await prisma.permission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends permissionUpdateManyArgs>(args: SelectSubset<T, permissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Permissions and returns the data updated in the database.
     * @param {permissionUpdateManyAndReturnArgs} args - Arguments to update many Permissions.
     * @example
     * // Update many Permissions
     * const permission = await prisma.permission.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Permissions and only return the `id`
     * const permissionWithIdOnly = await prisma.permission.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends permissionUpdateManyAndReturnArgs>(args: SelectSubset<T, permissionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$permissionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Permission.
     * @param {permissionUpsertArgs} args - Arguments to update or create a Permission.
     * @example
     * // Update or create a Permission
     * const permission = await prisma.permission.upsert({
     *   create: {
     *     // ... data to create a Permission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Permission we want to update
     *   }
     * })
     */
    upsert<T extends permissionUpsertArgs>(args: SelectSubset<T, permissionUpsertArgs<ExtArgs>>): Prisma__permissionClient<$Result.GetResult<Prisma.$permissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Permissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {permissionCountArgs} args - Arguments to filter Permissions to count.
     * @example
     * // Count the number of Permissions
     * const count = await prisma.permission.count({
     *   where: {
     *     // ... the filter for the Permissions we want to count
     *   }
     * })
    **/
    count<T extends permissionCountArgs>(
      args?: Subset<T, permissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PermissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Permission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PermissionAggregateArgs>(args: Subset<T, PermissionAggregateArgs>): Prisma.PrismaPromise<GetPermissionAggregateType<T>>

    /**
     * Group by Permission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {permissionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends permissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: permissionGroupByArgs['orderBy'] }
        : { orderBy?: permissionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, permissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPermissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the permission model
   */
  readonly fields: permissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for permission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__permissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    role_permission<T extends permission$role_permissionArgs<ExtArgs> = {}>(args?: Subset<T, permission$role_permissionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$role_permissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the permission model
   */
  interface permissionFieldRefs {
    readonly id: FieldRef<"permission", 'Int'>
    readonly name: FieldRef<"permission", 'String'>
  }
    

  // Custom InputTypes
  /**
   * permission findUnique
   */
  export type permissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the permission
     */
    select?: permissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the permission
     */
    omit?: permissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: permissionInclude<ExtArgs> | null
    /**
     * Filter, which permission to fetch.
     */
    where: permissionWhereUniqueInput
  }

  /**
   * permission findUniqueOrThrow
   */
  export type permissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the permission
     */
    select?: permissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the permission
     */
    omit?: permissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: permissionInclude<ExtArgs> | null
    /**
     * Filter, which permission to fetch.
     */
    where: permissionWhereUniqueInput
  }

  /**
   * permission findFirst
   */
  export type permissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the permission
     */
    select?: permissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the permission
     */
    omit?: permissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: permissionInclude<ExtArgs> | null
    /**
     * Filter, which permission to fetch.
     */
    where?: permissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of permissions to fetch.
     */
    orderBy?: permissionOrderByWithRelationInput | permissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for permissions.
     */
    cursor?: permissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of permissions.
     */
    distinct?: PermissionScalarFieldEnum | PermissionScalarFieldEnum[]
  }

  /**
   * permission findFirstOrThrow
   */
  export type permissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the permission
     */
    select?: permissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the permission
     */
    omit?: permissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: permissionInclude<ExtArgs> | null
    /**
     * Filter, which permission to fetch.
     */
    where?: permissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of permissions to fetch.
     */
    orderBy?: permissionOrderByWithRelationInput | permissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for permissions.
     */
    cursor?: permissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of permissions.
     */
    distinct?: PermissionScalarFieldEnum | PermissionScalarFieldEnum[]
  }

  /**
   * permission findMany
   */
  export type permissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the permission
     */
    select?: permissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the permission
     */
    omit?: permissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: permissionInclude<ExtArgs> | null
    /**
     * Filter, which permissions to fetch.
     */
    where?: permissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of permissions to fetch.
     */
    orderBy?: permissionOrderByWithRelationInput | permissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing permissions.
     */
    cursor?: permissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` permissions.
     */
    skip?: number
    distinct?: PermissionScalarFieldEnum | PermissionScalarFieldEnum[]
  }

  /**
   * permission create
   */
  export type permissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the permission
     */
    select?: permissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the permission
     */
    omit?: permissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: permissionInclude<ExtArgs> | null
    /**
     * The data needed to create a permission.
     */
    data: XOR<permissionCreateInput, permissionUncheckedCreateInput>
  }

  /**
   * permission createMany
   */
  export type permissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many permissions.
     */
    data: permissionCreateManyInput | permissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * permission createManyAndReturn
   */
  export type permissionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the permission
     */
    select?: permissionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the permission
     */
    omit?: permissionOmit<ExtArgs> | null
    /**
     * The data used to create many permissions.
     */
    data: permissionCreateManyInput | permissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * permission update
   */
  export type permissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the permission
     */
    select?: permissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the permission
     */
    omit?: permissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: permissionInclude<ExtArgs> | null
    /**
     * The data needed to update a permission.
     */
    data: XOR<permissionUpdateInput, permissionUncheckedUpdateInput>
    /**
     * Choose, which permission to update.
     */
    where: permissionWhereUniqueInput
  }

  /**
   * permission updateMany
   */
  export type permissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update permissions.
     */
    data: XOR<permissionUpdateManyMutationInput, permissionUncheckedUpdateManyInput>
    /**
     * Filter which permissions to update
     */
    where?: permissionWhereInput
    /**
     * Limit how many permissions to update.
     */
    limit?: number
  }

  /**
   * permission updateManyAndReturn
   */
  export type permissionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the permission
     */
    select?: permissionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the permission
     */
    omit?: permissionOmit<ExtArgs> | null
    /**
     * The data used to update permissions.
     */
    data: XOR<permissionUpdateManyMutationInput, permissionUncheckedUpdateManyInput>
    /**
     * Filter which permissions to update
     */
    where?: permissionWhereInput
    /**
     * Limit how many permissions to update.
     */
    limit?: number
  }

  /**
   * permission upsert
   */
  export type permissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the permission
     */
    select?: permissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the permission
     */
    omit?: permissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: permissionInclude<ExtArgs> | null
    /**
     * The filter to search for the permission to update in case it exists.
     */
    where: permissionWhereUniqueInput
    /**
     * In case the permission found by the `where` argument doesn't exist, create a new permission with this data.
     */
    create: XOR<permissionCreateInput, permissionUncheckedCreateInput>
    /**
     * In case the permission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<permissionUpdateInput, permissionUncheckedUpdateInput>
  }

  /**
   * permission delete
   */
  export type permissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the permission
     */
    select?: permissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the permission
     */
    omit?: permissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: permissionInclude<ExtArgs> | null
    /**
     * Filter which permission to delete.
     */
    where: permissionWhereUniqueInput
  }

  /**
   * permission deleteMany
   */
  export type permissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which permissions to delete
     */
    where?: permissionWhereInput
    /**
     * Limit how many permissions to delete.
     */
    limit?: number
  }

  /**
   * permission.role_permission
   */
  export type permission$role_permissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role_permission
     */
    select?: role_permissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the role_permission
     */
    omit?: role_permissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: role_permissionInclude<ExtArgs> | null
    where?: role_permissionWhereInput
    orderBy?: role_permissionOrderByWithRelationInput | role_permissionOrderByWithRelationInput[]
    cursor?: role_permissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Role_permissionScalarFieldEnum | Role_permissionScalarFieldEnum[]
  }

  /**
   * permission without action
   */
  export type permissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the permission
     */
    select?: permissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the permission
     */
    omit?: permissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: permissionInclude<ExtArgs> | null
  }


  /**
   * Model role
   */

  export type AggregateRole = {
    _count: RoleCountAggregateOutputType | null
    _avg: RoleAvgAggregateOutputType | null
    _sum: RoleSumAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  export type RoleAvgAggregateOutputType = {
    id: number | null
  }

  export type RoleSumAggregateOutputType = {
    id: number | null
  }

  export type RoleMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type RoleMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type RoleCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type RoleAvgAggregateInputType = {
    id?: true
  }

  export type RoleSumAggregateInputType = {
    id?: true
  }

  export type RoleMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type RoleMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type RoleCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type RoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which role to aggregate.
     */
    where?: roleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of roles to fetch.
     */
    orderBy?: roleOrderByWithRelationInput | roleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: roleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned roles
    **/
    _count?: true | RoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoleMaxAggregateInputType
  }

  export type GetRoleAggregateType<T extends RoleAggregateArgs> = {
        [P in keyof T & keyof AggregateRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRole[P]>
      : GetScalarType<T[P], AggregateRole[P]>
  }




  export type roleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: roleWhereInput
    orderBy?: roleOrderByWithAggregationInput | roleOrderByWithAggregationInput[]
    by: RoleScalarFieldEnum[] | RoleScalarFieldEnum
    having?: roleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoleCountAggregateInputType | true
    _avg?: RoleAvgAggregateInputType
    _sum?: RoleSumAggregateInputType
    _min?: RoleMinAggregateInputType
    _max?: RoleMaxAggregateInputType
  }

  export type RoleGroupByOutputType = {
    id: number
    name: string
    _count: RoleCountAggregateOutputType | null
    _avg: RoleAvgAggregateOutputType | null
    _sum: RoleSumAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  type GetRoleGroupByPayload<T extends roleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoleGroupByOutputType[P]>
            : GetScalarType<T[P], RoleGroupByOutputType[P]>
        }
      >
    >


  export type roleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    role_permission?: boolean | role$role_permissionArgs<ExtArgs>
    user?: boolean | role$userArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["role"]>

  export type roleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["role"]>

  export type roleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["role"]>

  export type roleSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type roleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["role"]>
  export type roleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role_permission?: boolean | role$role_permissionArgs<ExtArgs>
    user?: boolean | role$userArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type roleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type roleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $rolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "role"
    objects: {
      role_permission: Prisma.$role_permissionPayload<ExtArgs>[]
      user: Prisma.$userPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["role"]>
    composites: {}
  }

  type roleGetPayload<S extends boolean | null | undefined | roleDefaultArgs> = $Result.GetResult<Prisma.$rolePayload, S>

  type roleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<roleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoleCountAggregateInputType | true
    }

  export interface roleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['role'], meta: { name: 'role' } }
    /**
     * Find zero or one Role that matches the filter.
     * @param {roleFindUniqueArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends roleFindUniqueArgs>(args: SelectSubset<T, roleFindUniqueArgs<ExtArgs>>): Prisma__roleClient<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Role that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {roleFindUniqueOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends roleFindUniqueOrThrowArgs>(args: SelectSubset<T, roleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__roleClient<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roleFindFirstArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends roleFindFirstArgs>(args?: SelectSubset<T, roleFindFirstArgs<ExtArgs>>): Prisma__roleClient<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roleFindFirstOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends roleFindFirstOrThrowArgs>(args?: SelectSubset<T, roleFindFirstOrThrowArgs<ExtArgs>>): Prisma__roleClient<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles
     * const roles = await prisma.role.findMany()
     * 
     * // Get first 10 Roles
     * const roles = await prisma.role.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roleWithIdOnly = await prisma.role.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends roleFindManyArgs>(args?: SelectSubset<T, roleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Role.
     * @param {roleCreateArgs} args - Arguments to create a Role.
     * @example
     * // Create one Role
     * const Role = await prisma.role.create({
     *   data: {
     *     // ... data to create a Role
     *   }
     * })
     * 
     */
    create<T extends roleCreateArgs>(args: SelectSubset<T, roleCreateArgs<ExtArgs>>): Prisma__roleClient<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Roles.
     * @param {roleCreateManyArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends roleCreateManyArgs>(args?: SelectSubset<T, roleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Roles and returns the data saved in the database.
     * @param {roleCreateManyAndReturnArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Roles and only return the `id`
     * const roleWithIdOnly = await prisma.role.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends roleCreateManyAndReturnArgs>(args?: SelectSubset<T, roleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Role.
     * @param {roleDeleteArgs} args - Arguments to delete one Role.
     * @example
     * // Delete one Role
     * const Role = await prisma.role.delete({
     *   where: {
     *     // ... filter to delete one Role
     *   }
     * })
     * 
     */
    delete<T extends roleDeleteArgs>(args: SelectSubset<T, roleDeleteArgs<ExtArgs>>): Prisma__roleClient<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Role.
     * @param {roleUpdateArgs} args - Arguments to update one Role.
     * @example
     * // Update one Role
     * const role = await prisma.role.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends roleUpdateArgs>(args: SelectSubset<T, roleUpdateArgs<ExtArgs>>): Prisma__roleClient<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Roles.
     * @param {roleDeleteManyArgs} args - Arguments to filter Roles to delete.
     * @example
     * // Delete a few Roles
     * const { count } = await prisma.role.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends roleDeleteManyArgs>(args?: SelectSubset<T, roleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends roleUpdateManyArgs>(args: SelectSubset<T, roleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles and returns the data updated in the database.
     * @param {roleUpdateManyAndReturnArgs} args - Arguments to update many Roles.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Roles and only return the `id`
     * const roleWithIdOnly = await prisma.role.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends roleUpdateManyAndReturnArgs>(args: SelectSubset<T, roleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Role.
     * @param {roleUpsertArgs} args - Arguments to update or create a Role.
     * @example
     * // Update or create a Role
     * const role = await prisma.role.upsert({
     *   create: {
     *     // ... data to create a Role
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Role we want to update
     *   }
     * })
     */
    upsert<T extends roleUpsertArgs>(args: SelectSubset<T, roleUpsertArgs<ExtArgs>>): Prisma__roleClient<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roleCountArgs} args - Arguments to filter Roles to count.
     * @example
     * // Count the number of Roles
     * const count = await prisma.role.count({
     *   where: {
     *     // ... the filter for the Roles we want to count
     *   }
     * })
    **/
    count<T extends roleCountArgs>(
      args?: Subset<T, roleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoleAggregateArgs>(args: Subset<T, RoleAggregateArgs>): Prisma.PrismaPromise<GetRoleAggregateType<T>>

    /**
     * Group by Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends roleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: roleGroupByArgs['orderBy'] }
        : { orderBy?: roleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, roleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the role model
   */
  readonly fields: roleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for role.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__roleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    role_permission<T extends role$role_permissionArgs<ExtArgs> = {}>(args?: Subset<T, role$role_permissionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$role_permissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user<T extends role$userArgs<ExtArgs> = {}>(args?: Subset<T, role$userArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the role model
   */
  interface roleFieldRefs {
    readonly id: FieldRef<"role", 'Int'>
    readonly name: FieldRef<"role", 'String'>
  }
    

  // Custom InputTypes
  /**
   * role findUnique
   */
  export type roleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the role
     */
    omit?: roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roleInclude<ExtArgs> | null
    /**
     * Filter, which role to fetch.
     */
    where: roleWhereUniqueInput
  }

  /**
   * role findUniqueOrThrow
   */
  export type roleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the role
     */
    omit?: roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roleInclude<ExtArgs> | null
    /**
     * Filter, which role to fetch.
     */
    where: roleWhereUniqueInput
  }

  /**
   * role findFirst
   */
  export type roleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the role
     */
    omit?: roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roleInclude<ExtArgs> | null
    /**
     * Filter, which role to fetch.
     */
    where?: roleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of roles to fetch.
     */
    orderBy?: roleOrderByWithRelationInput | roleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for roles.
     */
    cursor?: roleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * role findFirstOrThrow
   */
  export type roleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the role
     */
    omit?: roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roleInclude<ExtArgs> | null
    /**
     * Filter, which role to fetch.
     */
    where?: roleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of roles to fetch.
     */
    orderBy?: roleOrderByWithRelationInput | roleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for roles.
     */
    cursor?: roleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * role findMany
   */
  export type roleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the role
     */
    omit?: roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roleInclude<ExtArgs> | null
    /**
     * Filter, which roles to fetch.
     */
    where?: roleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of roles to fetch.
     */
    orderBy?: roleOrderByWithRelationInput | roleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing roles.
     */
    cursor?: roleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` roles.
     */
    skip?: number
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * role create
   */
  export type roleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the role
     */
    omit?: roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roleInclude<ExtArgs> | null
    /**
     * The data needed to create a role.
     */
    data: XOR<roleCreateInput, roleUncheckedCreateInput>
  }

  /**
   * role createMany
   */
  export type roleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many roles.
     */
    data: roleCreateManyInput | roleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * role createManyAndReturn
   */
  export type roleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the role
     */
    omit?: roleOmit<ExtArgs> | null
    /**
     * The data used to create many roles.
     */
    data: roleCreateManyInput | roleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * role update
   */
  export type roleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the role
     */
    omit?: roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roleInclude<ExtArgs> | null
    /**
     * The data needed to update a role.
     */
    data: XOR<roleUpdateInput, roleUncheckedUpdateInput>
    /**
     * Choose, which role to update.
     */
    where: roleWhereUniqueInput
  }

  /**
   * role updateMany
   */
  export type roleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update roles.
     */
    data: XOR<roleUpdateManyMutationInput, roleUncheckedUpdateManyInput>
    /**
     * Filter which roles to update
     */
    where?: roleWhereInput
    /**
     * Limit how many roles to update.
     */
    limit?: number
  }

  /**
   * role updateManyAndReturn
   */
  export type roleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the role
     */
    omit?: roleOmit<ExtArgs> | null
    /**
     * The data used to update roles.
     */
    data: XOR<roleUpdateManyMutationInput, roleUncheckedUpdateManyInput>
    /**
     * Filter which roles to update
     */
    where?: roleWhereInput
    /**
     * Limit how many roles to update.
     */
    limit?: number
  }

  /**
   * role upsert
   */
  export type roleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the role
     */
    omit?: roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roleInclude<ExtArgs> | null
    /**
     * The filter to search for the role to update in case it exists.
     */
    where: roleWhereUniqueInput
    /**
     * In case the role found by the `where` argument doesn't exist, create a new role with this data.
     */
    create: XOR<roleCreateInput, roleUncheckedCreateInput>
    /**
     * In case the role was found with the provided `where` argument, update it with this data.
     */
    update: XOR<roleUpdateInput, roleUncheckedUpdateInput>
  }

  /**
   * role delete
   */
  export type roleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the role
     */
    omit?: roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roleInclude<ExtArgs> | null
    /**
     * Filter which role to delete.
     */
    where: roleWhereUniqueInput
  }

  /**
   * role deleteMany
   */
  export type roleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which roles to delete
     */
    where?: roleWhereInput
    /**
     * Limit how many roles to delete.
     */
    limit?: number
  }

  /**
   * role.role_permission
   */
  export type role$role_permissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role_permission
     */
    select?: role_permissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the role_permission
     */
    omit?: role_permissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: role_permissionInclude<ExtArgs> | null
    where?: role_permissionWhereInput
    orderBy?: role_permissionOrderByWithRelationInput | role_permissionOrderByWithRelationInput[]
    cursor?: role_permissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Role_permissionScalarFieldEnum | Role_permissionScalarFieldEnum[]
  }

  /**
   * role.user
   */
  export type role$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    where?: userWhereInput
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    cursor?: userWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * role without action
   */
  export type roleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the role
     */
    omit?: roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roleInclude<ExtArgs> | null
  }


  /**
   * Model role_permission
   */

  export type AggregateRole_permission = {
    _count: Role_permissionCountAggregateOutputType | null
    _avg: Role_permissionAvgAggregateOutputType | null
    _sum: Role_permissionSumAggregateOutputType | null
    _min: Role_permissionMinAggregateOutputType | null
    _max: Role_permissionMaxAggregateOutputType | null
  }

  export type Role_permissionAvgAggregateOutputType = {
    id: number | null
    role_id: number | null
    permission_id: number | null
  }

  export type Role_permissionSumAggregateOutputType = {
    id: number | null
    role_id: number | null
    permission_id: number | null
  }

  export type Role_permissionMinAggregateOutputType = {
    id: number | null
    role_id: number | null
    permission_id: number | null
  }

  export type Role_permissionMaxAggregateOutputType = {
    id: number | null
    role_id: number | null
    permission_id: number | null
  }

  export type Role_permissionCountAggregateOutputType = {
    id: number
    role_id: number
    permission_id: number
    _all: number
  }


  export type Role_permissionAvgAggregateInputType = {
    id?: true
    role_id?: true
    permission_id?: true
  }

  export type Role_permissionSumAggregateInputType = {
    id?: true
    role_id?: true
    permission_id?: true
  }

  export type Role_permissionMinAggregateInputType = {
    id?: true
    role_id?: true
    permission_id?: true
  }

  export type Role_permissionMaxAggregateInputType = {
    id?: true
    role_id?: true
    permission_id?: true
  }

  export type Role_permissionCountAggregateInputType = {
    id?: true
    role_id?: true
    permission_id?: true
    _all?: true
  }

  export type Role_permissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which role_permission to aggregate.
     */
    where?: role_permissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of role_permissions to fetch.
     */
    orderBy?: role_permissionOrderByWithRelationInput | role_permissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: role_permissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` role_permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` role_permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned role_permissions
    **/
    _count?: true | Role_permissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Role_permissionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Role_permissionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Role_permissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Role_permissionMaxAggregateInputType
  }

  export type GetRole_permissionAggregateType<T extends Role_permissionAggregateArgs> = {
        [P in keyof T & keyof AggregateRole_permission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRole_permission[P]>
      : GetScalarType<T[P], AggregateRole_permission[P]>
  }




  export type role_permissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: role_permissionWhereInput
    orderBy?: role_permissionOrderByWithAggregationInput | role_permissionOrderByWithAggregationInput[]
    by: Role_permissionScalarFieldEnum[] | Role_permissionScalarFieldEnum
    having?: role_permissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Role_permissionCountAggregateInputType | true
    _avg?: Role_permissionAvgAggregateInputType
    _sum?: Role_permissionSumAggregateInputType
    _min?: Role_permissionMinAggregateInputType
    _max?: Role_permissionMaxAggregateInputType
  }

  export type Role_permissionGroupByOutputType = {
    id: number
    role_id: number
    permission_id: number
    _count: Role_permissionCountAggregateOutputType | null
    _avg: Role_permissionAvgAggregateOutputType | null
    _sum: Role_permissionSumAggregateOutputType | null
    _min: Role_permissionMinAggregateOutputType | null
    _max: Role_permissionMaxAggregateOutputType | null
  }

  type GetRole_permissionGroupByPayload<T extends role_permissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Role_permissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Role_permissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Role_permissionGroupByOutputType[P]>
            : GetScalarType<T[P], Role_permissionGroupByOutputType[P]>
        }
      >
    >


  export type role_permissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role_id?: boolean
    permission_id?: boolean
    permission?: boolean | permissionDefaultArgs<ExtArgs>
    role?: boolean | roleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["role_permission"]>

  export type role_permissionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role_id?: boolean
    permission_id?: boolean
    permission?: boolean | permissionDefaultArgs<ExtArgs>
    role?: boolean | roleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["role_permission"]>

  export type role_permissionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role_id?: boolean
    permission_id?: boolean
    permission?: boolean | permissionDefaultArgs<ExtArgs>
    role?: boolean | roleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["role_permission"]>

  export type role_permissionSelectScalar = {
    id?: boolean
    role_id?: boolean
    permission_id?: boolean
  }

  export type role_permissionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "role_id" | "permission_id", ExtArgs["result"]["role_permission"]>
  export type role_permissionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    permission?: boolean | permissionDefaultArgs<ExtArgs>
    role?: boolean | roleDefaultArgs<ExtArgs>
  }
  export type role_permissionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    permission?: boolean | permissionDefaultArgs<ExtArgs>
    role?: boolean | roleDefaultArgs<ExtArgs>
  }
  export type role_permissionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    permission?: boolean | permissionDefaultArgs<ExtArgs>
    role?: boolean | roleDefaultArgs<ExtArgs>
  }

  export type $role_permissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "role_permission"
    objects: {
      permission: Prisma.$permissionPayload<ExtArgs>
      role: Prisma.$rolePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      role_id: number
      permission_id: number
    }, ExtArgs["result"]["role_permission"]>
    composites: {}
  }

  type role_permissionGetPayload<S extends boolean | null | undefined | role_permissionDefaultArgs> = $Result.GetResult<Prisma.$role_permissionPayload, S>

  type role_permissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<role_permissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Role_permissionCountAggregateInputType | true
    }

  export interface role_permissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['role_permission'], meta: { name: 'role_permission' } }
    /**
     * Find zero or one Role_permission that matches the filter.
     * @param {role_permissionFindUniqueArgs} args - Arguments to find a Role_permission
     * @example
     * // Get one Role_permission
     * const role_permission = await prisma.role_permission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends role_permissionFindUniqueArgs>(args: SelectSubset<T, role_permissionFindUniqueArgs<ExtArgs>>): Prisma__role_permissionClient<$Result.GetResult<Prisma.$role_permissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Role_permission that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {role_permissionFindUniqueOrThrowArgs} args - Arguments to find a Role_permission
     * @example
     * // Get one Role_permission
     * const role_permission = await prisma.role_permission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends role_permissionFindUniqueOrThrowArgs>(args: SelectSubset<T, role_permissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__role_permissionClient<$Result.GetResult<Prisma.$role_permissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role_permission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {role_permissionFindFirstArgs} args - Arguments to find a Role_permission
     * @example
     * // Get one Role_permission
     * const role_permission = await prisma.role_permission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends role_permissionFindFirstArgs>(args?: SelectSubset<T, role_permissionFindFirstArgs<ExtArgs>>): Prisma__role_permissionClient<$Result.GetResult<Prisma.$role_permissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role_permission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {role_permissionFindFirstOrThrowArgs} args - Arguments to find a Role_permission
     * @example
     * // Get one Role_permission
     * const role_permission = await prisma.role_permission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends role_permissionFindFirstOrThrowArgs>(args?: SelectSubset<T, role_permissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__role_permissionClient<$Result.GetResult<Prisma.$role_permissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Role_permissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {role_permissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Role_permissions
     * const role_permissions = await prisma.role_permission.findMany()
     * 
     * // Get first 10 Role_permissions
     * const role_permissions = await prisma.role_permission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const role_permissionWithIdOnly = await prisma.role_permission.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends role_permissionFindManyArgs>(args?: SelectSubset<T, role_permissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$role_permissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Role_permission.
     * @param {role_permissionCreateArgs} args - Arguments to create a Role_permission.
     * @example
     * // Create one Role_permission
     * const Role_permission = await prisma.role_permission.create({
     *   data: {
     *     // ... data to create a Role_permission
     *   }
     * })
     * 
     */
    create<T extends role_permissionCreateArgs>(args: SelectSubset<T, role_permissionCreateArgs<ExtArgs>>): Prisma__role_permissionClient<$Result.GetResult<Prisma.$role_permissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Role_permissions.
     * @param {role_permissionCreateManyArgs} args - Arguments to create many Role_permissions.
     * @example
     * // Create many Role_permissions
     * const role_permission = await prisma.role_permission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends role_permissionCreateManyArgs>(args?: SelectSubset<T, role_permissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Role_permissions and returns the data saved in the database.
     * @param {role_permissionCreateManyAndReturnArgs} args - Arguments to create many Role_permissions.
     * @example
     * // Create many Role_permissions
     * const role_permission = await prisma.role_permission.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Role_permissions and only return the `id`
     * const role_permissionWithIdOnly = await prisma.role_permission.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends role_permissionCreateManyAndReturnArgs>(args?: SelectSubset<T, role_permissionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$role_permissionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Role_permission.
     * @param {role_permissionDeleteArgs} args - Arguments to delete one Role_permission.
     * @example
     * // Delete one Role_permission
     * const Role_permission = await prisma.role_permission.delete({
     *   where: {
     *     // ... filter to delete one Role_permission
     *   }
     * })
     * 
     */
    delete<T extends role_permissionDeleteArgs>(args: SelectSubset<T, role_permissionDeleteArgs<ExtArgs>>): Prisma__role_permissionClient<$Result.GetResult<Prisma.$role_permissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Role_permission.
     * @param {role_permissionUpdateArgs} args - Arguments to update one Role_permission.
     * @example
     * // Update one Role_permission
     * const role_permission = await prisma.role_permission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends role_permissionUpdateArgs>(args: SelectSubset<T, role_permissionUpdateArgs<ExtArgs>>): Prisma__role_permissionClient<$Result.GetResult<Prisma.$role_permissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Role_permissions.
     * @param {role_permissionDeleteManyArgs} args - Arguments to filter Role_permissions to delete.
     * @example
     * // Delete a few Role_permissions
     * const { count } = await prisma.role_permission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends role_permissionDeleteManyArgs>(args?: SelectSubset<T, role_permissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Role_permissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {role_permissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Role_permissions
     * const role_permission = await prisma.role_permission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends role_permissionUpdateManyArgs>(args: SelectSubset<T, role_permissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Role_permissions and returns the data updated in the database.
     * @param {role_permissionUpdateManyAndReturnArgs} args - Arguments to update many Role_permissions.
     * @example
     * // Update many Role_permissions
     * const role_permission = await prisma.role_permission.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Role_permissions and only return the `id`
     * const role_permissionWithIdOnly = await prisma.role_permission.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends role_permissionUpdateManyAndReturnArgs>(args: SelectSubset<T, role_permissionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$role_permissionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Role_permission.
     * @param {role_permissionUpsertArgs} args - Arguments to update or create a Role_permission.
     * @example
     * // Update or create a Role_permission
     * const role_permission = await prisma.role_permission.upsert({
     *   create: {
     *     // ... data to create a Role_permission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Role_permission we want to update
     *   }
     * })
     */
    upsert<T extends role_permissionUpsertArgs>(args: SelectSubset<T, role_permissionUpsertArgs<ExtArgs>>): Prisma__role_permissionClient<$Result.GetResult<Prisma.$role_permissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Role_permissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {role_permissionCountArgs} args - Arguments to filter Role_permissions to count.
     * @example
     * // Count the number of Role_permissions
     * const count = await prisma.role_permission.count({
     *   where: {
     *     // ... the filter for the Role_permissions we want to count
     *   }
     * })
    **/
    count<T extends role_permissionCountArgs>(
      args?: Subset<T, role_permissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Role_permissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Role_permission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Role_permissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Role_permissionAggregateArgs>(args: Subset<T, Role_permissionAggregateArgs>): Prisma.PrismaPromise<GetRole_permissionAggregateType<T>>

    /**
     * Group by Role_permission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {role_permissionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends role_permissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: role_permissionGroupByArgs['orderBy'] }
        : { orderBy?: role_permissionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, role_permissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRole_permissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the role_permission model
   */
  readonly fields: role_permissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for role_permission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__role_permissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    permission<T extends permissionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, permissionDefaultArgs<ExtArgs>>): Prisma__permissionClient<$Result.GetResult<Prisma.$permissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    role<T extends roleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, roleDefaultArgs<ExtArgs>>): Prisma__roleClient<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the role_permission model
   */
  interface role_permissionFieldRefs {
    readonly id: FieldRef<"role_permission", 'Int'>
    readonly role_id: FieldRef<"role_permission", 'Int'>
    readonly permission_id: FieldRef<"role_permission", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * role_permission findUnique
   */
  export type role_permissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role_permission
     */
    select?: role_permissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the role_permission
     */
    omit?: role_permissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: role_permissionInclude<ExtArgs> | null
    /**
     * Filter, which role_permission to fetch.
     */
    where: role_permissionWhereUniqueInput
  }

  /**
   * role_permission findUniqueOrThrow
   */
  export type role_permissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role_permission
     */
    select?: role_permissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the role_permission
     */
    omit?: role_permissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: role_permissionInclude<ExtArgs> | null
    /**
     * Filter, which role_permission to fetch.
     */
    where: role_permissionWhereUniqueInput
  }

  /**
   * role_permission findFirst
   */
  export type role_permissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role_permission
     */
    select?: role_permissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the role_permission
     */
    omit?: role_permissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: role_permissionInclude<ExtArgs> | null
    /**
     * Filter, which role_permission to fetch.
     */
    where?: role_permissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of role_permissions to fetch.
     */
    orderBy?: role_permissionOrderByWithRelationInput | role_permissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for role_permissions.
     */
    cursor?: role_permissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` role_permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` role_permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of role_permissions.
     */
    distinct?: Role_permissionScalarFieldEnum | Role_permissionScalarFieldEnum[]
  }

  /**
   * role_permission findFirstOrThrow
   */
  export type role_permissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role_permission
     */
    select?: role_permissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the role_permission
     */
    omit?: role_permissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: role_permissionInclude<ExtArgs> | null
    /**
     * Filter, which role_permission to fetch.
     */
    where?: role_permissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of role_permissions to fetch.
     */
    orderBy?: role_permissionOrderByWithRelationInput | role_permissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for role_permissions.
     */
    cursor?: role_permissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` role_permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` role_permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of role_permissions.
     */
    distinct?: Role_permissionScalarFieldEnum | Role_permissionScalarFieldEnum[]
  }

  /**
   * role_permission findMany
   */
  export type role_permissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role_permission
     */
    select?: role_permissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the role_permission
     */
    omit?: role_permissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: role_permissionInclude<ExtArgs> | null
    /**
     * Filter, which role_permissions to fetch.
     */
    where?: role_permissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of role_permissions to fetch.
     */
    orderBy?: role_permissionOrderByWithRelationInput | role_permissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing role_permissions.
     */
    cursor?: role_permissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` role_permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` role_permissions.
     */
    skip?: number
    distinct?: Role_permissionScalarFieldEnum | Role_permissionScalarFieldEnum[]
  }

  /**
   * role_permission create
   */
  export type role_permissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role_permission
     */
    select?: role_permissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the role_permission
     */
    omit?: role_permissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: role_permissionInclude<ExtArgs> | null
    /**
     * The data needed to create a role_permission.
     */
    data: XOR<role_permissionCreateInput, role_permissionUncheckedCreateInput>
  }

  /**
   * role_permission createMany
   */
  export type role_permissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many role_permissions.
     */
    data: role_permissionCreateManyInput | role_permissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * role_permission createManyAndReturn
   */
  export type role_permissionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role_permission
     */
    select?: role_permissionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the role_permission
     */
    omit?: role_permissionOmit<ExtArgs> | null
    /**
     * The data used to create many role_permissions.
     */
    data: role_permissionCreateManyInput | role_permissionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: role_permissionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * role_permission update
   */
  export type role_permissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role_permission
     */
    select?: role_permissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the role_permission
     */
    omit?: role_permissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: role_permissionInclude<ExtArgs> | null
    /**
     * The data needed to update a role_permission.
     */
    data: XOR<role_permissionUpdateInput, role_permissionUncheckedUpdateInput>
    /**
     * Choose, which role_permission to update.
     */
    where: role_permissionWhereUniqueInput
  }

  /**
   * role_permission updateMany
   */
  export type role_permissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update role_permissions.
     */
    data: XOR<role_permissionUpdateManyMutationInput, role_permissionUncheckedUpdateManyInput>
    /**
     * Filter which role_permissions to update
     */
    where?: role_permissionWhereInput
    /**
     * Limit how many role_permissions to update.
     */
    limit?: number
  }

  /**
   * role_permission updateManyAndReturn
   */
  export type role_permissionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role_permission
     */
    select?: role_permissionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the role_permission
     */
    omit?: role_permissionOmit<ExtArgs> | null
    /**
     * The data used to update role_permissions.
     */
    data: XOR<role_permissionUpdateManyMutationInput, role_permissionUncheckedUpdateManyInput>
    /**
     * Filter which role_permissions to update
     */
    where?: role_permissionWhereInput
    /**
     * Limit how many role_permissions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: role_permissionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * role_permission upsert
   */
  export type role_permissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role_permission
     */
    select?: role_permissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the role_permission
     */
    omit?: role_permissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: role_permissionInclude<ExtArgs> | null
    /**
     * The filter to search for the role_permission to update in case it exists.
     */
    where: role_permissionWhereUniqueInput
    /**
     * In case the role_permission found by the `where` argument doesn't exist, create a new role_permission with this data.
     */
    create: XOR<role_permissionCreateInput, role_permissionUncheckedCreateInput>
    /**
     * In case the role_permission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<role_permissionUpdateInput, role_permissionUncheckedUpdateInput>
  }

  /**
   * role_permission delete
   */
  export type role_permissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role_permission
     */
    select?: role_permissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the role_permission
     */
    omit?: role_permissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: role_permissionInclude<ExtArgs> | null
    /**
     * Filter which role_permission to delete.
     */
    where: role_permissionWhereUniqueInput
  }

  /**
   * role_permission deleteMany
   */
  export type role_permissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which role_permissions to delete
     */
    where?: role_permissionWhereInput
    /**
     * Limit how many role_permissions to delete.
     */
    limit?: number
  }

  /**
   * role_permission without action
   */
  export type role_permissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role_permission
     */
    select?: role_permissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the role_permission
     */
    omit?: role_permissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: role_permissionInclude<ExtArgs> | null
  }


  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    role_id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    role_id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    username: string | null
    password: string | null
    role_id: number | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    username: string | null
    password: string | null
    role_id: number | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    username: number
    password: number
    role_id: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    role_id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    role_id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    username?: true
    password?: true
    role_id?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    username?: true
    password?: true
    role_id?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    username?: true
    password?: true
    role_id?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: userScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    name: string
    username: string
    password: string
    role_id: number | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    username?: boolean
    password?: boolean
    role_id?: boolean
    role?: boolean | user$roleArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type userSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    username?: boolean
    password?: boolean
    role_id?: boolean
    role?: boolean | user$roleArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type userSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    username?: boolean
    password?: boolean
    role_id?: boolean
    role?: boolean | user$roleArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type userSelectScalar = {
    id?: boolean
    name?: boolean
    username?: boolean
    password?: boolean
    role_id?: boolean
  }

  export type userOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "username" | "password" | "role_id", ExtArgs["result"]["user"]>
  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | user$roleArgs<ExtArgs>
  }
  export type userIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | user$roleArgs<ExtArgs>
  }
  export type userIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | user$roleArgs<ExtArgs>
  }

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user"
    objects: {
      role: Prisma.$rolePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      username: string
      password: string
      role_id: number | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<Prisma.$userPayload, S>

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<userFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user'], meta: { name: 'user' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends userFindUniqueArgs>(args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs>(args: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends userFindFirstArgs>(args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends userFindFirstOrThrowArgs>(args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends userFindManyArgs>(args?: SelectSubset<T, userFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends userCreateArgs>(args: SelectSubset<T, userCreateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {userCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends userCreateManyArgs>(args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {userCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends userCreateManyAndReturnArgs>(args?: SelectSubset<T, userCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends userDeleteArgs>(args: SelectSubset<T, userDeleteArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends userUpdateArgs>(args: SelectSubset<T, userUpdateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends userDeleteManyArgs>(args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends userUpdateManyArgs>(args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {userUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends userUpdateManyAndReturnArgs>(args: SelectSubset<T, userUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends userUpsertArgs>(args: SelectSubset<T, userUpsertArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user model
   */
  readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    role<T extends user$roleArgs<ExtArgs> = {}>(args?: Subset<T, user$roleArgs<ExtArgs>>): Prisma__roleClient<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<"user", 'Int'>
    readonly name: FieldRef<"user", 'String'>
    readonly username: FieldRef<"user", 'String'>
    readonly password: FieldRef<"user", 'String'>
    readonly role_id: FieldRef<"user", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>
  }

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user createManyAndReturn
   */
  export type userCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput
  }

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * user updateManyAndReturn
   */
  export type userUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>
  }

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput
  }

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * user.role
   */
  export type user$roleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the role
     */
    omit?: roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roleInclude<ExtArgs> | null
    where?: roleWhereInput
  }

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const PermissionScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type PermissionScalarFieldEnum = (typeof PermissionScalarFieldEnum)[keyof typeof PermissionScalarFieldEnum]


  export const RoleScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type RoleScalarFieldEnum = (typeof RoleScalarFieldEnum)[keyof typeof RoleScalarFieldEnum]


  export const Role_permissionScalarFieldEnum: {
    id: 'id',
    role_id: 'role_id',
    permission_id: 'permission_id'
  };

  export type Role_permissionScalarFieldEnum = (typeof Role_permissionScalarFieldEnum)[keyof typeof Role_permissionScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    username: 'username',
    password: 'password',
    role_id: 'role_id'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type permissionWhereInput = {
    AND?: permissionWhereInput | permissionWhereInput[]
    OR?: permissionWhereInput[]
    NOT?: permissionWhereInput | permissionWhereInput[]
    id?: IntFilter<"permission"> | number
    name?: StringFilter<"permission"> | string
    role_permission?: Role_permissionListRelationFilter
  }

  export type permissionOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    role_permission?: role_permissionOrderByRelationAggregateInput
  }

  export type permissionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: permissionWhereInput | permissionWhereInput[]
    OR?: permissionWhereInput[]
    NOT?: permissionWhereInput | permissionWhereInput[]
    name?: StringFilter<"permission"> | string
    role_permission?: Role_permissionListRelationFilter
  }, "id">

  export type permissionOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: permissionCountOrderByAggregateInput
    _avg?: permissionAvgOrderByAggregateInput
    _max?: permissionMaxOrderByAggregateInput
    _min?: permissionMinOrderByAggregateInput
    _sum?: permissionSumOrderByAggregateInput
  }

  export type permissionScalarWhereWithAggregatesInput = {
    AND?: permissionScalarWhereWithAggregatesInput | permissionScalarWhereWithAggregatesInput[]
    OR?: permissionScalarWhereWithAggregatesInput[]
    NOT?: permissionScalarWhereWithAggregatesInput | permissionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"permission"> | number
    name?: StringWithAggregatesFilter<"permission"> | string
  }

  export type roleWhereInput = {
    AND?: roleWhereInput | roleWhereInput[]
    OR?: roleWhereInput[]
    NOT?: roleWhereInput | roleWhereInput[]
    id?: IntFilter<"role"> | number
    name?: StringFilter<"role"> | string
    role_permission?: Role_permissionListRelationFilter
    user?: UserListRelationFilter
  }

  export type roleOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    role_permission?: role_permissionOrderByRelationAggregateInput
    user?: userOrderByRelationAggregateInput
  }

  export type roleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: roleWhereInput | roleWhereInput[]
    OR?: roleWhereInput[]
    NOT?: roleWhereInput | roleWhereInput[]
    name?: StringFilter<"role"> | string
    role_permission?: Role_permissionListRelationFilter
    user?: UserListRelationFilter
  }, "id">

  export type roleOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: roleCountOrderByAggregateInput
    _avg?: roleAvgOrderByAggregateInput
    _max?: roleMaxOrderByAggregateInput
    _min?: roleMinOrderByAggregateInput
    _sum?: roleSumOrderByAggregateInput
  }

  export type roleScalarWhereWithAggregatesInput = {
    AND?: roleScalarWhereWithAggregatesInput | roleScalarWhereWithAggregatesInput[]
    OR?: roleScalarWhereWithAggregatesInput[]
    NOT?: roleScalarWhereWithAggregatesInput | roleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"role"> | number
    name?: StringWithAggregatesFilter<"role"> | string
  }

  export type role_permissionWhereInput = {
    AND?: role_permissionWhereInput | role_permissionWhereInput[]
    OR?: role_permissionWhereInput[]
    NOT?: role_permissionWhereInput | role_permissionWhereInput[]
    id?: IntFilter<"role_permission"> | number
    role_id?: IntFilter<"role_permission"> | number
    permission_id?: IntFilter<"role_permission"> | number
    permission?: XOR<PermissionScalarRelationFilter, permissionWhereInput>
    role?: XOR<RoleScalarRelationFilter, roleWhereInput>
  }

  export type role_permissionOrderByWithRelationInput = {
    id?: SortOrder
    role_id?: SortOrder
    permission_id?: SortOrder
    permission?: permissionOrderByWithRelationInput
    role?: roleOrderByWithRelationInput
  }

  export type role_permissionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    role_id_permission_id?: role_permissionRole_idPermission_idCompoundUniqueInput
    AND?: role_permissionWhereInput | role_permissionWhereInput[]
    OR?: role_permissionWhereInput[]
    NOT?: role_permissionWhereInput | role_permissionWhereInput[]
    role_id?: IntFilter<"role_permission"> | number
    permission_id?: IntFilter<"role_permission"> | number
    permission?: XOR<PermissionScalarRelationFilter, permissionWhereInput>
    role?: XOR<RoleScalarRelationFilter, roleWhereInput>
  }, "id" | "role_id_permission_id">

  export type role_permissionOrderByWithAggregationInput = {
    id?: SortOrder
    role_id?: SortOrder
    permission_id?: SortOrder
    _count?: role_permissionCountOrderByAggregateInput
    _avg?: role_permissionAvgOrderByAggregateInput
    _max?: role_permissionMaxOrderByAggregateInput
    _min?: role_permissionMinOrderByAggregateInput
    _sum?: role_permissionSumOrderByAggregateInput
  }

  export type role_permissionScalarWhereWithAggregatesInput = {
    AND?: role_permissionScalarWhereWithAggregatesInput | role_permissionScalarWhereWithAggregatesInput[]
    OR?: role_permissionScalarWhereWithAggregatesInput[]
    NOT?: role_permissionScalarWhereWithAggregatesInput | role_permissionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"role_permission"> | number
    role_id?: IntWithAggregatesFilter<"role_permission"> | number
    permission_id?: IntWithAggregatesFilter<"role_permission"> | number
  }

  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    id?: IntFilter<"user"> | number
    name?: StringFilter<"user"> | string
    username?: StringFilter<"user"> | string
    password?: StringFilter<"user"> | string
    role_id?: IntNullableFilter<"user"> | number | null
    role?: XOR<RoleNullableScalarRelationFilter, roleWhereInput> | null
  }

  export type userOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role_id?: SortOrderInput | SortOrder
    role?: roleOrderByWithRelationInput
  }

  export type userWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    name?: StringFilter<"user"> | string
    password?: StringFilter<"user"> | string
    role_id?: IntNullableFilter<"user"> | number | null
    role?: XOR<RoleNullableScalarRelationFilter, roleWhereInput> | null
  }, "id" | "username">

  export type userOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role_id?: SortOrderInput | SortOrder
    _count?: userCountOrderByAggregateInput
    _avg?: userAvgOrderByAggregateInput
    _max?: userMaxOrderByAggregateInput
    _min?: userMinOrderByAggregateInput
    _sum?: userSumOrderByAggregateInput
  }

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    OR?: userScalarWhereWithAggregatesInput[]
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"user"> | number
    name?: StringWithAggregatesFilter<"user"> | string
    username?: StringWithAggregatesFilter<"user"> | string
    password?: StringWithAggregatesFilter<"user"> | string
    role_id?: IntNullableWithAggregatesFilter<"user"> | number | null
  }

  export type permissionCreateInput = {
    name: string
    role_permission?: role_permissionCreateNestedManyWithoutPermissionInput
  }

  export type permissionUncheckedCreateInput = {
    id?: number
    name: string
    role_permission?: role_permissionUncheckedCreateNestedManyWithoutPermissionInput
  }

  export type permissionUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    role_permission?: role_permissionUpdateManyWithoutPermissionNestedInput
  }

  export type permissionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    role_permission?: role_permissionUncheckedUpdateManyWithoutPermissionNestedInput
  }

  export type permissionCreateManyInput = {
    id?: number
    name: string
  }

  export type permissionUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type permissionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type roleCreateInput = {
    name: string
    role_permission?: role_permissionCreateNestedManyWithoutRoleInput
    user?: userCreateNestedManyWithoutRoleInput
  }

  export type roleUncheckedCreateInput = {
    id?: number
    name: string
    role_permission?: role_permissionUncheckedCreateNestedManyWithoutRoleInput
    user?: userUncheckedCreateNestedManyWithoutRoleInput
  }

  export type roleUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    role_permission?: role_permissionUpdateManyWithoutRoleNestedInput
    user?: userUpdateManyWithoutRoleNestedInput
  }

  export type roleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    role_permission?: role_permissionUncheckedUpdateManyWithoutRoleNestedInput
    user?: userUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type roleCreateManyInput = {
    id?: number
    name: string
  }

  export type roleUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type roleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type role_permissionCreateInput = {
    permission: permissionCreateNestedOneWithoutRole_permissionInput
    role: roleCreateNestedOneWithoutRole_permissionInput
  }

  export type role_permissionUncheckedCreateInput = {
    id?: number
    role_id: number
    permission_id: number
  }

  export type role_permissionUpdateInput = {
    permission?: permissionUpdateOneRequiredWithoutRole_permissionNestedInput
    role?: roleUpdateOneRequiredWithoutRole_permissionNestedInput
  }

  export type role_permissionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    role_id?: IntFieldUpdateOperationsInput | number
    permission_id?: IntFieldUpdateOperationsInput | number
  }

  export type role_permissionCreateManyInput = {
    id?: number
    role_id: number
    permission_id: number
  }

  export type role_permissionUpdateManyMutationInput = {

  }

  export type role_permissionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    role_id?: IntFieldUpdateOperationsInput | number
    permission_id?: IntFieldUpdateOperationsInput | number
  }

  export type userCreateInput = {
    name: string
    username: string
    password: string
    role?: roleCreateNestedOneWithoutUserInput
  }

  export type userUncheckedCreateInput = {
    id?: number
    name: string
    username: string
    password: string
    role_id?: number | null
  }

  export type userUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: roleUpdateOneWithoutUserNestedInput
  }

  export type userUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type userCreateManyInput = {
    id?: number
    name: string
    username: string
    password: string
    role_id?: number | null
  }

  export type userUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type userUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type Role_permissionListRelationFilter = {
    every?: role_permissionWhereInput
    some?: role_permissionWhereInput
    none?: role_permissionWhereInput
  }

  export type role_permissionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type permissionCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type permissionAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type permissionMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type permissionMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type permissionSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type UserListRelationFilter = {
    every?: userWhereInput
    some?: userWhereInput
    none?: userWhereInput
  }

  export type userOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type roleCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type roleAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type roleMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type roleMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type roleSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PermissionScalarRelationFilter = {
    is?: permissionWhereInput
    isNot?: permissionWhereInput
  }

  export type RoleScalarRelationFilter = {
    is?: roleWhereInput
    isNot?: roleWhereInput
  }

  export type role_permissionRole_idPermission_idCompoundUniqueInput = {
    role_id: number
    permission_id: number
  }

  export type role_permissionCountOrderByAggregateInput = {
    id?: SortOrder
    role_id?: SortOrder
    permission_id?: SortOrder
  }

  export type role_permissionAvgOrderByAggregateInput = {
    id?: SortOrder
    role_id?: SortOrder
    permission_id?: SortOrder
  }

  export type role_permissionMaxOrderByAggregateInput = {
    id?: SortOrder
    role_id?: SortOrder
    permission_id?: SortOrder
  }

  export type role_permissionMinOrderByAggregateInput = {
    id?: SortOrder
    role_id?: SortOrder
    permission_id?: SortOrder
  }

  export type role_permissionSumOrderByAggregateInput = {
    id?: SortOrder
    role_id?: SortOrder
    permission_id?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type RoleNullableScalarRelationFilter = {
    is?: roleWhereInput | null
    isNot?: roleWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type userCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role_id?: SortOrder
  }

  export type userAvgOrderByAggregateInput = {
    id?: SortOrder
    role_id?: SortOrder
  }

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role_id?: SortOrder
  }

  export type userMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role_id?: SortOrder
  }

  export type userSumOrderByAggregateInput = {
    id?: SortOrder
    role_id?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type role_permissionCreateNestedManyWithoutPermissionInput = {
    create?: XOR<role_permissionCreateWithoutPermissionInput, role_permissionUncheckedCreateWithoutPermissionInput> | role_permissionCreateWithoutPermissionInput[] | role_permissionUncheckedCreateWithoutPermissionInput[]
    connectOrCreate?: role_permissionCreateOrConnectWithoutPermissionInput | role_permissionCreateOrConnectWithoutPermissionInput[]
    createMany?: role_permissionCreateManyPermissionInputEnvelope
    connect?: role_permissionWhereUniqueInput | role_permissionWhereUniqueInput[]
  }

  export type role_permissionUncheckedCreateNestedManyWithoutPermissionInput = {
    create?: XOR<role_permissionCreateWithoutPermissionInput, role_permissionUncheckedCreateWithoutPermissionInput> | role_permissionCreateWithoutPermissionInput[] | role_permissionUncheckedCreateWithoutPermissionInput[]
    connectOrCreate?: role_permissionCreateOrConnectWithoutPermissionInput | role_permissionCreateOrConnectWithoutPermissionInput[]
    createMany?: role_permissionCreateManyPermissionInputEnvelope
    connect?: role_permissionWhereUniqueInput | role_permissionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type role_permissionUpdateManyWithoutPermissionNestedInput = {
    create?: XOR<role_permissionCreateWithoutPermissionInput, role_permissionUncheckedCreateWithoutPermissionInput> | role_permissionCreateWithoutPermissionInput[] | role_permissionUncheckedCreateWithoutPermissionInput[]
    connectOrCreate?: role_permissionCreateOrConnectWithoutPermissionInput | role_permissionCreateOrConnectWithoutPermissionInput[]
    upsert?: role_permissionUpsertWithWhereUniqueWithoutPermissionInput | role_permissionUpsertWithWhereUniqueWithoutPermissionInput[]
    createMany?: role_permissionCreateManyPermissionInputEnvelope
    set?: role_permissionWhereUniqueInput | role_permissionWhereUniqueInput[]
    disconnect?: role_permissionWhereUniqueInput | role_permissionWhereUniqueInput[]
    delete?: role_permissionWhereUniqueInput | role_permissionWhereUniqueInput[]
    connect?: role_permissionWhereUniqueInput | role_permissionWhereUniqueInput[]
    update?: role_permissionUpdateWithWhereUniqueWithoutPermissionInput | role_permissionUpdateWithWhereUniqueWithoutPermissionInput[]
    updateMany?: role_permissionUpdateManyWithWhereWithoutPermissionInput | role_permissionUpdateManyWithWhereWithoutPermissionInput[]
    deleteMany?: role_permissionScalarWhereInput | role_permissionScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type role_permissionUncheckedUpdateManyWithoutPermissionNestedInput = {
    create?: XOR<role_permissionCreateWithoutPermissionInput, role_permissionUncheckedCreateWithoutPermissionInput> | role_permissionCreateWithoutPermissionInput[] | role_permissionUncheckedCreateWithoutPermissionInput[]
    connectOrCreate?: role_permissionCreateOrConnectWithoutPermissionInput | role_permissionCreateOrConnectWithoutPermissionInput[]
    upsert?: role_permissionUpsertWithWhereUniqueWithoutPermissionInput | role_permissionUpsertWithWhereUniqueWithoutPermissionInput[]
    createMany?: role_permissionCreateManyPermissionInputEnvelope
    set?: role_permissionWhereUniqueInput | role_permissionWhereUniqueInput[]
    disconnect?: role_permissionWhereUniqueInput | role_permissionWhereUniqueInput[]
    delete?: role_permissionWhereUniqueInput | role_permissionWhereUniqueInput[]
    connect?: role_permissionWhereUniqueInput | role_permissionWhereUniqueInput[]
    update?: role_permissionUpdateWithWhereUniqueWithoutPermissionInput | role_permissionUpdateWithWhereUniqueWithoutPermissionInput[]
    updateMany?: role_permissionUpdateManyWithWhereWithoutPermissionInput | role_permissionUpdateManyWithWhereWithoutPermissionInput[]
    deleteMany?: role_permissionScalarWhereInput | role_permissionScalarWhereInput[]
  }

  export type role_permissionCreateNestedManyWithoutRoleInput = {
    create?: XOR<role_permissionCreateWithoutRoleInput, role_permissionUncheckedCreateWithoutRoleInput> | role_permissionCreateWithoutRoleInput[] | role_permissionUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: role_permissionCreateOrConnectWithoutRoleInput | role_permissionCreateOrConnectWithoutRoleInput[]
    createMany?: role_permissionCreateManyRoleInputEnvelope
    connect?: role_permissionWhereUniqueInput | role_permissionWhereUniqueInput[]
  }

  export type userCreateNestedManyWithoutRoleInput = {
    create?: XOR<userCreateWithoutRoleInput, userUncheckedCreateWithoutRoleInput> | userCreateWithoutRoleInput[] | userUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: userCreateOrConnectWithoutRoleInput | userCreateOrConnectWithoutRoleInput[]
    createMany?: userCreateManyRoleInputEnvelope
    connect?: userWhereUniqueInput | userWhereUniqueInput[]
  }

  export type role_permissionUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<role_permissionCreateWithoutRoleInput, role_permissionUncheckedCreateWithoutRoleInput> | role_permissionCreateWithoutRoleInput[] | role_permissionUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: role_permissionCreateOrConnectWithoutRoleInput | role_permissionCreateOrConnectWithoutRoleInput[]
    createMany?: role_permissionCreateManyRoleInputEnvelope
    connect?: role_permissionWhereUniqueInput | role_permissionWhereUniqueInput[]
  }

  export type userUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<userCreateWithoutRoleInput, userUncheckedCreateWithoutRoleInput> | userCreateWithoutRoleInput[] | userUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: userCreateOrConnectWithoutRoleInput | userCreateOrConnectWithoutRoleInput[]
    createMany?: userCreateManyRoleInputEnvelope
    connect?: userWhereUniqueInput | userWhereUniqueInput[]
  }

  export type role_permissionUpdateManyWithoutRoleNestedInput = {
    create?: XOR<role_permissionCreateWithoutRoleInput, role_permissionUncheckedCreateWithoutRoleInput> | role_permissionCreateWithoutRoleInput[] | role_permissionUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: role_permissionCreateOrConnectWithoutRoleInput | role_permissionCreateOrConnectWithoutRoleInput[]
    upsert?: role_permissionUpsertWithWhereUniqueWithoutRoleInput | role_permissionUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: role_permissionCreateManyRoleInputEnvelope
    set?: role_permissionWhereUniqueInput | role_permissionWhereUniqueInput[]
    disconnect?: role_permissionWhereUniqueInput | role_permissionWhereUniqueInput[]
    delete?: role_permissionWhereUniqueInput | role_permissionWhereUniqueInput[]
    connect?: role_permissionWhereUniqueInput | role_permissionWhereUniqueInput[]
    update?: role_permissionUpdateWithWhereUniqueWithoutRoleInput | role_permissionUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: role_permissionUpdateManyWithWhereWithoutRoleInput | role_permissionUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: role_permissionScalarWhereInput | role_permissionScalarWhereInput[]
  }

  export type userUpdateManyWithoutRoleNestedInput = {
    create?: XOR<userCreateWithoutRoleInput, userUncheckedCreateWithoutRoleInput> | userCreateWithoutRoleInput[] | userUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: userCreateOrConnectWithoutRoleInput | userCreateOrConnectWithoutRoleInput[]
    upsert?: userUpsertWithWhereUniqueWithoutRoleInput | userUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: userCreateManyRoleInputEnvelope
    set?: userWhereUniqueInput | userWhereUniqueInput[]
    disconnect?: userWhereUniqueInput | userWhereUniqueInput[]
    delete?: userWhereUniqueInput | userWhereUniqueInput[]
    connect?: userWhereUniqueInput | userWhereUniqueInput[]
    update?: userUpdateWithWhereUniqueWithoutRoleInput | userUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: userUpdateManyWithWhereWithoutRoleInput | userUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: userScalarWhereInput | userScalarWhereInput[]
  }

  export type role_permissionUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<role_permissionCreateWithoutRoleInput, role_permissionUncheckedCreateWithoutRoleInput> | role_permissionCreateWithoutRoleInput[] | role_permissionUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: role_permissionCreateOrConnectWithoutRoleInput | role_permissionCreateOrConnectWithoutRoleInput[]
    upsert?: role_permissionUpsertWithWhereUniqueWithoutRoleInput | role_permissionUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: role_permissionCreateManyRoleInputEnvelope
    set?: role_permissionWhereUniqueInput | role_permissionWhereUniqueInput[]
    disconnect?: role_permissionWhereUniqueInput | role_permissionWhereUniqueInput[]
    delete?: role_permissionWhereUniqueInput | role_permissionWhereUniqueInput[]
    connect?: role_permissionWhereUniqueInput | role_permissionWhereUniqueInput[]
    update?: role_permissionUpdateWithWhereUniqueWithoutRoleInput | role_permissionUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: role_permissionUpdateManyWithWhereWithoutRoleInput | role_permissionUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: role_permissionScalarWhereInput | role_permissionScalarWhereInput[]
  }

  export type userUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<userCreateWithoutRoleInput, userUncheckedCreateWithoutRoleInput> | userCreateWithoutRoleInput[] | userUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: userCreateOrConnectWithoutRoleInput | userCreateOrConnectWithoutRoleInput[]
    upsert?: userUpsertWithWhereUniqueWithoutRoleInput | userUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: userCreateManyRoleInputEnvelope
    set?: userWhereUniqueInput | userWhereUniqueInput[]
    disconnect?: userWhereUniqueInput | userWhereUniqueInput[]
    delete?: userWhereUniqueInput | userWhereUniqueInput[]
    connect?: userWhereUniqueInput | userWhereUniqueInput[]
    update?: userUpdateWithWhereUniqueWithoutRoleInput | userUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: userUpdateManyWithWhereWithoutRoleInput | userUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: userScalarWhereInput | userScalarWhereInput[]
  }

  export type permissionCreateNestedOneWithoutRole_permissionInput = {
    create?: XOR<permissionCreateWithoutRole_permissionInput, permissionUncheckedCreateWithoutRole_permissionInput>
    connectOrCreate?: permissionCreateOrConnectWithoutRole_permissionInput
    connect?: permissionWhereUniqueInput
  }

  export type roleCreateNestedOneWithoutRole_permissionInput = {
    create?: XOR<roleCreateWithoutRole_permissionInput, roleUncheckedCreateWithoutRole_permissionInput>
    connectOrCreate?: roleCreateOrConnectWithoutRole_permissionInput
    connect?: roleWhereUniqueInput
  }

  export type permissionUpdateOneRequiredWithoutRole_permissionNestedInput = {
    create?: XOR<permissionCreateWithoutRole_permissionInput, permissionUncheckedCreateWithoutRole_permissionInput>
    connectOrCreate?: permissionCreateOrConnectWithoutRole_permissionInput
    upsert?: permissionUpsertWithoutRole_permissionInput
    connect?: permissionWhereUniqueInput
    update?: XOR<XOR<permissionUpdateToOneWithWhereWithoutRole_permissionInput, permissionUpdateWithoutRole_permissionInput>, permissionUncheckedUpdateWithoutRole_permissionInput>
  }

  export type roleUpdateOneRequiredWithoutRole_permissionNestedInput = {
    create?: XOR<roleCreateWithoutRole_permissionInput, roleUncheckedCreateWithoutRole_permissionInput>
    connectOrCreate?: roleCreateOrConnectWithoutRole_permissionInput
    upsert?: roleUpsertWithoutRole_permissionInput
    connect?: roleWhereUniqueInput
    update?: XOR<XOR<roleUpdateToOneWithWhereWithoutRole_permissionInput, roleUpdateWithoutRole_permissionInput>, roleUncheckedUpdateWithoutRole_permissionInput>
  }

  export type roleCreateNestedOneWithoutUserInput = {
    create?: XOR<roleCreateWithoutUserInput, roleUncheckedCreateWithoutUserInput>
    connectOrCreate?: roleCreateOrConnectWithoutUserInput
    connect?: roleWhereUniqueInput
  }

  export type roleUpdateOneWithoutUserNestedInput = {
    create?: XOR<roleCreateWithoutUserInput, roleUncheckedCreateWithoutUserInput>
    connectOrCreate?: roleCreateOrConnectWithoutUserInput
    upsert?: roleUpsertWithoutUserInput
    disconnect?: roleWhereInput | boolean
    delete?: roleWhereInput | boolean
    connect?: roleWhereUniqueInput
    update?: XOR<XOR<roleUpdateToOneWithWhereWithoutUserInput, roleUpdateWithoutUserInput>, roleUncheckedUpdateWithoutUserInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type role_permissionCreateWithoutPermissionInput = {
    role: roleCreateNestedOneWithoutRole_permissionInput
  }

  export type role_permissionUncheckedCreateWithoutPermissionInput = {
    id?: number
    role_id: number
  }

  export type role_permissionCreateOrConnectWithoutPermissionInput = {
    where: role_permissionWhereUniqueInput
    create: XOR<role_permissionCreateWithoutPermissionInput, role_permissionUncheckedCreateWithoutPermissionInput>
  }

  export type role_permissionCreateManyPermissionInputEnvelope = {
    data: role_permissionCreateManyPermissionInput | role_permissionCreateManyPermissionInput[]
    skipDuplicates?: boolean
  }

  export type role_permissionUpsertWithWhereUniqueWithoutPermissionInput = {
    where: role_permissionWhereUniqueInput
    update: XOR<role_permissionUpdateWithoutPermissionInput, role_permissionUncheckedUpdateWithoutPermissionInput>
    create: XOR<role_permissionCreateWithoutPermissionInput, role_permissionUncheckedCreateWithoutPermissionInput>
  }

  export type role_permissionUpdateWithWhereUniqueWithoutPermissionInput = {
    where: role_permissionWhereUniqueInput
    data: XOR<role_permissionUpdateWithoutPermissionInput, role_permissionUncheckedUpdateWithoutPermissionInput>
  }

  export type role_permissionUpdateManyWithWhereWithoutPermissionInput = {
    where: role_permissionScalarWhereInput
    data: XOR<role_permissionUpdateManyMutationInput, role_permissionUncheckedUpdateManyWithoutPermissionInput>
  }

  export type role_permissionScalarWhereInput = {
    AND?: role_permissionScalarWhereInput | role_permissionScalarWhereInput[]
    OR?: role_permissionScalarWhereInput[]
    NOT?: role_permissionScalarWhereInput | role_permissionScalarWhereInput[]
    id?: IntFilter<"role_permission"> | number
    role_id?: IntFilter<"role_permission"> | number
    permission_id?: IntFilter<"role_permission"> | number
  }

  export type role_permissionCreateWithoutRoleInput = {
    permission: permissionCreateNestedOneWithoutRole_permissionInput
  }

  export type role_permissionUncheckedCreateWithoutRoleInput = {
    id?: number
    permission_id: number
  }

  export type role_permissionCreateOrConnectWithoutRoleInput = {
    where: role_permissionWhereUniqueInput
    create: XOR<role_permissionCreateWithoutRoleInput, role_permissionUncheckedCreateWithoutRoleInput>
  }

  export type role_permissionCreateManyRoleInputEnvelope = {
    data: role_permissionCreateManyRoleInput | role_permissionCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type userCreateWithoutRoleInput = {
    name: string
    username: string
    password: string
  }

  export type userUncheckedCreateWithoutRoleInput = {
    id?: number
    name: string
    username: string
    password: string
  }

  export type userCreateOrConnectWithoutRoleInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutRoleInput, userUncheckedCreateWithoutRoleInput>
  }

  export type userCreateManyRoleInputEnvelope = {
    data: userCreateManyRoleInput | userCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type role_permissionUpsertWithWhereUniqueWithoutRoleInput = {
    where: role_permissionWhereUniqueInput
    update: XOR<role_permissionUpdateWithoutRoleInput, role_permissionUncheckedUpdateWithoutRoleInput>
    create: XOR<role_permissionCreateWithoutRoleInput, role_permissionUncheckedCreateWithoutRoleInput>
  }

  export type role_permissionUpdateWithWhereUniqueWithoutRoleInput = {
    where: role_permissionWhereUniqueInput
    data: XOR<role_permissionUpdateWithoutRoleInput, role_permissionUncheckedUpdateWithoutRoleInput>
  }

  export type role_permissionUpdateManyWithWhereWithoutRoleInput = {
    where: role_permissionScalarWhereInput
    data: XOR<role_permissionUpdateManyMutationInput, role_permissionUncheckedUpdateManyWithoutRoleInput>
  }

  export type userUpsertWithWhereUniqueWithoutRoleInput = {
    where: userWhereUniqueInput
    update: XOR<userUpdateWithoutRoleInput, userUncheckedUpdateWithoutRoleInput>
    create: XOR<userCreateWithoutRoleInput, userUncheckedCreateWithoutRoleInput>
  }

  export type userUpdateWithWhereUniqueWithoutRoleInput = {
    where: userWhereUniqueInput
    data: XOR<userUpdateWithoutRoleInput, userUncheckedUpdateWithoutRoleInput>
  }

  export type userUpdateManyWithWhereWithoutRoleInput = {
    where: userScalarWhereInput
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyWithoutRoleInput>
  }

  export type userScalarWhereInput = {
    AND?: userScalarWhereInput | userScalarWhereInput[]
    OR?: userScalarWhereInput[]
    NOT?: userScalarWhereInput | userScalarWhereInput[]
    id?: IntFilter<"user"> | number
    name?: StringFilter<"user"> | string
    username?: StringFilter<"user"> | string
    password?: StringFilter<"user"> | string
    role_id?: IntNullableFilter<"user"> | number | null
  }

  export type permissionCreateWithoutRole_permissionInput = {
    name: string
  }

  export type permissionUncheckedCreateWithoutRole_permissionInput = {
    id?: number
    name: string
  }

  export type permissionCreateOrConnectWithoutRole_permissionInput = {
    where: permissionWhereUniqueInput
    create: XOR<permissionCreateWithoutRole_permissionInput, permissionUncheckedCreateWithoutRole_permissionInput>
  }

  export type roleCreateWithoutRole_permissionInput = {
    name: string
    user?: userCreateNestedManyWithoutRoleInput
  }

  export type roleUncheckedCreateWithoutRole_permissionInput = {
    id?: number
    name: string
    user?: userUncheckedCreateNestedManyWithoutRoleInput
  }

  export type roleCreateOrConnectWithoutRole_permissionInput = {
    where: roleWhereUniqueInput
    create: XOR<roleCreateWithoutRole_permissionInput, roleUncheckedCreateWithoutRole_permissionInput>
  }

  export type permissionUpsertWithoutRole_permissionInput = {
    update: XOR<permissionUpdateWithoutRole_permissionInput, permissionUncheckedUpdateWithoutRole_permissionInput>
    create: XOR<permissionCreateWithoutRole_permissionInput, permissionUncheckedCreateWithoutRole_permissionInput>
    where?: permissionWhereInput
  }

  export type permissionUpdateToOneWithWhereWithoutRole_permissionInput = {
    where?: permissionWhereInput
    data: XOR<permissionUpdateWithoutRole_permissionInput, permissionUncheckedUpdateWithoutRole_permissionInput>
  }

  export type permissionUpdateWithoutRole_permissionInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type permissionUncheckedUpdateWithoutRole_permissionInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type roleUpsertWithoutRole_permissionInput = {
    update: XOR<roleUpdateWithoutRole_permissionInput, roleUncheckedUpdateWithoutRole_permissionInput>
    create: XOR<roleCreateWithoutRole_permissionInput, roleUncheckedCreateWithoutRole_permissionInput>
    where?: roleWhereInput
  }

  export type roleUpdateToOneWithWhereWithoutRole_permissionInput = {
    where?: roleWhereInput
    data: XOR<roleUpdateWithoutRole_permissionInput, roleUncheckedUpdateWithoutRole_permissionInput>
  }

  export type roleUpdateWithoutRole_permissionInput = {
    name?: StringFieldUpdateOperationsInput | string
    user?: userUpdateManyWithoutRoleNestedInput
  }

  export type roleUncheckedUpdateWithoutRole_permissionInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    user?: userUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type roleCreateWithoutUserInput = {
    name: string
    role_permission?: role_permissionCreateNestedManyWithoutRoleInput
  }

  export type roleUncheckedCreateWithoutUserInput = {
    id?: number
    name: string
    role_permission?: role_permissionUncheckedCreateNestedManyWithoutRoleInput
  }

  export type roleCreateOrConnectWithoutUserInput = {
    where: roleWhereUniqueInput
    create: XOR<roleCreateWithoutUserInput, roleUncheckedCreateWithoutUserInput>
  }

  export type roleUpsertWithoutUserInput = {
    update: XOR<roleUpdateWithoutUserInput, roleUncheckedUpdateWithoutUserInput>
    create: XOR<roleCreateWithoutUserInput, roleUncheckedCreateWithoutUserInput>
    where?: roleWhereInput
  }

  export type roleUpdateToOneWithWhereWithoutUserInput = {
    where?: roleWhereInput
    data: XOR<roleUpdateWithoutUserInput, roleUncheckedUpdateWithoutUserInput>
  }

  export type roleUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    role_permission?: role_permissionUpdateManyWithoutRoleNestedInput
  }

  export type roleUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    role_permission?: role_permissionUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type role_permissionCreateManyPermissionInput = {
    id?: number
    role_id: number
  }

  export type role_permissionUpdateWithoutPermissionInput = {
    role?: roleUpdateOneRequiredWithoutRole_permissionNestedInput
  }

  export type role_permissionUncheckedUpdateWithoutPermissionInput = {
    id?: IntFieldUpdateOperationsInput | number
    role_id?: IntFieldUpdateOperationsInput | number
  }

  export type role_permissionUncheckedUpdateManyWithoutPermissionInput = {
    id?: IntFieldUpdateOperationsInput | number
    role_id?: IntFieldUpdateOperationsInput | number
  }

  export type role_permissionCreateManyRoleInput = {
    id?: number
    permission_id: number
  }

  export type userCreateManyRoleInput = {
    id?: number
    name: string
    username: string
    password: string
  }

  export type role_permissionUpdateWithoutRoleInput = {
    permission?: permissionUpdateOneRequiredWithoutRole_permissionNestedInput
  }

  export type role_permissionUncheckedUpdateWithoutRoleInput = {
    id?: IntFieldUpdateOperationsInput | number
    permission_id?: IntFieldUpdateOperationsInput | number
  }

  export type role_permissionUncheckedUpdateManyWithoutRoleInput = {
    id?: IntFieldUpdateOperationsInput | number
    permission_id?: IntFieldUpdateOperationsInput | number
  }

  export type userUpdateWithoutRoleInput = {
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type userUncheckedUpdateWithoutRoleInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type userUncheckedUpdateManyWithoutRoleInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}