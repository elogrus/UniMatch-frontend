import { Tag, TagThemes, TagType } from "@/5entities/Tag";
import cls from "./styles.module.scss";
import { compareClasses as cmcl } from "@/6shared/Utils/ClassNames";

interface TagRowListProps {
    className?: string;
    tags: TagType[];
}

export const TagRowList = (props: TagRowListProps) => {
    const { className, tags, ...otherProps } = props;
    return (
        <div
            className={cmcl(cls.TagRowList, {}, [className as string])}
            {...otherProps}
        >
            {tags.map((tag, index) => {
                if (index > 4) return;
                return (
                    <Tag key={tag.id} theme={TagThemes.BLACK}>
                        {tag.value}
                    </Tag>
                );
            })}
            {tags.length > 5 && (
                <span className={cls.AndXMore}>и еще {tags.length - 5}...</span>
            )}
        </div>
    );
};
