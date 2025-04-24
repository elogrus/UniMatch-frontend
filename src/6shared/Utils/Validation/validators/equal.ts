import { ValidatorGenerator } from "..";

const equal: ValidatorGenerator<any, any> = (
    equalTo,
    message = `Значение не соответствует: ${equalTo}`
) => {
    return async (value) => (value === equalTo ? null : message);
};

export default equal;
