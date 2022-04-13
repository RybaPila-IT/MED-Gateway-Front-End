import {useNavigate} from "react-router-dom";
import {AbsolutePaths} from "../../Paths";
import fetus from "../../../fetus.png";

const Product = ({product}) => {

    const navigate = useNavigate();

    const redirectToProductDetails = () => {
        navigate(AbsolutePaths.productDetails.replace(':productId', product._id));
    }

    return (
        <div className="product-card">
            <img className="product-img" src={fetus} alt="Fetus"/>
            <div className="product-title">
                {product['name']}
            </div>
            <div className="product-description">
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