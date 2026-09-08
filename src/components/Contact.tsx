import { useState } from "react";
import {
  Phone,
  Mail,
  Clock,
  Send,
  Instagram,
} from "lucide-react";
import emailjs from "@emailjs/browser";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Configuration EmailJS pour Alunéa
      await emailjs.send(
        "service_g5o9c9e", // Service ID
        "LAURAID2", // Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          message: formData.message,
        },
        "315dbMdvBw6vwzb51", // Public Key
      );

      alert(
        "Merci pour votre message ! Nous vous recontacterons rapidement.",
      );
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error: any) {
      console.error("Erreur lors de l'envoi:", error);

      let errorMessage = "Une erreur s'est produite. ";

      if (error.status === 412) {
        errorMessage =
          "Le service d'envoi d'email nécessite une configuration. En attendant, merci de nous contacter directement au 07 78 19 07 69 ou par email à alunea.bienetre@gmail.com";
      } else if (error.text) {
        errorMessage += error.text + " Vous pouvez nous contacter directement au 07 78 19 07 69.";
      } else {
        errorMessage +=
          "Veuillez réessayer ou nous contacter directement au 07 78 19 07 69.";
      }

      alert(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      className="py-16 sm:py-20 md:py-24 bg-white"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-[#2C5F4F] mb-4">
            Contact & Réservation
          </h2>
          <p className="text-[#4A5568] px-4">
            Prenez rendez-vous pour votre prochain moment de
            détente
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
          {/* Contact Info */}
          <div className="space-y-6 sm:space-y-8">
            <div>
              <h3 className="text-[#2C5F4F] mb-4 sm:mb-6">
                Informations pratiques
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#E8DCC8] rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone
                      className="w-4 h-4 sm:w-5 sm:h-5 text-[#2C5F4F]"
                      strokeWidth={1.5}
                    />
                  </div>
                  <div>
                    <p className="text-[#2C5F4F] mb-1">
                      Téléphone
                    </p>
                    <p className="text-[#4A5568]">
                      07 78 19 07 69
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#E8DCC8] rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail
                      className="w-4 h-4 sm:w-5 sm:h-5 text-[#2C5F4F]"
                      strokeWidth={1.5}
                    />
                  </div>
                  <div>
                    <p className="text-[#2C5F4F] mb-1">Email</p>
                    <p className="text-[#4A5568] text-sm sm:text-base break-all">
                      alunea.bienetre@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#E8DCC8] rounded-full flex items-center justify-center flex-shrink-0">
                    <Instagram
                      className="w-4 h-4 sm:w-5 sm:h-5 text-[#2C5F4F]"
                      strokeWidth={1.5}
                    />
                  </div>
                  <div>
                    <p className="text-[#2C5F4F] mb-1">
                      Instagram
                    </p>
                    <p className="text-[#4A5568]">
                      alunea.massage
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#E8DCC8] rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock
                      className="w-4 h-4 sm:w-5 sm:h-5 text-[#2C5F4F]"
                      strokeWidth={1.5}
                    />
                  </div>
                  <div>
                    <p className="text-[#2C5F4F] mb-1">
                      Horaires
                    </p>
                    <p className="text-[#4A5568]">
                      Du lundi au Samedi
                    </p>
                    <p className="text-[#4A5568]">
                      8h00 - 20h00
                    </p>
                    <p className="text-sm text-[#4A5568] mt-1">
                      Sur rendez-vous uniquement
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-[#2C5F4F] mb-2"
                >
                  Nom complet
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 rounded-xl border border-[#E8DCC8] focus:outline-none focus:ring-2 focus:ring-[#2C5F4F] focus:border-transparent bg-[#FAF8F5] disabled:opacity-50"
                  placeholder="Votre nom"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-[#2C5F4F] mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 rounded-xl border border-[#E8DCC8] focus:outline-none focus:ring-2 focus:ring-[#2C5F4F] focus:border-transparent bg-[#FAF8F5] disabled:opacity-50"
                  placeholder="votre@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-[#2C5F4F] mb-2"
                >
                  Téléphone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 rounded-xl border border-[#E8DCC8] focus:outline-none focus:ring-2 focus:ring-[#2C5F4F] focus:border-transparent bg-[#FAF8F5] disabled:opacity-50"
                  placeholder="06 XX XX XX XX"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-[#2C5F4F] mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-[#E8DCC8] focus:outline-none focus:ring-2 focus:ring-[#2C5F4F] focus:border-transparent bg-[#FAF8F5] resize-none disabled:opacity-50"
                  placeholder="Décrivez votre demande..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 sm:px-8 py-4 bg-[#2C5F4F] text-white rounded-full hover:bg-[#3D7A64] transition-all shadow-md hover:shadow-xl flex items-center justify-center gap-2 hover:scale-105 duration-300 button-shine disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                <Send className="w-5 h-5" strokeWidth={1.5} />
                {isSubmitting
                  ? "Envoi en cours..."
                  : "Prendre rendez-vous"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}