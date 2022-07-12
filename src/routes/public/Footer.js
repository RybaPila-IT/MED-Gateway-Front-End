import {Link} from "react-router-dom";
import WhiteLogoWithCaption from "../../assets/WhiteLogoWithCaption.png";
import {AbsolutePaths} from "../Paths";

function Footer() {
    return (
        <div className="footer">
            <div className="footer__top black--background">
                <div className="row footer__row">
                    <div className="col-4 d-flex justify-content-center">
                        <div>
                            <img className="footer__img" src={WhiteLogoWithCaption} alt="MED-Gateway white logo"/>
                        </div>
                    </div>
                    <div className="col-4 d-flex justify-content-center">
                        <div className="col-1 d-flex flex-column align-items-center">
                            <div className="footer__col__div">
                                <b>Browse</b>
                            </div>
                            <div className="footer__col__div">
                                <Link className="footer--white-text no-decoration" to={AbsolutePaths.home}>
                                    Home
                                </Link>
                            </div>
                            <div className="footer__col__div">
                                <Link className="footer--white-text no-decoration" to={AbsolutePaths.register}>
                                    Register
                                </Link>
                            </div>
                            <div className="footer__col__div">
                                <Link className="footer--white-text no-decoration" to={AbsolutePaths.login}>
                                    Login
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 d-flex justify-content-end">
                        <div className="col-8 d-flex flex-column align-items-end">
                            <div className="footer__col__div">
                                <b>Contact</b>
                            </div>
                            <div className="footer__col__div footer--white-text">
                                +693 170 273
                            </div>
                            <div className="footer__col__div footer--white-text">
                                med-gateway@outlook.com
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer__copyright black--background">
                <div className="row footer__row justify-content-center">
                    <div className="col-6 d-flex justify-content-center">
                        <b>Copyright 2022</b>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;