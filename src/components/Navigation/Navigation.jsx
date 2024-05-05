import { useSelector } from "react-redux"
import { NavLink } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

export default function Navigation() {
    const { isLoginIn } = useSelector(selectIsLoggedIn);

    return(
        <nav>
            <NavLink to='/'>
                Home
            </NavLink>
            {isLoginIn && (
                <NavLink to='/contacts'>
                    Contacts
                </NavLink>
            )}
        </nav>
    )
}