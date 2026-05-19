import Navbar from "../components/Navbar";

export default function Products() {



    return (
        <>
            <Navbar />
            <section>
                <div className="container">
                    <div className="p-5 mb-4 bg-light rounded-3">
                        <div className="container-fluid py-5 text-center">
                            <h1 className="display-5 fw-bold">I nostri prodotti</h1>
                            <p className="col fs-4">
                                A volte è noioso guardare prodotti dove non puoi averli in mano, quindi perché non guardiamo prodotti che non esistono???
                            </p>
                            <p className="col fs-2">
                                <strong>Dai un occhiata!!!</strong>
                            </p>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}