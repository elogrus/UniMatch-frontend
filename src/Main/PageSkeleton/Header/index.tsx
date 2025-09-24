import LogoText from "@/Base/Assets/LogoTextBlack.svg";
import { BurgerNavbar } from "./BurgerNavbar";
import styles from "./styles.module.scss";
import { Navbar } from "./Navbar";
export const Header = () => {
    return (
        <header className={styles.Header}>
            <div className={styles.Left}>
                <img className={styles.Logo} src={LogoText} />
            </div>
            <div className={styles.Right}>
                <Navbar className={styles.Navbar}/>
                <BurgerNavbar className={styles.BurgerNavbar}/>
            </div>
        </header>
    );
};
