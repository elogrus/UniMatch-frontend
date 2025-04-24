import cls from "./styles.module.scss";
import { compareClasses as cmcl } from "@/6shared/Utils/ClassNames";
import Logo from "@/6shared/Assets/logo.svg";
import Unimatch from "@/6shared/Assets/unimatch.svg";

export enum LongLogoThemes {
    LIGHT = "LongLogoLight",
    DARK = "LongLogoDark",
}

interface LongLogoProps {
    className?: string;
    theme?: LongLogoThemes;
}

export const LongLogo = (props: LongLogoProps) => {
    const { className, theme = LongLogoThemes.LIGHT, ...otherProps } = props;
    return (
        <div className={cmcl(cls.LongLogo, {}, [cls[theme]])} {...otherProps}>
            <img src={Logo} alt="Логотип" />
            <span></span>
            <img src={Unimatch} alt="Uni match" />
        </div>
    );
};
