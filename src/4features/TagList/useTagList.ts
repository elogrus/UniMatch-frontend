import { MouseEventHandler, useCallback, useState } from "react";
import { TagListTag } from ".";

export const useTagList = (initialTags: TagListTag[]) => {
    const [tags, setTags] = useState(initialTags);
    const handleClick: MouseEventHandler<HTMLDivElement> = useCallback((e) => {
        const tagId = (e.target as HTMLDivElement).getAttribute("data-tagid");
        setTags((prev) => {
            const mapped = prev.map((tag) => {
                if (tag.id === tagId) return { ...tag, active: !tag.active };
                return tag;
            });
            return mapped;
        });
    }, []);
    return [tags, setTags, handleClick] as const;
};
