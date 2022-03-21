import {Link} from "react-router-dom";
import {AbsolutePaths} from "../Paths";
import Home from "../public/Home";

function NotFound() {
    return (
        <div>
            Oops it looks like there is nothing here. Press below link to return to Home Page.
            <br />
            <Link to={AbsolutePaths.home} element={<Home />}>Return Home</Link>
        </div>
    )
}

export default NotFound;