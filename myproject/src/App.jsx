// import { useState } from 'react'
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./Components/Home"
// import About from './Components/About.jsx'
import ProductList from './components/ProductList.jsx'
import CartDisplay from './components/CartDisplay.jsx'
import Checkout from './components/Checkout.jsx'
import Login from './components/Login.jsx'
import './App.css'
import OrderConfirmation from './components/OrderConfirmation.jsx'
import MyOrders from './components/MyOrders.jsx'
import { AdminDashBoard } from './admin/AdminDashBoard.jsx'
function App() {
  

  return (
    <>

    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/ProductList" element={<ProductList/>}/>
         <Route path="/Cart" element={<CartDisplay />} />
          <Route path="/Checkout" element={<Checkout />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/OrderConfirmation" element={<OrderConfirmation />} />
          <Route path="/MyOrders" element={<MyOrders />} />
          <Route path="/AdminDashBoard" element={<AdminDashBoard />} />
        {/* <Route path="/Products" element={<Products/>}/> */}

    </Routes>
 
    </>
  )
}

export default App;