import {useParams} from "react-router-dom";
import {useSubmitPredictionDataMutation} from "../../../api/backend";
import {useState} from "react";
import encode from "../../../encoder/encoder";

const Submit = () => {
    const productId = useParams();
    const [makeSubmitRequest, {
        data,
        error,
        isSuccess,
        isError,
        isLoading
    }] = useSubmitPredictionDataMutation();

    const [formData, setFormData] = useState({
        patient_name: '',
        patient_surname: '',
        description: ''
    })
    const {
        patient_name,
        patient_surname,
        description
    } = formData

    const [compressedImageBytes, setCompressedImageBytes] = useState('')

    const submitPredictionRequest = (e) => {
        // We do not want to clear the form.
        e.preventDefault()

        const endpointId = productId['productId']
        const predictionData = {
            'encoded': true,
            'compression': 'lz',
            'data': compressedImageBytes
        }
        const requestData = {
            'data': predictionData,
            ...formData
        }

        return makeSubmitRequest({
            '_id': endpointId,
            'data': requestData
        })
    }

    const handleFormChange = (e) => {
        setFormData(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const handleImageChange = (e) => {
        e.preventDefault()
        // TODO (radek.r) make sure if this is necessary.
        if (e.target.files.length === 0) {
            return
        }

        const fileReader = new FileReader()
        // Setting up the callback on loading finished.
        fileReader.onload = () => {
            if (fileReader.readyState === FileReader.DONE) {
                setCompressedImageBytes(encode(fileReader.result))
            }
        }
        // Call the async function to read the file bytes.
        fileReader.readAsArrayBuffer(e.target.files[0])
    }

    const handleReset = () => {
        setFormData({
            patient_name: '',
            patient_surname: '',
            description: ''
        })
        setCompressedImageBytes('')
    }

    return (
        <div>
            <form className="form centered-container" onSubmit={submitPredictionRequest} onReset={handleReset}>
                <div className="form-group">
                    <div className="mb-3">
                        <input
                            placeholder="Patient name"
                            className="form-control"
                            name="patient_name"
                            value={patient_name}
                            required={true}
                            onChange={handleFormChange}/>
                    </div>
                    <div className="mb-3">
                        <input
                            placeholder="Patient surname"
                            className="form-control"
                            name="patient_surname"
                            value={patient_surname}
                            required={true}
                            onChange={handleFormChange}/>
                    </div>
                    <div className="mb-3">
                        <textarea
                            placeholder="Description"
                            className="form-control"
                            name="description"
                            value={description}
                            required={true}
                            onChange={handleFormChange}/>
                    </div>
                    <div className="mb-3">
                        <input
                            type="file"
                            accept="*/dicom,.dcm, image/dcm, */dcm, .dicom"
                            onChange={handleImageChange}
                            required={true}
                        />
                    </div>
                    <div className="btn-group">
                        <button type="submit" className="btn btn-primary">Submit</button>
                        <button type="reset" className="btn btn-secondary">Reset</button>
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
                        <div>
                            <img src={`data:image/png;base64, ${data.data['image_bytes']}`} alt="Prediction result"/>
                            <div className="alert alert-secondary" role="alert">
                                {data.data['body_part']}
                            </div>
                            <div className="alert alert-success" role="alert">
                                {data.message}
                            </div>
                        </div>
                    }
                </div>
            </section>
        </div>
    )

}

export default Submit;