import { Tag, TagType } from "@/5entities/Tag";
import { compareClasses as cmcl } from "@/6shared/Utils/ClassNames";
import { ComponentPropsWithRef, MouseEventHandler } from "react";
import cls from "./styles.module.scss";

export interface TagListTag extends TagType {
    active: boolean;
}

export enum ContainerShadowColor {
    BLACK = "ContainerBlack",
    GRAY = "ContainerGray",
}

interface TagListProps extends ComponentPropsWithRef<"div"> {
    className?: string;
    tagClassName?: string;
    tags: TagListTag[];
    columns?: 2 | 3;
    containerShadowColor?: ContainerShadowColor;
    handleClick?: MouseEventHandler<HTMLDivElement>;
}

export const TagList = (props: TagListProps) => {
    const {
        className,
        tagClassName = "",
        columns = 2,
        tags,
        containerShadowColor = ContainerShadowColor.BLACK,
        handleClick = () => {},
        ...otherProps
    } = props;
    return (
        <div className={cmcl(cls.TagList, {}, [className])} {...otherProps}>
            <div
                className={cls.Container + " " + cls[containerShadowColor]}
                onClick={handleClick}
            >
                {tags.map((tag) => (
                    <Tag
                        active={tag.active}
                        className={cmcl(
                            cls["Tag" + columns],
                            {
                                [cls.TagClickable]: !!handleClick,
                            },
                            [tagClassName]
                        )}
                        key={tag.id}
                        data-tagid={tag.id}
                    >
                        {tag.value}
                    </Tag>
                ))}
            </div>
        </div>
    );
};
