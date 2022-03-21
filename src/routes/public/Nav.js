import {Link, Outlet} from "react-router-dom";
import {AbsolutePaths} from "../Paths";

function Nav() {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to={AbsolutePaths.home}>Home</Link>
                    </li>
                    <li>
                        <Link to={AbsolutePaths.login}>Login</Link>
                    </li>
                    <li>
                        <Link to={AbsolutePaths.register}>Register</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </div>
    )
}

export default Nav;