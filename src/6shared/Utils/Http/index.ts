import ky from "ky";

export const api = ky.create({
    headers: {
        Authorization: localStorage.getItem("token") || undefined,
    },
    hooks: {
        afterResponse: [
            async (req, opt, res) => {
                if (res.status === 401) {
                    console.log("notoken 401");
                    const tokenResponse = await api.post(
                        "http://localhost:3001/token"
                    );
                    if (tokenResponse.status === 403) {
                        console.log("bad refresh-token 403");
                        localStorage.removeItem("token");
                        console.log("replace login");
                        window.location.assign("/login");
                    } else {
                        const token = (
                            await tokenResponse.json<{ token: string }>()
                        ).token;
                        localStorage.setItem("token", token);
                        req.headers.set("Authorization", token); 
                        return ky(req);
                    }
                }
            },
        ],
    },
    throwHttpErrors: false,
});
