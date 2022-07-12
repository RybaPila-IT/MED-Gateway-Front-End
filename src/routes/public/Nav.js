import {Link} from 'react-router-dom';
import {AbsolutePaths} from "../Paths";
import DarkBlueLogoWithCaption from "../../assets/DarkBlueLogoWithCaption.png";

function Nav() {
    return (
        <div className="main-padded">
            <nav className="nav">
                <div className="container">
                    <div className="nav__logo">
                        <img className="nav__logo__img" src={DarkBlueLogoWithCaption} alt="MED-Gateway logo"/>
                    </div>
                    <div className="nav__list">
                        <ul className="nav__list__ul">
                            <li className="nav__list__li">
                                <Link className="no-decoration" to={AbsolutePaths.home}>
                                    <button className="nav__list__button">Home</button>
                                </Link>
                            </li>
                            <li className="nav__list__li">
                                <Link className="no-decoration" to={AbsolutePaths.login}>
                                    <button className="nav__list__button">Login</button>
                                </Link>
                            </li>
                            <li className="nav__list__li">
                                <Link className="no-decoration" to={AbsolutePaths.register}>
                                    <button className="nav__list__button">Register</button>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Nav;