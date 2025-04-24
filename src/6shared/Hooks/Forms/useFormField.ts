import {
    validate,
    Validator,
    ValidatorResult,
} from "@/6shared/Utils/Validation";
import { Dispatch, useCallback, useState } from "react";

export type DefaultField<T> = {
    id: string;
    value: T;
    error: ValidatorResult | false;
    hasError: (directValue?: T) => Promise<ValidatorResult>;
    setValue: Dispatch<React.SetStateAction<T>>;
};

export const useFormField = <T>(
    id: string,
    validators: Validator<T>[],
    init: T
): DefaultField<T> => {
    const [value, setValue] = useState(init);
    // false может быть только, если ни разу не производилась проверка
    const [error, setError] = useState<ValidatorResult | false>(false);

    const hasError = useCallback(
        async (directValue?: T) => {
            const result = await validate(directValue || value, validators);
            setError(result);
            return result;
        },
        [validators]
    );

    return {
        id,
        value,
        error,
        hasError,
        setValue,
    };
};
