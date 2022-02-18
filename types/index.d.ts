export = AtomicWebpackPlugin;
declare class AtomicWebpackPlugin {
  /**
   * @param {AtomicOptions} [options]
   */
  constructor(options?: AtomicOptions | undefined);
  atomic: Atomic;
  /**
   * @param {Compiler} compiler
   */
  apply(compiler: Compiler): void;
}
declare namespace AtomicWebpackPlugin {
  export {
    Schema,
    Compiler,
    Compilation,
    WebpackError,
    Asset,
    WebpackLogger,
    CacheFacade,
    Etag,
    Snapshot,
    Force,
    Context,
    Files,
    AtomicCheckCallback,
    AtomicRunCallback,
    CleanKeys,
    AtomicOptions,
  };
}
/** @typedef {import("schema-utils/declarations/validate").Schema} Schema */
/** @typedef {import("webpack").Compiler} Compiler */
/** @typedef {import("webpack").Compilation} Compilation */
/** @typedef {import("webpack").WebpackError} WebpackError */
/** @typedef {import("webpack").Asset} Asset */
/** @typedef {ReturnType<Compilation["getLogger"]>} WebpackLogger */
/** @typedef {ReturnType<Compilation["getCache"]>} CacheFacade */
/** @typedef {ReturnType<ReturnType<Compilation["getCache"]>["getLazyHashedEtag"]>} Etag */
/** @typedef {ReturnType<Compilation["fileSystemInfo"]["mergeSnapshots"]>} Snapshot */
/**
 * @typedef {boolean} Force
 */
/**
 * @typedef {string} Context
 */
/**
 * @typedef {Record<string, boolean>} Files
 */
/**
 * @typedef { (changes: boolean, keys: string[], instance: Atomic) => void } AtomicCheckCallback
 */
/**
 * @typedef { (keys: string[], instance: Atomic) => void } AtomicRunCallback
 */
/**
 * @typedef {Object} CleanKeys
 * @property {string} key
 * @property {string} componentName
 * @property {string} from
 */
/**
 * @typedef {Object} AtomicOptions
 * @property {string} base
 * @property {string} output
 * @property {string} header
 * @property {RegExp} regularExpression
 * @property {WebpackLogger} logger
 * @property {Context} context
 */
declare class Atomic {
  /**
   * @public
   * @param {string[]} keys
   * @returns {CleanKeys[]}
   */
  public static cleanKeys(keys: string[]): CleanKeys[];
  /**
   * @param {Partial<AtomicOptions>} options
   */
  constructor(options: Partial<AtomicOptions>);
  /**
   * @private
   * @type {string []}
   */
  private keys;
  /**
   * @private
   * @type {Files}
   */
  private files;
  /**
   * @private
   * @type {string}
   */
  private context;
  /**
   * @private
   * @type {RegExp}
   */
  private regularExpression;
  /**
   * @private
   * @type {string}
   */
  private base;
  /**
   * @private
   * @type {string}
   */
  private header;
  /**
   * @private
   * @type {string}
   */
  private output;
  /**
   * @private
   * @type {Partial<AtomicOptions>}
   */
  private settings;
  scanSubDirectories: boolean;
  logger: {
    info: {
      (...data: any[]): void;
      (message?: any, ...optionalParams: any[]): void;
    };
    error: {
      (...data: any[]): void;
      (message?: any, ...optionalParams: any[]): void;
    };
    trace: {
      (...data: any[]): void;
      (message?: any, ...optionalParams: any[]): void;
    };
    debug: {
      (...data: any[]): void;
      (message?: any, ...optionalParams: any[]): void;
    };
  };
  /**
   * @param {Partial<AtomicOptions>} options
   */
  setOptions(options: Partial<AtomicOptions>): void;
  /**
   * @private
   * @param {string} directory
   * @param {boolean} scanSubDirectories
   * @param {RegExp} regularExpression
   * @returns {string[]}
   */
  private getComponents;
  /**
   * @private
   * @param {string} directory
   * @param {boolean} scanSubDirectories
   * @param {RegExp} regularExpression
   * @returns {void}
   */
  private readDirectory;
  /**
   * @public
   * @param {AtomicCheckCallback} callback
   * @returns {void}
   */
  public check(callback: AtomicCheckCallback): void;
  /**
   * @public
   * @param {AtomicRunCallback} callback
   * @returns {Partial<{ keys: string[], instance: Atomic }>}
   */
  public run(callback: AtomicRunCallback): Partial<{
    keys: string[];
    instance: Atomic;
  }>;
}
type Compiler = import("webpack").Compiler;
type AtomicOptions = {
  base: string;
  output: string;
  header: string;
  regularExpression: RegExp;
  logger: WebpackLogger;
  context: Context;
};
type Schema = import("schema-utils/declarations/validate").Schema;
type Compilation = import("webpack").Compilation;
type WebpackError = import("webpack").WebpackError;
type Asset = import("webpack").Asset;
type WebpackLogger = ReturnType<Compilation["getLogger"]>;
type CacheFacade = ReturnType<Compilation["getCache"]>;
type Etag = ReturnType<
  ReturnType<Compilation["getCache"]>["getLazyHashedEtag"]
>;
type Snapshot = ReturnType<Compilation["fileSystemInfo"]["mergeSnapshots"]>;
type Force = boolean;
type Context = string;
type Files = Record<string, boolean>;
type AtomicCheckCallback = (
  changes: boolean,
  keys: string[],
  instance: Atomic
) => void;
type AtomicRunCallback = (keys: string[], instance: Atomic) => void;
type CleanKeys = {
  key: string;
  componentName: string;
  from: string;
};
