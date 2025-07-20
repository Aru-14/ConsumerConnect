

import {useState, useEffect} from "react";

import { CartContext } from "./CartContext";

import { ProductContext } from "./ProductContext";
const defaultProducts = [
  {
    id: 1,
    name: "Classic T-Shirt",
    price: 499,
    rating: 4,
    category: "Cloths",
    image: "/images/tshir.png"
  },
  {
    id: 2,
    name: "Wireless Earbuds",
    price: 1999,
    rating: 5,
    category: "Electronics",
    image: "/images/earbuds.jpg"
  },
  {
    id: 3,
    name: "Fiction Novel",
    price: 299,
    rating: 3,
    category: "Books",
    image: "/images/novel.jpg"
  }
];

export const ProductProvider = ({ children }) => {
  // Load from localStorage or fallback
  const [removeFromCart] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });
  const [products, setProducts] = useState(() => {
    const stored = localStorage.getItem("products");
    return stored ? JSON.parse(stored) : defaultProducts;
  });

  // Sync with localStorage on every update
  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

const addProduct = (product) => {
    setProducts((prev) => [...prev, product]);
  };

  // 🔨 Delete product
  const deleteProduct = (id) => {
    setProducts((prev) => prev.filter((product) => product.id !== id));

    // ✅ Remove from cart if it exists
    removeFromCart(id);
  };

  // 🔨 Edit product
  const editProduct = (updatedProduct) => {
    setProducts((prev) =>
      prev.map((p) => (p.id === updatedProduct.id ? updatedProduct : p))
    );
  };

  return (
    <ProductContext.Provider value={{ products,addProduct, deleteProduct, editProduct ,setProducts }}>
      {children}
    </ProductContext.Provider>
  );
};
