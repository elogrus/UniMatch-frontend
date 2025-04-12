import { BrowserRouter, Route, Routes } from "react-router";
import "./App.scss";
import { Welcome } from "@/2pages/Welcome";
import { Header } from "@/3widgets/Header";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                {/* <Provider store={store}> */}
                <Routes>
                    {/* <Route path="auth" element={<Auth />}>
                        <Route path="login" index element={<LoginForm />} />
                        <Route
                            path="register"
                            index
                            element={<RegisterForm />}
                        />
                    </Route> */}

                    <Route element={<Header />}>
                        <Route path="/" element={<Welcome />} />
                    </Route>
                </Routes>
                {/* </Provider> */}
            </BrowserRouter>
        </div>
    );
}

export default App;
