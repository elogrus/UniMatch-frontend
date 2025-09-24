import type { HTMLAttributes, InputHTMLAttributes } from "react";
import styles from "./styles.module.scss";
import type { TagT } from "../../types";
import { Spinner } from "@/Base/UI/Spinner";

interface TagSelectorProps extends HTMLAttributes<HTMLDivElement> {
    tags: TagT[] | null;
    propsToInput?: InputHTMLAttributes<HTMLInputElement>;
}

export const TagSelector = ({
    tags = null,
    propsToInput = {},
    className,
    ...props
}: TagSelectorProps) => {
    console.log("tags", tags);
    return (
        <div
            style={{ gridTemplateColumns: "1fr 1fr" }}
            className={styles.TagSelector + " " + className}
            {...props}
        >
            {tags ? (
                tags.map((tag) => (
                    <label key={tag.id}>
                        <input
                            type="checkbox"
                            value={tag.id}
                            {...propsToInput}
                        />
                        {tag.name}
                    </label>
                ))
            ) : (
                <Spinner size="var(--fz-h2)" center={true} />
            )}
            {tags && tags.length === 0 && <p>Тегов нет .-.</p>}
        </div>
    );
};
