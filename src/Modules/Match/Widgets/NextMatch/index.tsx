import styles from "./styles.module.scss";

// const formatTime = (days: number, hours: number, minutes: number) => {
//     const result = []
//     if (day)
// }

export const NextMatch = () => {
    // const time = useFetch({
    //     fetchFunc: fetchNextMatchTime
    // })
    return (
        <div className={styles.Container}>
            <h2>Следующий мэтч</h2>
            <div className={styles.NextMatch}>
                <button disabled className="ButtonTgray">
                    Через 4 дня
                </button>
            </div>
        </div>
    );
};
