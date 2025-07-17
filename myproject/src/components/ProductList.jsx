import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

import { useNavigate } from "react-router-dom";

function ProductList(){
const categories=["Cloths", "Electronics", "Books", "Footwear", "Stationery", "Bags", "Bottle"]
const { cart,setCart } = useContext(CartContext);

const [products,setProducts]=useState([]);

const [category, setCategory] = useState("");
const [minPrice, setMinPrice] = useState("");
const [maxPrice, setMaxPrice] = useState("");
const [minRating, setMinRating] = useState("");
const [viewItem, setViewItem] = useState(null);


const navigate = useNavigate();

const filteredProducts = products.filter((p) => {
  const matchCategory = category === "" || p.category === category;
  const matchMinPrice = minPrice === "" || p.price >= parseInt(minPrice);
  const matchMaxPrice = maxPrice === "" || p.price <= parseInt(maxPrice);
  const matchRating = minRating === "" || p.rating >= parseInt(minRating);

  return matchCategory && matchMinPrice && matchMaxPrice && matchRating;
});

const handleAddToCart = (product) => {
  
  setCart((prevCart) => {
  const isInCart = prevCart.some((item) => item.id === product.id);
  if (isInCart) return prevCart;
  return [...prevCart, product];
});
};

useEffect(()=>{

const ProductsList = [
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

if(!localStorage.getItem("products")){
localStorage.setItem("products",JSON.stringify(ProductsList));

}

const productStored= JSON.parse(localStorage.getItem("products"));
setProducts(productStored);

},[]);



    return(
<>


<button
  onClick={() => navigate("/Cart")}
  className="fixed top-4 right-4 bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded shadow"
>
  🛒 View Cart
</button>

<div className="flex flex-wrap justify-center gap-4 my-4">
  {/* Category Input */}
  <select
  value={category}
  onChange={(e) => setCategory(e.target.value)}
  className="border px-3 py-2 rounded-md shadow-sm"
>
  <option value="">All Categories</option>
  {categories.map((cat) => (
    <option key={cat} value={cat}>
      {cat}
    </option>
  ))}
</select>


  {/* Price Range */}
  <input
    type="text"
    placeholder="Min Price"
    value={minPrice}
    onChange={(e) => setMinPrice(e.target.value)}
    className="border px-3 py-2 rounded-md shadow-sm"
  />
  <input
    type="text"
    placeholder="Max Price"
    value={maxPrice}
    onChange={(e) => setMaxPrice(e.target.value)}
    className="border px-3 py-2 rounded-md shadow-sm"
  />

  {/* Rating Dropdown */}
  <select
    value={minRating}
    onChange={(e) => setMinRating(e.target.value)}
    className="border px-3 py-2 rounded-md shadow-sm"
  >
    <option value="">Min Rating</option>
    {[4, 3, 2, 1].map((r) => (
      <option key={r} value={r}>{r}+</option>
    ))}
  </select>
</div>





<div className="flex flex-wrap justify-center items-center">

















{filteredProducts.map((p)=>(
    <div
  key={p.id}
  className="flex flex-col items-center bg-white rounded-xl shadow-md m-4 p-4 w-64 hover:shadow-lg transition-shadow"
>
  <img
    src={p.image}
    alt={p.name}
    className="w-full h-40 object-cover rounded-md"
  />
  <h1 className="text-lg font-semibold text-gray-800 text-center mt-3">
    {p.name}
  </h1>
  <p className="text-green-600 font-bold mt-1">₹{p.price}</p>
  <p >⭐<span className=" mt-1">{p.rating}</span >  / <span className="text-">5</span></p>
   
   <button
    onClick={() => setViewItem(p)}
    className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
  >
    View Details
  </button>
{cart.some((item) => item.id === p.id) ? (
  <button
    disabled
    className="mt-2 px-4 py-2 bg-gray-400 text-white rounded cursor-not-allowed"
  >
    In Cart
  </button>
) : (
  <button
    onClick={() => handleAddToCart(p)}
    className="mt-2 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded"
  >
    Add to Cart
  </button>
)}

</div>

))}
</div>




{viewItem && (
  <div className="fixed inset-0 bg-gray-200 bg-opacity-7 flex justify-center items-center z-50">
    <div className="bg-white rounded-lg shadow-lg p-6 w-96 relative">
      <h2 className="text-xl font-bold mb-2">{viewItem.name}</h2>
      <img src={viewItem.image} className="w-full h-40 object-cover rounded mb-4" />
      <p><strong>Price:</strong> ₹{viewItem.price}</p>
      <p><strong>Rating:</strong> ⭐ {viewItem.rating}</p>
      <p><strong>Category:</strong> {viewItem.category}</p>
      <button
        onClick={() => setViewItem(null)}
        className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
      >
        Close
      </button>
    </div>
  </div>
)}

</>
    )
}

export default ProductList;