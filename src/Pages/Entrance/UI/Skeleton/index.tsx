import styles from "./styles.module.scss";

import LogoText from "@/Base/Assets/LogoTextWhite.svg";
import { type HTMLProps } from "react";

export const Skeleton = ({ className, ...props }: HTMLProps<HTMLDivElement>) => {
    return (
        <div className={styles.Skeleton + " " + className} {...props}>
            <header className={styles.Header}>
                <img className={styles.Logo} src={LogoText} />
            </header>
            <div className={styles.Modal}>{props.children}</div>
        </div>
    );
};
