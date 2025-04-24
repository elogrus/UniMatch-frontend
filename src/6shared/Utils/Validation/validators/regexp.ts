import { ValidatorGenerator } from "..";

const regexp: ValidatorGenerator<RegExp, string> = (
    regexp,
    message = `Несоответствие с RegExp: ${regexp}`
) => {
    return async (value) => (regexp.test(value) ? null : message);
};

export default regexp;
