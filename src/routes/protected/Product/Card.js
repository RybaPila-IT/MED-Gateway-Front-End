import {useNavigate} from "react-router-dom";
import {AbsolutePaths} from "../../Paths";

const ProductCard = ({product}) => {

    const navigate = useNavigate();
    const isActive = product['is_active'];
    const productImgURL = product['photo_url'];


    const redirectToProductDetails = () => {
        navigate(AbsolutePaths.productDetails.replace(':productId', product._id));
    }

    const redirectToSubmitForm = () => {
        navigate(AbsolutePaths.submitPrediction.replace(':productId', product._id));
    }

    const redirectToProductHistory = () => {
        navigate(AbsolutePaths.productHistory.replace(':productId', product._id));
    }

    return (
        <div className="box-small">
            <img className="image-small" src={productImgURL} alt="Card logo"/>
            <div className="title-small">
                {product['name']}
            </div>
            <div className="description-small">
                {product['short_description']}
            </div>
            <div className="btn-group" style={{marginTop: '2rem'}}>
                <button className="btn btn-primary col-3" onClick={redirectToProductDetails}>
                    Info
                </button>
                <button className="btn btn-secondary col-3" onClick={redirectToSubmitForm} disabled={!isActive}>
                    Use
                </button>
                <button className="btn btn-dark col-3" onClick={redirectToProductHistory} disabled={!isActive}>
                    History
                </button>
            </div>
        </div>
    )
}

export default ProductCard;