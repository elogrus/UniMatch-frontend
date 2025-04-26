import { ActiveMatch } from "@/3widgets/ActiveMatch";
import cls from "./styles.module.scss";
import { compareClasses as cmcl } from "@/6shared/Utils/ClassNames";
import { HeaderModes, HeaderThemes } from "@/3widgets/Header/types";
import { usePage } from "@/6shared/Hooks/usePage";
import { NextMatchAfter } from "@/3widgets/NextMatchAfter";
import { HistoryMatches } from "@/3widgets/HistoryMatches";
import { Link } from "react-router";

interface MeProps {
    className?: string;
}

export const Me = (props: MeProps) => {
    const { className, ...otherProps } = props;
    usePage(
        {
            visible: true,
            mode: HeaderModes.FULL,
            theme: HeaderThemes.DARK,
            position: "sticky",
        },
        { visible: true }
    );
    return (
        <div className={cmcl(cls.Me, {}, [className])} {...otherProps}>
            <div className={cls.MatchesBlock}>
                <div className={cls.MatchBlock}>
                    <h2>Текущий мэтч</h2>
                    <ActiveMatch />
                </div>
                <div className={cls.MatchBlock}>
                    <h2>Следующий мэтч</h2>
                    <NextMatchAfter />
                </div>
            </div>
            <div className={cls.HistoryBlock}>
                <h2 style={{ color: "var(--c4)" }}>История мэтчей</h2>
                <HistoryMatches
                    className={cls.History}
                    matches={[
                        {
                            id: "1",
                            name: "match1",
                            tags: [
                                {
                                    id: "1",
                                    value: "пэльмени1",
                                },
                                {
                                    id: "2",
                                    value: "пэльмени2",
                                },
                                {
                                    id: "3",
                                    value: "пэльмени3",
                                },
                                {
                                    id: "4",
                                    value: "пэльмени4",
                                },
                            ],
                        },
                        {
                            id: "2",
                            name: "match2",
                            tags: [
                                {
                                    id: "1",
                                    value: "пэльмени1",
                                },
                                {
                                    id: "2",
                                    value: "пэльмени2",
                                },
                                {
                                    id: "3",
                                    value: "пэльмени3",
                                },
                                {
                                    id: "4",
                                    value: "пэльмени4",
                                },
                            ],
                        },
                        {
                            id: "3",
                            name: "match3",
                            tags: [
                                {
                                    id: "1",
                                    value: "пэльмени1",
                                },
                                {
                                    id: "2",
                                    value: "пэльмени2",
                                },
                                {
                                    id: "3",
                                    value: "пэльмени3",
                                },
                                {
                                    id: "4",
                                    value: "пэльмени4",
                                },
                            ],
                        },
                        {
                            id: "4",
                            name: "match4",
                            tags: [
                                {
                                    id: "1",
                                    value: "пэльмени1",
                                },
                                {
                                    id: "2",
                                    value: "пэльмени2",
                                },
                                {
                                    id: "3",
                                    value: "пэльмени3",
                                },
                                {
                                    id: "4",
                                    value: "пэльмени4",
                                },
                            ],
                        },
                    ]}
                />
                <Link to="#">Показать всех →</Link>
            </div>
        </div>
    );
};
