import { BrowserRouter, Routes, Route } from "react-router-dom"
import Homepage from "./pages/Homepage"
import Presentation from "./pages/Presentation"
import Products from "./pages/Products"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={Homepage} />
          <Route path='/homepage' Component={Homepage} />
          <Route path='/products' Component={Products} />
          <Route path='/company' Component={Presentation} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App