import {useState} from "react";
import {useVerifyAccountMutation} from "../../api/backend";
import SendMail from "../../assets/SendMail.jpg";
import DarkBlueLogo from "../../assets/DarkBlueLogo.png";


const ResendMail = () => {

    const [verify, {
        data,
        error,
        isSuccess,
        isError,
        isLoading
    }] = useVerifyAccountMutation();

    const [email, setEmail] = useState('');

    const resetForm = () => {
        setEmail('');
    }

    const submitResendMailRequest = (e) => {
        e.preventDefault();
        // Send the verification request to the backend.
        verify(email);
    }

    const emailChange = (e) => {
        setEmail(e.target.value);
    }

    return (
        <>
            <div className="form">
                <div className="row form--shadow">
                    <div className="col-6 form__col">
                        <img className="form__side-img" src={SendMail} alt="Typing machine with 'Send a Mail' text"/>
                    </div>
                    <div className="col-6 form__col d-flex justify-content-center">
                        <div className="form__content-strong-padded form--white-background">
                            <div className="form__content__description">
                                <div>
                                    <h1 className="form__content__header">Resend email</h1>
                                </div>
                                <div className="form__content__paragraph">
                                    <p>
                                        Provide your email and we will resend the verification link
                                        for your account.
                                    </p>
                                </div>
                            </div>
                            <form onSubmit={submitResendMailRequest} onReset={resetForm}>
                                <div className="form__input-group">
                                    <div className="mb-3">
                                        <input
                                            id="mailFormInput"
                                            type="email"
                                            className="form-control"
                                            onChange={emailChange}
                                            required={true}
                                            name="email"
                                            value={email}
                                            placeholder="Your email address"/>
                                    </div>
                                    <div className="btn-group">
                                        <button type="submit" className="btn btn-primary"
                                                disabled={isLoading}>Resend
                                        </button>
                                        <button type="reset" className="btn btn-secondary"
                                                disabled={isLoading}>Clear
                                        </button>
                                    </div>
                                </div>
                            </form>
                            <div className="form__holder__logo">
                                {
                                    isError && error.data && error.data.message &&
                                    <div className="alert alert-danger" role="alert">
                                        {error.data.message}
                                    </div>
                                }
                                {
                                    isError && error.data && !error.data.message &&
                                    <div className="alert alert-danger" role="alert">
                                        {error.data}
                                    </div>
                                }
                                {
                                    isLoading &&
                                    <div>
                                        <div className="spinner-border text-dark form__spinner-big" role="status"/>
                                    </div>
                                }
                                {
                                    !isLoading && !isError && !isSuccess &&
                                    <img className="form__logo" src={DarkBlueLogo} alt="Logo of MED-Gateway system"/>
                                }
                                {
                                    isSuccess &&
                                    <div className="alert alert-success" role="alert">
                                        {data.message}
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ResendMail;