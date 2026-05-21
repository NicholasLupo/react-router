import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Presentation from "../pages/Presentation";
import Products from "../pages/Products";
import Footer from "../components/Footer";

export default function DefaultLayout() {


    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}