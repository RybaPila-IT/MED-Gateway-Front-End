import {useParams} from "react-router-dom";
import {useGetHistoryQuery} from "../../../api/backend";
import HistoryEntry from "./Entry";

const HistoryList = () => {

    const {productId} = useParams();
    const {data, error, isLoading, isSuccess, isError} = useGetHistoryQuery(productId);

    return (
        <div className="centered-container">
            {isSuccess && data && data.entries &&

                <table className="table table-striped table-hover">
                    <thead>
                    <tr>
                        <th>Patient name</th>
                        <th>Patient surname</th>
                        <th>Date</th>
                        <th>Details</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        data.entries.map(entry => (
                            <tr key={entry._id}>
                                {
                                    <HistoryEntry entry={entry} />
                                }
                            </tr>
                        ))
                    }
                    </tbody>
                </table>

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
                <div style={{flexDirection: 'column'}}>
                    <div className="spinner-border text-primary" role="status"
                         style={{width: '15rem', height: '15rem'}}/>
                </div>
            }
        </div>
    )
}

export default HistoryList;