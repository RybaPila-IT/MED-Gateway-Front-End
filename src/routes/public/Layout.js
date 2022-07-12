import {Outlet} from "react-router-dom";
import Footer from "./Footer";
import PublicNav from "./Nav";

function Layout() {

    return (
        <>
            {/** Navigation bar will be displayed as the fist section. */}
            <PublicNav/>
            {/** Outlet will display any page, at which the user is currently on. */}
            <Outlet/>
            {/** We also include footer for the webpage. */}
            <Footer/>
        </>
    )

}

export default Layout;