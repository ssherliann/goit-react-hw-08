import { Navigate } from 'react-router-dom';
import { useSelector } from "react-redux"
import { selectIsLoggedIn } from "../redux/auth/selectors"

export default function RestrictedRoute({ component: Component, redirectTo = '/' }) {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    return(
        isLoggedIn ? <Navigate to={redirectTo} /> : Component
    )
}