import { useState, useEffect } from 'react';
import logoImage from 'figma:asset/d51351c6fc9051655c82f58b1ecc400542e44799.png';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
        {/* Logo */}
        <button onClick={() => scrollToSection('accueil')} className="flex items-center">
          <img
            src={logoImage}
            alt="Alunéa Logo"
            className="h-28 sm:h-32 w-auto"
          />
        </button>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection('accueil')}
            className="text-[#2C5F4F] hover:text-[#3D7A64] transition-colors"
          >
            Accueil
          </button>
          <button
            onClick={() => scrollToSection('apropos')}
            className="text-[#2C5F4F] hover:text-[#3D7A64] transition-colors"
          >
            À propos
          </button>
          <button
            onClick={() => scrollToSection('prestations')}
            className="text-[#2C5F4F] hover:text-[#3D7A64] transition-colors"
          >
            Prestations
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="text-[#2C5F4F] hover:text-[#3D7A64] transition-colors"
          >
            Contact
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="px-6 py-2 bg-[#2C5F4F] text-white rounded-full hover:bg-[#3D7A64] transition-colors"
          >
            Réserver
          </button>
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => scrollToSection('contact')}
          className="md:hidden px-4 py-2 bg-[#2C5F4F] text-white rounded-full"
        >
          Réserver
        </button>
      </div>
    </header>
  );
}