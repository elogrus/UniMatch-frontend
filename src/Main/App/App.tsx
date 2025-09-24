import { BrowserRouter } from "react-router";
import { MyRouter } from "./MyRouter";

import './styles/library/text.scss'
import './styles/library/buttons.scss'
import './styles/normalize.scss'
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
