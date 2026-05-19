export default function Homepage() {


    return (
        <>
            <section className="d-flex justify-content-around">
                <nav className="navbar navbar-expand-md navbar-light">
                    <a className="navbar-brand" href="/homepage">FakeStore</a>
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
                        <ul className="navbar-nav me-auto mt-2 mt-lg-0">
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