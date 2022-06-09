import {format} from "date-fns";
import {FaInfo} from "react-icons/fa";

// TODO (radek.r) add handling Predictions which do not have photo as the result.
const HistoryEntry = ({entry, setSubmissionDetails, setPredictionDetails}) => {

    const {
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

    // TODO (radek.r) probably use Redux store for handling current prediction entry displayed by modal.
    const setDetails = () => {
        setSubmissionDetails({
            patientName,
            patientSurname,
            date: dateToDisplay,
            description
        });
        setPredictionDetails({
            photoUrl,
            prediction
        });
    }

    return (
        <>
            <td>{patientName}</td>
            <td>{patientSurname}</td>
            <td>{dateToDisplay}</td>
            <td>
                <button className="btn btn-warning"
                        data-bs-toggle="modal"
                        data-bs-target="#details-modal"
                        onClick={setDetails}>
                    Info <FaInfo style={{margin: 'auto auto 0.25rem auto'}}/>
                </button>
            </td>
        </>
    )

}

export default HistoryEntry;