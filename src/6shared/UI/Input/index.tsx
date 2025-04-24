import { compareClasses as cmcl } from "@/6shared/Utils/ClassNames";
import { ComponentPropsWithRef } from "react";
import cls from "./styles.module.scss";

export interface InputProps extends ComponentPropsWithRef<"input"> {
    label?: string | null | false;
    labelProps?: ComponentPropsWithRef<"label">;
    isBad?: boolean;
}

export const Input = (props: InputProps) => {
    const {
        className,
        label = "",
        labelProps = {},
        isBad = false,
        ...otherProps
    } = props;
    return (
        <label className={cls.Label} {...labelProps}>
            {label && <span>{label}</span>}
            <input
                className={cmcl(cls.Input, { [cls.InputBad]: isBad }, [
                    className,
                ])}
                {...otherProps}
            />
        </label>
    );
};
