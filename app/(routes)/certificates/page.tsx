"use client";

import { useState } from "react";
import Image from "next/image";
// Asegúrate de importar Autoplay y FreeMode
import { Pagination, FreeMode, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Importamos el tipo Swiper para la corrección de tipado
import { Swiper as SwiperClass } from "swiper";

// Usamos la misma importación de datos
import { dataTestimonials } from "@/data";
import CircleImage from "@/components/circle-image";
import TransitionPage from "@/components/transition-page";

const CertificatesPage = () => {
  const dataCertificates = dataTestimonials;

  // Ya no necesitamos el estado thumbsSwiper, lo eliminamos.

  return (
    <>
      <TransitionPage />
      {/* Altura mínima para que haya espacio para las dos filas */}
      <div className="flex flex-col justify-center min-h-screen overflow-y-auto pt-16 pb-16">
        <CircleImage />

        <h1 className="text-2xl leading-tight text-center md:text-4xl md:mb-8">
          Mi Galería de Certificados
          <span className="block font-bold text-secondary"> Formación</span>
        </h1>

        <div className="flex flex-col items-center justify-center w-full">
          {/* 1. SWIPER PRINCIPAL (VISUALIZADOR GRANDE) - Mantenemos Autoplay */}
          <Swiper
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            modules={[Pagination, Autoplay]} // Ya no usamos Thumbs y FreeMode aquí
            pagination={{ clickable: true }}
            className="h-[450px] md:h-[550px] w-[90%] md:w-[700px] lg:w-[900px] xl:w-[1000px] mb-8"
          >
            {dataCertificates.map(({ id, name, imageUrl }) => (
              <SwiperSlide key={id}>
                <div className="flex flex-col items-center justify-center h-full p-4 md:p-8 bg-gray-800/20 rounded-xl border border-gray-700">
                  <div className="relative w-full h-full max-w-[900px] max-h-[450px]">
                    <Image
                      src={imageUrl}
                      alt={name}
                      layout="fill"
                      objectFit="contain"
                      className="rounded-lg shadow-2xl"
                    />
                  </div>
                  <h4 className="mt-6 text-xl font-semibold text-center text-white/90">
                    {name}
                  </h4>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* 2. FILA DE MINIATURAS 1 (MOVIÉNDOSE A LA IZQUIERDA) */}
          <Swiper
            // Configuración para que se mueva a la IZQUIERDA
            autoplay={{
              delay: 0, // Sin pausa
              disableOnInteraction: false,
              reverseDirection: false, // Dirección normal (izquierda por defecto)
            }}
            loop={true} // Esencial para el movimiento continuo
            speed={5000} // Velocidad de la animación (menor es más rápido)
            spaceBetween={10}
            slidesPerView={4} // Número de miniaturas visibles
            freeMode={true}
            modules={[FreeMode, Autoplay]}
            className="h-[100px] w-[90%] md:w-[700px] lg:w-[900px] xl:w-[1000px] mt-4 opacity-70"
          >
            {dataCertificates.map(({ id, name, imageUrl }) => (
              <SwiperSlide key={id}>
                <div className="relative w-full h-full border border-gray-700 rounded-lg overflow-hidden">
                  <Image
                    src={imageUrl}
                    alt={`Miniatura de ${name}`}
                    layout="fill"
                    objectFit="cover"
                    className="grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* 3. FILA DE MINIATURAS 2 (MOVIÉNDOSE A LA DERECHA) */}
          <Swiper
            // Configuración para que se mueva a la DERECHA
            autoplay={{
              delay: 0, // Sin pausa
              disableOnInteraction: false,
              reverseDirection: true, // ⭐️ CLAVE: Invierte la dirección del movimiento
            }}
            loop={true} // Esencial para el movimiento continuo
            speed={5000} // Misma velocidad que la primera fila
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            modules={[FreeMode, Autoplay]}
            // Un poco de margen superior para separarla de la fila 1
            className="h-[100px] w-[90%] md:w-[700px] lg:w-[900px] xl:w-[1000px] mt-4 opacity-70"
          >
            {dataCertificates.map(({ id, name, imageUrl }) => (
              <SwiperSlide key={id}>
                <div className="relative w-full h-full border border-gray-700 rounded-lg overflow-hidden">
                  <Image
                    src={imageUrl}
                    alt={`Miniatura de ${name}`}
                    layout="fill"
                    objectFit="cover"
                    className="grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default CertificatesPage;
