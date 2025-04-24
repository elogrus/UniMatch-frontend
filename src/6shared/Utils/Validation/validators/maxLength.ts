import { ValidatorGenerator } from "..";

const maxLength: ValidatorGenerator<number,string | Array<any>> = (
    max,
    message = `Максимальная длина: ${max}`
) => {
    return async (value) => (value.length <= max ? null : message);
};

export default maxLength;
