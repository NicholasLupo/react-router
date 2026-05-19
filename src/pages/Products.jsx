import { useState } from "react";
import Navbar from "../components/Navbar";

export default function Products() {

    const [product, setProduct] = useState([])

    fetch('https://fakestoreapi.com/products')
        .then(rep => rep.json())
        .then(data => {
            setProduct(data)
        })

    return (
        <>
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
            <div className="container">
                <div className="row row-cols-1 row-cols-md-3 g-3">
                    {
                        product.map(article => (
                            <div className="card" key={article.id}>
                                <img src={article.image} alt="" className="p-3" />
                                <div className="card-body">
                                    <p><strong>Nome: </strong>{article.title}</p>
                                    <p><strong>Descrizione: </strong>{article.description}</p>
                                    <p><strong>Prezzo: </strong>{article.price}€</p>
                                    <button className="btn btn-success">
                                        Acquista <i class="bi bi-cart"></i>
                                    </button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}