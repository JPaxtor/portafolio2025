"use client";

import { useState } from "react";
import Link from "next/link";
import { Send } from "lucide-react"; // Icono para el botón de enviar

import { dataContact } from "@/data";
import TransitionPage from "@/components/transition-page";
import { MotionTransition } from "@/components/transition-component";

const ContactPage = () => {
  // Estado para manejar los datos del formulario
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // ⭐️ Estado para manejar si el ratón está sobre el formulario completo
  const [isFormHovering, setIsFormHovering] = useState(false);

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Mantenemos la alerta informativa
    alert(
      "Disculpa, el servicio de envío de correos está en mantenimiento. Por favor, usa los enlaces directos (WhatsApp/Correo) en la columna izquierda. ¡Gracias!"
    );
  };

  return (
    <>
      <TransitionPage />

      <div className="flex flex-col justify-center min-h-screen pt-24 pb-24 px-4 md:px-6">
        <h1 className="text-3xl leading-tight text-center md:text-5xl md:mb-12 mb-8">
          Contacta{" "}
          <span className="font-extrabold text-secondary"> conmigo</span>
        </h1>

        <MotionTransition position="bottom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto max-w-6xl">
            {/* COLUMNA 1: INFORMACIÓN DE CONTACTO DIRECTO (Sin cambios) */}
            <div className="flex flex-col space-y-8 p-6 rounded-xl bg-white/5 border border-white/10 shadow-lg">
              <h2 className="text-2xl font-bold text-white mb-4 border-b border-secondary/50 pb-2">
                Métodos de Contacto Directo
              </h2>
              {dataContact.map(({ id, title, subtitle, icon, link }) => (
                <Link
                  href={link}
                  key={id}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-6 p-4 rounded-lg transition duration-300 hover:bg-white/10 group"
                >
                  <div className="flex-shrink-0">{icon}</div>
                  <div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-secondary">
                      {title}
                    </h3>
                    <p className="text-gray-400 text-sm">{subtitle}</p>
                  </div>
                </Link>
              ))}
            </div>

            {/* COLUMNA 2: FORMULARIO DE CORREO ELECTRÓNICO CON OVERLAY */}
            <div
              className="relative" // Contenedor padre para el formulario y el overlay
              onMouseEnter={() => setIsFormHovering(true)}
              onMouseLeave={() => setIsFormHovering(false)}
            >
              <form
                onSubmit={handleSubmit}
                className="flex flex-col space-y-6 p-6 rounded-xl bg-white/5 border border-white/10 shadow-lg"
              >
                <h2 className="text-2xl font-bold text-white mb-4 border-b border-secondary/50 pb-2">
                  Envíame un Mensaje
                </h2>

                {/* ⭐️ REVERTIR ESTILOS: Inputs de fondo oscuro (como en image_19c63a.png) */}

                {/* Campo Nombre */}
                <input
                  type="text"
                  name="name"
                  placeholder="Tu Nombre"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded-lg bg-[#272733] text-white border border-transparent focus:border-secondary focus:ring-secondary transition-colors"
                />

                {/* Campo Correo */}
                <input
                  type="email"
                  name="email"
                  placeholder="Tu Correo Electrónico"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded-lg bg-[#272733] text-white border border-transparent focus:border-secondary focus:ring-secondary transition-colors"
                />

                {/* Campo Asunto */}
                <input
                  type="text"
                  name="subject"
                  placeholder="Asunto"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded-lg bg-[#272733] text-white border border-transparent focus:border-secondary focus:ring-secondary transition-colors"
                />

                {/* Área de Mensaje */}
                <textarea
                  name="message"
                  placeholder="Tu Mensaje..."
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded-lg bg-[#272733] text-white border border-transparent focus:border-secondary focus:ring-secondary transition-colors resize-none"
                ></textarea>

                {/* Botón de Enviar (Estilo original, sin hover condicional) */}
                <button
                  type="submit"
                  disabled={true}
                  className="flex items-center justify-center gap-2 px-6 py-3 text-lg font-semibold rounded-lg text-white transition-all duration-300 bg-secondary cursor-not-allowed" // Color rojo completo
                >
                  Enviar Mensaje
                  <Send size={20} />
                </button>
              </form>

              {/* ⭐️ OVERLAY Y MENSAJE DE ADVERTENCIA */}
              {isFormHovering && (
                <div className="absolute inset-0 flex flex-col items-center justify-center rounded-xl bg-black/60 transition-opacity duration-900 z-20">
                  <div className="p-4 w-10/12 text-center rounded-lg bg-red-600 text-white text-lg font-bold shadow-2xl">
                    🚧 SERVICIO EN MANTENIMIENTO 🚧
                  </div>
                  <p className="mt-4 text-white text-md text-center max-w-sm">
                    Por favor, usa los enlaces de **WhatsApp, Correo** o
                    **Telegram** en la columna izquierda.
                  </p>
                </div>
              )}
            </div>
          </div>
        </MotionTransition>
      </div>
    </>
  );
};

export default ContactPage;
