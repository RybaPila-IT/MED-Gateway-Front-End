const SubmissionDetails = ({patientName, patientSurname, date, description}) => {

    return (
        <>
            <div className="alert-success">
                <h1>Submission details</h1>
            </div>
            <div className="alert-info" style={{paddingTop: '1rem', paddingBottom: '1rem'}}>
                <div className="row" style={{margin: '0 auto 1rem auto'}}>
                    <div className="col">Patient name</div>
                    <div className="col">{patientName}</div>
                </div>
                <div>
                    <div className="row" style={{margin: '1rem'}}>
                        <div className="col">Patient surname</div>
                        <div className="col">{patientSurname}</div>
                    </div>
                </div>
                <div>
                    <div className="row" style={{margin: '1rem'}}>
                        <div className="col">Description</div>
                        <div className="col"><span>{description}</span></div>
                    </div>
                </div>
                <div>
                    <div className="row" style={{marginTop: '1rem'}}>
                        <div className="col">Date</div>
                        <div className="col">{date}</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SubmissionDetails;