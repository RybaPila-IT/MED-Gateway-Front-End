import {Routes, Route} from 'react-router-dom';
import {RelativePaths} from "./Paths";
import PublicHome from './public/Home';
import Login from "./public/Login";
import Register from "./public/Register";
import PublicNav from "./public/Nav";
import ProtectedNav from "./protected/Nav";
import NotFound from "./error/NotFound";
import ProtectedHome from './protected/Home';
import ProductList from "./protected/Product/List";
import Logout from "./protected/Logout";
import ProtectedRoute from "./protected/ProtectedRoute";


export default function Routing() {
    return (
        <Routes>
            <Route path={RelativePaths.home} element={<PublicNav />}>
                <Route index element={<PublicHome />} />
                <Route path={RelativePaths.login} element={<Login />} />
                <Route path={RelativePaths.register} element={<Register />} />
            </Route>

            <Route path={RelativePaths.authenticated} element={<ProtectedRoute />}>
                <Route path={RelativePaths.authenticatedHome} element={<ProtectedNav />} >
                    <Route index element={<ProtectedHome />} />
                    <Route path={RelativePaths.products} element={<ProductList />} />
                    <Route path={RelativePaths.logout} element={<Logout />} />
                </Route>
            </Route>

            <Route path={RelativePaths.notFound} element={<NotFound />} />
        </Routes>
    )
}