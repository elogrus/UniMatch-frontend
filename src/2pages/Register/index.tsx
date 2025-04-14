import { HeaderModes, HeaderThemes } from "@/3widgets/Header/types";
import { Carousel, CarouselRef } from "@/4features/Carousel";
import { compareClasses as cmcl } from "@/6shared/ClassNames";
import { usePage } from "@/6shared/Hooks/usePage";
import { createRef } from "react";
import cls from "./styles.module.scss";

interface RegisterProps {
    className?: string;
}

export const Register = (props: RegisterProps) => {
    const { className, ...otherProps } = props;
    usePage(
        {
            visible: true,
            mode: HeaderModes.MINI,
            theme: HeaderThemes.LIGHT,
            position: "fixed",
        },
        { visible: false }
    );
    const ref = createRef<CarouselRef>();
    return (
        <div className={cmcl(cls.Register, {}, [className])} {...otherProps}>
            <button onClick={() => ref.current?.prev()}>назад</button>
            <Carousel ref={ref}>
                <h1>first</h1>
                <h1>second</h1>
                <h1>second</h1>
            </Carousel>
            <button
                onClick={() => {
                    ref.current?.next();
                }}
            >
                вперед
            </button>
        </div>
    );
};
