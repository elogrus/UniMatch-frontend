import { Link } from "react-router";
import styles from "./styles.module.scss";

import BigLogo from "@/Base/Assets/BigLogo.svg";

export const Footer = () => {
    return (
        <footer className={styles.Footer}>
            <img className={styles.Logo} src={BigLogo} />
            <div className={styles.Right}>
                <Link to="#">О проекте</Link>
                <Link to="#">F.A.Q.</Link>
                <Link to="#">Правила</Link>
                <Link to="#">Политика конфидециальности</Link>
                <Link to="#">Telegram бот</Link>
                <Link to="#">Поддержка</Link>
                <Link to="#">Для разработчиков</Link>
            </div>
        </footer>
    );
};
