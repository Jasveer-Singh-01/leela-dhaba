import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-200 py-12">
      <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
        
        {/* About */}
        <div>
          <h3 className="text-xl font-bold mb-4">Dhaba</h3>
          <p>
            Authentic and delicious food made with love. Join us for a memorable dining experience.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul>
            <li><a href="#" className="hover:text-green-400">Home</a></li>
            <li><a href="#" className="hover:text-green-400">Menu</a></li>
            <li><a href="#" className="hover:text-green-400">About</a></li>
            <li><a href="#" className="hover:text-green-400">Contact</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-bold mb-4">Contact Us</h3>
          <p>📍 123 Dhaba Street, Food City</p>
          <p>📞 +91 98765 43210</p>
          <p>✉️ info@dhaba.com</p>

          {/* Social */}
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-green-400">🌐</a>
            <a href="#" className="hover:text-green-400">🐦</a>
            <a href="#" className="hover:text-green-400">📸</a>
            <a href="#" className="hover:text-green-400">👍</a>
          </div>
        </div>

      </div>

      <div className="text-center mt-8 text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Dhaba. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
