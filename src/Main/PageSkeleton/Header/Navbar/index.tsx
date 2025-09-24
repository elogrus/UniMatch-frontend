// import type { HTMLAttributes } from 'react';
import { Link } from "react-router";
import styles from "./styles.module.scss";
import type { HTMLAttributes } from "react";
import { classname } from "@/Base/Functions/classname";

interface NavbarProps extends HTMLAttributes<HTMLDivElement> {
    className: string;
}

export const Navbar = ({ className, ...otherProps }: NavbarProps) => {
    return (
        <nav className={classname(className, styles.Navbar)} {...otherProps}>
            <Link to="#">О проекте</Link>
            <Link to="#">Правила</Link>
            <Link className={styles.BoldLink} to="/register">
                Регистрация
            </Link>
            <Link className={styles.BoldLink} to="/login">
                Вход
            </Link>
        </nav>
    );
};
