// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
import { ProductProvider } from './context/ProductProvider.jsx';
import { CartProvider } from './context/CartProvider';
import { AuthProvider } from './context/AuthProvider.jsx';
import React from 'react'
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';


import './index.css'; // if you’re using Tailwind or custom styles

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
  <BrowserRouter>
  <AuthProvider>
    <CartProvider>
<ProductProvider>
     {/* 🎒 Wrapping your app with the backpack */}
      <App />
    
    </ProductProvider>
    </CartProvider>
    </AuthProvider>

  </BrowserRouter>
  </React.StrictMode>
);