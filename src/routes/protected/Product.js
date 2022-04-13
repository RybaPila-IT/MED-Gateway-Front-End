import fetus from "../../fetus.png";

const Product = ({product}) => {
    return (
        <div className="product-card">
            <img className="product-img" src={fetus} alt="Fetus"/>
            <div className="product-title">
                {product['name']}
            </div>
            <div className="product-description">
                {product['short_description']}
            </div>
        </div>
    )
}

export default Product;