import cls from "./styles.module.scss";
import { compareClasses as cmcl } from "@/6shared/ClassNames";
import { FormElement } from "./types";

interface FormProps {
    className?: string;
    elements: FormElement[];
}

export const Form = (props: FormProps) => {
    const { className, ...otherProps } = props;
    return (
        <form
            className={cmcl(cls.Form, {}, [className])}
            {...otherProps}
        >
            
        </form>
    );
};
