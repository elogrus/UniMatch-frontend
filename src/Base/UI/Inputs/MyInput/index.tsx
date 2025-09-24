import styles from "../default.module.scss";

import type { InputHTMLAttributes } from "react";

interface MyInputProps extends InputHTMLAttributes<HTMLInputElement> {
    error?: string;
    type?: Exclude<
        InputHTMLAttributes<HTMLInputElement>["type"],
        "checkbox" | "date" | "datetime-local" | "month" | "time" | "week"
    >;
}

export const MyInput = ({ error, className, ...props }: MyInputProps) => {
    return (
        <label className={styles.MyInput + " input " + className}>
            {error && <span className={styles.Error}>{error}</span>}
            <input {...props} />
        </label>
    );
};
