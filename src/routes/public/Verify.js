import {useState} from "react";
import {useVerifyAccountMutation} from "../../api/backend";
import {FaEnvelope} from "react-icons/fa";


const Verify = () => {

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

    const verifyAccount = (e) => {
        e.preventDefault();
        // Send the verification request to the backend.
        verify(email);
    }

    const emailChange = (e) => {
        setEmail(e.target.value);
    }

    return (
        <div>
            <section>
                <h1>
                    <FaEnvelope/>Verify Email
                </h1>
                <p>
                    Please, fill below form in order to resend verification email.
                </p>
            </section>
            <form className="form centered-container" onSubmit={verifyAccount} onReset={resetForm}>
                <div className="form-group">
                    <div className="mb-3">
                        <input
                            type="email"
                            className="form-control"
                            onChange={emailChange}
                            required={true}
                            name="name"
                            value={email}
                            placeholder="Please, enter your email"/>
                    </div>
                    <div className="btn-group">
                        <button type="submit" className="btn btn-primary" disabled={isLoading}>Send</button>
                        <button type="reset" className="btn btn-secondary" disabled={isLoading}>Clear</button>
                    </div>
                </div>
            </form>
            <section>
                <div className="centered-container">
                    {
                        isError &&
                        <div className="alert alert-danger" role="alert">
                            {JSON.stringify(error)}
                        </div>
                    }
                    {
                        isLoading &&
                        <div>
                            <div className="spinner-border text-primary" role="status"/>
                            <span className="text-primary">Loading...</span>
                        </div>
                    }
                    {
                        isSuccess &&
                        <div className="alert alert-success" role="alert">
                            {JSON.stringify(data)}
                        </div>
                    }
                </div>
            </section>
        </div>
    )
}

export default Verify;