import { AboutProject } from "@/2pages/AboutProject";
import { Login } from "@/2pages/Login";
import { Main } from "@/2pages/Main";
import { Footer } from "@/3widgets/Footer";
import { Header } from "@/3widgets/Header";
import { Provider } from "react-redux";
import { BrowserRouter, Outlet, Route, Routes } from "react-router";
import "./App.scss";
import { store, useAppDispatch } from "./store";
import { Register } from "@/2pages/Register";
import { Me } from "@/2pages/Me";
import { MyTags } from "@/2pages/MyTags";

function App() {
    const jwt = localStorage.getItem("token");
    // const dispatch = useAppDispatch();
    // if (jwt) {
    //     // тут надо задиспатчить юзера
    // }
    return (
        <div className="App">
            <Routes>
                <Route
                    element={
                        <>
                            <Header />
                            <Outlet />
                            <Footer />
                        </>
                    }
                >
                    <Route path="/" element={<Main />} />
                    <Route path="/about" element={<AboutProject />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/me" element={<Me />} />
                    <Route path="/mytags" element={<MyTags />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
