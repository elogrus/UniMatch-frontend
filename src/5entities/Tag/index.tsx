import { compareClasses as cmcl } from "@/6shared/Utils/ClassNames";
import cls from "./styles.module.scss";
import { ComponentPropsWithRef } from "react";

export interface TagProps extends ComponentPropsWithRef<"div"> {
    className?: string;
    active?: boolean;
    children: string;
}

export type TagType = {
    id: string;
    value: string;
};

export const Tag = (props: TagProps) => {
    const { className, children, active = false, ...otherProps } = props;
    return (
        <div
            className={cmcl(cls.Tag, { [cls.Active]: active }, [className])}
            {...otherProps}
        >
            {children}
        </div>
    );
};
