import type { Option } from "./wit.ts";
import type { Result } from "./wit.ts";
import type { Variant } from "./wit.ts";
import type { None } from "./wit.ts";
import type { Enum } from "./wit.ts";
import type { Flags } from "./wit.ts";

export const NONE: None = null;

/**
 * Checks if an option is does not have a value.
 *
 * TODO: Add examples.
 */
export const isNone = <Opt extends Option<unknown>>(
  option: Opt,
) => option.value === NONE;

/**
 * Checks if an option is does has a value.
 *
 * TODO: Add examples.
 */
export const isSome = <Opt extends Option<unknown>>(
  option: Opt,
): option is Required<Opt> => option.value !== NONE;

/**
 * Checks if a variant's value is set.
 *
 * TODO: Add examples.
 */
export const isVariant = <
  Var extends Variant<Record<string, unknown>>,
  Field extends string,
>(value: Var[Field]): value is NonNullable<Var[Field]> => value !== NONE;

/**
 * Creates variants using the WIT `Variant` type.
 *
 * @param template - the template to use when creating variants. All fields of
 * the template should be `NONE`.
 *
 * TODO: Add examples.
 */
export const createVariant = <Var extends Variant<Record<string, unknown>>>(
  template: Var,
  key: keyof Var,
  value: Var[keyof Var],
): Var => Object.assign({ ...template }, { [key]: value }) as Var;

/**
 * Creates an option value using the WIT `Option` type.
 *
 * @param value - The value to set the option to. If the value has not been
 * provided, the option value is set to `NONE`.
 *
 * TODO: Add examples.
 */
export const createOption = <Opt extends Option<unknown>>(
  value?: Opt["value"],
) => ({ value: value ?? NONE }) as Opt;

/**
 * Creates a result using the WIT `Result` type.
 *
 * @param field - The field whose value is being set; `value` for a success
 * result and `error` for an error result.
 *
 * @param value - The value that is to be set according to the `field`.
 *
 * TODO: Add examples.
 */
export const createResult = <
  Res extends Result<unknown, unknown>,
  Field extends keyof Res,
>(
  field: Field,
  value: Res[Field],
) => createVariant<Res>({ value: NONE, error: NONE } as Res, field, value);

/**
 * Creates an enum using the WIT `Enum` type.
 *
 * @param template - The template to use for setting the value. All the values
 * of the template must be set to `0`.
 *
 * TODO: Add examples.
 */
export const createEnum = <En extends Enum<string>>(template: En) => {
  const en = { ...template };
  let value = 0;
  for (const field in en) en[field] = value++ as En[typeof field];
  return en;
};

/**
 * Create flags using the WIT `Flags` type.
 *
 * @param template - The template to use for setting the flags. All the values
 * of the template must be set to `false`.
 *
 * TODO: Add examples.
 */
export const createFlags = <F extends Flags<string>>(
  template: F,
  values: Partial<F>,
) => Object.assign({ ...template }, values) as F;
