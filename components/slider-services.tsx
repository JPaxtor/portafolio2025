"use client";

import { Swiper, SwiperSlide } from "swiper/react";
// ⭐️ IMPORTANTE: Asegúrate de importar Autoplay y FreeMode
import { Pagination, Autoplay, FreeMode } from "swiper/modules";

import { serviceData } from "@/data";

const SliderServices = () => {
  return (
    <Swiper
      // ⭐️ CONFIGURACIÓN DE AUTOPLAY: CLAVE PARA EL MOVIMIENTO AUTOMÁTICO
      autoplay={{
        delay: 0, // Sin pausa, para el movimiento continuo
        disableOnInteraction: false, // El movimiento no se detiene si el usuario arrastra
        reverseDirection: false, // Mueve a la izquierda
      }}
      loop={true} // Repetición infinita
      speed={6000} // Velocidad del desplazamiento (ajusta si quieres más lento/rápido)
      breakpoints={{
        320: {
          slidesPerView: 1.2,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 2.2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 25,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      // ⭐️ MÓDULOS COMPLETOS: DEBE INCLUIR Autoplay y FreeMode
      modules={[Pagination, Autoplay, FreeMode]}
      className="h-[350px] md:h-[400px] w-[300px] md:w-[600px] lg:w-[900px] xl:w-[1000px] px-2"
    >
      {serviceData.map((item, index) => (
        <SwiperSlide key={index}>
          <div
            className="flex px-6 py-8 h-[360px] rounded-xl cursor-pointer bg-white/5 shadow-lg
                                sm:flex-col gap-x-6 sm:gap-x-0 group 
                                hover:bg-white/10 transition-all duration-500 hover:border-secondary border-[3px] border-transparent
                                group-hover:translate-y-[-10px] transform"
          >
            {/* El icono se mantiene con el color secondary */}
            <div className="mb-4 text-5xl text-secondary">{item.icon}</div>

            <div className="flex flex-col">
              {/* Título más grande y bold */}
              <h3 className="mb-4 text-xl font-semibold text-white">
                {item.title}
              </h3>
              {/* Descripción más clara */}
              <p className="text-sm text-gray-300">{item.description}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SliderServices;
