import {useGetProductsSummaryQuery} from "../../api/backend";
import Product from "./Product";

const Products = () => {

    const {data, error, isLoading, isSuccess, isError} = useGetProductsSummaryQuery();

    return (
        <div className="centered-container">
            {isSuccess && data &&
                data.map(product => <Product product={product} />)
            }
            {
                isError &&
                <div className="alert alert-danger" role="alert">
                    Oops something went wrong. Error:
                    <br/>
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

export default Products;