import ky from "ky";
import { LocalStorage } from "../Variables/localstorage";

export interface ErrorResponse {
    error: string;
}

export type Response<T> = T | ErrorResponse;



export const http = ky.create({
    prefixUrl: import.meta.env.VITE_BACKEND_URL,
    timeout: 10000,
    hooks: {
        beforeRequest: [
            (request) => {
                const token = localStorage.getItem(LocalStorage.TOKEN);
                if (token) request.headers.set("Authorization", token);
            },
        ],
        beforeError: [
            // (error) => {
            //     if (error.response.status === 401) {

            //     }
            // },
            async (error) => {
                const response = await error.response.json<ErrorResponse>();
                if (response.error) error.message = response.error;
                return error;
            },
        ],
    },
});
