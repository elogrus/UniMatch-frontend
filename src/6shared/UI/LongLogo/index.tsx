import cls from "./styles.module.scss";
import { compareClasses as cmcl } from "@/6shared/ClassNames";
import Logo from "@/6shared/Assets/logo.svg";
import Unimatch from "@/6shared/Assets/unimatch.svg";

interface LongLogoProps {
    className?: string;
    theme?: "dark" | "light";
}

export const LongLogo = (props: LongLogoProps) => {
    const { className, theme = "light", ...otherProps } = props;
    return (
        <div
            className={cmcl(
                cls.LongLogo,
                {
                    [cls.LongLogoDark]: theme === "dark",
                    [cls.LongLogoLight]: theme === "light",
                },
                [className as string]
            )}
            {...otherProps}
        >
            <img src={Logo} alt="Логотип" />
            <span></span>
            <img src={Unimatch} alt="Uni match" />
        </div>
    );
};
