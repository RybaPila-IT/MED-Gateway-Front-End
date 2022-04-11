import {useSelector} from "react-redux";
import {Route} from "react-router-dom";
import {NotFound} from "../error/NotFound";

export const ProtectedRoute = ({component: Component, ...rest}) => {

    const {_id, state, token} = useSelector(state => state.authenticate);

    const isUserAuthenticated = () => {
        return _id !== null &&
            state !== null &&
            token !== null;
    }

    return (
        <Route {...rest} render={
            props => {
                if (isUserAuthenticated()) {
                    return <Component {...props} />
                }
                return <NotFound {...props} />
            }
        }/>
    )
}