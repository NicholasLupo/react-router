import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Homepage() {


    return (
        <>
            <section>
                <div className="container">
                    <div className="p-5 mb-4 bg-light rounded-3">
                        <div className="container-fluid py-5 text-center">
                            <h1 className="display-5 fw-bold">Benvenuto in FakeStore</h1>
                            <p className="col fs-4">
                                Vuoi comprare qualcosa ma allo stesso tempo non vuoi comprare qualcosa?
                            </p>
                            <Link to='/products' className="col fs-2 btn btn-primary">
                                <strong>Noi siamo la tua soluzione!!!</strong>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}