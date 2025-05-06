/**
 * A `Record` type declares a set of named ﬁelds, each of the form `name: type`,
 * separated by commas. A record instance contains a value for every ﬁeld. Field
 * types can be built-in or user-deﬁned. The syntax is as follows:
 *
 * @example
 *
 * ```ts
 * type Customer = $Record<{
 *   id: U64,
 *   name: $String,
 *   picture: Option<List<U8>>,
 *   accountManager: Employee,
 * }>
 * ```
 *
 * Records are similar to C or Rust `struct`s.>
 *
 * > NOTE: User-deﬁned records can't be generic (that is, parameterised by
 * > type). Only built-in types can be generic.
 */
export type $Record<Rec extends Record<string, unknown>> = Rec;
