// import type { HTMLAttributes } from 'react';
import { Link } from "react-router";
import styles from "./styles.module.scss";
import type { HTMLAttributes } from "react";
import { classname } from "@/Base/Functions/classname";
import type { UserT } from "@/Modules/User/types";
import { ROUTES } from "@/Main/App/MyRouter";

interface NavbarProps extends HTMLAttributes<HTMLDivElement> {
    className: string;
    user: UserT | null;
}

export const Navbar = ({ className, user, ...otherProps }: NavbarProps) => {
    return (
        <nav className={classname(className, styles.Navbar)} {...otherProps}>
            {user ? (
                <>
                    <Link to={ROUTES.MATCHES}>Мои мэтчи</Link>
                    <Link to={ROUTES.SETTINGS}>Редактировать профиль</Link>
                </>
            ) : (
                <>
                    <Link to="#">О проекте</Link>
                    <Link to="#">Правила</Link>
                    <Link className={styles.BoldLink} to={ROUTES.REGISTER}>
                        Регистрация
                    </Link>
                    <Link className={styles.BoldLink} to={ROUTES.LOGIN}>
                        Вход
                    </Link>
                </>
            )}
        </nav>
    );
};
