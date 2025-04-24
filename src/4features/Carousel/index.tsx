import { compareClasses as cmcl } from "@/6shared/Utils/ClassNames";
import {
    HTMLAttributes,
    ReactNode,
    Ref,
    useImperativeHandle,
    useState,
} from "react";
import cls from "./styles.module.scss";

export interface CarouselRef {
    getPosition: () => number;
    prev: () => void;
    next: () => void;
}

interface CarouselProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children: ReactNode[];
    ref?: Ref<CarouselRef>;
    onOverflowLeft?: (pos: number) => void;
    onOverflowRight?: (pos: number) => void;
}

export const Carousel = (props: CarouselProps) => {
    const {
        className,
        children,
        onOverflowLeft = () => {
            console.log("left");
        },
        onOverflowRight = () => {
            console.log("right");
        },
        ref,
        ...otherProps
    } = props;
    const [position, setPosition] = useState(0);
    const prev = () => {
        setPosition((pos) => {
            if (pos !== 0) return pos - 1;
            onOverflowLeft(pos);
            return pos;
        });
    };
    const next = () => {
        setPosition((pos) => {
            if (pos !== children.length - 1) return pos + 1;
            onOverflowRight(pos);
            return pos;
        });
    };

    useImperativeHandle(
        ref,
        () => ({
            getPosition: () => position,
            prev,
            next,
        }),
        [position]
    );

    return (
        <div className={cmcl(cls.Carousel, {}, [className])} {...otherProps}>
            <div className={cls.Indicator}>
                {children.map((elem, index) => (
                    <span
                        key={index}
                        style={{
                            backgroundSize:
                                index > position ? "0 100%" : "100% 100%",
                        }}
                    ></span>
                ))}
            </div>
            <div style={{ left: `-${position * 100}%` }} className={cls.Bend}>
                {children}
            </div>
        </div>
    );
};
