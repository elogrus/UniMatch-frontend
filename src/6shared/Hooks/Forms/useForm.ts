import { useState } from "react";
import { DefaultField } from "./useFormField";

export const useForm = (
    fields: DefaultField<any>[],
    onSubmit: (data: Record<(typeof fields)[number]["id"], any>) => void
) => {
    const [isSending, setIsSending] = useState(false);
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
            await onSubmit(data);
            setIsSending(false);
        }
    };

    return {
        isSending,
        handleSubmit,
    };
};
