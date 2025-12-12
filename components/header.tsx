"use client";

import { socialNetworks } from "@/data";
import Link from "next/link";
import { MotionTransition } from "./transition-component";

const Header = () => {
  return (
    <MotionTransition
      position="bottom"
      className="absolute z-40 inline-block w-full top-5 md:top-10"
    >
      <header>
        {/* ⭐️ CAMBIO 1: Flexbox en el contenedor principal para móvil
                   - Hacemos el contenedor principal un flexbox en móvil (`flex`) 
                   - y justificamos el espacio entre el logo y los iconos (`justify-between`).
                   - Añadimos padding horizontal (`px-4`) para que no peguen a los bordes.
                */}
        <div className="flex items-center justify-between max-w-6xl mx-auto px-4 md:flex">
          <Link href="/">
            {/* ⭐️ CAMBIO 2: Retirar márgenes excesivos en el título para móvil
                           - Eliminamos 'my-3' (margin vertical) en móvil y usamos 'text-left' por defecto.
                        */}
            <h1 className="text-4xl font-bold text-left">
              JP
              <span className="text-secondary">axtor</span>
            </h1>
          </Link>

          {/* ⭐️ CAMBIO 3: Contenedor de iconos
                       - Aseguramos que los íconos no tengan márgenes superiores extraños en móvil.
                       - Reducimos el `gap` si es necesario, aunque `gap-7` es grande.
                    */}
          <div className="flex items-center justify-center gap-4">
            {" "}
            {/* Reducido a gap-4 */}
            {socialNetworks.map(({ logo, src, id }) => (
              <Link
                key={id}
                href={src}
                target="_blank"
                className="transition-all duration-300 hover:text-secondary"
              >
                {logo}
              </Link>
            ))}
          </div>
        </div>
      </header>
    </MotionTransition>
  );
};

export default Header;
