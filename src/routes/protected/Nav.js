import {Link, Outlet} from 'react-router-dom';
import {AbsolutePaths} from "../Paths";
import {FaHome, FaSignOutAlt} from "react-icons/fa";

export const ProtectedNav = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">MED-Gateway Dashboard</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to={AbsolutePaths.home}> <FaHome /> Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={AbsolutePaths.logout}> <FaSignOutAlt /> Logout</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {/** Outlet will display any page, at which the user is currently on. */}
            <Outlet />
        </div>
    )
}