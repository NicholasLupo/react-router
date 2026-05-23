import { Link } from "react-router-dom";

export default function Navbar({ BudgetButton }) {


    return (
        <>
            <section className="d-flex justify-content-between mx-5">
                <nav className="navbar navbar-expand-md navbar-light">
                    <Link to='/homepage' className="navbar-brand fs-1">FakeStore</Link>
                </nav>
                <nav className="navbar navbar-expand-md navbar-light">
                    <button
                        className="navbar-toggler d-lg-none"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapsibleNavId"
                        aria-controls="collapsibleNavId"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav me-auto mt-2 mt-lg-0 fs-5">
                            <li className="nav-item">
                                <Link to='/homepage' className="nav-link" aria-current="page">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/product' className="nav-link">Products</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/company' className="nav-link">Company</Link>
                            </li>
                        </ul>
                    </div>
                    <button className="btn btn-success" onClick={BudgetButton}>
                        Budget Mode
                    </button>
                </nav>
            </section>
        </>
    )
}