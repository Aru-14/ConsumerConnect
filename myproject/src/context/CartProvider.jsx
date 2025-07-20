// src/context/CartProvider.jsx
import { useState, useEffect } from "react";
import { CartContext } from "./CartContext";

export const CartProvider = ({ children }) => {
  // Initialize cart from localStorage or empty array
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  const removeFromCart = (id) => {
    const updatedCart = cart.filter((item) => Number(item.id) !== Number(id));
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart)); // ✅ Immediate sync
  };

  // Sync cart to localStorage whenever it changes
  useEffect(() => {
    const validCart = cart.filter(
      (item) => item.name && typeof item.price === "number"
    );
    localStorage.setItem("cart", JSON.stringify(validCart));
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, setCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
