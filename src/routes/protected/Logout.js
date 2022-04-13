import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {userDataSessionKey, logout} from '../../state/features/authentication';
import {AbsolutePaths} from "../Paths";

const Logout = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logoutUser = () => {
        const clearUserSessionData = () => {
            localStorage.removeItem(userDataSessionKey);
        }
        const logoutFromStore = () => {
            dispatch(logout());
        }
        const redirectToPublicHomePage = () => {
            navigate(AbsolutePaths.home);
        }

        logoutFromStore();
        clearUserSessionData();
        redirectToPublicHomePage();
    }

    return (
        <div className="centered-container">
            <div className="card" style={{width: '18rem'}}>
                <div className="card-body">
                    <h5 className="card-title">Logout</h5>
                    <p className="card-text">Confirm the logout process</p>
                    <button className="btn btn-primary" onClick={logoutUser}>Logout</button>
                </div>
            </div>
        </div>
    )
}

export default Logout;