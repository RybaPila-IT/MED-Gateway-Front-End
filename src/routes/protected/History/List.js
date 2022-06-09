import {useParams} from "react-router-dom";
import {useGetHistoryQuery} from "../../../api/backend";
import HistoryEntry from "./Entry";
import SubmissionDetails from "../Submission/Details";
import PredictionEntry from "../Prediction/Entry";
import {useState} from "react";

const HistoryList = () => {

    const {productId} = useParams();
    const {data, error, isLoading, isSuccess, isError} = useGetHistoryQuery(productId);

    const [submissionDetails, setSubmissionDetails] = useState({
        patientName: '',
        patientSurname: '',
        description: '',
        date: ''
    });

    const [predictionDetails, setPredictionDetails] = useState({
        photoUrl: '',
        prediction: ''
    });


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
                                    <HistoryEntry entry={entry}
                                                  setSubmissionDetails={setSubmissionDetails}
                                                  setPredictionDetails={setPredictionDetails}/>
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

            {/* TODO (radek.r) probably use Redux store for handling current prediction entry displayed by modal. */}
            {/* Code of the details modal */}
            <div className="modal fade"
                 id="details-modal"
                 tabIndex="-1"
                 aria-labelledby="modal-title"
                 aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Details</h5>
                            <button type="button" className="btn-close" aria-label="Close" data-bs-dismiss="modal"/>
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <div className="col">
                                    <SubmissionDetails details={submissionDetails}/>
                                </div>
                                <div className="col">
                                    <PredictionEntry details={predictionDetails} />
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default HistoryList;