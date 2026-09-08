import { MapPin, Home } from 'lucide-react';
import { ParallaxSection } from './ParallaxSection';

export function Location() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-[#2C5F4F] mb-4">
            Localisation & zones d'intervention
          </h2>
          <p className="text-[#4A5568] max-w-2xl mx-auto px-4">
            Venez me retrouver à l'institut ou profitez d'un massage dans le confort de votre domicile.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Institut */}
          <ParallaxSection speed={0.2}>
            <div className="bg-[#FAF8F5] rounded-2xl p-6 sm:p-8 text-center border border-[#E8DCC8]/30 hover:shadow-lg transition-all duration-300 hover:scale-105 animate-slide-up">
              <div className="w-16 h-16 mx-auto mb-4 bg-[#2C5F4F] rounded-full flex items-center justify-center">
                <MapPin className="w-8 h-8 text-white" strokeWidth={1.5} />
              </div>
              <h3 className="text-[#2C5F4F] mb-3">
                Institut
              </h3>
              <p className="text-[#4A5568]">
                Varetz
              </p>
              <p className="text-sm text-[#4A5568] mt-2">
                Un espace calme et apaisant dédié à votre bien-être
              </p>
            </div>
          </ParallaxSection>

          {/* À domicile */}
          <ParallaxSection speed={0.2}>
            <div className="bg-[#FAF8F5] rounded-2xl p-6 sm:p-8 text-center border border-[#E8DCC8]/30 hover:shadow-lg transition-all duration-300 hover:scale-105 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 mx-auto mb-4 bg-[#2C5F4F] rounded-full flex items-center justify-center">
                <Home className="w-8 h-8 text-white" strokeWidth={1.5} />
              </div>
              <h3 className="text-[#2C5F4F] mb-3">
                À domicile
              </h3>
              <p className="text-[#4A5568]">
                Corrèze & alentours
              </p>
              <p className="text-sm text-[#4A5568] mt-2">
                Je me déplace chez vous pour votre confort
              </p>
            </div>
          </ParallaxSection>
        </div>
      </div>
    </section>
  );
}