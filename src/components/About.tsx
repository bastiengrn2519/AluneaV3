import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Heart, Users, Calendar } from "lucide-react";
import { ParallaxSection } from "./ParallaxSection";
import lauraPhoto from "figma:asset/1498fcdc645c025e365a1ca93e31240564cc0fbe.png";

export function About() {
  return (
    <section
      id="apropos"
      className="py-16 sm:py-20 md:py-24 bg-white overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-16 md:py-26">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
          {/* Image */}
          <ParallaxSection
            speed={0.3}
            className="order-2 md:order-1"
          >
            <div className="rounded-3xl overflow-hidden shadow-lg">
              <img
                src={lauraPhoto}
                alt="Laura - Masseuse Bien-Être à Varetz"
                className="w-full h-full object-cover"
              />
            </div>
          </ParallaxSection>

          {/* Content */}
          <div className="order-1 md:order-2">
            <h2 className="text-[#2C5F4F] mb-6 px-0 text-3xl sm:text-4xl md:text-5xl animate-float">
              À propos – Laura
            </h2>
            <div className="space-y-4 text-[#4A5568] leading-relaxed animate-fade-in">
              <p>
                Je m'appelle Laura, masseuse bien-être diplômée
                basée à Varetz, à quelques minutes de
                Brive-la-Gaillarde. Après plusieurs années
                d'expérience en tant qu'aide-soignante, j'ai
                choisi de mettre mon sens de l'écoute, ma
                douceur et mon savoir-faire au service du
                bien-être en Corrèze.
              </p>
              <p>
                J'ai créé Alunéa – Bien-Être pour offrir des
                séances personnalisées, relaxantes et profondes,
                adaptées à chaque besoin : gestion du stress,
                tensions musculaires, fatigue, besoin de
                recentrage ou simple moment de détente. Mon
                objectif est simple : vous proposer votre
                massage sûr-messure à Varetz et Brive, que ce
                soit en institut ou en massage à domicile dans
                toute la Corrèze.
              </p>
              <p>
                Grâce à des techniques professionnelles –
                Californien, Shiatsu, Ayurvédique, Amma Assis,
                Lomi Lomi, massage visage ou massages ciblés –
                chaque séance devient une véritable parenthèse
                de lâcher-prise et de reconnexion à soi.
              </p>
              <div className="bg-[#FAF8F5] rounded-2xl p-6 mt-6 border border-[#E8DCC8]/50 hover:shadow-lg transition-shadow duration-300">
                <p className="text-[#2C5F4F] mb-3">
                  📍 <strong>Institut Alunéa :</strong> Varetz
                </p>
                <p className="text-[#2C5F4F] mb-4">
                  📍 <strong>Prestations à domicile :</strong>{" "}
                  Brive, Malemort, Ussac, Allassac,
                  Saint-Pantaléon, et l'ensemble des alentours
                </p>
                <p className="text-[#4A5568] text-sm">
                  Si vous recherchez un massage de qualité à
                  Varetz, une expérience bien-être unique ou un
                  moment de détente directement chez vous,
                  Alunéa est là pour vous accompagner avec
                  bienveillance, expertise et professionnalisme.
                </p>
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-6 mt-10">
              <div
                className="text-center hover:scale-110 transition-transform duration-300 animate-slide-up"
                style={{ animationDelay: "0.2s" }}
              >
                <div className="w-14 h-14 mx-auto mb-3 bg-[#E8DCC8] rounded-full flex items-center justify-center hover:bg-[#2C5F4F] hover:text-white transition-all duration-300 group">
                  <Heart
                    className="w-6 h-6 text-[#2C5F4F] group-hover:text-white transition-colors"
                    strokeWidth={1.5}
                  />
                </div>
                <p className="text-sm text-[#2C5F4F]">
                  Diplômée
                </p>
              </div>
              <div
                className="text-center hover:scale-110 transition-transform duration-300 animate-slide-up"
                style={{ animationDelay: "0.3s" }}
              >
                <div className="w-14 h-14 mx-auto mb-3 bg-[#E8DCC8] rounded-full flex items-center justify-center hover:bg-[#2C5F4F] hover:text-white transition-all duration-300 group">
                  <Users
                    className="w-6 h-6 text-[#2C5F4F] group-hover:text-white transition-colors"
                    strokeWidth={1.5}
                  />
                </div>
                <p className="text-sm text-[#2C5F4F]">
                  À l'écoute
                </p>
              </div>
              <div
                className="text-center hover:scale-110 transition-transform duration-300 animate-slide-up"
                style={{ animationDelay: "0.4s" }}
              >
                <div className="w-14 h-14 mx-auto mb-3 bg-[#E8DCC8] rounded-full flex items-center justify-center hover:bg-[#2C5F4F] hover:text-white transition-all duration-300 group">
                  <Calendar
                    className="w-6 h-6 text-[#2C5F4F] group-hover:text-white transition-colors"
                    strokeWidth={1.5}
                  />
                </div>
                <p className="text-sm text-[#2C5F4F]">
                  Flexible
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}