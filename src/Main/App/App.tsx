import { BrowserRouter } from "react-router";
import { MyRouter } from "../MyRouter";

import './styles/reset.scss'
import './styles/fonts.scss'
import './styles/colors.scss'
import './styles/global.scss'

function App() {
    return (
        <BrowserRouter>
            <MyRouter />
        </BrowserRouter>
    );
}

export default App;
