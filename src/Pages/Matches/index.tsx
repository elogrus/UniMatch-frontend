import { NextMatch } from "@/Modules/Match/Widgets/NextMatch";
import styles from "./styles.module.scss";

import { CurrentMatch } from "@/Modules/Match/Widgets/CurrentMatch";
import { MatchesHistory } from "@/Modules/Match/Widgets/MatchesHistory";

export const Matches = () => {
    return (
        <div className={styles.Matches}>
            <div className={styles.Top}>
                <CurrentMatch />
                <NextMatch />
            </div>
            <MatchesHistory />
        </div>
    );
};
