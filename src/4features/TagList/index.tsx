import { Tag, TagType } from "@/5entities/Tag";
import { compareClasses as cmcl } from "@/6shared/Utils/ClassNames";
import { ComponentPropsWithRef, MouseEventHandler } from "react";
import cls from "./styles.module.scss";

export interface TagListTag extends TagType {
    active: boolean;
}

interface TagListProps extends ComponentPropsWithRef<"div"> {
    className?: string;
    tags: TagListTag[];
    handleClick?: MouseEventHandler<HTMLDivElement>;
}

export const TagList = (props: TagListProps) => {
    const { className, tags, handleClick = () => {}, ...otherProps } = props;
    return (
        <div className={cmcl(cls.TagList, {}, [className])} {...otherProps}>
            <div className={cls.Container} onClick={handleClick}>
                {tags.map((tag) => (
                    <Tag
                        active={tag.active}
                        className={cmcl(cls.Tag, {
                            [cls.TagClickable]: !!handleClick,
                        })}
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
