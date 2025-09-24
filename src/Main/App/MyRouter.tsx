import { Login } from "@/Pages/Entrance/Login";
import { Register } from "@/Pages/Entrance/Register";
import { About } from "@/Pages/Landings/About";
import { Index } from "@/Pages/Landings/Index";
import { Matches } from "@/Pages/Matches";
import { Settings } from "@/Pages/Settings";
import { Route, Routes } from "react-router";
import { PageSkeleton } from "../PageSkeleton";

export const MyRouter = () => {
    return (
        <Routes>
            <Route element={<PageSkeleton />}>
                <Route index element={<Index />} />
                <Route path="about" element={<About />} />
                <Route path="matches" element={<Matches />} />
                <Route path="settings" element={<Settings />} />
                <Route path="*" element={<h1>404</h1>} />
            </Route>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
        </Routes>
    );
};
