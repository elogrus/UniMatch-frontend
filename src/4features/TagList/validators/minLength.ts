import { ValidatorGenerator } from "@/6shared/Utils/Validation";
import { TagListTag } from "..";

const minLength: ValidatorGenerator<number, TagListTag[]> = (
    min,
    message = `Минимальное кол-во тегов: ${min}`
) => {
    return async (value) => {
        return value.filter((tag) => tag.active).length >= min ? null : message;
    };
};

export default minLength;
