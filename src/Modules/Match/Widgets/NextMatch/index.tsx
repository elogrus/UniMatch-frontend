import styles from "./styles.module.scss";

export const NextMatch = () => {
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
