import React, {  useState } from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { ProductContext } from "../context/ProductContext";

import { useNavigate } from "react-router-dom";

function ProductList(){
const categories=["Cloths", "Electronics", "Books", "Footwear", "Stationery", "Bags", "Bottle"]
const { cart,setCart } = useContext(CartContext);
const {products} = useContext(ProductContext);

// const [products,setProducts]=useState([]);

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