import {useNavigate} from "react-router-dom";
import {userDataSessionKey} from '../../state/features/authorization';
import {AbsolutePaths} from "../Paths";

const Logout = () => {

    const navigate = useNavigate();

    const logoutUser = () => {
        const clearUserSessionData = () => {
            localStorage.removeItem(userDataSessionKey);
        }
        const redirectToPublicHomePage = () => {
            navigate(AbsolutePaths.home);
        }

        clearUserSessionData();
        redirectToPublicHomePage();
    }

    return (
        <div className="centered-container">
            <div className="card" style={{width: '18rem'}}>
                <div className="card-body">
                    <h5 className="card-title">Logout</h5>
                    <p className="card-text">Confirm the logout process</p>
                    <a className="btn btn-primary" onClick={logoutUser}>Logout</a>
                </div>
            </div>
        </div>
    )
}

export default Logout;