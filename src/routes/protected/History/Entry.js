import {format} from "date-fns";
import {FaInfo} from "react-icons/fa";

const HistoryEntry = ({entry}) => {

    const {
        patient_name: patientName,
        patient_surname: patientSurname,
        date: dateStr,
        description,
        has_photo: hasPhoto,
        photo_url: photoUrl
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
                <button className="btn btn-warning">Info <FaInfo style={{margin: 'auto auto 0.25rem auto'}}/> </button>
            </td>

        </>
    )

}

export default HistoryEntry;