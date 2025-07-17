// import { useState } from 'react'
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./Components/Home"
// import About from './Components/About.jsx'
import ProductList from './components/ProductList.jsx'
import CartDisplay from './components/CartDisplay.jsx'
import './App.css'

function App() {
  

  return (
    <>

    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/ProductList" element={<ProductList/>}/>
         <Route path="/Cart" element={<CartDisplay />} />
        {/* <Route path="/Products" element={<Products/>}/> */}

    </Routes>
 
    </>
  )
}

export default App;