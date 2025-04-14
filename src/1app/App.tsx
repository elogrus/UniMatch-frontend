import { AboutProject } from "@/2pages/AboutProject";
import { Login } from "@/2pages/Login";
import { Main } from "@/2pages/Main";
import { Footer } from "@/3widgets/Footer";
import { Header } from "@/3widgets/Header";
import { Provider } from "react-redux";
import { BrowserRouter, Outlet, Route, Routes } from "react-router";
import "./App.scss";
import { store } from "./store";
import { Register } from "@/2pages/Register";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Provider store={store}>
                    <Routes>
                        {/* <Route path="auth" element={<Auth />}>
                        <Route path="login" index element={<LoginForm />} />
                        <Route
                            path="register"
                            index
                            element={<RegisterForm />}
                        />
                    </Route> */}

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
                        </Route>
                    </Routes>
                </Provider>
            </BrowserRouter>
        </div>
    );
}

export default App;
