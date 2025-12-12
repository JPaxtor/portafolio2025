import {
  BookText,
  CodeSquare,
  HomeIcon,
  UserRound,
  Linkedin,
  Pencil,
  Computer,
  Rocket,
  Speech,
  Instagram,
  Server,
  Mail,
  Phone,
  MapPin,
  Send,
  Contact,
  Github,
} from "lucide-react";

export const socialNetworks = [
  {
    id: 1,
    logo: <Linkedin size={30} strokeWidth={1} />,
    src: "https://www.linkedin.com/in/juan-manuel-paxtor-tecum-3034b8212/",
  },
  {
    id: 2,
    logo: <Github size={30} strokeWidth={1} />,
    src: "https://github.com/jpaxtor",
  },
  {
    id: 3,
    logo: <Phone size={30} strokeWidth={1} />,
    title: "WhatsApp",
    src: "https://wa.me/+50243341263",
  },
  {
    id: 4,
    logo: <Instagram size={30} strokeWidth={1} />,
    src: "https://www.instagram.com/jpaxtor_tm/",
  },
];
export const itemsNavbar = [
  {
    id: 1,
    title: "Home",
    icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
    link: "/",
  },
  {
    id: 2,
    title: "User",
    icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
    link: "/about-me",
  },
  {
    id: 3,
    title: "Book",
    icon: <BookText size={25} color="#fff" strokeWidth={1} />,
    link: "/services",
  },
  {
    id: 4,
    title: "Target",
    icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
    link: "/portfolio",
  },
  {
    id: 5,
    title: "Home",
    icon: <Speech size={25} color="#fff" strokeWidth={1} />,
    link: "/certificates",
  },
  {
    id: 6,
    title: "Contacto",
    icon: <Contact size={25} color="#fff" strokeWidth={1} />,
    link: "/contact",
  },
];

export const dataAboutPage = [
  {
    id: 1,
    title: "Analista Soporte N1 SQL",
    subtitle: "Sigel / Movistar SV",
    description:
      "Colaborar en brindar soporte de primera linea en entorno unix con SQL oracle a incidencias en datos",
    date: "feb 2025 ",
  },
  {
    id: 2,
    title: "Proyectos personales",
    subtitle: "Freelance",
    description:
      "Trabajando en proyectos personales y creciendo profesionalmente",
    date: "Ene 2024",
  },
  {
    id: 3,
    title: "Digitador / Soporte",
    subtitle: "!XOR TECH STUDIO",
    description:
      "Digistador y soporte al impementar un sistema en farmacias con distintas sucursales",
    date: "Ene 2023",
  },
  {
    id: 4,
    title: "Prácticas",
    subtitle: "!XOR TECH STUDIO",
    description:
      "Practicas profesionales viendo procesos al realizar el proceso de analisis y recaudacion de requerimientos para distintos sistemas y realizando proyectos web",
    date: "Jul 2022",
  },
];

export const dataCounter = [
  {
    id: 0,
    endCounter: 4,
    text: "Años de experiencia",
    lineRight: true,
    lineRightMobile: true,
  },
  {
    id: 1,
    endCounter: 9,
    text: "Clientes satisfechos",
    lineRight: true,
    lineRightMobile: false,
  },
  {
    id: 2,
    endCounter: 15,
    text: "Proyectos finalizados",
    lineRight: true,
    lineRightMobile: true,
  },
];

export const serviceData = [
  {
    icon: <Pencil />,
    title: "Diseño web",
    description:
      "Diseño creativo y profesional de interfaces web intuitivas y atractivas, centradas en la experiencia del usuario",
  },
  {
    icon: <Computer />,
    title: "Desarrollo web",
    description:
      "Diseño y desarrollo de sitios web a medida, adaptados a tus necesidades",
  },
  {
    icon: <Server />,
    title: "Backend",
    description:
      "Implementación de la lógica del servidor, bases de datos y APIs para garantizar el rendimiento, la funcionalidad y la seguridad de la aplicación",
  },
  {
    icon: <Rocket />,
    title: "SEO",
    description:
      "Optimización de tu presencia en línea mediante estrategias de SEO avanzadas, ",
  },
];

