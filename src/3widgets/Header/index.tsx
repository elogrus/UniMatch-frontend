import cls from "./styles.module.scss";
import { compareClasses as cmcl } from "@/6shared/ClassNames";
import Logo from "@/6shared/Assets/logo.svg";
import Unimatch from "@/6shared/Assets/unimatch.svg";
import { Link, Outlet } from "react-router";

interface HeaderProps {
    className?: string;
}

export const Header = (props: HeaderProps) => {
    const { className, ...otherProps } = props;
    return (
        <>
            <div
                className={cmcl(cls.Header, {}, [className as string])}
                {...otherProps}
            >
                <div className={cls.LogoWrapper}>
                    <img src={Logo} alt="Логотип" />
                    <span></span>
                    <img src={Unimatch} alt="Uni match" />
                </div>
                <nav className={cls.Navbar}>
                    <Link to="">О проекте</Link>
                    <Link to="">Правила</Link>
                    <Link to="">Регистрация</Link>
                    <Link to="">Вход</Link>
                </nav>
            </div>
            <Outlet />
        </>
    );
};
