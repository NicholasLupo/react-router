export default function Navbar() {


    return (
        <>
            <section className="d-flex justify-content-between mx-5">
                <nav className="navbar navbar-expand-md navbar-light">
                    <a className="navbar-brand fs-1" href="/homepage">FakeStore</a>
                </nav>
                <nav className="navbar navbar-expand-md navbar-light ">
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
                                <a className="nav-link active" href="/homepage" aria-current="page">
                                    Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/products">Products</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/company">Company</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </section>
        </>
    )
}