export const dataPortfolio = [
  {
    id: 1,
    title: "Coffee shop... - Astro",
    image: "/coffeshop.png",
    urlGithub: "https://github.com/JPaxtor/Cafeteria.git",
    urlDemo: "https://coffeshoplandingpage.web.app/",
  },
  {
    id: 2,
    title: "The Modern... - Astro",
    image: "/TheModernThread.jpg",
    urlGithub: "https://github.com/JPaxtor/the-modern-thread.git",
    urlDemo: "https://the-modern-thread.web.app/",
  },
  {
    id: 3,
    title: "Gifs App - Angular",
    image: "/MyGifsApp.jpg",
    urlGithub: "https://github.com/JPaxtor/MyGifsApp.git",
    urlDemo: "https://mygifsapp.web.app/",
  },
  {
    id: 4,
    title: "Pipes App - Angular",
    image: "/PipesApp.jpg",
    urlGithub: "https://github.com/JPaxtor/PipesApp.git",
    urlDemo: "https://pipees-app.web.app/uncommon",
  },
  {
    id: 5,
    title: "Country App - Angular",
    image: "/country-app.jpg",
    urlGithub: "https://github.com/JPaxtor/country-app-angular.git",
    urlDemo: "https://country-spa.web.app/countries/by-region",
  },
  {
    id: 6,
    title: "Mockup Landing Page !XOR - Figma",
    image: "/figma.png",
    urlGithub: "#!",
    urlDemo:
      "https://www.figma.com/file/FqcM3eQPzpNHnbLMFVN6oy/!XOR?type=design&node-id=0%3A1&mode=dev&t=NyufXaQp2EQ6ZOAy-1",
  },
  {
    id: 7,
    title: "Dark Web ",
    image: "/image-7.jpg",
    urlGithub: "#!",
    urlDemo: "#!",
  },
  {
    id: 8,
    title: "E-commerce web",
    image: "/image-8.jpg",
    urlGithub: "#!",
    urlDemo: "#!",
  },
];

export const dataTestimonials = [
  {
    id: 1,
    name: "CISCO - Introduction to cibersegurity",
    description:
      "¡Fantástico recurso para aquellos que buscan validación antes de tomar decisiones importantes! Los testimonios aquí son veraces y realmente útiles. ¡Gracias por simplificar mi proceso de toma de decisiones!",
    imageUrl: "/Diplomas/ciscoIntroCiber.webp",
  },
  {
    id: 2,
    name: "PLATZI - Angular Avanzado",
    description:
      "¡Increíble plataforma! Los testimonios aquí son genuinos y me han ayudado a tomar decisiones informadas. ¡Altamente recomendado!",
    imageUrl: "/Diplomas/diploma-angular-avanzado.webp",
  },
  {
    id: 3,
    name: "DEVTALLES - Mejorar Velocidad de Codificacion",
    description:
      "Excelente recurso para obtener opiniones auténticas sobre diferentes productos y servicios. Me ha ayudado mucho en mis compras en línea. ¡Bravo por este sitio!",
    imageUrl: "/Diplomas/diploma-codificaion.jpg",
  },
  {
    id: 4,
    name: "INTECAP - Inglish Basic",
    description:
      "¡Qué descubrimiento tan fantástico! Los testimonios aquí son honestos y detallados. Me siento más seguro al tomar decisiones después de leer las experiencias compartidas por otros usuarios.",
    imageUrl: "/Diplomas/diploma-inglesIntecap.jpg",
  },
  {
    id: 5,
    name: "PLATZI - Scrum",
    description:
      "Una joya en la web. Los testimonios son fáciles de encontrar y están bien organizados. ¡Definitivamente mi destino número uno cuando necesito referencias confiables!",
    imageUrl: "/Diplomas/diploma-scrum.webp",
  },
  {
    id: 6,
    name: "PLATZI - Java OOP",
    description:
      "Excelente recurso para obtener opiniones auténticas sobre diferentes productos y servicios. Me ha ayudado mucho en mis compras en línea. ¡Bravo por este sitio!",
    imageUrl: "/Diplomas/diploma-java-oop.webp",
  },
  {
    id: 7,
    name: "PLATZI - SQL MYSQL",
    description:
      "¡Fantástico recurso para aquellos que buscan validación antes de tomar decisiones importantes! Los testimonios aquí son veraces y realmente útiles. ¡Gracias por simplificar mi proceso de toma de decisiones!",
    imageUrl: "/Diplomas/diploma-sql-mysql.webp",
  },
  {
    id: 8,
    name: "PLATZI - Apis Con .Net",
    description:
      "Me encanta la variedad de testimonios disponibles en esta página. Es inspirador ver cómo otras personas han superado desafíos similares a los míos. ¡Gracias por esta invaluable fuente de motivación!",
    imageUrl: "/Diplomas/diploma-apis-net.webp",
  },
  {
    id: 9,
    name: "PLATZI - Scrum Master",
    description:
      "¡Qué descubrimiento tan fantástico! Los testimonios aquí son honestos y detallados. Me siento más seguro al tomar decisiones después de leer las experiencias compartidas por otros usuarios.",
    imageUrl: "/Diplomas/diploma-scrum-master.webp",
  },
];

export const dataContact = [
  {
    id: 1,
    title: "Correo Electrónico",
    subtitle: "juanmanupxt321@gmail.com",
    icon: <Mail size={40} className="text-secondary" />,
    link: "mailto:juanmanupxt321@gmail.com",
  },
  {
    id: 2,
    title: "WhatsApp",
    subtitle: "+502 43341263",
    icon: <Phone size={40} className="text-secondary" />,
    link: "https://wa.me/+50243341263",
  },
  {
    id: 3,
    title: "Telegram",
    subtitle: "@manupxBot",
    icon: <Send size={40} className="text-secondary" />,
    link: "https://t.me/manupxBot",
  },
  {
    id: 4,
    title: "Ubicación",
    subtitle: "Quetzaltenango, Guatemala",
    icon: <MapPin size={40} className="text-secondary" />,
    link: "#",
  },
];
