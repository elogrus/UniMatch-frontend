import { HeaderModes, HeaderThemes } from "@/3widgets/Header/types";
import { RegisterForm } from "@/3widgets/RegisterForm";
import { compareClasses as cmcl } from "@/6shared/Utils/ClassNames";
import { usePage } from "@/6shared/Hooks/usePage";
import cls from "./styles.module.scss";

interface RegisterProps {
    className?: string;
}

export const Register = (props: RegisterProps) => {
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
        <div className={cmcl(cls.Register, {}, [className])} {...otherProps}>
            <RegisterForm />
        </div>
    );
};
