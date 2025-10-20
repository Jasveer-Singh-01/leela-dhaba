import React from 'react';
import aboutImage from '../assets/images/about/about.png';
import bgImage from '../assets/images/about/bg-about.jpg'; // Your new background image

function About() {
  return (
    <section className="relative py-20">
      {/* Background Image */}
      <img
        src={bgImage}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Content */}
      <div className="relative container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        
        {/* Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={aboutImage}
            alt="Dhaba"
            className="
              rounded-lg
              shadow-lg
              w-64 md:w-80
              h-auto
              object-cover
              hover:scale-105
              transform
              transition
              duration-300
            "
          />
        </div>

        {/* Text */}
        <div className="md:w-1/2 text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">About Our Dhaba</h2>
          <p className="mb-4 text-teal-500">
            Welcome to Dhaba! We serve authentic and delicious food with a touch of love and tradition. 
            Our dishes are prepared fresh daily with the finest ingredients, giving you an unforgettable dining experience.
          </p>
          <p className="text-teal-500">
            From classic Indian curries to mouthwatering desserts, our menu is designed to satisfy every craving. 
            Join us and enjoy a warm, welcoming atmosphere perfect for families, friends, and food lovers alike.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
