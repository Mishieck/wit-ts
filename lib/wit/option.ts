import type { Variant } from "./variant.ts";

/**
 * `Option<T>` for any type T may contain a value of type T, or may contain no
 * value. `T` can be any type, built-in or user-deﬁned. For example, a lookup
 * function might return an `Option`, allowing for the possibility that the
 * lookup key wasn't found.
 *
 * @example
 *
 * ```ts
 * Option<Customer>
 * ```
 *
 * This is similar to Rust `Option`, C++ `std::optional` , or Haskell `Maybe`.
 *
 * NOTE: This is a special case of a variant type. WIT deﬁnes it so that there
 * is a common way of expressing it, so that you don't need to create a variant
 * type for every value type, and to enable it to be mapped idiomatically into
 * languages with option types.
 */
export type Option<Value> = Variant<{ value: Value }>;
