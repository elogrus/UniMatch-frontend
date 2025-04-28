import { api } from "@/6shared/Utils/Http";

export interface BadResponse {
    error: string;
}

export interface GoodResponse {
    user: {
        first_name: string;
        last_name: string;
        email: string;
        birth: string;
        chat_id: null;
        image: null;
        hobby: number[];
    };
    token: string;
}

export const register = async (
    first_name: string,
    last_name: string,
    email: string,
    birth: string,
    password: string,
    hobby: number[]
) => {
    const body = {
        first_name,
        last_name,
        email,
        birth,
        password,
        hobby,
    };
    const response = await api.post<GoodResponse | BadResponse>(
        "http://localhost:3001/users/api/register",
        {
            json: body,
        }
    );
    return await response;
};
