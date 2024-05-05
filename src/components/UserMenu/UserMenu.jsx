import { useSelector, useDispatch } from "react-redux"
import { selectUser } from "../../redux/auth/selectors"
import { logOut } from '../../redux/auth/operations';

export default function UserMenu() {
    const { user } = useSelector(selectUser)
    const dispatch = useDispatch();

    return(
        <>
            <p>Welcome {user.name}!</p>
            <button type="button" onClick={() => dispatch(logOut())}>
                Logout
            </button>
        </>
    )
}