import {useNavigate} from "react-router-dom";
import {AbsolutePaths} from "../../Paths";
import cloudinary from "../../../api/cloudinary";

const Product = ({product}) => {

    const productImage = cloudinary.image(product.picture);
    const navigate = useNavigate();

    const redirectToProductDetails = () => {
        navigate(AbsolutePaths.productDetails.replace(':productId', product._id));
    }

    return (
        <div className="box-small">
            <img className="image-small" src={productImage.toURL()} alt="Small fetus"/>
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
                <button className="btn btn-secondary col-3" disabled={true}>
                    Use
                </button>
                <button className="btn btn-dark col-3" disabled={true}>
                    History
                </button>
            </div>
        </div>
    )
}

export default Product;