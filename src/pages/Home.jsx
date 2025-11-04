import React from "react";
import Hero from "../components/Hero";
import Menu from "../components/Menu";
import About from "../components/About";
import Footer from "../components/Footer";
import Offers from "../components/Offers";

function Home() {
  return (
    <div className="scroll-smooth">
      {/* Hero Section */}
      <section id="home">
        <Hero />
      </section>

      {/* Offers Section */}
      <section id="offers">
        <Offers />
      </section>

      {/* Menu Section (includes Search + Sort + Add to Cart) */}
      <section id="menu" className="pt-2">
        <Menu />
      </section>

      {/* About Section */}
      <section id="about">
        <About />
      </section>

      {/* Contact / Footer Section */}
      <section id="contact">
        <Footer />
      </section>
    </div>
  );
}

export default Home;
