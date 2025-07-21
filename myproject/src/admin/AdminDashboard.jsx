import { useContext, useState } from "react";
import { ProductContext } from "../context/ProductContext";
import { CartContext } from "../context/CartContext";

export const AdminDashBoard = () => {
  const { products, addProduct, deleteProduct, editProduct } = useContext(ProductContext);
  const { removeFromCart } = useContext(CartContext);

  const [newProduct, setNewProduct] = useState({
    id: "",
    name: "",
    price: "",
    image: "",
    rating: "",
    category: ""
  });

  const [editingId, setEditingId] = useState(null);
  const [editValues, setEditValues] = useState({});

  const handleAddProduct = () => {
    const { name, price, image, rating, category } = newProduct;
    if (!name || !price || !image || !rating || !category) {
      alert("Please fill all fields.");
      return;
    }

    const nextId = Math.max(0, ...products.map(p => p.id)) + 1;
    addProduct({ ...newProduct, id: nextId });
    setNewProduct({ id: nextId, name: "", price: "", image: "", rating: "", category: "" });
  };

  const handleDelete = (id) => {
    deleteProduct(id);
    removeFromCart(id);
  };

  const handleEdit = (id) => {
    const productToEdit = products.find(p => p.id === id);
    const updatedProduct = { ...productToEdit, ...editValues };
    editProduct(updatedProduct);
    setEditingId(null);
    setEditValues({});
  };

  return (
    <div className="p-8  min-h-screen">
      <h2 className="text-3xl font-bold mb-6 text-red-500">Admin Control</h2>

      {/* Add Product Section */}
      <div className="bg-white shadow-lg rounded-xl p-6 mb-10">
        <h3 className="text-xl font-semibold mb-4 text-gray-700">Add New Product</h3>
        <div className="flex flex-wrap gap-4">
          {["name", "price", "image", "rating", "category"].map((field) => (
            <input
              key={field}
              type="text"
              placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
              className="flex-1 min-w-[180px] border border-gray-300 px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={newProduct[field]}
              onChange={(e) => setNewProduct({ ...newProduct, [field]: e.target.value })}
            />
          ))}
        </div>
        <button
          onClick={handleAddProduct}
          className="mt-4 bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition"
        >
          Add Product
        </button>
      </div>

      {/* Products Display */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((p) => (
          <div key={p.id} className="bg-white shadow-md rounded-xl p-5">
            <img
              src={p.image}
              alt={p.name}
              className="w-full h-40 object-cover rounded-md mb-4"
            />

            {editingId === p.id ? (
              <>
                {["name", "price", "image", "rating", "category"].map((field) => (
                  <input
                    key={field}
                    type="text"
                    placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                    className="w-full border border-gray-300 px-3 py-2 rounded-md shadow-sm my-1"
                    value={editValues[field] || ""}
                    onChange={(e) =>
                      setEditValues({ ...editValues, [field]: e.target.value })
                    }
                  />
                ))}
                <div className="mt-3 flex gap-2">
                  <button
                    onClick={() => handleEdit(p.id)}
                    className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => setEditingId(null)}
                    className="bg-gray-400 text-white px-4 py-2 rounded-md hover:bg-gray-500 transition"
                  >
                    Cancel
                  </button>
                </div>
              </>
            ) : (
              <>
                <h1 className="text-xl font-semibold text-center text-gray-800">{p.name}</h1>
                <p className="text-green-600 font-bold text-center mt-1">₹{p.price}</p>

  <p ><span className="text-black text-xl">★</span>
<span className=" mt-1"> ({p.rating}</span >  / <span className="text-">5</span>)</p>
                <p className="text-center text-sm text-gray-500 mt-2 mb-3">
                  Category: {p.category}
                </p>

                <div className="flex justify-between mt-3">
                  <button
                    onClick={() => {
                      setEditingId(p.id);
                      setEditValues(p);
                    }}
                    className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 transition"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(p.id)}
                    className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition"
                  >
                    Delete
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
