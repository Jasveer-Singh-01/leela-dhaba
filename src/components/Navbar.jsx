import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { cart } = useCart();

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Brand */}
        <Link to="/" className="text-xl font-bold text-green-600">
          Leela Dhaba
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 items-center">
          <li>
            <Link to="/" className="text-gray-700 hover:text-green-600">
              Home
            </Link>
          </li>
          <li>
            <Link to="/#menu" className="text-gray-700 hover:text-green-600">
              Menu
            </Link>
          </li>
          <li>
            <Link to="/#about" className="text-gray-700 hover:text-green-600">
              About
            </Link>
          </li>
          <li>
            <Link to="/#contact" className="text-gray-700 hover:text-green-600">
              Contact
            </Link>
          </li>

          {/* Cart Icon */}
          <li>
            <Link
              to="/cart"
              className="relative flex items-center text-gray-700 hover:text-green-600"
            >
              🛒
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-3 bg-green-600 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
                  {cart.length}
                </span>
              )}
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? '✖️' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-white px-4 pb-4 space-y-2">
          <li>
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="block py-2 text-gray-700 hover:text-green-600"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/#menu"
              onClick={() => setIsOpen(false)}
              className="block py-2 text-gray-700 hover:text-green-600"
            >
              Menu
            </Link>
          </li>
          <li>
            <Link
              to="/#about"
              onClick={() => setIsOpen(false)}
              className="block py-2 text-gray-700 hover:text-green-600"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/#contact"
              onClick={() => setIsOpen(false)}
              className="block py-2 text-gray-700 hover:text-green-600"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="/cart"
              onClick={() => setIsOpen(false)}
              className="block py-2 text-gray-700 hover:text-green-600 relative"
            >
              🛒 Cart
              {cart.length > 0 && (
                <span className="ml-2 bg-green-600 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
                  {cart.length}
                </span>
              )}
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
