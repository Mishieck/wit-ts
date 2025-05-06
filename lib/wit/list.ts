/**
 * `List<T>` for any type `T` denotes an ordered sequence of values of type `T`.
 * `T` can be any type, built-in or user-deﬁned.
 *
 * @example
 *
 * ```ts
 * List<U8> // byte buffer
 * List<Customer> // a list of customers
 * ```
 *
 * This is similar to Rust `Vec`, or Java `List`.
 */
export type List<T> = Array<T>;
