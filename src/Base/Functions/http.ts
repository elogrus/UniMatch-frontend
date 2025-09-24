import { saveToken } from "@/Modules/User/Functions/saveToken";
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
        afterResponse: [
            async (request, options, response) => {
                // если access устарел
                if (response.status === 401) {
                    const res = await ky.post<{ access: string }>(
                        "api/token/refresh/",
                        {
                            prefixUrl: import.meta.env.VITE_BACKEND_URL,
                            retry: 5,
                            hooks: {
                                afterResponse: [
                                    (req, opt, response) => {
                                        // если рефреш устарел
                                        if (response.status === 401) {
                                            window.location.replace("/login");
                                            localStorage.removeItem(
                                                LocalStorage.TOKEN
                                            );
                                            return new Response(
                                                "Redirect to login-page",
                                                { status: 200 }
                                            );
                                        }
                                    },
                                ],
                            },
                        }
                    );
                    const token = await res.json();
                    localStorage.setItem(LocalStorage.TOKEN, token.access);
                    // попробовать еще раз со свежим токеном
                    return http(request);
                }
            },
        ],
        beforeError: [
            async (error) => {
                const response = await error.response.json<ErrorResponse>();
                if (response.error) error.message = response.error;
                return error;
            },
        ],
    },
});
