import { create } from "zustand";
import type { MatchT } from "../types";
import { fetchMatches } from "../Functions/fetchMatches";

interface MatchesStoreI {
    currentPair: MatchT | null;
    history: MatchT[] | null;
    updateMatches: () => void;
    clear: () => void;
}

export const useMatches = create<MatchesStoreI>((set, get) => {
    // !!! TODO: переделать
    console.log("CREATING STORE");
    // @ts-expect-error глобальная переменная, которая нужна только для отладки
    // есть подо
    if (window.STORE_WAS_CREATED === true)
        console.error(
            "useMatches INITILIZE FUNCTION WAS CALLED MORE THAN 1 TIME!!!"
        );
    // @ts-expect-error глобальная переменная, которая нужна только для отладки
    window.STORE_WAS_CREATED = true;
    const updateMatches = () => {
        console.log("UPDATE MATCHES");
        fetchMatches().then(async (res) => {
            const body = await res.json();
            set({
                currentPair: body.current_pair,
                history: body.pairs,
            });
        });
    };
    if (!get()) {
        updateMatches();
    }
    return {
        currentPair: null,
        history: null,
        updateMatches,
        clear: () => set({ history: null }),
    };
});
