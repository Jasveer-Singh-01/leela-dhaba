import React, { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-green-600">Leela Dhaba</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li><a href="#home" className="text-gray-700 hover:text-green-600">Home</a></li>
          <li><a href="#menu" className="text-gray-700 hover:text-green-600">Menu</a></li>
          <li><a href="#about" className="text-gray-700 hover:text-green-600">About</a></li>
          <li><a href="#contact" className="text-gray-700 hover:text-green-600">Contact</a></li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? '✖️' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-white px-4 pb-4">
          <li><a href="#home" className="block py-2 text-gray-700 hover:text-green-600">Home</a></li>
          <li><a href="#menu" className="block py-2 text-gray-700 hover:text-green-600">Menu</a></li>
          <li><a href="#about" className="block py-2 text-gray-700 hover:text-green-600">About</a></li>
          <li><a href="#contact" className="block py-2 text-gray-700 hover:text-green-600">Contact</a></li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
