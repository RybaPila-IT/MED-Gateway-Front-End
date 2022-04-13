import {useParams} from "react-router-dom";
import {useGetProductDetailsQuery} from "../../../api/backend";

const ProductDetails = () => {

    const {productId} = useParams();
    const {data, error, isSuccess, isLoading, isError} = useGetProductDetailsQuery(productId);

    return (
        <div>
            <h1>Details of {productId} product</h1>
            {
                isSuccess &&
                <div>
                    {JSON.stringify(data)}
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