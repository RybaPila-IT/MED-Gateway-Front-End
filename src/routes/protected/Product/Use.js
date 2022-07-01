import {useParams} from "react-router-dom";
import {format} from "date-fns";
import {useState} from "react";
import {useSubmitPredictionDataMutation} from "../../../api/backend";
import encode from "../../../encoder/encoder";
import PredictionEntry from "../Prediction/Entry";

const UseProduct = () => {
    const productId = useParams();
    const [makeSubmitRequest, {
        data,
        error,
        isSuccess,
        isError,
        isLoading,
        isUninitialized
    }] = useSubmitPredictionDataMutation();

    const [formData, setFormData] = useState({
        patient_name: '',
        patient_surname: '',
        description: ''
    });
    const {
        patient_name,
        patient_surname,
        description
    } = formData;

    const [compressedImageBytes, setCompressedImageBytes] = useState('');

    const submitPredictionRequest = (e) => {
        // We do not want to clear the form.
        e.preventDefault()

        const currentDate = format(new Date(), 'yyyy-MM-dd');
        const endpointId = productId['productId']
        // This request will be passed to the DICOM Converter Service.
        const dicomData = {
            encoded: true,
            compression: 'lz',
            image: compressedImageBytes
        }
        const requestData = {
            date: currentDate,
            dicom_data: dicomData,
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
                            onChange={handleFormChange}
                            contentEditable={isUninitialized}/>
                    </div>
                    <div className="mb-3">
                        <input
                            placeholder="Patient surname"
                            className="form-control"
                            name="patient_surname"
                            value={patient_surname}
                            required={true}
                            onChange={handleFormChange}
                            contentEditable={isUninitialized}/>
                    </div>
                    <div className="mb-3">
                        <textarea
                            placeholder="Description"
                            className="form-control"
                            name="description"
                            value={description}
                            required={true}
                            onChange={handleFormChange}
                            contentEditable={isUninitialized}/>
                    </div>
                    <div className="mb-3">
                        <input
                            type="file"
                            accept="*/dicom,.dcm, image/dcm, */dcm, .dicom"
                            onChange={handleImageChange}
                            required={true}
                            contentEditable={isUninitialized}
                        />
                    </div>
                    {isUninitialized &&
                        <div className="btn-group">
                            <button type="submit" className="btn btn-primary">Submit</button>
                            <button type="reset" className="btn btn-secondary">Reset</button>
                        </div>
                    }
                </div>
            </form>
            <section>
                <div className="centered-container">
                    {
                        isError &&
                        <div className="alert alert-danger" role="alert">
                            {error.data ? error.data.message : JSON.stringify(error)}
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
                        <button className="btn btn-success"
                                data-bs-toggle="modal"
                                data-bs-target="#prediction-modal">
                            Show prediction result
                        </button>
                    }

                    <div className="modal fade"
                         id="prediction-modal"
                         tabIndex="-1"
                         aria-labelledby="modal-title"
                         aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">Prediction result</h5>
                                    <button type="button" className="btn-close" aria-label="Close" data-bs-dismiss="modal" />
                                </div>
                                <div className="modal-body">
                                    {/* TODO (radek.r) Fix this mess. */}
                                    <PredictionEntry details={{
                                        photoUrl: data ? data['photo_url'] : '',
                                        prediction: data ? data['prediction'] : ''
                                    }} />
                                </div>
                                <div className="modal-footer">
                                    <button className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )

}

export default UseProduct;