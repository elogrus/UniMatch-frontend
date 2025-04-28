import { Carousel, CarouselRef } from "@/4features/Carousel";
import { TagList } from "@/4features/TagList";
import { useFormTagList } from "@/4features/TagList/useFormTagListField";
import maxLength from "@/4features/TagList/validators/maxLength";
import minLength from "@/4features/TagList/validators/minLength";
import { useForm } from "@/6shared/Hooks/Forms/useForm";
import { DefaultField } from "@/6shared/Hooks/Forms/useFormField";
import { useFormTextField } from "@/6shared/Hooks/Forms/useFormTextField";
import { Button } from "@/6shared/UI/Button";
import { Input } from "@/6shared/UI/Input";
import { compareClasses as cmcl } from "@/6shared/Utils/ClassNames";
import equal from "@/6shared/Utils/Validation/validators/equal";
import regexp from "@/6shared/Utils/Validation/validators/regexp";
import required from "@/6shared/Utils/Validation/validators/required";
import { createRef } from "react";
import cls from "./styles.module.scss";
import { BadResponse, GoodResponse, register } from "./send";
import { Spinner } from "@/6shared/UI/Spinner";
import { useNavigate } from "react-router";

interface RegisterFormProps {
    className?: string;
}

export const RegisterForm = (props: RegisterFormProps) => {
    const { className, ...otherProps } = props;
    const carouselRef = createRef<CarouselRef>();
    const firstname = useFormTextField("firstname", [required()], "");
    const lastname = useFormTextField("lastname", [required()], "");
    const birth = useFormTextField("birth", [required()], "");
    const tags = useFormTagList(
        "tags",
        [minLength(3), maxLength(10)],
        [
            { id: "asd1", value: "asd1", active: false },
            { id: "asd2", value: "asd2", active: false },
            { id: "asd3", value: "asd3", active: false },
            { id: "asd4", value: "asd4", active: false },
            { id: "asd5", value: "asd5", active: false },
            { id: "asd6", value: "asd6", active: false },
            { id: "asd7", value: "asd7", active: false },
            { id: "asd8", value: "asd8", active: false },
            { id: "asd9", value: "asd9", active: false },
            { id: "asd10", value: "asd10", active: false },
            { id: "asd11", value: "asd11", active: false },
        ]
    );
    const email = useFormTextField(
        "email",
        [required(), regexp(/^\S+@\S+\.\S+$/, "Почта невалидна")],
        ""
    );
    const password = useFormTextField("password", [required()], "");
    const confirmPassword = useFormTextField(
        "confirmPassword",
        [required(), equal(password.value, "Пароли не совпадают")],
        ""
    );
    const navigate = useNavigate();
    const { isSending, handleSubmit, error } = useForm(
        [firstname, lastname, birth, tags, email, password],
        async (data) => {
            data.tags = (data.tags as typeof tags.value)
                .filter((tag) => tag.active)
                .map((tag) => tag.id);
            console.log(data);
            const response = await register(
                data.firstname,
                data.lastname,
                data.email,
                data.birth,
                data.password,
                data.tags
            );
            console.log(response);
            const body = await response.json();
            if (response.status > 399) {
                return (body as BadResponse).error;
            } else {
                localStorage.setItem("token", (body as GoodResponse).token);
                navigate("/me");
            }
            return null;
        }
    );

    const createNextPageHandler = (fields: DefaultField<any>[]) => async () => {
        const errors = await Promise.all(
            fields.map((field) => field.hasError())
        );
        const isPageValid = errors.every((error) => error === null);
        if (isPageValid) carouselRef.current?.next();
    };

    return (
        <div
            className={cmcl(cls.RegisterForm, {}, [className as string])}
            {...otherProps}
        >
            <h1>Регистрация</h1>
            {error && <h3>{error}</h3>}
            <Carousel ref={carouselRef}>
                <div className={cls.Block}>
                    <p key="greetings">
                        Давайте знакомиться! Заполни немного информации о себе
                    </p>
                    <Input
                        placeholder="Имя"
                        isBad={!!firstname.error}
                        label={firstname.error}
                        value={firstname.value}
                        onChange={firstname.handleChange}
                        onBlur={firstname.handleBlur}
                    />
                    <Input
                        placeholder="Фамилия"
                        isBad={!!lastname.error}
                        label={lastname.error}
                        value={lastname.value}
                        onChange={lastname.handleChange}
                        onBlur={lastname.handleBlur}
                    />
                    <Input
                        type="date"
                        placeholder="Дата рождения"
                        isBad={!!birth.error}
                        label={birth.error}
                        value={birth.value}
                        onChange={birth.handleChange}
                        onBlur={birth.handleBlur}
                    />
                    <Button.Default
                        className={cls.Button}
                        onClick={createNextPageHandler([
                            firstname,
                            lastname,
                            birth,
                        ])}
                    >
                        Далее
                    </Button.Default>
                </div>
                <div className={cls.Block}>
                    <p key="wantToKnowMore">
                        Хотим знать о вас больше! Выберите то, что вам
                        действительно нравится
                    </p>
                    <p key="countTags" className={cls.Dark}>
                        от 3 до 10 тегов
                    </p>
                    <TagList
                        className={cls.TagList}
                        tags={tags.value}
                        handleClick={tags.handleClick}
                    />
                    <Button.Default
                        className={cls.Button}
                        disabled={!!tags.error}
                        onClick={createNextPageHandler([tags])}
                    >
                        Далее
                    </Button.Default>
                </div>

                <div className={cls.Block}>
                    <p>Осталось совсем немного</p>
                    <Input
                        placeholder="Email"
                        isBad={!!email.error}
                        label={email.error}
                        value={email.value}
                        onChange={email.handleChange}
                        onBlur={email.handleBlur}
                    />
                    <Input
                        placeholder="Пароль"
                        type="password"
                        isBad={!!password.error}
                        label={password.error}
                        value={password.value}
                        onChange={password.handleChange}
                        onBlur={password.handleBlur}
                    />
                    <Input
                        placeholder="Повтор пароля"
                        type="password"
                        isBad={!!confirmPassword.error}
                        label={confirmPassword.error}
                        value={confirmPassword.value}
                        onChange={confirmPassword.handleChange}
                        onBlur={confirmPassword.handleBlur}
                    />

                    <Button.Default
                        className={cls.Button}
                        onClick={handleSubmit}
                    >
                        {isSending ? (
                            <Spinner className={cls.Spinner} />
                        ) : (
                            "Зарегистрироваться"
                        )}
                    </Button.Default>
                </div>
            </Carousel>
        </div>
    );
};
