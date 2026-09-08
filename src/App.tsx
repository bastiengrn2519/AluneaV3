import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Location } from './components/Location';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Location />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
