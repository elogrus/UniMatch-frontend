import { HeaderModes, HeaderThemes } from "@/3widgets/Header/types";
import { compareClasses as cmcl } from "@/6shared/ClassNames";
import { usePage } from "@/6shared/Hooks/usePage";
import cls from "./styles.module.scss";
import { Input } from "@/6shared/UI/Input";
import { useState } from "react";
import { Button, ButtonThemes } from "@/6shared/UI/Button";

interface LoginProps {
    className?: string;
}

export const Login = (props: LoginProps) => {
    const { className, ...otherProps } = props;
    usePage(
        { visible: true, mode: HeaderModes.MINI, theme: HeaderThemes.LIGHT },
        { visible: false }
    );
    const form = useState({
        email: "",
        password: "",
    });
    return (
        <div
            className={cmcl(cls.Login, {}, [className as string])}
            {...otherProps}
        >
            <Input type="email" placeholder="Введите email" />
            <Input placeholder="Введите пароль" />
            <Button theme={ButtonThemes.BLACK_TRANSPARENT}>asd</Button>
        </div>
    );
};
