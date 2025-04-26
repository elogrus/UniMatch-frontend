import { compareClasses as cmcl } from "@/6shared/Utils/ClassNames";
import { Button, ButtonThemes } from "@/6shared/UI/Button";
import { Input } from "@/6shared/UI/Input";
import { Spinner } from "@/6shared/UI/Spinner";
import { DetailedHTMLProps, FormHTMLAttributes, useState } from "react";
import cls from "./styles.module.scss";
import { useFormTextField } from "@/6shared/Hooks/Forms/useFormTextField";
import regexp from "@/6shared/Utils/Validation/validators/regexp";
import required from "@/6shared/Utils/Validation/validators/required";
import { useForm } from "@/6shared/Hooks/Forms/useForm";

export interface FormData {
    email: string;
    password: string;
}

interface LoginFormEmailProps {
    className?: string;
}

// TODO: redesign with useForm
export const LoginFormEmail = (props: LoginFormEmailProps) => {
    const { className, ...otherProps } = props;
    const email = useFormTextField(
        "email",
        [required(), regexp(/^\S+@\S+\.\S+$/, "Почта невалидна")],
        ""
    );
    const password = useFormTextField("password", [required()], "");
    const { isSending, handleSubmit } = useForm([email, password], (data) => {
        console.log(data);
        alert("типа данные отправились юху");
    });
    return (
        <div
            className={cmcl(cls.LoginFormEmail, {}, [className])}
            style={{
                alignItems: isSending ? "center" : "flex-start",
            }}
            {...otherProps}
        >
            {isSending ? (
                <Spinner />
            ) : (
                <>
                    <h1>Вход</h1>
                    <Input
                        placeholder="Введите email"
                        isBad={!!email.error}
                        label={email.error}
                        value={email.value}
                        onChange={email.handleChange}
                        onBlur={email.handleBlur}
                    />
                    <Input
                        type="password"
                        placeholder="Введите пароль"
                        isBad={!!password.error}
                        label={password.error}
                        value={password.value}
                        onChange={password.handleChange}
                        onBlur={password.handleBlur}
                    />
                    <div>
                        <Button.Default
                            type="submit"
                            onClick={handleSubmit}
                            theme={ButtonThemes.WHITE}
                        >
                            Войти
                        </Button.Default>
                    </div>
                </>
            )}
        </div>
    );
};
