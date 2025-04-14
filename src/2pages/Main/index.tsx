import { HeaderModes, HeaderThemes } from "@/3widgets/Header/types";
import LittleRoadmap from "@/6shared/Assets/littleRoadmap.png";
import { compareClasses as cmcl } from "@/6shared/ClassNames";
import { usePage } from "@/6shared/Hooks/usePage";
import { Link } from "react-router";
import People from "./assets/people.png";
import WeMade from "./assets/wemade.png";
import cls from "./styles.module.scss";

interface MainProps {
    className?: string;
}

export const Main = (props: MainProps) => {
    const { className, ...otherProps } = props;
    usePage(
        { visible: true, mode: HeaderModes.FULL, theme: HeaderThemes.DARK },
        { visible: true }
    );
    return (
        <div
            className={cmcl(cls.Main, {}, [className as string])}
            {...otherProps}
        >
            <div className={cls.First}>
                <h2>Новые знакомства для общения и работы. Рандомно.</h2>
                <Link to="enterance">Начать</Link>
            </div>
            <div className={cls.TextBlock + " " + cls.WeMade}>
                <div>
                    <p>
                        Мы создали сервис для знакомств среди студентов
                        Екатеринбурга.
                    </p>
                    <p>
                        От нас алгоритм, который каждую неделю составит
                        рандомные пары (но и про ваши интересы не забудет).
                        <br />А от вас общение и нетворкинг ;)
                    </p>
                </div>
                <img src={WeMade} />
            </div>
            <div>
                <h2 className={cls.Title}>Как это устроено?</h2>
                <div className={cls.TextBlock}>
                    <img src={LittleRoadmap} />
                    <div>
                        <p>Все очень просто!</p>
                        <p>
                            Вы регистрируетесь, заполняете данные о себе и
                            выбираете интересы с помощью тэгов.
                        </p>
                        <p>
                            И раз в неделю алгоритм будет выбирать вам пару для
                            общения. (Все необходимое придет в телеграм.) Вам
                            остается только хорошо провести время)
                        </p>
                    </div>
                </div>

                <h2 className={cls.Title}>А зачем?</h2>
                <div className={cls.TextBlock}>
                    <div>
                        <p>
                            Общение — базовая потребность человека. И мы
                            придумали новую форму для него)
                        </p>
                        <p>
                            А ещё это отличный способ найти неожиданные
                            знакомства которые изменят вашу жизнь (или просто
                            сделают её интересней)
                        </p>
                    </div>
                    <img src={People} />
                </div>
            </div>
        </div>
    );
};
