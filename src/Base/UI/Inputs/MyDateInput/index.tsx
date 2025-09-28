import { classname } from "@/Base/Functions/classname";
import defaultStyles from "../default.module.scss";
import styles from "./styles.module.scss";

import { useState, type InputHTMLAttributes } from "react";

interface MyDateInputProps extends InputHTMLAttributes<HTMLInputElement> {
    error?: string;
    type?: "date" | "datetime-local" | "month" | "time" | "week";
}

// required стоит для нормальной работы цветов дейтпикеров (type="date")
// без атрибута начальное значение дд.мм.гггг имеет неправильный цвет
export const MyDateInput = ({
    error,
    className,
    type = "date",
    placeholder,
    defaultValue="",
    onChange = () => {},
    onClick = () => {},
    ...props
}: MyDateInputProps) => {
    const [value, setValue] = useState(defaultValue);
    return (
        <label
            className={classname(
                defaultStyles.MyInput,
                "input",
                styles.MyDateInput,
                className
            )}
        >
            {error && <span className={defaultStyles.Error}>{error}</span>}
            <div className={styles.FakeInput + " " + defaultStyles.Input}>
                {value ? (
                    <span className={styles.Value}>{value}</span>
                ) : (
                    <span className={styles.Placeholder}>{placeholder}</span>
                )}
            </div>
            <input
                value={value}
                onChange={(e) => {
                    setValue(e.target.value);
                    onChange(e);
                }}
                onClick={(e) => {
                    e.currentTarget.showPicker();
                    onClick(e);
                }}
                type={type}
                {...props}
            />
        </label>
    );
};
