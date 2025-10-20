import React from 'react';
import heroImage from '../assets/images/hero/banner.jpg';
// import heroImage from '../assets/images/hero/banner.jpg';

function Hero() {
  return (
    
    <section
      className="bg-green-600 text-white py-32 bg-cover bg-center relative"
      style={{
        backgroundImage: `url('${heroImage}')`,
      }}
    >
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Welcome to Leela Dhaba</h2>
        <p className="text-lg md:text-xl mb-6">The best place to enjoy authentic food!</p>
        <button className="bg-white text-green-600 px-6 py-2 rounded hover:bg-gray-200 transition">
          Explore Menu
        </button>
      </div>
    </section>
  );
}

export default Hero;
