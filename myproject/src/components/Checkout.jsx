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

    // Save order and clear cart
const orderHistory = JSON.parse(localStorage.getItem("orders")) || [];
orderHistory.push(order); // add this order to full history
localStorage.setItem("orders", JSON.stringify(orderHistory)); // 🔁 keeps all old orders

localStorage.setItem("lastOrder", JSON.stringify(order)); // ✅ just for order confirmation

    setCart([]); // localStorage will auto-sync via CartProvider

    navigate("/OrderConfirmation");
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>

      <textarea
        placeholder="Enter your shipping address..."
        className="w-full border p-3 mb-4 rounded"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      ></textarea>

      <div className="mb-4">
        <h2 className="text-lg font-semibold mb-2">Your Items:</h2>
        {cart.map((item) => (
          <p key={item.id}>🛍 {item.name} — ₹{item.price}</p>
        ))}
      </div>

      <p className="text-right font-bold text-xl mb-4">Total: ₹{total}</p>

      <button
        onClick={handlePlaceOrder}
        className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
      >
        Place Order
      </button>
    </div>
  );
};

export default Checkout;
