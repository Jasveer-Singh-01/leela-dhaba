import React from 'react';
import { useCart } from '../context/CartContext';

function Cart() {
  const { cart, clearCart, total } = useCart();

  return (
    <section className="py-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Your Cart</h2>

        {cart.length === 0 ? (
          <p className="text-gray-600 text-lg">Your cart is empty.</p>
        ) : (
          <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cart.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow p-4 flex items-center gap-4"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-green-600 font-bold">{item.price}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex justify-between items-center">
              <p className="text-xl font-semibold">
                Total: <span className="text-green-700">₹{total}</span>
              </p>
              <button
                onClick={clearCart}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
              >
                Clear Cart
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default Cart;
