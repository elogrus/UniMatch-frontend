import cls from "./styles.module.scss";
import { compareClasses as cmcl } from "@/6shared/ClassNames";
import BigLogo from "@/6shared/Assets/bigLogo.svg";
import { Link } from "react-router";

interface FooterProps {
    className?: string;
}

export const Footer = (props: FooterProps) => {
    const { className, ...otherProps } = props;
    return (
        <div
            className={cmcl(cls.Footer, {}, [className as string])}
            {...otherProps}
        >
            <img src={BigLogo} alt="UniMatch" />
            <div className={cls.LinksContainer}>
                <div>
                    <Link to="">О проекте</Link>
                    <Link to="">F.A.Q.</Link>
                    <Link to="">Правила</Link>
                    <Link to="">Политика конфиденциальности</Link>
                </div>
                <div>
                    <Link to="">Telegram бот</Link>
                    <span></span>
                    <Link to="">Поддержка</Link>
                    <Link to="">Для разработчиков</Link>
                </div>
            </div>
        </div>
    );
};
