"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { itemsNavbar } from "@/data"; // Asumo que importas esto aquí

import { MotionTransition } from "./transition-component";

const Navbar = () => {
  const router = usePathname();

  // Función para asignar el nombre legible a partir del título de la data
  const getNavItemName = (title: string, link: string) => {
    switch (link) {
      case "/":
        return "Inicio";
      case "/about-me":
      case "/services":
      case "/portfolio":
      case "/certificates":
        // Aseguramos que solo el texto del enlace coincida con las mayúsculas/minúsculas de la función
        return title;
      default:
        return title;
    }
  };

  return (
    <MotionTransition
      position="right"
      // Navbar anclada al fondo
      className="fixed z-40 flex flex-col items-center justify-center w-full mt-auto h-max bottom-0"
    >
      <nav className="w-full">
        {/* ⚡️ CAMBIO CLAVE: Quitamos 'rounded-t-xl' para mobile. 
          En su lugar, añadimos 'md:rounded-full' para que el redondeo solo aparezca en desktop.
          En mobile, será completamente cuadrado (de borde a borde).
        */}
        <div className="flex items-center justify-center gap-4 px-6 py-3 bg-white/20 backdrop-blur-md shadow-2xl border border-white/10 w-full md:max-w-lg md:mx-auto md:rounded-full">
          {itemsNavbar.map((item) => {
            const isCurrentPath = router === item.link;
            const navItemName = getNavItemName(item.title, item.link);

            return (
              <div
                key={item.id}
                className={`flex items-center transition duration-200 rounded-full cursor-pointer group
                                          ${
                                            isCurrentPath
                                              ? "bg-secondary text-white scale-105 shadow-lg"
                                              : "text-gray-300 hover:bg-white/10"
                                          }
                                        `}
                data-tooltip-target="tooltip-default"
              >
                <Link
                  href={item.link}
                  className="flex items-center gap-2 px-4 py-2"
                >
                  <div className="text-xl">{item.icon}</div>

                  {/* El texto del enlace se oculta en mobile (hidden) y aparece en desktop (md:inline-block) */}
                  <span
                    className={`text-sm font-medium whitespace-nowrap hidden md:inline-block 
                                                ${
                                                  isCurrentPath
                                                    ? "text-white"
                                                    : "text-gray-300 group-hover:text-white"
                                                }`}
                  >
                    {navItemName}
                  </span>
                </Link>
              </div>
            );
          })}
        </div>
      </nav>
    </MotionTransition>
  );
};

export default Navbar;
