import { Route, Routes } from "react-router";
import { PageSkeleton } from "./PageSkeleton";
import { About } from "@/Pages/Landings/About";

export const MyRouter = () => {
    return (
        <Routes>
            <Route path="*" element={<PageSkeleton />}>
                <Route path="about" element={<About />} />
            </Route>
        </Routes>
    );
};
