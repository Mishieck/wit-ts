/** Boolean value `true  or `false`. */
export type Bool = boolean;

/*
 * Signed integers of the appropriate width. For example, `S32` is a signed
 * 32-bit integer.
 */
export type S8 = Int8Array[0];
export type S16 = Int16Array[0];
export type S32 = Int32Array[0];
export type S64 = BigInt64Array[0];

/*
 * Unsigned integers of the appropriate width. For example, `U32` is an unsigned
 * 32-bit integer.
 */
export type U8 = Uint8Array[0];
export type U16 = Uint16Array[0];
export type U32 = Uint32Array[0];
export type U64 = BigUint64Array[0];

/*
 * Floating-point numbers of the appropriate width. For example, `F64` is a
 * 64-bit (double precision) ﬂoating-point number.
 *
 * NOTE: The `f32` and `f64` types support the usual set of IEEE 754 single and
 * double-precision values, except that they logically only have a single nan
 * value. The exact bit-level representation of an IEEE 754 `NaN` is not
 * guaranteed to be preserved when values pass through WIT interfaces as the
 * singular WIT `nan` value.
 */
export type F32 = Float32Array[0];
export type F64 = Float64Array[0];

/** Unicode character. (Speciﬁcally, a Unicode scalar value.) */
export type Char = string[0];

/** A Unicode string - that is, a ﬁnite sequence of characters. */
export type $String = string;
