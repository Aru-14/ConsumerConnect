// import React, { useContext } from "react";
// import { CartContext } from "../context/CartContext";

// function CartDisplay() {
//   const { cart, removeFromCart } = useContext(CartContext);



//   function calculatePrice(){

//   }
//   return (
//     <>
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-4">🛒 Your Cart</h1>

//       {cart.length === 0 ? (
//         <p className="text-gray-600">Your cart is empty.</p>
//       ) : (
//         cart.map((item) => (
//           <div
//             key={item.id}
//             className="border p-4 mb-4 rounded shadow bg-white flex items-center justify-between"
//           >
//             <div className="flex items-center">
//               <img
//                 src={item.image}
//                 alt={item.name}
//                 className="w-24 h-24 object-cover rounded mr-4"
//               />
//               <div>
//                 <h2 className="text-lg font-semibold">{item.name}</h2>
//                 <p className="text-green-600 font-bold">₹{item.price}</p>
//                 <p>{item.rating} / 5</p>
//               </div>
//             </div>
//             <button
//               onClick={() => removeFromCart(item.id)}
//               className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
//             >
//               Remove
//             </button>
//           </div>
//         ))
//       )}
//     </div>

//     <div>
//       <h1>Total Price:{calculatePrice()}</h1>
//     </div>
//     </>
//   );
// }

// export default CartDisplay;

// src/components/CartDisplay.jsx
import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartDisplay = () => {
  const { cart, removeFromCart } = useContext(CartContext);
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">🛒 Your Cart</h1>
      {cart.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        cart.map((item) => (
          <div key={item.id} className="flex justify-between items-center p-4 border mb-3 rounded">
            <div className="flex items-center gap-4">
              <img src={item.image} alt={item.name} className="w-20 h-20 object-cover" />
              <div>
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p className="text-green-600 font-bold">₹{item.price}</p>
                <p>{item.rating} / 5</p>
              </div>
            </div>
            <button
              onClick={() => removeFromCart(item.id)}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default CartDisplay;
