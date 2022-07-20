import {useEffect, useState} from 'react';
import {useRegisterUserMutation} from '../../api/backend';
import {Link} from "react-router-dom";
import {AbsolutePaths} from "../Paths";
import Doors from "../../assets/Doors.jpg";
import DarkBlueLogo from "../../assets/DarkBlueLogo.png";

function Register() {

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
        password: ''
    });
    const {
        name,
        surname,
        email,
        organization,
        password
    } = formData;

    // TODO (radek.r) Think about nice way of handling isSuccess and isError
    const [isClear, setIsClear] = useState(true);
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
        setIsClear(true);
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
        setIsClear(false);
        return register(formData);
    }

    const resetForm = () => {
        setFormData({
            name: '',
            surname: '',
            email: '',
            organization: '',
            password: ''
        });
        setIsClear(true);
        clearRegistrationError();
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
        <>
            <div className="form">
                <div className="row form--shadow">
                    <div className="col-6 form__col">
                        <img className="form__side-img" src={Doors} alt="Hands with gloves on"/>
                    </div>
                    <div className="col-6 form__col d-flex justify-content-center">
                        <div className="form__content-small-padded form--white-background">
                            <div className="form__content__description">
                                <div>
                                    <h1 className="form__content__header">Register</h1>
                                </div>
                                <div className="form__content__paragraph">
                                    <p>
                                        Fill in belows form in order to register to the system. Don't worry,
                                        we will share your data with nobody.
                                    </p>
                                </div>
                            </div>
                            <form onSubmit={submitRegisterRequest} onReset={resetForm}>
                                <div className="form__input-group">
                                    <div className="row">
                                        <div className="col-6">
                                            <div className="mb-3">
                                                <input
                                                    id="nameInput"
                                                    type="text"
                                                    className="form-control"
                                                    onChange={onChange}
                                                    required={true}
                                                    name="name"
                                                    value={name}
                                                    placeholder="Your name"/>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="mb-3">
                                                <input
                                                    id="surnameInput"
                                                    type="text"
                                                    className="form-control"
                                                    onChange={onChange}
                                                    required={true}
                                                    name="surname"
                                                    value={surname}
                                                    placeholder="Your surname"/>
                                            </div>
                                        </div>
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
                                            placeholder="Your email"/>
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
                                            placeholder="Your organization"/>
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
                                            placeholder="Your password"/>
                                    </div>
                                    <div className="btn-group">
                                        <button type="submit" className="btn btn-primary form__btn"
                                                disabled={isLoading}>Register
                                        </button>
                                        <button type="reset" className="btn btn-secondary form__btn"
                                                disabled={isLoading}>Clear
                                        </button>
                                    </div>
                                </div>
                            </form>
                            <div className="form__holder__logo--small">
                                {
                                    isRegisterError &&
                                    <div className="alert alert-danger" role="alert">
                                        {registerErrorMessage}
                                    </div>
                                }
                                {
                                    isLoading &&
                                    <div>
                                        <div className="spinner-border text-dark form__spinner-small" role="status"/>
                                    </div>
                                }
                                {
                                    isClear &&
                                    <img className="form__logo--small" src={DarkBlueLogo}
                                         alt="Logo of MED-Gateway system"/>
                                }
                                {isSuccess &&
                                    <div className="alert alert-success align-content-center" role="alert">
                                        {data.message}
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row d-flex justify-content-center row__resend">
                    <div className="col-7">
                        Your verification email didn't come? Go
                        <Link className="link" to={AbsolutePaths.resendMail}> here</Link>.
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register;