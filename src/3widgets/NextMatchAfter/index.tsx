import { compareClasses as cmcl } from "@/6shared/Utils/ClassNames";
import cls from "./styles.module.scss";

interface NextMatchAfterProps {
    className?: string;
}

export const NextMatchAfter = (props: NextMatchAfterProps) => {
    const { className, ...otherProps } = props;
    return (
        <div
            className={cmcl(cls.NextMatchAfter, {}, [className as string])}
            {...otherProps}
        >
            <span>Через 4 дня</span>
        </div>
    );
};
