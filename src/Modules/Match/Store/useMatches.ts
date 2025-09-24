import { create } from "zustand";
import { fetchMatches } from "../Functions/fetchMatches";
import type { MatchT } from "../types";

interface MatchesStoreI {
    currentPair: MatchT | null;
    history: MatchT[] | null;
    updateMatches: () => void;
    clear: () => void;
    /** @private */
}

const __updateMatchesFirstTime = (() => {
    let needLoad = true;
    return async () => {
        if (needLoad) {
            needLoad = false
            await _useMatches.getState().updateMatches();
        }
    };
})();

const _useMatches = create<MatchesStoreI>((set) => {
    const updateMatches = async () => {
        console.log("update matches");
        const res = await fetchMatches();
        const body = await res.json();
        set({
            currentPair: body.current_pair,
            history: body.pairs,
        });
    };
    return {
        currentPair: null,
        history: null,
        updateMatches,
        clear: () => set({ history: null }),
    };
});

export const useMatches = (...args: Parameters<typeof _useMatches>) => {
    __updateMatchesFirstTime()
    return _useMatches(...args);
};
