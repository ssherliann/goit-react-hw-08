import { useSelector } from "react-redux"
import { NavLink } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import styles from  './Navigation.module.css'

export default function Navigation() {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    return(
        <nav>
            <NavLink className={styles.link} to='/'>
                Home
            </NavLink>
            {isLoggedIn && (
                <NavLink className={styles.link} to='/contacts'>
                    Contacts
                </NavLink>
            )}
        </nav>
    )
}