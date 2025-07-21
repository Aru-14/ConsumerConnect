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
      navigate("/");
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
   <div className="p-6 max-w-xl mx-auto bg-white rounded-lg shadow text-center">
  <h1 className="text-2xl font-bold mb-4 text-green-700">Order Confirmed!</h1>

  <div className="text-left mb-6">
    <p className="mb-1"><span className="font-medium">Placed on:</span> {order.date}</p>
    <p className="mb-1"><span className="font-medium">Shipping to:</span> {order.address}</p>
  </div>

  <h2 className="text-lg font-semibold mb-3 text-left">Items:</h2>

  <div className="overflow-x-auto mb-4">
    <table className="w-full text-left border border-gray-300">
      <thead className="bg-gray-100">
        <tr>
          <th className="py-2 px-3 border-b border-gray-300">#</th>
          <th className="py-2 px-3 border-b border-gray-300">Item</th>
          <th className="py-2 px-3 border-b border-gray-300 text-right">Price (₹)</th>
        </tr>
      </thead>
      <tbody>
        {order.items.map((item, idx) => (
          <tr key={idx} className="border-t border-gray-200">
            <td className="py-2 px-3">{idx + 1}</td>
            <td className="py-2 px-3">{item.name}</td>
            <td className="py-2 px-3 text-right">₹{item.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>

  <p className="font-bold text-xl text-right mb-6">Total: ₹{order.total}</p>

  <p className="mt-4 text-sm text-gray-500 italic">Redirecting you to products...</p>
</div>

  );
};

export default OrderConfirmation;
