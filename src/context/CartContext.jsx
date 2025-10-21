import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prev) => [...prev, item]);
  };

  const clearCart = () => setCart([]);

  const total = cart.reduce(
    (acc, item) => acc + parseInt(item.price.replace('₹', '')),
    0
  );

  return (
    <CartContext.Provider value={{ cart, addToCart, clearCart, total }}>
      {children}
    </CartContext.Provider>
  );
};
