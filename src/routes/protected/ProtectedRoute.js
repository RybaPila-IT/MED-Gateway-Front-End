import {useSelector} from "react-redux";
import {Outlet} from "react-router-dom";
import NotFound from "../error/NotFound";

const ProtectedRoute = () => {
    const {_id, state, token} = useSelector(state => state.authentication);
    const authenticated = function () {
        return _id !== null &&
            state !== null &&
            token !== null;
    }();
    return authenticated ?
        <Outlet /> :
        <NotFound />
}

export default ProtectedRoute;