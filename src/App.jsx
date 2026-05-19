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
          <Route path='/' Component={Products} />
          <Route path='/' Component={Presentation} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App