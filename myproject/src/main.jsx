
import { ProductProvider } from './context/ProductProvider.jsx';
import { CartProvider } from './context/CartProvider';
import { AuthProvider } from './context/AuthProvider.jsx';
import React from 'react'
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';


import './index.css'; 

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
  <BrowserRouter>
  <AuthProvider>
    <CartProvider>
<ProductProvider>
 
      <App />
    
    </ProductProvider>
    </CartProvider>
    </AuthProvider>

  </BrowserRouter>
  </React.StrictMode>
);
