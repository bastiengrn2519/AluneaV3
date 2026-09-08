import heroImage from "figma:asset/9a19cec680f798854fac9520b39b56d353987d57.png";
import { ChevronDown } from "lucide-react";

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToNext = () => {
    const element = document.getElementById("apropos");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Massage bien-être"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#2C5F4F]/40 via-[#2C5F4F]/30 to-[#FAF8F5]/90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 md:px-8 text-center pt-16 sm:pt-20 pb-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white mb-6 sm:mb-8 leading-snug animate-fade-in drop-shadow-2xl">
          Alunéa – Bien-Être à Varetz : Votre massage sur
          messure à Varetz, Brive et en Corrèze pour un Moment
          Unique de Détente 🍃
        </h1>
        <button
          onClick={scrollToContact}
          className="px-6 sm:px-10 py-4 sm:py-5 bg-white text-[#2C5F4F] rounded-full hover:bg-[#E8DCC8] transition-all shadow-2xl hover:shadow-3xl hover:scale-105 transform duration-300 animate-float-slow button-shine"
        >
          Réserver une séance
        </button>
      </div>

      {/* Scroll Down Arrow */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white hover:text-[#E8DCC8] transition-colors group"
        aria-label="Défiler vers le bas"
      >
        <span className="text-sm opacity-80 group-hover:opacity-100 transition-opacity">
          Découvrir
        </span>
        <div className="animate-bounce-arrow">
          <ChevronDown className="w-8 h-8" strokeWidth={2} />
        </div>
      </button>
    </section>
  );
}