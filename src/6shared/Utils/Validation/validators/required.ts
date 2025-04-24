import { ValidatorGeneratorWithoutParams } from "..";

const required: ValidatorGeneratorWithoutParams<unknown> = (
    message = "Поле обязательное"
) => {
    return async (value) => (value ? null : message);
};

export default required;
