import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import { Route, Routes } from "react-router-dom"
import HomePage from "./Pages/HomePage"
import ProductDetails from './Pages/ProductDetails';
import Cart from "./Pages/Cart";
function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/product/id" element={<ProductDetails/>}/>

    </Routes>
    <Footer/>
    </>
  )
}

export default App