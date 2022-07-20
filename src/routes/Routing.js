import {Routes, Route} from 'react-router-dom';
import {RelativePaths} from "./Paths";
import PublicHome from './public/Home';
import Login from "./public/Login";
import Register from "./public/Register";
import PublicLayout from "./public/Layout";
import ProtectedNav from "./protected/Nav";
import NotFound from "./error/NotFound";
import ProtectedHome from './protected/Home';
import ProductList from "./protected/Product/List";
import ProductDetails from "./protected/Product/Details";
import UseProduct from './protected/Product/Use'
import Logout from "./protected/Logout";
import ProtectedRoute from "./protected/ProtectedRoute";
import HistoryList from "./protected/History/List";
import ResendMail from "./public/ResendMail";

export default function Routing() {
    return (
        <Routes>
            {/* Publicly available routes. */}
            <Route path={RelativePaths.home} element={<PublicLayout/>}>
                <Route index element={<PublicHome/>}/>
                <Route path={RelativePaths.login} element={<Login/>}/>
                <Route path={RelativePaths.register} element={<Register/>}/>
                <Route path={RelativePaths.resendMail} element={<ResendMail/>}/>
            </Route>
            {/* Start of the protected routes. */}
            <Route path={RelativePaths.authenticated} element={<ProtectedRoute/>}>
                <Route path={RelativePaths.authenticatedHome} element={<ProtectedNav/>}>
                    <Route index element={<ProtectedHome/>}/>
                    <Route path={RelativePaths.products} element={<ProductList/>}/>
                    <Route path={RelativePaths.productDetails} element={<ProductDetails/>}/>
                    <Route path={RelativePaths.logout} element={<Logout/>}/>
                    <Route path={RelativePaths.submitPrediction} element={<UseProduct/>}/>
                    <Route path={RelativePaths.productHistory} element={<HistoryList/>}/>
                </Route>
            </Route>
            {/* Page not found handler. */}
            <Route path={RelativePaths.notFound} element={<NotFound/>}/>
        </Routes>
    )
}