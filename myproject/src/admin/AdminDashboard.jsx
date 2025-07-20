import { useContext, useState } from "react";
import { ProductContext } from "../context/ProductContext";
import { CartContext } from "../context/CartContext";

export const AdminDashBoard = () => {
  const { products, addProduct, deleteProduct, editProduct } = useContext(ProductContext);
  const { removeFromCart } = useContext(CartContext);

  const [newProduct, setNewProduct] = useState({
    id:"",
    name: "",
    price: "",
    image: "",
    rating: "",
    category: ""
  });

  const [editingId, setEditingId] = useState(null);
  const [editValues, setEditValues] = useState({});

  // Add product handler
  const handleAddProduct = () => {
    const { name, price, image, rating, category } = newProduct;
    if (!name || !price || !image || !rating || !category) {
      alert("Please fill all fields.");
      return;
    }

    const nextId = Math.max(0, ...products.map(p => p.id)) + 1;
    addProduct({ ...newProduct, id: nextId });

    // Reset form
    setNewProduct({id:nextId,name: "", price: "", image: "", rating: "", category: "" });
  };

  // Delete handler
  const handleDelete = (id) => {
    deleteProduct(id);
    removeFromCart(id);
  };

  // Save edit handler
  const handleEdit = (id) => {
    const productToEdit = products.find(p => p.id === id);
    const updatedProduct = { ...productToEdit, ...editValues };
    editProduct(updatedProduct);

    setEditingId(null);
    setEditValues({});
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>

      {/* Add Product Form */}
      <div className="border p-4 rounded shadow mb-6">
        <h3 className="font-semibold text-lg mb-2">Add New Product</h3>
        {["name", "price", "image", "rating", "category"].map((field) => (
          <input
            key={field}
            type="text"
            placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
            className="border p-2 mr-2 mb-2"
            value={newProduct[field]}
            onChange={(e) => setNewProduct({ ...newProduct, [field]: e.target.value })}
          />
        ))}
        <button
          onClick={handleAddProduct}
          className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
        >
          Add Product
        </button>
      </div>

      {/* Product List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((p) => (
          <div key={p.id} className="border rounded p-4 shadow">
            <img
              src={p.image}
              alt={p.name}
              className="w-full h-40 object-cover rounded-md"
            />

            {editingId === p.id ? (
              <>
                {["name", "price", "image", "rating", "category"].map((field) => (
                  <input
                    key={field}
                    type="text"
                    placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                    className="border p-1 w-full my-1"
                    value={editValues[field] || ""}
                    onChange={(e) =>
                      setEditValues({ ...editValues, [field]: e.target.value })
                    }
                  />
                ))}

                <button
                  onClick={() => handleEdit(p.id)}
                  className="bg-green-500 text-white px-3 py-1 rounded mr-2"
                >
                  Save
                </button>
                <button
                  onClick={() => setEditingId(null)}
                  className="bg-gray-400 text-white px-3 py-1 rounded"
                >
                  Cancel
                </button>
              </>
            ) : (
              <>
                <h1 className="text-lg font-semibold text-center mt-3">{p.name}</h1>
                <p className="text-green-600 font-bold mt-1">₹{p.price}</p>
                <p>⭐ {p.rating} / 5</p>
                <p className="italic text-sm text-gray-500 mb-2">Category: {p.category}</p>

                <div className="mt-3 flex justify-between">
                  <button
                    onClick={() => {
                      setEditingId(p.id);
                      setEditValues(p);
                    }}
                    className="bg-yellow-500 text-white px-3 py-1 rounded"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(p.id)}
                    className="bg-red-600 text-white px-3 py-1 rounded"
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
