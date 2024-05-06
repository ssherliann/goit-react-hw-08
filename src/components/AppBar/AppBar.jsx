import { useSelector } from "react-redux"
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import Navigation from "../Navigation/Navigation"
import UserMenu from "../UserMenu/UserMenu";
import AuthNav from "../AuthNav/AuthNav";
import styles from  './AppBar.module.css'

export default function AppBar() {
    const { isLoggednIn } = useSelector(selectIsLoggedIn);

    return(
        <div className={styles.navigation}>
            <Navigation />
            {isLoggednIn ? <UserMenu/> : <AuthNav/>}
        </div>
    )
}