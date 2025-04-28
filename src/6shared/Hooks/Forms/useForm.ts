import { useState } from "react";
import { DefaultField } from "./useFormField";

export const useForm = (
    fields: DefaultField<any>[],
    onSubmit: (
        data: Record<(typeof fields)[number]["id"], any>
    ) => Promise<string | null>
) => {
    const [isSending, setIsSending] = useState(false);
    const [error, setError] = useState<string | null>();
    const handleSubmit = async () => {
        const errors = await Promise.all(
            fields.map((field) => field.hasError())
        );
        const isFormValid = errors.every((error) => error === null);

        if (isFormValid) {
            const data = {} as Record<(typeof fields)[number]["id"], any>;
            fields.forEach((field) => {
                data[field.id] = field.value;
            });
            setIsSending(true);
            const responseError = await onSubmit(data);
            if (responseError !== null) setError(responseError);
            setIsSending(false);
        }
    };

    return {
        isSending,
        handleSubmit,
        error,
    };
};
