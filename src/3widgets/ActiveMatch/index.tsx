import { Button, ButtonThemes } from "@/6shared/UI/Button";
import cls from "./styles.module.scss";
import { compareClasses as cmcl } from "@/6shared/Utils/ClassNames";
import { TagRowList } from "@/4features/TagRowList";

interface ActiveMatchProps {
    className?: string;
}

export const ActiveMatch = (props: ActiveMatchProps) => {
    const { className, ...otherProps } = props;
    return (
        <div
            className={cmcl(cls.ActiveMatch, {}, [className as string])}
            {...otherProps}
        >
            <div className={cls.Top}>
                <img src="https://i.pinimg.com/originals/47/9d/d7/479dd76f0e3e65ecf0c2120d54bc9a27.jpg" />
                <h3>Бздашек Западловский</h3>
            </div>
            <div className={cls.Tags}>
                <TagRowList
                    tags={[
                        { id: "1", value: "asd1" },
                        { id: "2", value: "asd2" },
                        { id: "3", value: "asd3" },
                        { id: "4", value: "asd4" },
                        { id: "5", value: "asd5" },
                        { id: "6", value: "asd6" },
                        { id: "7", value: "asd7" },
                        { id: "8", value: "asd8" },
                    ]}
                />
            </div>
            <Button.Default
                className={cls.Button}
                theme={ButtonThemes.BLACK_TRANSPARENT}
            >
                Общаться →
            </Button.Default>
        </div>
    );
};
