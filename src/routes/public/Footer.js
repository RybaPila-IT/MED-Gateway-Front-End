import {Link} from "react-router-dom";
import WhiteLogoWithCaption from "../../assets/WhiteLogoWithCaption.png";
import {AbsolutePaths} from "../Paths";

function Footer() {
    return (
        <>
            <div className="centered-container transparent-black-bg">
                <div className="row full-container centered-2">
                    <div className="col-4 d-flex justify-content-center">
                        <div>
                            <img className="small-logo" src={WhiteLogoWithCaption} alt="MED-Gateway white logo"/>
                        </div>
                    </div>
                    <div className="col-4 d-flex justify-content-center">
                        <div className="col-2 d-flex flex-column align-items-center">
                            <div className="full-container">
                                <b>Browse</b>
                            </div>
                            <div className="full-container white-text" style={{float: 'left'}}>
                                <Link className="white-text" to={AbsolutePaths.home} style={{textDecoration: 'none'}}>Home</Link>
                            </div>
                            <div className="full-container white-text">
                                <Link className="white-text" to={AbsolutePaths.register} style={{textDecoration: 'none'}}>Register</Link>
                            </div>
                            <div className="full-container white-text">
                                <Link className="white-text" to={AbsolutePaths.login} style={{textDecoration: 'none'}}>Login</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 d-flex justify-content-end">
                        <div className="col-8 d-flex flex-column align-items-end">
                            <div className="full-container">
                                <b>Contact</b>
                            </div>
                            <div className="full-container white-text">
                                +693 170 273
                            </div>
                            <div className="full-container white-text">
                                med-gateway@outlook.com
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="centered-2" style={{borderTop: '0.13rem solid black'}}>
                <div className="row full-container justify-content-center transparent-black-bg">
                    <div className="col-4 d-flex justify-content-center">
                        Copyright 2022
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;