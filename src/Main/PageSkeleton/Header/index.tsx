import MiniLogo from "@/Base/Assets/MiniLogoBlack.svg";
import { BurgerNavbar } from "./UI/BurgerNavbar";
import styles from "./styles.module.scss";
import { Navbar } from "./UI/Navbar";
import { useUser } from "@/Modules/User/Store/useUser";
import Photo from "@/Base/Assets/ebanutiyYasher.gif";

export const Header = () => {
    const user = useUser();
    return (
        <header className={styles.Header}>
            <div className={styles.Left}>
                <img className={styles.Logo} src={MiniLogo} />
                <div className={styles.Separator}></div>
                {user.isAuth ? (
                    <div className={styles.Panel}>
                        <img src={Photo} />
                        <span>
                            {user.user.first_name} {user.user.last_name}
                        </span>
                    </div>
                ) : (
                    "Uni Match"
                )}
            </div>
            <div className={styles.Right}>
                <Navbar user={user.user} className={styles.Navbar} />
                <BurgerNavbar
                    user={user.user}
                    className={styles.BurgerNavbar}
                />
            </div>
        </header>
    );
};
