import { compareClasses as cmcl } from "@/6shared/Utils/ClassNames";
import cls from "./styles.module.scss";
import { ComponentPropsWithRef } from "react";

export enum TagThemes {
    GRAY = "TagGray",
    BLACK = "TagBlack",
}

export interface TagProps extends ComponentPropsWithRef<"div"> {
    className?: string;
    active?: boolean;
    children: string;
    theme?: TagThemes;
}

export type TagType = {
    id: string;
    value: string;
};

export const Tag = (props: TagProps) => {
    const {
        className,
        children,
        theme = TagThemes.GRAY,
        active = false,
        ...otherProps
    } = props;
    return (
        <div
            className={cmcl(cls.Tag, { [cls.Active]: active }, [
                className + " " + cls[theme],
            ])}
            {...otherProps}
        >
            {children}
        </div>
    );
};
