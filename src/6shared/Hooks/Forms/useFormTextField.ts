import { Validator } from "@/6shared/Utils/Validation";
import { ChangeEvent, useCallback } from "react";
import { DefaultField, useFormField } from "./useFormField";

export type TextField = DefaultField<string> & {
    handleChange: (
        event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
    ) => void;
    handleBlur: () => void;
};

export const useFormTextField = (
    id: string,
    validators: Validator<string>[],
    init: string
): TextField => {
    const { value, error, hasError, setValue } = useFormField(
        id,
        validators,
        init
    );

    const handleChange = useCallback(
        (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
            setValue(e.target.value);
        },
        [validators]
    );

    const handleBlur = useCallback(async () => {
        await hasError();
    }, [hasError]);

    return {
        id,
        value,
        error,
        hasError,
        setValue,
        handleChange,
        handleBlur,
    };
};
