import {useState} from 'react';
import {FaSignInAlt} from "react-icons/fa";
import {useLoginUserMutation} from "../../api/backend";

function Login() {

    const [login, {
        data,
        error,
        isSuccess,
        isError,
        isLoading
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
        setFormData({
            email: '',
            password: ''
        })
    }

    const submitLoginRequest = (e) => {
        e.preventDefault();
    }

    return (
        <div>
            <section>
                <h1>
                    <FaSignInAlt/>Login
                </h1>
                <p>
                    Provide your credentials in order to login.
                </p>
            </section>
            <form className="form centered-container" onSubmit={submitLoginRequest} onReset={resetForm}>
                <div className="form-group">
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
                    <div className="btn-group">
                        <button type="submit" className="btn btn-primary" disabled={isLoading}>Login</button>
                        <button type="reset" className="btn btn-secondary" disabled={isLoading}>Clear</button>
                    </div>
                </div>
            </form>
            <section>
                <div className="centered-container">
                    {
                        isLoginError &&
                        <div className="alert alert-danger" role="alert">
                            {loginErrorMessage}
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
                            {`Successfully registered user. Generated id is ${data._id}`}
                        </div>
                    }
                </div>
            </section>
        </div>
    )
}

export default Login;