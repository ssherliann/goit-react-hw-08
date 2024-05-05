import { useSelector } from "react-redux"
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import Navigation from "../Navigation/Navigation"
import UserMenu from "../UserMenu/UserMenu";
import AuthNav from "../AuthNav/AuthNav";

export default function AppBar() {
    const { isLoggednIn } = useSelector(selectIsLoggedIn);

    return(
        <>
            <Navigation />
            {isLoggednIn ? <UserMenu/> : <AuthNav/>}
        </>
    )
}