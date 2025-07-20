import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const OrderConfirmation = () => {
  const [order, setOrder] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const savedOrder = localStorage.getItem("lastOrder");
    if (savedOrder) {
      setOrder(JSON.parse(savedOrder));
    }

    // Redirect after 4 seconds
    const timer = setTimeout(() => {
      navigate("/ProductList");
    }, 4000);

    return () => clearTimeout(timer);
  }, [navigate]);

  if (!order) {
    return (
      <div className="p-6 text-center">
        <h2 className="text-xl font-bold mb-4">No order found</h2>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-xl mx-auto text-center">
      <h1 className="text-2xl font-bold mb-2 text-green-700">✅ Order Confirmed!</h1>
      <p className="mb-1">🕒 Placed on: {order.date}</p>
      <p className="mb-3">📍 Shipping to: {order.address}</p>

      <h2 className="text-lg font-semibold mb-2">🛍 Items:</h2>
      {order.items.map((item, idx) => (
        <p key={idx}>- {item.name} — ₹{item.price}</p>
      ))}

      <p className="font-bold text-xl mt-4">Total: ₹{order.total}</p>
      <p className="mt-4 text-sm text-gray-500">Redirecting you to products...</p>
    </div>
  );
};

export default OrderConfirmation;
