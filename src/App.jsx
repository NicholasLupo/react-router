import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useEffect, useState } from "react"
import Homepage from "./pages/Homepage"
import Presentation from "./pages/Presentation"
import Products from "./pages/Products"
import DefaultLayout from "./layouts/DefaultLayout"
import ProductPage from "./pages/ProductPage"
import NotFoundPage from "./pages/NotFoundPage"
import { BudgetContext } from "./context/BudgetContext"

function App() {
  const [products, setProducts] = useState([])
  const [visibleProducts, setVisibleProducts] = useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(rep => rep.json())
      .then(data => {
        setProducts(data)
        setVisibleProducts(data)
      })
  }, [])

  return (
    <>
      <BudgetContext>
        <BrowserRouter>
          <Routes>
            <Route element={<DefaultLayout products={products} setVisibleProducts={setVisibleProducts} />}>
              <Route path='/' Component={Homepage} />
              <Route path='/homepage' Component={Homepage} />
              <Route path='/product' element={<Products product={visibleProducts} />} />
              <Route path='/company' Component={Presentation} />
              <Route path='/products/:id' Component={ProductPage} />
              <Route path="*" Component={NotFoundPage} />
            </Route>
          </Routes>
        </BrowserRouter>
      </BudgetContext>
    </>
  )
}

export default App