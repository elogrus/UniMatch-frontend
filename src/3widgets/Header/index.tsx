import { useAppSelector } from "@/1app/store";
import { compareClasses as cmcl } from "@/6shared/ClassNames";
import { LongLogo, LongLogoThemes } from "@/6shared/UI/LongLogo";
import { Link } from "react-router";
import { selectHeader } from "./headerSlice";
import cls from "./styles.module.scss";
import { HeaderModes, HeaderThemes } from "./types";

interface HeaderProps {
    className?: string;
}

export const Header = (props: HeaderProps) => {
    const { className, ...otherProps } = props;

    const headerState = useAppSelector(selectHeader);

    return (
        <div
            style={{
                display: headerState.visible ? "flex" : "none",
                position: headerState.position,
            }}
            className={cmcl(
                cls.Header,
                {
                    [cls.HeaderDark]: headerState.theme === HeaderThemes.DARK,
                    [cls.HeaderLight]: headerState.theme === HeaderThemes.LIGHT,
                },
                ["no-padding", className]
            )}
            {...otherProps}
        >
            <LongLogo
                theme={
                    headerState.theme === HeaderThemes.DARK
                        ? LongLogoThemes.DARK
                        : LongLogoThemes.LIGHT
                }
            />
            <nav
                className={cls.Navbar}
                style={{
                    visibility:
                        headerState.mode === HeaderModes.FULL
                            ? "visible"
                            : "hidden",
                }}
            >
                <Link to="about">О проекте</Link>
                <Link to="..">Правила</Link>
                <Link to="register">Регистрация</Link>
                <Link to="login">Вход</Link>
            </nav>
        </div>
    );
};
