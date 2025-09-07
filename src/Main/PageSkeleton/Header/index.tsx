import MiniLogo from "@/Base/Assets/MiniLogoBlack.svg";
import UniMatchText from "@/Base/Assets/UniMatchTextBlack.svg";
import { BurgerNavbar } from "./BurgerNavbar";
import styles from "./styles.module.scss";
import { Navbar } from "./Navbar";
export const Header = () => {
    return (
        <header className={styles.Header}>
            <div className={styles.Left}>
                <img className={styles.Logo} src={MiniLogo} />
                <span className={styles.Separator}></span>
                <img className={styles.UniMatchText} src={UniMatchText} />
            </div>
            <div className={styles.Right}>
                <Navbar className={styles.Navbar}/>
                <BurgerNavbar className={styles.BurgerNavbar}/>
            </div>
        </header>
    );
};
