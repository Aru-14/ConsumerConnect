import { useEffect, useState } from "react";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(savedOrders);
  }, []);

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">🧾 My Orders</h1>

      {orders.length === 0 ? (
        <p className="text-gray-600">No orders found.</p>
      ) : (
        orders.map((order, index) => (
          <div key={index} className="border rounded p-4 mb-4 shadow-sm">
            <p className="text-sm text-gray-500">📅 {order.date}</p>
            <p className="font-semibold">📍 Address: {order.address}</p>
            <ul className="mt-2 ml-4 list-disc text-sm text-gray-700">
              {order.items.map((item) => (
                <li key={item.id}>
                  {item.name} — ₹{item.price}
                </li>
              ))}
            </ul>
            <p className="mt-2 font-bold">💰 Total: ₹{order.total}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default MyOrders;
