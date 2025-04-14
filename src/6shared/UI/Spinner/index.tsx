import cls from './styles.module.scss';
import { compareClasses as cmcl } from '@/6shared/ClassNames';

interface SpinnerProps {
    className?: string;
}

export const Spinner = (props: SpinnerProps) => {
    const { className, ...otherProps } = props;
    return (
        <span className={cmcl(cls.Spinner, {}, [className])} {...otherProps}></span>
    );
};
