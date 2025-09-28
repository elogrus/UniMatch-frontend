import { LocalStorage } from "@/Base/Variables/localstorage";
import { Login } from "@/Pages/Entrance/Login";
import { Register } from "@/Pages/Entrance/Register";
import { About } from "@/Pages/Landings/About";
import { Index } from "@/Pages/Landings/Index";
import { Matches } from "@/Pages/Matches";
import { Settings } from "@/Pages/Settings";
import { Navigate, Outlet, Route, Routes } from "react-router";
import { PageSkeleton } from "../PageSkeleton";

export const ROUTES = {
    ABOUT: "/about",
    MATCHES: "/matches",
    SETTINGS: "/settings",
    LOGIN: "/login",
    REGISTER: "/register",
} as const;

const ProtectedRoute = () => {
    if (!localStorage.getItem(LocalStorage.TOKEN)) {
        return <Navigate to={ROUTES.LOGIN} replace />;
    }
    return <Outlet />;
};

export const MyRouter = () => {
    return (
        <Routes>
            <Route element={<PageSkeleton />}>
                <Route index element={<Index />} />
                <Route path={ROUTES.ABOUT} element={<About />} />
                <Route element={<ProtectedRoute />}>
                    <Route path={ROUTES.MATCHES} element={<Matches />} />
                    <Route path={ROUTES.SETTINGS} element={<Settings />} />
                </Route>
                <Route path="*" element={<h1>404</h1>} />
            </Route>
            <Route path={ROUTES.LOGIN} element={<Login />} />
            <Route path={ROUTES.REGISTER} element={<Register />} />
        </Routes>
    );
};
