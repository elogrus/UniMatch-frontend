import { useFetch } from "@/Base/Hooks/useFetch";
import { fetchNextMatchTime } from "../../Functions/fetchNextMatchTime";
import { formatTime } from "./Functions/formatTime";
import styles from "./styles.module.scss";
import { Spinner } from "@/Base/UI/Spinner";
import { useEffect } from "react";

export const NextMatch = () => {
    const { response, fetchData } = useFetch({
        fetchFunc: fetchNextMatchTime,
    });
    useEffect(() => {
        fetchData();
    }, []);
    return (
        <div className={styles.Container}>
            <h2>Следующий мэтч</h2>
            <div className={styles.NextMatch}>
                {response ? (
                    <button disabled className="ButtonTgray">
                        Через{" "}
                        {formatTime({
                            days: response?.days_left,
                            hours: response?.hours_left,
                            minutes: response?.minutes_left,
                        })}
                    </button>
                ) : (
                    <Spinner center={true} />
                )}
            </div>
        </div>
    );
};
