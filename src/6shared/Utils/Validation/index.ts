// type ValidationResult = string | null;
// type Validator<T> = (params: T) => Promise<ValidationResult>;
// export type ValidatorGenerator<Options, Params> = (
//     options?: Options
// ) => Validator<Params>;

// export const validateValue = async <T>(
//     value: T,
//     validators: Validator<T>[]
// ): Promise<ValidationResult> => {
//     let validationResult: ValidationResult = null;
//     let i = 0;

//     while (validationResult === null && i < validators.length) {
//         const res = await validators[i](value);

//         if (res) validationResult = res;
//         i++;
//     }

//     return validationResult;
// };

export type ValidatorResult = null | string;
export type Validator<T> = (value: T) => Promise<ValidatorResult>;
export type ValidatorGenerator<Params, Value> = (
    params: Params,
    message?: string
) => Validator<Value>;
export type ValidatorGeneratorWithoutParams<Value> = (
    message?: string
) => Validator<Value>;

export const validate = async <ValueType>(
    value: ValueType,
    validators: Validator<ValueType>[]
): Promise<ValidatorResult> => {
    for (const validator of validators) {
        const result = await validator(value);
        if (result !== null) return result;
    }
    return null;
};
