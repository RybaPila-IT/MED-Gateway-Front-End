import {Link} from "react-router-dom";
import {AbsolutePaths} from "../Paths";
import Home from "../public/Home";

export const NotFound = () => {
    return (
        <div className="centered-container">
            <h1>404</h1>
            <p>
                Oops it looks like there is nothing here. Press below link to return to Home Page.
                <br/>
                <Link to={AbsolutePaths.home} element={<Home/>}>Return Home</Link>
            </p>
        </div>
    )
}