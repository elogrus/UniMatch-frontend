import cls from "./styles.module.scss";
import { compareClasses as cmcl } from "@/6shared/ClassNames";
import Preview from "./assets/preview.png";
import Photo from "./assets/photo.png";
import UnitLogo from "@/6shared/Assets/unit_logo.svg";
import Exeutica from "./assets/exeutica.png";
import Y from "./assets/y.svg";

interface WelcomeProps {
    className?: string;
}

export const Welcome = (props: WelcomeProps) => {
    const { className, ...otherProps } = props;
    const TEAM: { img: string; name: string; role: string }[] = [
        {
            img: Photo,
            name: "Дима Александров",
            role: "Backend разработка",
        },
        {
            img: Photo,
            name: "Ваня Коваленко",
            role: "Дизайн & маркетинг",
        },
        {
            img: Photo,
            name: "Саша Плюснин",
            role: "frontend разработка",
        },
    ];
    return (
        <div
            className={cmcl(cls.Welcome, {}, [className as string])}
            {...otherProps}
        >
            <div className={cls.First}>
                <span>Сервис для знакомств среди студентов Екатеринбурга</span>
            </div>
            <div className={cls.Desc}>
                <div>
                    <p>
                        Каждую неделю наши алгоритмы составляют новые пары для
                        общения и нетворкинга.
                    </p>
                    <p>
                        При составлении мы учитываем ваши интересы (для этого
                        используем тэги), но и про радном не забываем))
                    </p>
                </div>
                <div>
                    <img src={Preview} alt="Превью" />
                </div>
            </div>
            <div className={cls.Team}>
                <h2>Команда проекта</h2>
                <ul>
                    {TEAM.map((member) => (
                        <li key={member.name}>
                            <img src={member.img} />
                            <div>
                                <h3>{member.name}</h3>
                                <span>{member.role}</span>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <div className={cls.MadeIn}>
                <div>
                    <span>Создано в:</span>
                    <img src={UnitLogo} alt="ЮНИТ" />
                </div>
                <div>
                    <img src={Exeutica} alt="Exeutica" />
                </div>
                <div>
                    <img src={Y} alt="У" />
                </div>
            </div>
        </div>
    );
};
