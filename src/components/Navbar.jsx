import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
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
            <ScrollLink
              to="home"
              smooth={true}
              duration={500}
              offset={-80}
              className="cursor-pointer text-gray-700 hover:text-green-600"
            >
              Home
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="menu"
              smooth={true}
              duration={500}
              offset={-80}
              className="cursor-pointer text-gray-700 hover:text-green-600"
            >
              Menu
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="about"
              smooth={true}
              duration={500}
              offset={-80}
              className="cursor-pointer text-gray-700 hover:text-green-600"
            >
              About
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              offset={-80}
              className="cursor-pointer text-gray-700 hover:text-green-600"
            >
              Contact
            </ScrollLink>
          </li>

          {/* Cart */}
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
          {['home', 'menu', 'about', 'contact'].map((section) => (
            <li key={section}>
              <ScrollLink
                to={section}
                smooth={true}
                duration={500}
                offset={-80}
                onClick={() => setIsOpen(false)}
                className="block py-2 text-gray-700 hover:text-green-600 cursor-pointer"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </ScrollLink>
            </li>
          ))}
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
