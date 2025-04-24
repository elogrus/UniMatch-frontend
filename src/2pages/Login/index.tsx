import { HeaderModes, HeaderThemes } from "@/3widgets/Header/types";
import { LoginFormEmail } from "@/3widgets/LoginFormEmail";
import { compareClasses as cmcl } from "@/6shared/Utils/ClassNames";
import { usePage } from "@/6shared/Hooks/usePage";
import cls from "./styles.module.scss";

interface LoginProps {
    className?: string;
}

export const Login = (props: LoginProps) => {
    const { className, ...otherProps } = props;
    usePage(
        {
            visible: true,
            mode: HeaderModes.MINI,
            theme: HeaderThemes.LIGHT,
            position: "fixed",
        },
        { visible: false }
    );
    return (
        <div
            className={cmcl(cls.Login, {}, ["no-padding", className])}
            {...otherProps}
        >
            <LoginFormEmail />
        </div>
    );
};
