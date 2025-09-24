import { create } from "zustand";
import type { MatchT } from "../types";

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
        // fetchMatches().then(async (res) => {
        //     const body = await res.json();
        //     set({
        //         currentPair: body.current_pair,
        //         history: body.pairs,
        //     });
        // });
        set({
            currentPair: {
                id: 228,
                partner: {
                    id: 45,
                    first_name: "Имя",
                    last_name: "Фамилия",
                    email: "email@example.com",
                    hobby: [
                        {
                            id: 1,
                            name: "Программирование",
                        },
                        {
                            id: 2,
                            name: "Спорт",
                        },
                        {
                            id: 5,
                            name: "Рисование",
                        },
                    ],
                },
                created_at: "2025-05-08",
            },
            history: [
                {
                    id: 225,
                    partner: {
                        id: 31,
                        first_name: "Дмитрий",
                        last_name: "Александров",
                        email: "admin@yandex.ru",
                        hobby: [
                            {
                                id: 1,
                                name: "Программирование",
                            },
                            {
                                id: 2,
                                name: "Спорт",
                            },
                            {
                                id: 7,
                                name: "История",
                            },
                            {
                                id: 7,
                                name: "История",
                            },
                            {
                                id: 7,
                                name: "История",
                            },
                            {
                                id: 7,
                                name: "История",
                            },
                            {
                                id: 7,
                                name: "История",
                            },
                            {
                                id: 7,
                                name: "История",
                            },
                            {
                                id: 7,
                                name: "История",
                            },
                            {
                                id: 7,
                                name: "История",
                            },
                        ],
                    },
                    created_at: "2025-05-08",
                },
                {
                    id: 226,
                    partner: {
                        id: 58,
                        first_name: "Дэн",
                        last_name: "Рейнолдс",
                        email: "danraynolds15@example.com",
                        hobby: [
                            {
                                id: 1,
                                name: "Программирование",
                            },
                        ],
                    },
                    created_at: "2025-05-08",
                },
                {
                    id: 2251,
                    partner: {
                        id: 31,
                        first_name: "Дмитрий",
                        last_name: "Александров",
                        email: "admin@yandex.ru",
                        hobby: [
                            {
                                id: 1,
                                name: "Программирование",
                            },
                            {
                                id: 2,
                                name: "Спорт",
                            },
                            {
                                id: 3,
                                name: "История",
                            },
                            {
                                id: 4,
                                name: "История2",
                            },
                            {
                                id: 5,
                                name: "История3",
                            },
                            {
                                id: 6,
                                name: "История4",
                            },
                            {
                                id: 7,
                                name: "История5",
                            },
                            {
                                id: 8,
                                name: "История6",
                            },
                            {
                                id: 9,
                                name: "История7",
                            },
                            {
                                id: 10,
                                name: "История8",
                            },
                        ],
                    },
                    created_at: "2025-05-08",
                },
                {
                    id: 222145,
                    partner: {
                        id: 31,
                        first_name: "Дмитрий",
                        last_name: "Александров",
                        email: "admin@yandex.ru",
                        hobby: [
                            {
                                id: 1,
                                name: "Программирование",
                            },
                            {
                                id: 2,
                                name: "Спорт",
                            },
                            {
                                id: 3,
                                name: "История",
                            },
                            {
                                id: 4,
                                name: "История2",
                            },
                            {
                                id: 5,
                                name: "История3",
                            },
                            {
                                id: 6,
                                name: "История4",
                            },
                            {
                                id: 7,
                                name: "История5",
                            },
                            {
                                id: 8,
                                name: "История6",
                            },
                            {
                                id: 9,
                                name: "История7",
                            },
                            {
                                id: 10,
                                name: "История8",
                            },
                        ],
                    },
                    created_at: "2025-05-08",
                },
                {
                    id: 22145,
                    partner: {
                        id: 31,
                        first_name: "Дмитрий",
                        last_name: "Александров",
                        email: "admin@yandex.ru",
                        hobby: [
                            {
                                id: 1,
                                name: "Программирование",
                            },
                            {
                                id: 2,
                                name: "Спорт",
                            },
                            {
                                id: 3,
                                name: "История",
                            },
                            {
                                id: 4,
                                name: "История2",
                            },
                            {
                                id: 5,
                                name: "История3",
                            },
                            {
                                id: 6,
                                name: "История4",
                            },
                            {
                                id: 7,
                                name: "История5",
                            },
                            {
                                id: 8,
                                name: "История6",
                            },
                            {
                                id: 9,
                                name: "История7",
                            },
                            {
                                id: 10,
                                name: "История8",
                            },
                        ],
                    },
                    created_at: "2025-05-08",
                },
                {
                    id: 6161225,
                    partner: {
                        id: 31,
                        first_name: "Дмитрий",
                        last_name: "Александров",
                        email: "admin@yandex.ru",
                        hobby: [
                            {
                                id: 1,
                                name: "Программирование",
                            },
                            {
                                id: 2,
                                name: "Спорт",
                            },
                            {
                                id: 3,
                                name: "История",
                            },
                            {
                                id: 4,
                                name: "История2",
                            },
                            {
                                id: 5,
                                name: "История3",
                            },
                            {
                                id: 6,
                                name: "История4",
                            },
                            {
                                id: 7,
                                name: "История5",
                            },
                            {
                                id: 8,
                                name: "История6",
                            },
                            {
                                id: 9,
                                name: "История7",
                            },
                            {
                                id: 10,
                                name: "История8",
                            },
                        ],
                    },
                    created_at: "2025-05-08",
                },
                {
                    id: 225,
                    partner: {
                        id: 31,
                        first_name: "Дмитрий",
                        last_name: "Александров",
                        email: "admin@yandex.ru",
                        hobby: [
                            {
                                id: 1,
                                name: "Программирование",
                            },
                            {
                                id: 2,
                                name: "Спорт",
                            },
                            {
                                id: 3,
                                name: "История",
                            },
                            {
                                id: 4,
                                name: "История2",
                            },
                            {
                                id: 5,
                                name: "История3",
                            },
                            {
                                id: 6,
                                name: "История4",
                            },
                            {
                                id: 7,
                                name: "История5",
                            },
                            {
                                id: 8,
                                name: "История6",
                            },
                            {
                                id: 9,
                                name: "История7",
                            },
                            {
                                id: 10,
                                name: "История8",
                            },
                        ],
                    },
                    created_at: "2025-05-08",
                },
            ],
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
