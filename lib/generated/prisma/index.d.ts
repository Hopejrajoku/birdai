
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
 * Model BirdScan
 * 
 */
export type BirdScan = $Result.DefaultSelection<Prisma.$BirdScanPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more BirdScans
 * const birdScans = await prisma.birdScan.findMany()
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
   * // Fetch zero or more BirdScans
   * const birdScans = await prisma.birdScan.findMany()
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
   * `prisma.birdScan`: Exposes CRUD operations for the **BirdScan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BirdScans
    * const birdScans = await prisma.birdScan.findMany()
    * ```
    */
  get birdScan(): Prisma.BirdScanDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
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
    BirdScan: 'BirdScan'
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
      modelProps: "birdScan"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      BirdScan: {
        payload: Prisma.$BirdScanPayload<ExtArgs>
        fields: Prisma.BirdScanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BirdScanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BirdScanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BirdScanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BirdScanPayload>
          }
          findFirst: {
            args: Prisma.BirdScanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BirdScanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BirdScanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BirdScanPayload>
          }
          findMany: {
            args: Prisma.BirdScanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BirdScanPayload>[]
          }
          create: {
            args: Prisma.BirdScanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BirdScanPayload>
          }
          createMany: {
            args: Prisma.BirdScanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BirdScanCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BirdScanPayload>[]
          }
          delete: {
            args: Prisma.BirdScanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BirdScanPayload>
          }
          update: {
            args: Prisma.BirdScanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BirdScanPayload>
          }
          deleteMany: {
            args: Prisma.BirdScanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BirdScanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BirdScanUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BirdScanPayload>[]
          }
          upsert: {
            args: Prisma.BirdScanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BirdScanPayload>
          }
          aggregate: {
            args: Prisma.BirdScanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBirdScan>
          }
          groupBy: {
            args: Prisma.BirdScanGroupByArgs<ExtArgs>
            result: $Utils.Optional<BirdScanGroupByOutputType>[]
          }
          count: {
            args: Prisma.BirdScanCountArgs<ExtArgs>
            result: $Utils.Optional<BirdScanCountAggregateOutputType> | number
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
    birdScan?: BirdScanOmit
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
   * Models
   */

  /**
   * Model BirdScan
   */

  export type AggregateBirdScan = {
    _count: BirdScanCountAggregateOutputType | null
    _avg: BirdScanAvgAggregateOutputType | null
    _sum: BirdScanSumAggregateOutputType | null
    _min: BirdScanMinAggregateOutputType | null
    _max: BirdScanMaxAggregateOutputType | null
  }

  export type BirdScanAvgAggregateOutputType = {
    confidence: number | null
  }

  export type BirdScanSumAggregateOutputType = {
    confidence: number | null
  }

  export type BirdScanMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    image_url: string | null
    bird_name: string | null
    confidence: number | null
    description: string | null
    detected_at: Date | null
  }

  export type BirdScanMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    image_url: string | null
    bird_name: string | null
    confidence: number | null
    description: string | null
    detected_at: Date | null
  }

  export type BirdScanCountAggregateOutputType = {
    id: number
    user_id: number
    image_url: number
    bird_name: number
    confidence: number
    description: number
    detected_at: number
    _all: number
  }


  export type BirdScanAvgAggregateInputType = {
    confidence?: true
  }

  export type BirdScanSumAggregateInputType = {
    confidence?: true
  }

  export type BirdScanMinAggregateInputType = {
    id?: true
    user_id?: true
    image_url?: true
    bird_name?: true
    confidence?: true
    description?: true
    detected_at?: true
  }

  export type BirdScanMaxAggregateInputType = {
    id?: true
    user_id?: true
    image_url?: true
    bird_name?: true
    confidence?: true
    description?: true
    detected_at?: true
  }

  export type BirdScanCountAggregateInputType = {
    id?: true
    user_id?: true
    image_url?: true
    bird_name?: true
    confidence?: true
    description?: true
    detected_at?: true
    _all?: true
  }

  export type BirdScanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BirdScan to aggregate.
     */
    where?: BirdScanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BirdScans to fetch.
     */
    orderBy?: BirdScanOrderByWithRelationInput | BirdScanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BirdScanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BirdScans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BirdScans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BirdScans
    **/
    _count?: true | BirdScanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BirdScanAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BirdScanSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BirdScanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BirdScanMaxAggregateInputType
  }

  export type GetBirdScanAggregateType<T extends BirdScanAggregateArgs> = {
        [P in keyof T & keyof AggregateBirdScan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBirdScan[P]>
      : GetScalarType<T[P], AggregateBirdScan[P]>
  }




  export type BirdScanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BirdScanWhereInput
    orderBy?: BirdScanOrderByWithAggregationInput | BirdScanOrderByWithAggregationInput[]
    by: BirdScanScalarFieldEnum[] | BirdScanScalarFieldEnum
    having?: BirdScanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BirdScanCountAggregateInputType | true
    _avg?: BirdScanAvgAggregateInputType
    _sum?: BirdScanSumAggregateInputType
    _min?: BirdScanMinAggregateInputType
    _max?: BirdScanMaxAggregateInputType
  }

  export type BirdScanGroupByOutputType = {
    id: string
    user_id: string
    image_url: string
    bird_name: string
    confidence: number
    description: string
    detected_at: Date
    _count: BirdScanCountAggregateOutputType | null
    _avg: BirdScanAvgAggregateOutputType | null
    _sum: BirdScanSumAggregateOutputType | null
    _min: BirdScanMinAggregateOutputType | null
    _max: BirdScanMaxAggregateOutputType | null
  }

  type GetBirdScanGroupByPayload<T extends BirdScanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BirdScanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BirdScanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BirdScanGroupByOutputType[P]>
            : GetScalarType<T[P], BirdScanGroupByOutputType[P]>
        }
      >
    >


  export type BirdScanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    image_url?: boolean
    bird_name?: boolean
    confidence?: boolean
    description?: boolean
    detected_at?: boolean
  }, ExtArgs["result"]["birdScan"]>

  export type BirdScanSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    image_url?: boolean
    bird_name?: boolean
    confidence?: boolean
    description?: boolean
    detected_at?: boolean
  }, ExtArgs["result"]["birdScan"]>

  export type BirdScanSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    image_url?: boolean
    bird_name?: boolean
    confidence?: boolean
    description?: boolean
    detected_at?: boolean
  }, ExtArgs["result"]["birdScan"]>

  export type BirdScanSelectScalar = {
    id?: boolean
    user_id?: boolean
    image_url?: boolean
    bird_name?: boolean
    confidence?: boolean
    description?: boolean
    detected_at?: boolean
  }

  export type BirdScanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "image_url" | "bird_name" | "confidence" | "description" | "detected_at", ExtArgs["result"]["birdScan"]>

  export type $BirdScanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BirdScan"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      image_url: string
      bird_name: string
      confidence: number
      description: string
      detected_at: Date
    }, ExtArgs["result"]["birdScan"]>
    composites: {}
  }

  type BirdScanGetPayload<S extends boolean | null | undefined | BirdScanDefaultArgs> = $Result.GetResult<Prisma.$BirdScanPayload, S>

  type BirdScanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BirdScanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BirdScanCountAggregateInputType | true
    }

  export interface BirdScanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BirdScan'], meta: { name: 'BirdScan' } }
    /**
     * Find zero or one BirdScan that matches the filter.
     * @param {BirdScanFindUniqueArgs} args - Arguments to find a BirdScan
     * @example
     * // Get one BirdScan
     * const birdScan = await prisma.birdScan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BirdScanFindUniqueArgs>(args: SelectSubset<T, BirdScanFindUniqueArgs<ExtArgs>>): Prisma__BirdScanClient<$Result.GetResult<Prisma.$BirdScanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BirdScan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BirdScanFindUniqueOrThrowArgs} args - Arguments to find a BirdScan
     * @example
     * // Get one BirdScan
     * const birdScan = await prisma.birdScan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BirdScanFindUniqueOrThrowArgs>(args: SelectSubset<T, BirdScanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BirdScanClient<$Result.GetResult<Prisma.$BirdScanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BirdScan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BirdScanFindFirstArgs} args - Arguments to find a BirdScan
     * @example
     * // Get one BirdScan
     * const birdScan = await prisma.birdScan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BirdScanFindFirstArgs>(args?: SelectSubset<T, BirdScanFindFirstArgs<ExtArgs>>): Prisma__BirdScanClient<$Result.GetResult<Prisma.$BirdScanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BirdScan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BirdScanFindFirstOrThrowArgs} args - Arguments to find a BirdScan
     * @example
     * // Get one BirdScan
     * const birdScan = await prisma.birdScan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BirdScanFindFirstOrThrowArgs>(args?: SelectSubset<T, BirdScanFindFirstOrThrowArgs<ExtArgs>>): Prisma__BirdScanClient<$Result.GetResult<Prisma.$BirdScanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BirdScans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BirdScanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BirdScans
     * const birdScans = await prisma.birdScan.findMany()
     * 
     * // Get first 10 BirdScans
     * const birdScans = await prisma.birdScan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const birdScanWithIdOnly = await prisma.birdScan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BirdScanFindManyArgs>(args?: SelectSubset<T, BirdScanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BirdScanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BirdScan.
     * @param {BirdScanCreateArgs} args - Arguments to create a BirdScan.
     * @example
     * // Create one BirdScan
     * const BirdScan = await prisma.birdScan.create({
     *   data: {
     *     // ... data to create a BirdScan
     *   }
     * })
     * 
     */
    create<T extends BirdScanCreateArgs>(args: SelectSubset<T, BirdScanCreateArgs<ExtArgs>>): Prisma__BirdScanClient<$Result.GetResult<Prisma.$BirdScanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BirdScans.
     * @param {BirdScanCreateManyArgs} args - Arguments to create many BirdScans.
     * @example
     * // Create many BirdScans
     * const birdScan = await prisma.birdScan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BirdScanCreateManyArgs>(args?: SelectSubset<T, BirdScanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BirdScans and returns the data saved in the database.
     * @param {BirdScanCreateManyAndReturnArgs} args - Arguments to create many BirdScans.
     * @example
     * // Create many BirdScans
     * const birdScan = await prisma.birdScan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BirdScans and only return the `id`
     * const birdScanWithIdOnly = await prisma.birdScan.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BirdScanCreateManyAndReturnArgs>(args?: SelectSubset<T, BirdScanCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BirdScanPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BirdScan.
     * @param {BirdScanDeleteArgs} args - Arguments to delete one BirdScan.
     * @example
     * // Delete one BirdScan
     * const BirdScan = await prisma.birdScan.delete({
     *   where: {
     *     // ... filter to delete one BirdScan
     *   }
     * })
     * 
     */
    delete<T extends BirdScanDeleteArgs>(args: SelectSubset<T, BirdScanDeleteArgs<ExtArgs>>): Prisma__BirdScanClient<$Result.GetResult<Prisma.$BirdScanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BirdScan.
     * @param {BirdScanUpdateArgs} args - Arguments to update one BirdScan.
     * @example
     * // Update one BirdScan
     * const birdScan = await prisma.birdScan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BirdScanUpdateArgs>(args: SelectSubset<T, BirdScanUpdateArgs<ExtArgs>>): Prisma__BirdScanClient<$Result.GetResult<Prisma.$BirdScanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BirdScans.
     * @param {BirdScanDeleteManyArgs} args - Arguments to filter BirdScans to delete.
     * @example
     * // Delete a few BirdScans
     * const { count } = await prisma.birdScan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BirdScanDeleteManyArgs>(args?: SelectSubset<T, BirdScanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BirdScans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BirdScanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BirdScans
     * const birdScan = await prisma.birdScan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BirdScanUpdateManyArgs>(args: SelectSubset<T, BirdScanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BirdScans and returns the data updated in the database.
     * @param {BirdScanUpdateManyAndReturnArgs} args - Arguments to update many BirdScans.
     * @example
     * // Update many BirdScans
     * const birdScan = await prisma.birdScan.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BirdScans and only return the `id`
     * const birdScanWithIdOnly = await prisma.birdScan.updateManyAndReturn({
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
    updateManyAndReturn<T extends BirdScanUpdateManyAndReturnArgs>(args: SelectSubset<T, BirdScanUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BirdScanPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BirdScan.
     * @param {BirdScanUpsertArgs} args - Arguments to update or create a BirdScan.
     * @example
     * // Update or create a BirdScan
     * const birdScan = await prisma.birdScan.upsert({
     *   create: {
     *     // ... data to create a BirdScan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BirdScan we want to update
     *   }
     * })
     */
    upsert<T extends BirdScanUpsertArgs>(args: SelectSubset<T, BirdScanUpsertArgs<ExtArgs>>): Prisma__BirdScanClient<$Result.GetResult<Prisma.$BirdScanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BirdScans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BirdScanCountArgs} args - Arguments to filter BirdScans to count.
     * @example
     * // Count the number of BirdScans
     * const count = await prisma.birdScan.count({
     *   where: {
     *     // ... the filter for the BirdScans we want to count
     *   }
     * })
    **/
    count<T extends BirdScanCountArgs>(
      args?: Subset<T, BirdScanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BirdScanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BirdScan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BirdScanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BirdScanAggregateArgs>(args: Subset<T, BirdScanAggregateArgs>): Prisma.PrismaPromise<GetBirdScanAggregateType<T>>

    /**
     * Group by BirdScan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BirdScanGroupByArgs} args - Group by arguments.
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
      T extends BirdScanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BirdScanGroupByArgs['orderBy'] }
        : { orderBy?: BirdScanGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BirdScanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBirdScanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BirdScan model
   */
  readonly fields: BirdScanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BirdScan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BirdScanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the BirdScan model
   */
  interface BirdScanFieldRefs {
    readonly id: FieldRef<"BirdScan", 'String'>
    readonly user_id: FieldRef<"BirdScan", 'String'>
    readonly image_url: FieldRef<"BirdScan", 'String'>
    readonly bird_name: FieldRef<"BirdScan", 'String'>
    readonly confidence: FieldRef<"BirdScan", 'Float'>
    readonly description: FieldRef<"BirdScan", 'String'>
    readonly detected_at: FieldRef<"BirdScan", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BirdScan findUnique
   */
  export type BirdScanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BirdScan
     */
    select?: BirdScanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BirdScan
     */
    omit?: BirdScanOmit<ExtArgs> | null
    /**
     * Filter, which BirdScan to fetch.
     */
    where: BirdScanWhereUniqueInput
  }

  /**
   * BirdScan findUniqueOrThrow
   */
  export type BirdScanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BirdScan
     */
    select?: BirdScanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BirdScan
     */
    omit?: BirdScanOmit<ExtArgs> | null
    /**
     * Filter, which BirdScan to fetch.
     */
    where: BirdScanWhereUniqueInput
  }

  /**
   * BirdScan findFirst
   */
  export type BirdScanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BirdScan
     */
    select?: BirdScanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BirdScan
     */
    omit?: BirdScanOmit<ExtArgs> | null
    /**
     * Filter, which BirdScan to fetch.
     */
    where?: BirdScanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BirdScans to fetch.
     */
    orderBy?: BirdScanOrderByWithRelationInput | BirdScanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BirdScans.
     */
    cursor?: BirdScanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BirdScans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BirdScans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BirdScans.
     */
    distinct?: BirdScanScalarFieldEnum | BirdScanScalarFieldEnum[]
  }

  /**
   * BirdScan findFirstOrThrow
   */
  export type BirdScanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BirdScan
     */
    select?: BirdScanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BirdScan
     */
    omit?: BirdScanOmit<ExtArgs> | null
    /**
     * Filter, which BirdScan to fetch.
     */
    where?: BirdScanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BirdScans to fetch.
     */
    orderBy?: BirdScanOrderByWithRelationInput | BirdScanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BirdScans.
     */
    cursor?: BirdScanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BirdScans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BirdScans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BirdScans.
     */
    distinct?: BirdScanScalarFieldEnum | BirdScanScalarFieldEnum[]
  }

  /**
   * BirdScan findMany
   */
  export type BirdScanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BirdScan
     */
    select?: BirdScanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BirdScan
     */
    omit?: BirdScanOmit<ExtArgs> | null
    /**
     * Filter, which BirdScans to fetch.
     */
    where?: BirdScanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BirdScans to fetch.
     */
    orderBy?: BirdScanOrderByWithRelationInput | BirdScanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BirdScans.
     */
    cursor?: BirdScanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BirdScans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BirdScans.
     */
    skip?: number
    distinct?: BirdScanScalarFieldEnum | BirdScanScalarFieldEnum[]
  }

  /**
   * BirdScan create
   */
  export type BirdScanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BirdScan
     */
    select?: BirdScanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BirdScan
     */
    omit?: BirdScanOmit<ExtArgs> | null
    /**
     * The data needed to create a BirdScan.
     */
    data: XOR<BirdScanCreateInput, BirdScanUncheckedCreateInput>
  }

  /**
   * BirdScan createMany
   */
  export type BirdScanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BirdScans.
     */
    data: BirdScanCreateManyInput | BirdScanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BirdScan createManyAndReturn
   */
  export type BirdScanCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BirdScan
     */
    select?: BirdScanSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BirdScan
     */
    omit?: BirdScanOmit<ExtArgs> | null
    /**
     * The data used to create many BirdScans.
     */
    data: BirdScanCreateManyInput | BirdScanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BirdScan update
   */
  export type BirdScanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BirdScan
     */
    select?: BirdScanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BirdScan
     */
    omit?: BirdScanOmit<ExtArgs> | null
    /**
     * The data needed to update a BirdScan.
     */
    data: XOR<BirdScanUpdateInput, BirdScanUncheckedUpdateInput>
    /**
     * Choose, which BirdScan to update.
     */
    where: BirdScanWhereUniqueInput
  }

  /**
   * BirdScan updateMany
   */
  export type BirdScanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BirdScans.
     */
    data: XOR<BirdScanUpdateManyMutationInput, BirdScanUncheckedUpdateManyInput>
    /**
     * Filter which BirdScans to update
     */
    where?: BirdScanWhereInput
    /**
     * Limit how many BirdScans to update.
     */
    limit?: number
  }

  /**
   * BirdScan updateManyAndReturn
   */
  export type BirdScanUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BirdScan
     */
    select?: BirdScanSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BirdScan
     */
    omit?: BirdScanOmit<ExtArgs> | null
    /**
     * The data used to update BirdScans.
     */
    data: XOR<BirdScanUpdateManyMutationInput, BirdScanUncheckedUpdateManyInput>
    /**
     * Filter which BirdScans to update
     */
    where?: BirdScanWhereInput
    /**
     * Limit how many BirdScans to update.
     */
    limit?: number
  }

  /**
   * BirdScan upsert
   */
  export type BirdScanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BirdScan
     */
    select?: BirdScanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BirdScan
     */
    omit?: BirdScanOmit<ExtArgs> | null
    /**
     * The filter to search for the BirdScan to update in case it exists.
     */
    where: BirdScanWhereUniqueInput
    /**
     * In case the BirdScan found by the `where` argument doesn't exist, create a new BirdScan with this data.
     */
    create: XOR<BirdScanCreateInput, BirdScanUncheckedCreateInput>
    /**
     * In case the BirdScan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BirdScanUpdateInput, BirdScanUncheckedUpdateInput>
  }

  /**
   * BirdScan delete
   */
  export type BirdScanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BirdScan
     */
    select?: BirdScanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BirdScan
     */
    omit?: BirdScanOmit<ExtArgs> | null
    /**
     * Filter which BirdScan to delete.
     */
    where: BirdScanWhereUniqueInput
  }

  /**
   * BirdScan deleteMany
   */
  export type BirdScanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BirdScans to delete
     */
    where?: BirdScanWhereInput
    /**
     * Limit how many BirdScans to delete.
     */
    limit?: number
  }

  /**
   * BirdScan without action
   */
  export type BirdScanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BirdScan
     */
    select?: BirdScanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BirdScan
     */
    omit?: BirdScanOmit<ExtArgs> | null
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


  export const BirdScanScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    image_url: 'image_url',
    bird_name: 'bird_name',
    confidence: 'confidence',
    description: 'description',
    detected_at: 'detected_at'
  };

  export type BirdScanScalarFieldEnum = (typeof BirdScanScalarFieldEnum)[keyof typeof BirdScanScalarFieldEnum]


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


  /**
   * Field references
   */


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type BirdScanWhereInput = {
    AND?: BirdScanWhereInput | BirdScanWhereInput[]
    OR?: BirdScanWhereInput[]
    NOT?: BirdScanWhereInput | BirdScanWhereInput[]
    id?: StringFilter<"BirdScan"> | string
    user_id?: StringFilter<"BirdScan"> | string
    image_url?: StringFilter<"BirdScan"> | string
    bird_name?: StringFilter<"BirdScan"> | string
    confidence?: FloatFilter<"BirdScan"> | number
    description?: StringFilter<"BirdScan"> | string
    detected_at?: DateTimeFilter<"BirdScan"> | Date | string
  }

  export type BirdScanOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    image_url?: SortOrder
    bird_name?: SortOrder
    confidence?: SortOrder
    description?: SortOrder
    detected_at?: SortOrder
  }

  export type BirdScanWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BirdScanWhereInput | BirdScanWhereInput[]
    OR?: BirdScanWhereInput[]
    NOT?: BirdScanWhereInput | BirdScanWhereInput[]
    user_id?: StringFilter<"BirdScan"> | string
    image_url?: StringFilter<"BirdScan"> | string
    bird_name?: StringFilter<"BirdScan"> | string
    confidence?: FloatFilter<"BirdScan"> | number
    description?: StringFilter<"BirdScan"> | string
    detected_at?: DateTimeFilter<"BirdScan"> | Date | string
  }, "id">

  export type BirdScanOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    image_url?: SortOrder
    bird_name?: SortOrder
    confidence?: SortOrder
    description?: SortOrder
    detected_at?: SortOrder
    _count?: BirdScanCountOrderByAggregateInput
    _avg?: BirdScanAvgOrderByAggregateInput
    _max?: BirdScanMaxOrderByAggregateInput
    _min?: BirdScanMinOrderByAggregateInput
    _sum?: BirdScanSumOrderByAggregateInput
  }

  export type BirdScanScalarWhereWithAggregatesInput = {
    AND?: BirdScanScalarWhereWithAggregatesInput | BirdScanScalarWhereWithAggregatesInput[]
    OR?: BirdScanScalarWhereWithAggregatesInput[]
    NOT?: BirdScanScalarWhereWithAggregatesInput | BirdScanScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BirdScan"> | string
    user_id?: StringWithAggregatesFilter<"BirdScan"> | string
    image_url?: StringWithAggregatesFilter<"BirdScan"> | string
    bird_name?: StringWithAggregatesFilter<"BirdScan"> | string
    confidence?: FloatWithAggregatesFilter<"BirdScan"> | number
    description?: StringWithAggregatesFilter<"BirdScan"> | string
    detected_at?: DateTimeWithAggregatesFilter<"BirdScan"> | Date | string
  }

  export type BirdScanCreateInput = {
    id?: string
    user_id: string
    image_url: string
    bird_name: string
    confidence: number
    description: string
    detected_at?: Date | string
  }

  export type BirdScanUncheckedCreateInput = {
    id?: string
    user_id: string
    image_url: string
    bird_name: string
    confidence: number
    description: string
    detected_at?: Date | string
  }

  export type BirdScanUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    bird_name?: StringFieldUpdateOperationsInput | string
    confidence?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    detected_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BirdScanUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    bird_name?: StringFieldUpdateOperationsInput | string
    confidence?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    detected_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BirdScanCreateManyInput = {
    id?: string
    user_id: string
    image_url: string
    bird_name: string
    confidence: number
    description: string
    detected_at?: Date | string
  }

  export type BirdScanUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    bird_name?: StringFieldUpdateOperationsInput | string
    confidence?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    detected_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BirdScanUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    bird_name?: StringFieldUpdateOperationsInput | string
    confidence?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    detected_at?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BirdScanCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    image_url?: SortOrder
    bird_name?: SortOrder
    confidence?: SortOrder
    description?: SortOrder
    detected_at?: SortOrder
  }

  export type BirdScanAvgOrderByAggregateInput = {
    confidence?: SortOrder
  }

  export type BirdScanMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    image_url?: SortOrder
    bird_name?: SortOrder
    confidence?: SortOrder
    description?: SortOrder
    detected_at?: SortOrder
  }

  export type BirdScanMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    image_url?: SortOrder
    bird_name?: SortOrder
    confidence?: SortOrder
    description?: SortOrder
    detected_at?: SortOrder
  }

  export type BirdScanSumOrderByAggregateInput = {
    confidence?: SortOrder
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

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
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

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
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