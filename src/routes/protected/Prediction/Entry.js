const PredictionEntry = ({photoUrl, prediction}) => {

    return (
        <div>
            <div className="alert-success">
                <h1>Prediction result</h1>
            </div>
            <img src={photoUrl}
                 alt="Prediction preview"
                 width='400px'
                 height='400px'/>
            <div className="alert-info"
                 style={{margin: '0.5rem auto'}}>
                {JSON.stringify(prediction)}
            </div>
        </div>
    )
}


export default PredictionEntry;