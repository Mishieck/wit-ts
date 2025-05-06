/**
 * A `Flags` type is a set of named booleans. In an instance of the type, each
 * ﬂag will be either `true` or `false`.
 *
 * @example
 *
 * ```ts
 * type AllowedMethods = Flags<"get" | "post" | "put" | "delete">;
 * ```
 *
 * > NOTE: A `Flags` type is logically equivalent to a record type where each
 * > ﬁeld is of type `Bool`, but it is represented more eﬃciently (as a bitﬁeld)
 * > at the binary level.
 */
export type Flags<Fields extends string> = Record<Fields, boolean>;
