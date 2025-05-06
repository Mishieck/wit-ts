import { None } from "./none.ts";
import type { Variant } from "./variant.ts";

/**
 * `Result<T, E>` for any types `T` and `E` may contain a value of type `T` or a
 * value of type `E` (but not both). This is typically used for "value or error"
 * situations; for example, a HTTP request function might return a result, with
 * the success case (the `T` type) representing a HTTP response, and the error
 * case (the `E` type) representing the various kinds of error that might occur.
 * This is similar to Rust `Result`, or Haskell `Either`.
 *
 * @example
 *
 * ```ts
 * Result<HttpResponse, HttpError>
 * ```
 *
 * Sometimes there is no data associated with one or both of the cases. For
 * example, a `print` function could return an error code if it fails, but has
 * nothing to return if it succeeds. In this case, you can omit the
 * corresponding type as follows:
 *
 * @example
 *
 * ```ts
 * Result<U32> // No data associated with the error case
 * Result<void, U32> // No data associated with the success case
 * Result // No data associated with either case
 * ```
 *
 * > NOTE: This is a special case of a variant type. WIT deﬁnes it so that there
 * > is a common way of expressing it, so that you don't need to create a
 * > variant type for every combination of value and error types, and to enable
 * > it to be mapped idiomatically into languages with result or "either" types.
 */
export type Result<T = None, E = None> = Variant<{ error: E; value: T }>;
