import { Route, Routes } from "react-router";
import { PageSkeleton } from "./PageSkeleton";

export const MyRouter = () => {
    return (
        <Routes>
            <Route path="*" element={<PageSkeleton />}>
                <Route
                    index
                    element={
                        <h4>
                            asd asda asd asd asd asd asd asd asd asd asd asd asd
                            asd asd asd
                        </h4>
                    }
                />
            </Route>
        </Routes>
    );
};
