import styles from "./styles.module.scss";

import { ValidationErrors } from "@/Base/ErrorMessages/ValidationErrors";
import { useFetch } from "@/Base/Hooks/useFetch";
import { MyInput } from "@/Base/UI/Inputs/MyInput";
import { Spinner } from "@/Base/UI/Spinner";
import {
    fetchLogin,
    type FetchLoginParams,
} from "@/Modules/User/Functions/fetchLogin";
import { saveToken } from "@/Modules/User/Functions/saveToken";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { Skeleton } from "../UI/Skeleton";

export const Login = () => {
    const { register, handleSubmit, formState } = useForm<FetchLoginParams>();
    const navigate = useNavigate();
    const { fetchData, error, isLoading } = useFetch({
        fetchFunc: fetchLogin,
        onSuccess: (body) => {
            saveToken(body.access);
            navigate("/matches");
        },
    });
    return (
        <Skeleton className={styles.Login}>
            <div className="form">
                <h1>Вход</h1>
                {error && <p className="error">{error}</p>}
                <MyInput
                    placeholder="Введите email"
                    {...register("email", {
                        pattern: {
                            value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
                            message: ValidationErrors.email,
                        },
                        required: ValidationErrors.required,
                    })}
                    error={formState.errors.email?.message}
                />
                <MyInput
                    placeholder="Введите пароль"
                    type="password"
                    {...register("password", {
                        required: ValidationErrors.required,
                    })}
                    error={formState.errors.password?.message}
                />
            </div>
            <div className={styles.Buttons + " buttons"}>
                <button
                    className="ButtonWhite"
                    onClick={handleSubmit(fetchData)}
                    disabled={isLoading}
                >
                    {isLoading ? (
                        <Spinner color="var(--PRIMARY_BLACK)" />
                    ) : (
                        "Войти"
                    )}
                </button>
            </div>
        </Skeleton>
    );
};
