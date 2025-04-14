import { ButtonHTMLAttributes } from "react";
import cls from "./styles.module.scss";
import { compareClasses as cmcl } from "@/6shared/ClassNames";

export enum ButtonThemes {
    WHITE = "ButtonWhite",
    GRAY = "ButtonGray",
    GRAY_TRANSPARENT = "ButtonGrayTransparent",
    BLACK_TRANSPARENT = "ButtonBlackTransparent",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    theme?: ButtonThemes;
}

export const Button = (props: ButtonProps) => {
    const { className, theme = ButtonThemes.WHITE, ...otherProps } = props;
    return (
        <button
            className={cmcl(cls.Button, {}, [cls[theme]])}
            {...otherProps}
        >
            hello
        </button>
    );
};
