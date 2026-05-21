import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function ProductPage() {

    const { id } = useParams()
    const [product, setProduct] = useState([])

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(rep => rep.json())
            .then(data => {
                setProduct(data)
            })
    }, [id])

    return (
        <>
            <section>
                <div className="container">
                    <div className="p-5 mb-4 bg-light rounded-3">
                        <div className="container-fluid py-5 text-center">
                            <h1>Product id: {id}</h1>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}