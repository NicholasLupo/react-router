import Navbar from "../components/Navbar";

export default function Homepage() {


    return (
        <>
            <Navbar />
            <section>
                <div className="container">
                    <div className="p-5 mb-4 bg-light rounded-3">
                        <div className="container-fluid py-5 text-center">
                            <h1 className="display-5 fw-bold">Benvenuto in FakeStore</h1>
                            <p className="col fs-4">
                                Vuoi comprare qualcosa ma allo stesso tempo non vuoi comprare qualcosa?
                            </p>
                            <a className="col fs-2 btn btn-primary" href="/products">
                                <strong>Noi siamo la tua soluzione!!!</strong>
                            </a>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}