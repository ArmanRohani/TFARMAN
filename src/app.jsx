import React from 'react';
import Header from './components/Layout/Header';
import Hero from './components/Hero/Hero';
import Features from './components/Features/Features';
import AlgoEngineSection from './components/AlgoEngineSection/AlgoEngineSection';
import Marketplace from './components/Marketplace/Marketplace';
import CTASection from './components/CTASection/CTASection';
import Footer from './components/Layout/Footer';
import useScrollEffect from './hooks/useScrollEffect'; // Assuming you create this

function App() {
  useScrollEffect('.reveal-on-scroll', { threshold: 0.1 }); // Apply scroll reveal globally

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <AlgoEngineSection />
        <Marketplace />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}

export default App;
