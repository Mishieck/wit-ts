/**
 * A `Tuple` type is an ordered ﬁxed length sequence of values of speciﬁed
 * types. It is similar to a record, except that the ﬁelds are identiﬁed by
 * their order instead of by names.
 *
 * @example
 *
 * ```ts
 * Tuple<u64, string> // An integer and a string
 * Tuple<u64, string, u64> // An integer, then a string, then an integer
 * ```
 *
 * This is similar to tuples in Rust or OCaml.
 */
export type Tuple<T extends Array<unknown>> = [...T];
