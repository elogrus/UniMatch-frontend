import { useState, type HTMLAttributes } from "react";
import { BurgerButton } from "../BurgerButton";
import styles from "./styles.module.scss";
import { classname } from "@/Base/Functions/classname";
import { Link } from "react-router";

interface BurgerNavbarProps extends HTMLAttributes<HTMLDivElement> {
    className: string;
}

export const BurgerNavbar = ({
    className,
    ...otherProps
}: BurgerNavbarProps) => {
    const [open, setOpen] = useState(false);

    return (
        <div
            className={classname(className, styles.BurgerNavbar)}
            {...otherProps}
        >
            <BurgerButton
                isActive={open}
                onClick={() => setOpen((open) => !open)}
            />
            <div className={classname(styles.Modal, { [styles.Open]: open })}>
                <BurgerButton
                    className={styles.ModalBurger}
                    isActive={open}
                    onClick={() => setOpen((open) => !open)}
                />
                <nav>
                    <Link to="#">О проекте</Link>
                    <Link to="#">Правила</Link>
                    <Link className={styles.BoldLink} to="/register">
                        Регистрация
                    </Link>
                    <Link className={styles.BoldLink} to="/login">
                        Вход
                    </Link>
                </nav>
            </div>
        </div>
    );
};
