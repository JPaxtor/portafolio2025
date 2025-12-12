import AvatarServices from "@/components/avatar-services";
import CircleImage from "@/components/circle-image";
import SliderServices from "@/components/slider-services";
import TransitionPage from "@/components/transition-page";
import { ChevronRight } from "lucide-react"; // Icono de lista

const ServicesPage = () => {
  return (
    <>
      <TransitionPage />
      <CircleImage />
      <AvatarServices />

      <div className="flex flex-col items-center justify-center min-h-screen max-w-6xl mx-auto pt-24 pb-24 px-4 md:px-6">
        <div className="max-w-[550px] mb-12 order-2 md:order-1 md:text-left text-center md:col-span-1">
          <h1 className="text-3xl leading-tight md:text-5xl md:mb-5 mb-6">
            Mi Experiencia y{" "}
            <span className="font-extrabold text-secondary"> Servicios.</span>
          </h1>

          <p className="mb-6 text-base md:text-lg text-gray-300">
            Soy un desarrollador Fullstack especializado en la creación de
            soluciones digitales robustas y escalables, cubriendo el ciclo
            completo del desarrollo:
          </p>

          <ul className="space-y-3 mb-8 text-gray-200 text-left w-full max-w-[400px] mx-auto md:mx-0">
            <li className="flex items-start">
              <ChevronRight className="w-5 h-5 mr-2 text-secondary flex-shrink-0 mt-1" />
              <div>
                <strong className="text-white">Frontend:</strong> Interfaces
                modernas con **Angular**, **Astro** y **React**.
              </div>
            </li>
            <li className="flex items-start">
              <ChevronRight className="w-5 h-5 mr-2 text-secondary flex-shrink-0 mt-1" />
              <div>
                <strong className="text-white">Backend:</strong> Lógica segura
                con **C# ASP.NET** y **Java Spring Boot**.
              </div>
            </li>
            <li className="flex items-start">
              <ChevronRight className="w-5 h-5 mr-2 text-secondary flex-shrink-0 mt-1" />
              <div>
                <strong className="text-white">Datos:</strong> Manejo de bases
                críticas como **MySQL, Oracle**, **MYSQL** y **MS SQL**.
              </div>
            </li>
          </ul>

          <a
            href="/contact"
            className="px-3 py-2 my-5 transition-all border-2 cursor-pointer text-md w-fit text-secondary border-secondary rounded-xl hover:shadow-xl hover:shadow-secondary"
          >
            Contactame
          </a>
        </div>

        <div className="w-full flex justify-center order-1 md:order-2">
          <SliderServices />
        </div>
      </div>
    </>
  );
};

export default ServicesPage;
