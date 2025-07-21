import { useContext, useState, useEffect } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate,useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
const Checkout = () => {
  const { cart, setCart } = useContext(CartContext);
  const {isLoggedIn}=useContext(AuthContext);
  const location=useLocation();

  const [address, setAddress] = useState("");
  const navigate = useNavigate();

  const total = cart.reduce((sum, item) => sum + item.price, 0);


useEffect(() => {
  if (!isLoggedIn) {
    navigate("/Login", {
      state: { from: "/Checkout" },
    });
  }
}, [isLoggedIn, navigate, location.pathname]);



  const handlePlaceOrder = () => {
    if (!address.trim()) {
      alert("Please enter your address.");
      return;
    }

    const order = {
      items: cart,
      total,
      address,
      date: new Date().toLocaleString()
    };

    
const orderHistory = JSON.parse(localStorage.getItem("orders")) || [];
orderHistory.push(order); 
localStorage.setItem("orders", JSON.stringify(orderHistory)); 

localStorage.setItem("lastOrder", JSON.stringify(order)); 

    setCart([]); 

    navigate("/OrderConfirmation");
  };

  return (
 <div className="p-6 max-w-xl mx-auto mt-10 bg-white rounded-xl shadow-lg">
  <h1 className="text-2xl font-bold mb-6 text-green-600 mb-5 pb-2">Checkout</h1>

  <label className="block text-gray-700 font-medium mb-2" htmlFor="address">
  Shipping Address
</label>
<input
  id="address"
  type="text"
  placeholder="Enter your shipping address..."
  className="w-full border border-gray-300 p-3 mb-6 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
  value={address}
  onChange={(e) => setAddress(e.target.value)}
/>

  <div className="mb-6">
    <h2 className="text-lg font-semibold mb-3 text-gray-800">Your Items</h2>
    <ul className="divide-y divide-gray-200">
      {cart.map((item) => (
        <li
          key={item.id}
          className="flex justify-between py-2 text-gray-700"
        >
          <span>{item.name}</span>
          <span>₹{item.price}</span>
        </li>
      ))}
    </ul>
  </div>

  <p className="text-right font-bold text-xl text-gray-900 mb-6">
    Total: ₹{total}
  </p>

  <button
    onClick={handlePlaceOrder}
    className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 rounded-lg transition duration-200"
  >
    Place Order
  </button>
</div>


  );
};

export default Checkout;
