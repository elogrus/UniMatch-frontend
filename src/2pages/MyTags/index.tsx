import { HeaderModes, HeaderThemes } from "@/3widgets/Header/types";
import { usePage } from "@/6shared/Hooks/usePage";
import { compareClasses as cmcl } from "@/6shared/Utils/ClassNames";
import cls from "./styles.module.scss";
import { Button, ButtonThemes } from "@/6shared/UI/Button";
import { TagList } from "@/4features/TagList";

interface MeProps {
    className?: string;
}

export const MyTags = (props: MeProps) => {
    const { className, ...otherProps } = props;
    usePage(
        {
            visible: true,
            mode: HeaderModes.FULL,
            theme: HeaderThemes.DARK,
            position: "sticky",
        },
        { visible: true }
    );
    return (
        <div className={cmcl(cls.MyTags, {}, [className])} {...otherProps}>
            <h2>Твои теги</h2>
            <div className={cls.Blocks}>
                <div className={cls.Block}>
                    <TagList className={cls.TagList} tags={[{
                        id: 'asd',
                        active: false,
                        value: 'asd'
                    },{
                        id: 'asd2',
                        active: false,
                        value: 'asd'
                    },{
                        id: 'asd3',
                        active: false,
                        value: 'asd'
                    }]} />
                    <Button.Default theme={ButtonThemes.WHITE}>
                        Сохранить
                    </Button.Default>
                </div>
                <div className={cls.Block}>
                    <div>
                        <h2>Нет подходящего тэга?</h2>
                        <p>
                            Оставь заявку, мы рассмотрим и возможно добавим
                            новые!
                        </p>
                    </div>
                    <Button.Link to="" theme={ButtonThemes.GRAY}>
                        Оставить заявку
                    </Button.Link>
                </div>
            </div>
        </div>
    );
};
