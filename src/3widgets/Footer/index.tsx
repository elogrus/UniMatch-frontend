import cls from "./styles.module.scss";
import { compareClasses as cmcl } from "@/6shared/ClassNames";
import BigLogo from "@/6shared/Assets/bigLogo.svg";
import { Link } from "react-router";
import { selectFooterVisibile } from "./footerSlice";
import { useAppSelector } from "@/1app/store";

interface FooterProps {
    className?: string;
}

export const Footer = (props: FooterProps) => {
    const { className, ...otherProps } = props;
    const visible = useAppSelector(selectFooterVisibile);
    return (
        <div
            style={{ display: visible ? "flex" : "none" }}
            className={cmcl(cls.Footer, {}, ['no-padding'])}
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
