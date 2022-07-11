import {Link, Outlet} from 'react-router-dom';
import {AbsolutePaths} from "../Paths";
import DarkBlueLogoWithCaption from "../../assets/DarkBlueLogoWithCaption.png";
import Footer from "./Footer";

const PublicNav = () => {
    return (
        <div>
            {/*<nav className="navbar navbar-expand-lg navbar-light bg-transparent justify-content-end">*/}
            {/*    <div className="container-fluid">*/}
            {/*        <a className="navbar-brand" href="/">MED-Gateway</a>*/}
            {/*        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"*/}
            {/*                data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"*/}
            {/*                aria-label="Toggle navigation">*/}
            {/*            <span className="navbar-toggler-icon" />*/}
            {/*        </button>*/}
            {/*        <div className="collapse navbar-collapse" id="navbarNav">*/}
            {/*            <ul className="navbar-nav">*/}
            {/*                <li className="nav-item">*/}
            {/*                    <Link className="nav-link" to={AbsolutePaths.home}> <FaHome /> Home</Link>*/}
            {/*                </li>*/}
            {/*                <li className="nav-item">*/}
            {/*                    <Link className="nav-link" to={AbsolutePaths.login}> <FaSignInAlt /> Login</Link>*/}
            {/*                </li>*/}
            {/*                <li className="nav-item">*/}
            {/*                    <Link className="nav-link" to={AbsolutePaths.register}> <FaUser /> Register</Link>*/}
            {/*                </li>*/}
            {/*            </ul>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</nav>*/}
            <div className="main-container">
            <nav className="nav">
                <div className="container">
                    <div className="logo">
                        <img src={DarkBlueLogoWithCaption} alt="MED-Gateway logo"/>
                    </div>
                    <div className="main_list">
                        <ul>
                            <li>
                                <Link to={AbsolutePaths.home}>
                                    <button>Home</button>
                                </Link>
                            </li>
                            <li>
                                <Link to={AbsolutePaths.login}>
                                    <button>Login</button>
                                </Link>
                            </li>
                            <li>
                                <Link to={AbsolutePaths.register}>
                                    <button>Register</button>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            </div>
            {/** Outlet will display any page, at which the user is currently on. */}
            <Outlet/>
            {/** We also include footer for the webpage. */}
            <Footer />
        </div>
    )
}

export default PublicNav;