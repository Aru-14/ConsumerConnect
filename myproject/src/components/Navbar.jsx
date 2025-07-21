import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { user, logout, isLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleMyOrder = () => {
    navigate("/MyOrders");
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const handleAdmin = () => {
    navigate("/AdminDashboard");
  };

  return (
   <>
     {(!isLoggedIn || user?.role !== "admin") && (
   <button
  onClick={() => navigate("/Cart")}
  className="fixed top-4 right-4 bg-purple-600 hover:bg-purple-900 text-white px-4 py-2 rounded shadow-lg z-50"
>
  View Cart
</button>

  )}

    <div className="p-4 shadow-lg flex justify-between mt-10 bg-purple-100">
      <h1 className="text-xl font-bold text-purple-700 italic">ConsumerConnect</h1>

      <div className="flex gap-4 items-center">
       

        {isLoggedIn ? (
          <>
           

            <span>
              Welcome <b>{user?.name}</b>
            </span>

            {user?.role === "user" && (
              <button
                onClick={handleMyOrder}
                className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-200"
              >
                MyOrders
              </button>
            )}

            {user?.role === "admin" && (
              <button
                onClick={handleAdmin}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-200"
              >
                Admin
              </button>
            )}

            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded shadow transition duration-200"
            >
              Logout
            </button>
          </>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="bg-green-600 text-white px-4 py-1 rounded"
          >
            Login
          </button>
        )}
      </div>
    </div>
    </> 
  );
};

export default Navbar;
