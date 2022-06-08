import {format} from "date-fns";
import {FaInfo} from "react-icons/fa";
import PredictionEntry from "../Prediction/Entry";
import SubmissionDetails from "../Submission/Details";

// TODO (radek.r) add handling Predictions which do not have photo as the result.
const HistoryEntry = ({entry}) => {

    const {
        _id: Id,
        patient_name: patientName,
        patient_surname: patientSurname,
        date: dateStr,
        description,
        photo_url: photoUrl,
        prediction
    } = entry;

    const dateFormat = "dd MMM yyyy";
    const dateObj = new Date(dateStr);
    const dateToDisplay = format(dateObj, dateFormat);

    return (
        <>
            <td>{patientName}</td>
            <td>{patientSurname}</td>
            <td>{dateToDisplay}</td>
            <td>
                <button className="btn btn-warning"
                        data-bs-toggle="modal"
                        data-bs-target={`#details-modal-${Id}`}>
                    Info <FaInfo style={{margin: 'auto auto 0.25rem auto'}}/>
                </button>
            </td>


            {/* Code of the details modal */}
            <div className="modal fade"
                 id={`details-modal-${Id}`}
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
                                    <SubmissionDetails patientName={patientName}
                                                       patientSurname={patientSurname}
                                                       description={description}
                                                       date={dateToDisplay}/>
                                </div>
                                <div className="col">
                                    <PredictionEntry photoUrl={photoUrl} prediction={prediction} />
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default HistoryEntry;