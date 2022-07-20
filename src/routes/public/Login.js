import {useEffect, useState} from "react";
import {Navigate, useNavigate} from "react-router-dom";
import {addHours} from "date-fns";
import Image from "react-bootstrap/Image";
import {useDispatch, useSelector} from "react-redux";
import {login, userDataSessionKey} from "../../state/features/authentication";
import {useLoginUserMutation} from "../../api/backend";
import {AbsolutePaths} from "../Paths";
import HandsWithGloves from "../../assets/HandsWithGloves.jpg";
import DarkBlueLogo from "../../assets/DarkBlueLogo.png";


function Login() {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [makeLoginRequest, {
        data,
        error,
        isSuccess,
        isError,
        isLoading,
    }] = useLoginUserMutation();

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const {
        email,
        password
    } = formData;

    const [isLoginError, setIsLoginError] = useState(false);
    const [loginErrorMessage, setLoginErrorMessage] = useState('');

    const onChange = (e) => {
        setFormData(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const resetForm = () => {
        clearLoginError();
        setFormData({
            email: '',
            password: ''
        });
    }

    const clearLoginError = () => {
        setLoginErrorMessage('');
        setIsLoginError(false);
    }

    const setErrorMessage = (errorMessage) => {
        setLoginErrorMessage(errorMessage);
        setIsLoginError(true);
        // Timeout for clearing the alert warning after some time.
        setTimeout(() => {
            clearLoginError();
        }, 10000);
    }

    const submitLoginRequest = (e) => {
        e.preventDefault();
        clearLoginError();
        return makeLoginRequest(formData);
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


    useEffect(() => {
        const storeUserData = () => {
            const dataWithExpirationDate = {
                ...data,
                'expires': addHours(Date.now(), 1),
            }
            localStorage.setItem(userDataSessionKey, JSON.stringify(dataWithExpirationDate));
        }
        const dispatchLoginAction = () => {
            dispatch(login(data));
        }
        const navigateToProtectedHomePage = () => {
            navigate(AbsolutePaths.authenticatedHome);
        }

        if (!data || !isSuccess) {
            return
        }
        storeUserData();
        dispatchLoginAction();
        navigateToProtectedHomePage();
        // Not providing dispatch as the dependency.
    }, [isSuccess, data]) // eslint-disable-line react-hooks/exhaustive-deps

    const {_id, state, token} = useSelector(state => state.authentication);
    const authenticated = function () {
        return _id !== null &&
            state !== null &&
            token !== null;
    }();

    return authenticated ?
        <Navigate to={'/auth'}/> :
        (<>
                <div className="form">
                    <div className="row form--shadow">
                        <div className="col-6 form__col">
                            <Image className="form__side-img" src={HandsWithGloves} alt="Hands with gloves on"/>
                        </div>
                        <div className="col-6 form__col d-flex justify-content-center">
                            <div className="form__content form--white-background">
                                <div className="form__content__description">
                                    <div>
                                        <h1 className="form__content__header">Welcome back</h1>
                                    </div>
                                    <div className="form__content__paragraph">
                                        <p>
                                            Login, in order to use restricted functionalities of
                                            the system. All of them are free of charge.
                                        </p>
                                    </div>
                                </div>
                                <form onSubmit={submitLoginRequest} onReset={resetForm}>
                                    <div className="form__input-group">
                                        <div className="mb-3">
                                            <input
                                                id="mailFormInput"
                                                type="email"
                                                className="form-control"
                                                onChange={onChange}
                                                required={true}
                                                name="email"
                                                value={email}
                                                placeholder="Your email address"/>
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
                                            <button type="submit" className="btn btn-primary"
                                                    disabled={isLoading}>Login
                                            </button>
                                            <button type="reset" className="btn btn-secondary"
                                                    disabled={isLoading}>Clear
                                            </button>
                                        </div>
                                    </div>
                                </form>
                                <div className="form__holder__logo">
                                    {
                                        isLoginError &&
                                        <div className="alert alert-danger" role="alert">
                                            {loginErrorMessage}
                                        </div>
                                    }
                                    {
                                        isLoading &&
                                        <div>
                                            <div className="spinner-border text-dark form__spinner-big" role="status"/>
                                        </div>
                                    }
                                    {
                                        !isLoading && !isLoginError &&
                                        <img className="form__logo" src={DarkBlueLogo} alt="Logo of MED-Gateway system"/>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
}

export default Login;