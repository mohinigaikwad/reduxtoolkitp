// import './App.css'
import { Routes,Route } from "react-router-dom";
import Home from "./pagges/Home";
import Cart from "./pagges/Cart";
import Navbar from "./componets/Navbar";

function App() {

  return (
    <>
    
        <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>


    </>
  )
}

export default App
