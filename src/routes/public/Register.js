import {FaUser} from "react-icons/fa";

function Register() {
    return (
        <div>
            <section>
                <h1>
                    <FaUser/>Register
                </h1>
                <p>
                    Please, fill below form in order to register
                </p>
            </section>
            <form>
                <div className="mb-3">
                    <label
                        htmlFor="nameFormInput"
                        className="form-label">
                        Your name
                    </label>
                    <input
                        id="nameFormInput"
                        type="text"
                        className="form-control"
                        placeholder="Please, enter your name"/>
                </div>
                <div className="mb-3">
                    <label
                        htmlFor="surnameFormInput"
                        className="form-label">
                        Your surname
                    </label>
                    <input
                        id="surnameFormInput"
                        type="text"
                        className="form-control"
                        placeholder="Please, enter your surname"/>
                </div>
                <div className="mb-3">
                    <label
                        htmlFor="mailFormInput"
                        className="form-label">
                        Email address
                    </label>
                    <input
                        id="mailFormInput"
                        type="email"
                        className="form-control"
                        aria-describedby="emailInputDescription"
                        placeholder="Please, enter your email"/>
                    <div
                        id="emailInputDescription"
                        className="form-text">
                        We'll never share your email with anyone else.
                    </div>
                </div>
                <div className="mb-3">
                    <label
                        htmlFor="organizationFormInput"
                        className="form-label">
                        Organization
                    </label>
                    <input
                        id="organizationFormInput"
                        type="text"
                        className="form-control"
                        aria-describedby="organizationInputDescription"
                        placeholder="Please, enter your organization"/>
                    <div
                        id="organizationInputDescription"
                        className="form-text">
                        We would like to know which organization you represent.
                    </div>
                </div>
                <div className="mb-3">
                    <label
                        htmlFor="passwordInput"
                        className="form-label">
                        Password
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        id="passwordInput"
                        placeholder="Please, enter your password"/>
                </div>
                <div className="mb-3">
                    <label
                        htmlFor="passwordRepeatInput"
                        className="form-label">
                        Repeat your password
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        id="passwordRepeatInput"
                        placeholder="Repeat password"/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Register;