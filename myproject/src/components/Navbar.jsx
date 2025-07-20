import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { user, logout, isLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleMyOrder = () => {
    navigate('/MyOrders');
  };

  const handleLogout = () => {
    logout();
    navigate("/"); // redirect to home
  };

  const handleAdmin = () => {
    navigate('/AdminDashboard');
  };

  return (
    <div className="p-4 bg-gray-200 flex justify-between">
      <h1 className="text-xl font-bold">🛒 My Store</h1>

      <div className="flex gap-4 items-center">
        <button onClick={handleMyOrder}>MyOrders</button>

        {isLoggedIn ? (
          <>
            <span>👋 {user.name}</span>

            {/* Only show Admin button if user is an admin */}
            {user.role === 'admin' && (
              <button
                className="bg-blue-500 text-white px-3 py-1 rounded"
                onClick={handleAdmin}
              >
                Admin
              </button>
            )}

            <button
              className="bg-red-500 text-white px-3 py-1 rounded"
              onClick={handleLogout}
            >
              Logout
            </button>
          </>
        ) : (
          <button
            className="bg-green-600 text-white px-4 py-1 rounded"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;

















// // Navbar.jsx
// import { useContext } from "react";
// import { AuthContext } from "../context/AuthContext";
// import { useNavigate } from "react-router-dom";

// const Navbar = () => {
//   const { user, logout, isLoggedIn } = useContext(AuthContext);
//   const navigate = useNavigate();

//  const handleMyOrder=()=>{
//  navigate('/MyOrders')
//  }
//   const handleLogout = () => {
//     logout();
//     navigate("/"); // optional: redirect to home
//   };

//   return (
//     <div className="p-4 bg-gray-200 flex justify-between">
//       <h1 className="text-xl font-bold">🛒 My Store</h1>
//       {isLoggedIn ? (
//         <div className="flex gap-4 items-center">
//           <span>👋 {user.name}</span>
//           <button onClick={handleMyOrder}>
//             MyOrders
//           </button>
//           <button
//             className="bg-red-500 text-white px-3 py-1 rounded"
//             onClick={handleLogout}
//           >
//             Logout
//           </button>
//         </div>
//       ) : (
//        <div> <button onClick={handleMyOrder}>
//             MyOrders
//         </button>
//         <button
//           className="bg-green-600 text-white px-4 py-1 rounded"
//           onClick={() => navigate("/login")}
//         >
//           Login
//         </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Navbar;
