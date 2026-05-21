import { BrowserRouter, Routes, Route } from "react-router-dom"
import Homepage from "./pages/Homepage"
import Presentation from "./pages/Presentation"
import Products from "./pages/Products"
import DefaultLayout from "./layouts/DefaultLayout"
import ProductPage from "./pages/ProductPage"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path='/' Component={Homepage} />
            <Route path='/homepage' Component={Homepage} />
            <Route path='/products' Component={Products} />
            <Route path='/company' Component={Presentation} />
            <Route path='/product' Component={ProductPage} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App