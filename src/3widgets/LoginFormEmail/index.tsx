import { compareClasses as cmcl } from "@/6shared/ClassNames";
import { Button, ButtonThemes } from "@/6shared/UI/Button";
import { Input } from "@/6shared/UI/Input";
import { Spinner } from "@/6shared/UI/Spinner";
import { DetailedHTMLProps, FormHTMLAttributes, useState } from "react";
import cls from "./styles.module.scss";

export interface FormData {
    email: string;
    password: string;
}

interface LoginFormEmailProps
    extends DetailedHTMLProps<
        FormHTMLAttributes<HTMLFormElement>,
        HTMLFormElement
    > {
    className?: string;
}

export const LoginFormEmail = (props: LoginFormEmailProps) => {
    const {
        className,
        onSubmit = () => {
            return new Promise((resolve, reject) => {
                setTimeout(() => resolve("hehehe"), 2000);
            });
        },
        ...otherProps
    } = props;
    const [isLoading, setIsLoading] = useState(false);
    const onFormSumbit: typeof onSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        await onSubmit(e);
        setIsLoading(false);
    };
    return (
        <form
            className={cmcl(cls.LoginFormEmail, {}, [className])}
            onSubmit={onFormSumbit}
            style={{
                alignItems: isLoading ? "center" : "flex-start",
            }}
            {...otherProps}
        >
            {isLoading ? (
                <Spinner />
            ) : (
                <>
                    <h1>Вход</h1>
                    <Input
                        onInvalid={() => console.log("working!")}
                        type="email"
                        placeholder="Введите email"
                        name="email"
                        required
                    />
                    <Input
                        onInvalid={(e) =>
                            e.currentTarget.setCustomValidity(
                                "Пароль должен состоять из букв и цифр"
                            )
                        }
                        pattern="[\d\w]+"
                        type="password"
                        placeholder="Введите пароль"
                    />
                    <div>
                        <Button.Default
                            type="submit"
                            theme={ButtonThemes.WHITE}
                        >
                            Войти
                        </Button.Default>
                        <Button.Link to="" theme={ButtonThemes.GRAY}>
                            Войти через телеграм
                        </Button.Link>
                    </div>
                </>
            )}
        </form>
    );
};
