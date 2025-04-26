import { compareClasses as cmcl } from "@/6shared/Utils/ClassNames";
import cls from "./styles.module.scss";
import { MatchType } from "@/5entities/Match/types";

interface HistoryMatchesProps {
    className?: string;
    matches: MatchType[];
}

export const HistoryMatches = (props: HistoryMatchesProps) => {
    const { className, matches, ...otherProps } = props;
    return (
        <div
            className={cmcl(cls.HistoryMatches, {}, [className as string])}
            {...otherProps}
        >
            {matches.map((match, index) => {
                if (index > 2) return;
                return (
                    <div key={match.id} className={cls.Match}>
                        <div className={cls.Name}>
                            <img src="https://i.pinimg.com/originals/47/9d/d7/479dd76f0e3e65ecf0c2120d54bc9a27.jpg" />
                            <p>{match.name}</p>
                        </div>
                        <div className={cls.Tags}>
                            {match.tags[0].value}, {match.tags[1].value},{" "}
                            {match.tags[2].value}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
