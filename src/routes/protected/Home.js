import {useGetUserQuery} from '../../api/backend';

const Home = () => {

    const {data, error, isLoading, isSuccess, isError} = useGetUserQuery();

    return (
        <div className="centered-container">
            {
                isSuccess &&
                <div style={{width: '30%'}}>
                    <h1>Welcome back {data.name} {data.surname}</h1>
                    <p>Good to see you again!</p>
                    <h3>Your credentials</h3>
                    <ul>
                        <li>Email: {data.email}</li>
                        <li>Identifier: {data._id}</li>
                        <li>Organization: {data.organization}</li>
                        <li>Status: {data.status}</li>
                    </ul>

                </div>
            }
            {
                isError &&
                <div className="alert alert-danger" role="alert">
                    Oops something went wrong. Error:
                    <br/>
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
        </div>
    )
}

export default Home;