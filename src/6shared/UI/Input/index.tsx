import { compareClasses as cmcl } from "@/6shared/ClassNames";
import { InputHTMLAttributes } from "react";
import cls from "./styles.module.scss";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input = (props: InputProps) => {
    const { className, ...otherProps } = props;
    return (
        <input
            className={cmcl(cls.Input, {}, [className])}
            {...otherProps}
        />
    );
};
