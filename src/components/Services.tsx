import { Clock, Euro } from 'lucide-react';

const services = [
  {
    name: 'Amma Assis',
    duration: '30 min',
    price: '30€',
    description: 'Massage habillé, tonique, idéal pour une pause anti-stress.',
  },
  {
    name: 'Shiatsu',
    duration: '60 min',
    price: '65€',
    description: 'Pressions profondes sur les méridiens pour rééquilibrer et apaiser.',
  },
  {
    name: 'Californien',
    duration: '60 min',
    price: '60€',
    description: 'Massage enveloppant et fluide, parfait pour un lâcher-prise total.',
  },
  {
    name: 'Ayurvédique',
    duration: '60 min',
    price: '70€',
    description: 'Massage indien harmonisant les énergies, stimulant la circulation.',
  },
  {
    name: 'Lomi Lomi',
    duration: '60 min',
    price: '60€',
    description: 'Mouvements amples inspirés des vagues, détente profonde et revitalisation.',
  },
  {
    name: 'Massage visage',
    duration: '30 min',
    price: '40€',
    description: 'Détente ciblée, éclat du teint, relâchement des tensions.',
  },
  {
    name: 'Massage mains ou pieds',
    duration: '30 min',
    price: '30€',
    description: 'Relaxation rapide mais efficace des zones très sollicitées.',
  },
];

export function Services() {
  return (
    <section id="prestations" className="py-16 sm:py-20 md:py-24 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-[#2C5F4F] mb-4 animate-float">
            Les prestations
          </h2>
          <p className="text-[#4A5568] max-w-2xl mx-auto px-4">
            Découvrez nos massages bien-être, chacun conçu pour répondre à vos besoins de détente et de ressourcement.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-[#E8DCC8]/30 hover:border-[#2C5F4F]/30 hover:-translate-y-2 hover:scale-105 cursor-pointer group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-[#2C5F4F] mb-4 text-2xl sm:text-3xl group-hover:text-[#3D7A64] transition-colors">
                {service.name}
              </h3>
              
              <div className="flex items-center gap-4 mb-5 text-[#2C5F4F]">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
                  <span className="text-base sm:text-lg">{service.duration}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Euro className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
                  <span className="text-base sm:text-lg">{service.price}</span>
                </div>
              </div>

              <p className="text-[#4A5568] leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10 sm:mt-12">
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-6 sm:px-8 py-4 bg-[#2C5F4F] text-white rounded-full hover:bg-[#3D7A64] transition-all shadow-md hover:shadow-xl hover:scale-110 duration-300 button-shine"
          >
            Prendre rendez-vous
          </button>
        </div>
      </div>
    </section>
  );
}