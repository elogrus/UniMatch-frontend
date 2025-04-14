import { compareClasses as cmcl } from "@/6shared/ClassNames";
import { Link } from "react-router";
import cls from "./styles.module.scss";
import { LongLogo, LongLogoThemes } from "@/6shared/UI/LongLogo";
import { useAppSelector } from "@/1app/store";
import {
    selectHeaderMode,
    selectHeaderTheme,
    selectHeaderVisibile,
} from "./headerSlice";
import { HeaderModes, HeaderThemes } from "./types";

interface HeaderProps {
    className?: string;
}

export const Header = (props: HeaderProps) => {
    const { className, ...otherProps } = props;
    const visible = useAppSelector(selectHeaderVisibile);
    const mode = useAppSelector(selectHeaderMode);
    const theme = useAppSelector(selectHeaderTheme);
    return (
        <div
            style={{ display: visible ? "flex" : "none" }}
            className={cmcl(
                cls.Header,
                {
                    [cls.HeaderDark]: theme === HeaderThemes.DARK,
                    [cls.HeaderLight]: theme === HeaderThemes.LIGHT,
                },
                [className as string]
            )}
            {...otherProps}
        >
            <LongLogo
                theme={
                    theme === HeaderThemes.DARK
                        ? LongLogoThemes.DARK
                        : LongLogoThemes.LIGHT
                }
            />
            <nav
                className={cls.Navbar}
                style={{
                    visibility:
                        mode === HeaderModes.FULL ? "visible" : "hidden",
                }}
            >
                <Link to="about">О проекте</Link>
                <Link to="..">Правила</Link>
                <Link to="">Регистрация</Link>
                <Link to="login">Вход</Link>
            </nav>
        </div>
    );
};
