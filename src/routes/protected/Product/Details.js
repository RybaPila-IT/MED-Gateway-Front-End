import {useParams} from "react-router-dom";
import {useGetProductDetailsQuery} from "../../../api/backend";


const ProductDetails = () => {
    const {productId} = useParams();
    const {data, error, isSuccess, isLoading, isError} = useGetProductDetailsQuery(productId);
    const imageURL = isSuccess ? data['photo_url'] : '';

    return (
        <div>
            {
                isSuccess &&
                <div className="centered-container">
                    <div className="box-big">
                        <img className="image-big" src={imageURL} alt="Big fetus"/>
                        <div className="title-big">
                            {data.name}
                        </div>
                        <div>
                            <div className="title-small aligned-left" style={{marginLeft: '1.5rem'}}>
                                Overview
                            </div>
                            <div className="description-big aligned-left">
                                {data['full_description']}
                            </div>
                        </div>
                        <div>
                            <div className="title-small aligned-left" style={{marginLeft: '1.5rem'}}>
                                Usage
                            </div>
                            <div className="description-big aligned-left">
                                {data['full_description']}
                            </div>
                        </div>
                    </div>
                    {/*<div>*/}
                    {/*    <AdvancedImage cldImg={sampleImage} />*/}
                    {/*</div>*/}
                </div>
            }
            {
                isError &&
                <div>
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

export default ProductDetails;