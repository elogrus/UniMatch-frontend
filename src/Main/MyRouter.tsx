import { Route, Routes } from "react-router";
import { PageSkeleton } from "./PageSkeleton";
import { About } from "@/Pages/Landings/About";
import { Main } from "@/Pages/Landings/Main";

export const MyRouter = () => {
    return (
        <Routes>
            <Route path="*" element={<PageSkeleton />}>
                <Route index element={<Main />} />
                <Route path="about" element={<About />} />
                <Route path="*" element={<h1>404</h1>} />
            </Route>
        </Routes>
    );
};
