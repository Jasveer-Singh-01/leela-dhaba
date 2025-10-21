import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { useCart } from "../context/CartContext";

const menuItems = [
  // same menuItems as before
];

function MenuDetail() {
  const { id } = useParams();
  const location = useLocation();
  const { addToCart } = useCart();
  const item = menuItems.find((dish) => dish.id === parseInt(id));

  // If user came from modal, get passed quantity
  const initialQuantity = location.state?.quantity || 1;
  const [quantity, setQuantity] = useState(initialQuantity);

  useEffect(() => {
    setQuantity(initialQuantity);
  }, [initialQuantity]);

  if (!item)
    return <h2 className="text-center mt-20 text-gray-600">Recipe not found</h2>;

  const handleAddToCart = () => {
    addToCart({ ...item, quantity });
    alert(`${item.name} (${quantity}) added to cart!`);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-64 object-cover rounded mb-4"
        />
        <h2 className="text-3xl font-bold mb-2">{item.name}</h2>
        <p className="text-gray-700 mb-3">{item.description}</p>
        <p className="text-sm text-gray-500 mb-3">
          <strong>Ingredients:</strong> {item.ingredients}
        </p>
        <p className="text-lg text-green-600 font-bold mb-4">₹{item.price}</p>

        {/* Quantity Selector */}
        <div className="flex items-center mb-4">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="bg-gray-200 px-3 py-1 rounded-l hover:bg-gray-300 transition"
          >
            -
          </button>
          <span className="px-4 py-1 border-t border-b">{quantity}</span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="bg-gray-200 px-3 py-1 rounded-r hover:bg-gray-300 transition"
          >
            +
          </button>
        </div>

        <button
          onClick={handleAddToCart}
          className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default MenuDetail;
