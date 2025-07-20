import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "user",
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(formData);
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-64 mx-auto mt-10">
      <input
        name="name"
        type="text"
        placeholder="Name"
        className="border p-2"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        name="email"
        type="email"
        placeholder="Email"
        className="border p-2"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <select name="role" value={formData.role} onChange={handleChange} className="border p-2">
        <option value="user">User</option>
        <option value="admin">Admin</option>
      </select>
      <button type="submit" className="bg-blue-600 text-white py-2 rounded">
        Login
      </button>
    </form>
  );
};

export default Login;


























// import { useContext, useState } from "react";
// import { AuthContext } from "../context/AuthContext";
// import { useNavigate, useLocation } from "react-router-dom";

// const Login = () => {
//   const { login } = useContext(AuthContext);
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");

//   const navigate = useNavigate();
//   const location = useLocation();

//   const from = location.state?.from || "/"; // fallback to home

//   const handleLogin = () => {
//     if (!name || !email) {
//       alert("Please fill in both fields");
//       return;
//     }

//     login(name, email);
//     navigate(from); // 👈 go back to checkout if that's where user came from
//   };

//   return (
//     <div className="max-w-md mx-auto p-6">
//       <h2 className="text-2xl font-bold mb-4">Login</h2>
//       <input
//         type="text"
//         placeholder="Your Name"
//         className="border p-2 w-full mb-3"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />
//       <input
//         type="email"
//         placeholder="Your Email"
//         className="border p-2 w-full mb-3"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <button
//         className="bg-green-600 text-white px-4 py-2 rounded w-full"
//         onClick={handleLogin}
//       >
//         Login
//       </button>
//     </div>
//   );
// };

// export default Login;
