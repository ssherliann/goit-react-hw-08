import { useSelector, useDispatch } from "react-redux"
import { selectUser } from "../../redux/auth/selectors"
import { logOut } from '../../redux/auth/operations'
import styles from './UserMenu.module.css'


export default function UserMenu() {
    const user  = useSelector(selectUser)
    const dispatch = useDispatch();

    return(
        <div className={styles.userMenu}>
            <p>Welcome {user.name}!</p>
            <button type="button" className={styles.buttonLogOut} onClick={() => dispatch(logOut())}>
                Logout
            </button>
        </div>
    )
}