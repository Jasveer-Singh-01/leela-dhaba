import React, { useState } from "react";

function Checkout() {
  const [loading, setLoading] = useState(false);

  // Static cart items
  const cartItems = [
    { name: "Paneer Butter Masala", price: "₹250" },
    { name: "Tandoori Chicken", price: "₹350" },
    { name: "Veg Biryani", price: "₹200" },
  ];

  // Calculate total
  const total = cartItems.reduce(
    (sum, item) => sum + parseInt(item.price.replace("₹", ""), 10),
    0
  );

  const handlePayment = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert("🎉 Payment Successful! Your order is placed.");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h2 className="text-3xl font-bold text-center text-green-600 mb-6">
        Checkout
      </h2>

      <div className="max-w-xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h3 className="text-xl font-semibold mb-4">Order Summary</h3>

        {cartItems.map((item, index) => (
          <div key={index} className="flex justify-between border-b py-2">
            <span>{item.name}</span>
            <span>{item.price}</span>
          </div>
        ))}

        <div className="flex justify-between font-bold text-lg mt-4">
          <span>Total:</span>
          <span>₹{total}</span>
        </div>

        <button
          onClick={handlePayment}
          className="w-full mt-6 bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
          disabled={loading}
        >
          {loading ? "Processing..." : "Pay Now"}
        </button>
      </div>
    </div>
  );
}

export default Checkout;
