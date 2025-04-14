import { compareClasses as cmcl } from "@/6shared/ClassNames";
import { ButtonHTMLAttributes } from "react";
import { LinkProps, Link as RLink } from "react-router";
import cls from "./styles.module.scss";

export enum ButtonThemes {
    WHITE = "ButtonWhite",
    GRAY = "ButtonGray",
    GRAY_TRANSPARENT = "ButtonGrayTransparent",
    BLACK_TRANSPARENT = "ButtonBlackTransparent",
}

interface DefaultButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    theme?: ButtonThemes;
}

const Default = (props: DefaultButtonProps) => {
    const {
        className,
        theme = ButtonThemes.WHITE,
        children,
        ...otherProps
    } = props;
    return (
        <button
            className={cmcl(cls.Button, {}, [className + " " + cls[theme]])}
            {...otherProps}
        >
            {children}
        </button>
    );
};

interface LinkButtonProps extends LinkProps {
    theme?: ButtonThemes;
}

const Link = (props: LinkButtonProps) => {
    const {
        className,
        theme = ButtonThemes.WHITE,
        children,
        ...otherProps
    } = props;
    return (
        <RLink
            className={cmcl(cls.Button, {}, [className + " " + cls[theme]])}
            {...otherProps}
        >
            {children}
        </RLink>
    );
};

export const Button = { Default, Link };
