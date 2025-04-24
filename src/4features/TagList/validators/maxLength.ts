import { ValidatorGenerator } from "@/6shared/Utils/Validation";
import { TagListTag } from "..";

const maxLength: ValidatorGenerator<number, TagListTag[]> = (
    max,
    message = `Максимальное кол-во тегов: ${max}`
) => {
    return async (value) =>
        value.filter((tag) => tag.active).length <= max ? null : message;
};

export default maxLength;
