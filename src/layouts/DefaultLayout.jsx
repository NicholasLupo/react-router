import { Outlet } from "react-router-dom";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function DefaultLayout({ products, setVisibleProducts }) {
    const [budgetMode, setBudgetMode] = useState(false)

    function BudgetButton() {
        if (!budgetMode) {
            setVisibleProducts(products.filter(article => article.price <= 30))
            setBudgetMode(true)
        } else {
            setVisibleProducts(products)
            setBudgetMode(false)
        }
    }

    return (
        <>
            <Navbar BudgetButton={BudgetButton} />
            <Outlet />
            <Footer />
        </>
    )
}