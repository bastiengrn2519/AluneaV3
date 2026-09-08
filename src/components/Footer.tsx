import { Facebook, Instagram, Mail, ChevronUp } from 'lucide-react';
import logoImage from 'figma:asset/d51351c6fc9051655c82f58b1ecc400542e44799.png';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#2C5F4F] text-white py-12 relative">
      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-[#E8DCC8] text-[#2C5F4F] rounded-full flex items-center justify-center shadow-lg hover:bg-white hover:scale-110 transition-all duration-300 button-shine group"
        aria-label="Retour en haut"
      >
        <ChevronUp className="w-6 h-6 group-hover:animate-bounce-arrow" strokeWidth={2} />
      </button>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Description */}
          <div>
            <div className="mb-4 bg-white rounded-2xl p-4 inline-block">
              <img
                src={logoImage}
                alt="Alunéa Logo"
                className="h-16 w-auto"
              />
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              Massage Bien-Être
              <br />
              Varetz & Corrèze
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById('accueil');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors"
                >
                  Accueil
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById('apropos');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors"
                >
                  À propos
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById('prestations');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors"
                >
                  Prestations
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById('contact');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="mb-4">Suivez-nous</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" strokeWidth={1.5} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" strokeWidth={1.5} />
              </a>
              <a
                href="mailto:contact@alunea.fr"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" strokeWidth={1.5} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
          <p>
            © 2026 Alunéa – Massage Bien-Être. Tous droits réservés par{' '}
            <a
              href="https://bastiengarnier.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Bastien Garnier
            </a>
            .
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Mentions légales
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Politique de confidentialité
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}