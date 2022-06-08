import {useParams} from "react-router-dom";

const HistoryList = () => {

    const {productId} = useParams();

    return (
        <>
            <h1>This is history list of product {productId}!!!</h1>
        </>
    )
}

export default HistoryList;