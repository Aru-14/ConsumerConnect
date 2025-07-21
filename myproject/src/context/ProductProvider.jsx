

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
  },
  {
    id: 4,
    name: "Sports Shoes",
    price: 2499,
    rating: 4,
    category: "Footwear",
    image: "/images/shoes.jpg"
  },
  {
    id: 5,
    name: "Smartphone",
    price: 12999,
    rating: 5,
    category: "Electronics",
    image: "/images/smartphone.jpg"
  },
  {
    id: 6,
    name: "Notebook Set",
    price: 149,
    rating: 3,
    category: "Stationery",
    image: "/images/notebook.jpg"
  },
  {
    id: 7,
    name: "Wrist Watch",
    price: 1599,
    rating: 4,
    category: "Electronics",
    image: "/images/watch.jpg"
  },
  {
    id: 8,
    name: "Backpack",
    price: 899,
    rating: 4,
    category: "Bags",
    image: "/images/backpack.jpg"
  },
  {
    id: 9,
    name: "LED Desk Lamp",
    price: 699,
    rating: 5,
    category: "Electronics",
    image: "/images/lamp.jpg"
  },
  {
    id: 10,
    name: "Water Bottle",
    price: 249,
    rating: 4,
    category: "Bottle",
    image: "/images/bottle.jpg"
  }
];
export const ProductProvider = ({ children }) => {

  
  const [removeFromCart] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });
  const [products, setProducts] = useState(() => {
    const stored = localStorage.getItem("products");
    return stored ? JSON.parse(stored) : defaultProducts;
  });

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

const addProduct = (product) => {
    setProducts((prev) => [...prev, product]);
  };

  
  const deleteProduct = (id) => {
    setProducts((prev) => prev.filter((product) => product.id !== id));

   
    removeFromCart(id);
  };

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
