import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Presentation from "../pages/Presentation";
import Products from "../pages/Products";

export default function DefaultLayout() {


    return (
        <>
            <Navbar />
            <Outlet />
        </>
    )
}