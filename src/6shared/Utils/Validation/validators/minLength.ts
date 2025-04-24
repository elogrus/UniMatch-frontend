import { ValidatorGenerator } from "..";

const minLength: ValidatorGenerator<number, string | Array<any>> = (
    min,
    message = `Минимальная длина: ${min}`
) => {
    return async (value) => (value.length >= min ? null : message);
};

export default minLength;
