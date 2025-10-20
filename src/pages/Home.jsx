import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Menu from '../components/Menu';
import About from '../components/About';
import Footer from '../components/Footer';

function Home() {
  return (
    <div className="scroll-smooth">
      <section id="home">
        <Navbar />
        <Hero />
      </section>

      <section id="menu">
        <Menu />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="contact">
        <Footer />
      </section>
    </div>
  );
}


export default Home;
