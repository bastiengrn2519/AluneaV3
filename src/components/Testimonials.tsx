import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Alaîs A",
    text: "Un pur moment de détente et relaxation vraiment le bienvenu ! Un massage très agréable, une masseuse adorable c était parfait. A recommencer pour essayer un autre massage 😁.Je vous la recommande vraiment !",
    rating: 5,
  },
  {
    name: "Manon G",
    text: "J’ai passé un moment très agréable avec Laura, un massage à la fois doux et apaisant, tout à fait ce dont j’avais besoin ! Je recommande Alunéa les yeux fermé pour le moment de détente parfait dont vous aurez besoin",
    rating: 5,
  },
  {
    name: "Corentin L.P",
    text: "J’ai eu la chance de découvrir un massage Shiatsu chez Alunea avec Laura, et ce fut une très belle expérience. Dès les premières minutes, elle sait mettre à l’aise, même lorsqu’on n’a pas l’habitude d’être massé. Son professionnalisme, son écoute et la qualité de son massage font toute la différence. Une vraie parenthèse de bien-être que je recommande sans hésitation.",
    rating: 5,
  },
  {
    name: "Angeline M",
    text: "J’ai passé un moment exceptionnel, à la fois relaxant et ressourçant. Elle est douce, attentionnée et crée une atmosphère vraiment apaisante. On sent qu’elle fait son métier avec passion. Je recommande les yeux fermés !",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-[#FAF8F5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-[#2C5F4F] mb-4">Avis clients</h2>
          <p className="text-[#4A5568] px-4">
            Découvrez les témoignages de ceux qui ont vécu
            l'expérience Alunéa
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-[#E8DCC8]/30 hover:shadow-xl hover:border-[#2C5F4F]/30 transition-all duration-300 hover:-translate-y-1 hover:scale-105 cursor-pointer group animate-slide-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-[#2C5F4F] fill-[#2C5F4F] group-hover:scale-110 transition-transform"
                    strokeWidth={1.5}
                  />
                ))}
              </div>
              <p className="text-[#4A5568] mb-4 leading-relaxed text-sm sm:text-base">
                "{testimonial.text}"
              </p>
              <p className="text-[#2C5F4F] group-hover:text-[#3D7A64] transition-colors">
                — {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}