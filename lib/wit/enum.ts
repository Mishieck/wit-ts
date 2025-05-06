/**
 * An `Enum` type is a variant type where none of the cases have associated
 * data:
 *
 * @example
 *
 * ```ts
 * type Color = Enum<"HotPink" | "LimeGreen" | "NavyBlue">;
 * ```
 *
 * This can provide a simpler representation in languages without discriminated
 * unions. For example, a WIT `enum` can translate directly to a C++ `enum`.
 */
export type Enum<Fields extends string> = Record<Fields, number>;
