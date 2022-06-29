import {FaUser} from 'react-icons/fa';
import {useEffect, useState} from 'react';
import {useRegisterUserMutation} from '../../api/backend';
import {Link} from "react-router-dom";
import {AbsolutePaths} from "../Paths";

function Register() {

    const passwordsMismatchErrorMessage = 'Provided passwords mismatch!';

    const [register, {
        data,
        error,
        isSuccess,
        isError,
        isLoading
    }] = useRegisterUserMutation();

    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        email: '',
        organization: '',
        password: '',
        passwordRepeat: ''
    });
    const {
        name,
        surname,
        email,
        organization,
        password,
        passwordRepeat
    } = formData;

    const [isRegisterError, setIsRegisterError] = useState(false);
    const [registerErrorMessage, setRegisterErrorMessage] = useState('');

    const onChange = (e) => {
        setFormData(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const clearRegistrationError = () => {
        setRegisterErrorMessage('');
        setIsRegisterError(false);
    }

    const setErrorMessage = (errorMessage) => {
        setRegisterErrorMessage(errorMessage);
        setIsRegisterError(true);
        // Timeout for clearing the alert warning after some time.
        setTimeout(() => {
            clearRegistrationError();
        }, 10000);
    }

    const submitRegisterRequest = (e) => {
        e.preventDefault();
        // We do not want to have obsolete alerts while making new request.
        clearRegistrationError();
        if (formData.password !== formData.passwordRepeat) {
            return setErrorMessage(passwordsMismatchErrorMessage);
        }
        return register(formData);
    }

    const resetForm = () => {
        setFormData({
            name: '',
            surname: '',
            email: '',
            organization: '',
            password: '',
            passwordRepeat: ''
        })
    }

    // This useEffect is responsible for setting the error message
    // when the API call is made to the backend.
    useEffect(() => {
        if (!isError) {
            return
        }
        if (error.data && error.data.message) {
            return setErrorMessage(error.data.message);
        }
        if (error.data) {
            return setErrorMessage(error.data);
        }
        if (error.error) {
            return setErrorMessage(error.error);
        }
        return setErrorMessage(error.status);
        // Not providing the setErrorMessage as the dependency.
    }, [isError, error]) // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div>
            <section>
                <h1>
                    <FaUser/>Register
                </h1>
                <p>
                    Please, fill below form in order to register.
                </p>
            </section>
            <form className="form centered-container" onSubmit={submitRegisterRequest} onReset={resetForm}>
                <div className="form-group">
                    <div className="mb-3">
                        <input
                            id="nameInput"
                            type="text"
                            className="form-control"
                            onChange={onChange}
                            required={true}
                            name="name"
                            value={name}
                            placeholder="Please, enter your name"/>
                    </div>
                    <div className="mb-3">
                        <input
                            id="surnameInput"
                            type="text"
                            className="form-control"
                            onChange={onChange}
                            required={true}
                            name="surname"
                            value={surname}
                            placeholder="Please, enter your surname"/>
                    </div>
                    <div className="mb-3">
                        <input
                            id="mailFormInput"
                            type="email"
                            className="form-control"
                            onChange={onChange}
                            required={true}
                            name="email"
                            value={email}
                            placeholder="Please, enter your email"/>
                    </div>
                    <div className="mb-3">
                        <input
                            id="organizationInput"
                            type="text"
                            className="form-control"
                            onChange={onChange}
                            required={true}
                            name="organization"
                            value={organization}
                            placeholder="Please, enter your organization"/>
                    </div>
                    <div className="mb-3">
                        <input
                            id="passwordInput"
                            type="password"
                            className="form-control"
                            onChange={onChange}
                            required={true}
                            minLength="5"
                            name="password"
                            value={password}
                            placeholder="Please, enter your password"/>
                    </div>
                    <div className="mb-3">
                        <input
                            id="passwordRepeatInput"
                            type="password"
                            className="form-control"
                            onChange={onChange}
                            required={true}
                            minLength="5"
                            name="passwordRepeat"
                            value={passwordRepeat}
                            placeholder="Confirm password"/>
                    </div>
                    <div className="btn-group">
                        <button type="submit" className="btn btn-primary" disabled={isLoading}>Register</button>
                        <button type="reset" className="btn btn-secondary" disabled={isLoading}>Clear</button>
                    </div>
                </div>
            </form>
            <section>
                <div className="centered-container">
                    {
                        isRegisterError &&
                        <div className="alert alert-danger" role="alert">
                            {registerErrorMessage}
                        </div>
                    }
                    {
                        isLoading &&
                        <div>
                            <div className="spinner-border text-primary" role="status" />
                            <span className="text-primary">Loading...</span>
                        </div>
                    }
                    {
                        isSuccess &&
                        <div className="alert alert-success" role="alert">
                            {data.message}
                        </div>
                    }
                </div>
            </section>
            <section>
                <div>
                    Your verification email didn't come? Go  <Link className="link" to={AbsolutePaths.verify}> here</Link> to resend it.
                </div>
            </section>
        </div>
    )
}

export default Register;