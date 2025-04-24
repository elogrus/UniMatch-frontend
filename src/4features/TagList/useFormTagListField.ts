import { DefaultField, useFormField } from "@/6shared/Hooks/Forms/useFormField";
import { Validator } from "@/6shared/Utils/Validation";
import { MouseEventHandler, useCallback } from "react";
import { TagListTag } from ".";

export type TagListField = DefaultField<TagListTag[]> & {
    handleClick: MouseEventHandler<HTMLDivElement>;
};

export const useFormTagList = (
    id: string,
    validators: Validator<TagListTag[]>[],
    init: TagListTag[]
): TagListField => {
    const { value, error, hasError, setValue } = useFormField<TagListTag[]>(
        id,
        validators,
        init
    );

    const handleClick: MouseEventHandler<HTMLDivElement> = useCallback(
        (e) => {
            const tagId = (e.target as HTMLDivElement).getAttribute(
                "data-tagid"
            );
            setValue((prev) => {
                const mapped = prev.map((tag) => {
                    if (tag.id === tagId)
                        return { ...tag, active: !tag.active };
                    return tag;
                });
                hasError(mapped)
                return mapped;
            });
            
        },
        [validators]
    );

    return {
        id,
        value,
        error,
        hasError,
        setValue,
        handleClick,
    };
};
