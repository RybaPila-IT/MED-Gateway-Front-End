import {Routes, Route} from 'react-router-dom';
import {RelativePaths} from "./Paths";
import Home from './public/Home';
import Login from "./public/Login";
import Register from "./public/Register";
import Nav from "./public/Nav";
import NotFound from "./error/NotFound";

export default function Routing() {
    return (
        <Routes>
            <Route path={RelativePaths.home} element={<Nav />}>
                <Route index element={<Home />} />
                <Route path={RelativePaths.login} element={<Login />} />
                <Route path={RelativePaths.register} element={<Register />} />
            </Route>
            <Route path={RelativePaths.notFound} element={<NotFound />} />
        </Routes>
    )
}