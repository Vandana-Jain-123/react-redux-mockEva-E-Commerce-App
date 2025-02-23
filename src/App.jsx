import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { Routes, Route } from "react-router-dom"
import Home from './components/Home'
import ProductList from './components/ProductList'
import Cart from "./components/Cart"
 

function App() {

  return (
    <>
    <Navbar/>
      
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/productList" element={<ProductList />} />
        <Route path="/cartData" element={<Cart />} />
      </Routes>
      {/* <ProductList/> */}

    </>
  )
}

export default App;
