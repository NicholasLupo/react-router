import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function ProductPage() {

    const { id } = useParams()
    const [product, setProduct] = useState({})

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(rep => rep.json())
            .then(data => {
                setProduct(data)
            })
    }, [])

    return (
        <>
            <section>
                <div className="container">
                    <div className="p-5 mb-4 bg-light rounded-3">
                        <div className="container-fluid py-5">
                            <img src={product.image} alt="" className="p-3" />
                            <p><strong>Nome: </strong>{product.title}</p>
                            <p><strong>Descrizione: </strong>{product.description}</p>
                            <p><strong>Prezzo: </strong>{product.price}€</p>
                            <button className="btn btn-success btn-lg">
                                Acquista <i class="bi bi-cart"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}