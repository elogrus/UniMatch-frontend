import { type HTMLAttributes } from "react";
import { useMatches } from "../../Store/useMatches";
import Photo from "./Assets/photo.gif";
import styles from "./styles.module.scss";
import { Spinner } from "@/Base/UI/Spinner";

export const CurrentMatch = (props: HTMLAttributes<HTMLDivElement>) => {
    const currentMatch = useMatches((state) => state.currentPair);
    const wasLoaded = useMatches((state) => state.wasLoaded);

    return (
        <div className={styles.Container}>
            <h2>Текущий мэтч</h2>
            <div className={styles.CurrentMatch} {...props}>
                {currentMatch ? (
                    <>
                        <div className={styles.Profile}>
                            <img src={Photo} />
                            <h2>
                                {currentMatch.partner.first_name}
                                <br />
                                {currentMatch.partner.last_name}
                            </h2>
                        </div>
                        <ul className={styles.Tags}>
                            {currentMatch.partner.hobby.map((tag, index) => {
                                if (index > 4) return;
                                return <li key={tag.id}>{tag.name}</li>;
                            })}
                            {currentMatch.partner.hobby.length > 5 && (
                                <span>
                                    и еще{" "}
                                    {currentMatch.partner.hobby.length - 5}
                                </span>
                            )}
                        </ul>
                        <button className="ButtonTblack">Общаться →</button>
                    </>
                ) : wasLoaded ? (
                    <span className={styles.NoMatch}>Мэтча пока нет =(</span>
                ) : (
                    <Spinner
                        center={true}
                        size="var(--fz-h2)"
                        color="var(--PRIMARY_BLACK)"
                    />
                )}
            </div>
        </div>
    );
};
