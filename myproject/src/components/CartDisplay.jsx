


 import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";





const CartDisplay = () => {
  const { cart, removeFromCart } = useContext(CartContext); // Moved to the top ✅
  const navigate = useNavigate();

  function handleCheckOut() {
    navigate("/Checkout");
  }

  function calcPrice() {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
      total += cart[i].price;
    }
    return total;
  }
// const validCart = cart.filter(item => item.name && typeof item.price === "number");
  return (
    <>
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">🛒 Your Cart</h1>
        {cart.length === 0 ? (
          <p className="text-gray-600">Your cart is empty.</p>
        ) : (
          cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center p-4 border mb-3 rounded"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover"
                />
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

      {cart.length > 0 && (
        <div>
          <h1>Total Price: ₹{calcPrice()}</h1>
          <button onClick={handleCheckOut}>Checkout</button>
        </div>
      )}
    </>
  );
};

// import React, { useContext } from "react";
// import { CartContext } from "../context/CartContext";
// import { useNavigate } from "react-router-dom";

// const CartDisplay = () => {
//   const navigate = useNavigate();

//   function handleCheckOut()
// {
 
// navigate("/Checkout");
// }
//   function calcPrice(){
//      let total = 0;

// for (let i = 0; i < cart.length; i++) {
//   total += cart[i].price;
// }

// return total;

     
//   }
//   const { cart, removeFromCart } = useContext(CartContext);
//   return (
//     <>
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-4">🛒 Your Cart</h1>
//       {cart.length === 0 ? (
//         <p className="text-gray-600">Your cart is empty.</p>
//       ) : (
//         cart.map((item) => (
//           <div key={item.id} className="flex justify-between items-center p-4 border mb-3 rounded">
//             <div className="flex items-center gap-4">
//               <img src={item.image} alt={item.name} className="w-20 h-20 object-cover" />
//               <div>
//                 <h2 className="text-lg font-semibold">{item.name}</h2>
//                 <p className="text-green-600 font-bold">₹{item.price}</p>
//                 <p>{item.rating} / 5</p>
//               </div>
//             </div>
//             <button
//               onClick={() => removeFromCart(item.id)}
//               className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
//             >
//               Remove
//             </button>
//           </div>
//         ))
//       )}
//     </div>
// {cart.length > 0 && (
//     <div>
    
// <h1>Total Price:  ₹{calcPrice()}</h1>
//      <button
//      onClick={handleCheckOut}>Checkout</button>
//     </div>)}
//     </>
//   );
// };

export default CartDisplay;
