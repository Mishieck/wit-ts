import type { None } from "./none.ts";

/**
 * A `Variant` type declares one or more cases. Each case has a name and,
 * optionally, a type of data associated with that case. A variant instance
 * contains exactly one case. Cases are separated by commas. The syntax is as
 * follows:
 *
 * @example
 *
 * ```ts
 * type AllowedDestinations = Variant<{
 *   none: void,
 *   any: void,
 *   restricted: List<Address>
 * }>
 * ```
 *
 * Variants are similar to Rust `enum`s or OCaml discriminated unions. The
 * closest C equivalent is a tagged union, but WIT both takes care of the "tag"
 * (the case) and enforces the correct data shape for each tag.
 *
 * > NOTE: User-deﬁned variants can't be generic (that is, parameterised by
 * > type). Only built-in types can be generic.
 */
export type Variant<Rec extends Record<string, unknown>> = {
  [Key in keyof Rec]: Rec[Key] | None;
};
