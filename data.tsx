import { BookText, CodeSquare, HomeIcon, UserRound, Linkedin, Instagram, Rss, Crop, Pencil, Computer, Book, Rocket, Speech, Server, Database } from "lucide-react";

export const socialNetworks = [
    
    {
        id: 2,
        logo: <Linkedin size={30} strokeWidth={1} />,
        src: "https://www.linkedin.com/in/daniel-cantillo-a3240b31a",
    },
    {
        id: 3,
        logo: <Instagram size={30} strokeWidth={1} />,
        src: "https://www.instagram.com/TU_INSTAGRAM_URL",
    },
    
    
    {
        id: 4,
        logo: <Rss size={30} strokeWidth={1} />,
        src: "#!",
    }
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
        link: "/testimonials",
    },
];

export const dataAboutPage = [
   
]

export const dataCounter = [
    {
        id: 0,
        endCounter: 0,
        text: "Años de experiencia",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 1,
        endCounter: 0,
        text: "Clientes satisfechos",
        lineRight: true,
        lineRightMobile: false,
    },
    {
        id: 2,
        endCounter: 6,
        text: "semestres de estudio",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 3,
        endCounter: 1,
        text: "proyectos en mi github",
        lineRight: false,
        lineRightMobile: false,
    },
];

export const serviceData = [
    {
        icon: <Crop />,
        title: "BDD",
        description: "Manejo de bases de datos relacionales y no relacionales",
    },
    {
        icon: <Pencil />,
        title: "Diseño web",
        description: "Diseño creativo y profesional de interfaces web intuitivas y atractivas, centradas en la experiencia del usuario",
    },
    {
        icon: <Computer />,
        title: "Desarrollo web",
        description: "Diseño y desarrollo de sitios web a medida, adaptados a tus necesidades",
    },
    {
        icon: <CodeSquare />,
        title: "Backend",
        description: "Desarrollo de APIs RESTful y GraphQL, implementación de arquitecturas escalables y seguras con Node.js y Express",
    },
    {
        icon: <Rocket />,
        title: "DevOps",
        description: "Configuración de pipelines CI/CD, despliegue en la nube y gestión de contenedores con Docker",
    },
];

export const dataPortfolio = [
    {
        id: 1,
        title: "E-commerce Platform",
        image: "/image-1.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 2,
        title: "Gestión Empresarial",
        image: "/image-2.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 3,
        title: "Portal Educativo",
        image: "/image-3.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    }
];

export const dataTestimonials = [
    {
        id: 1,
        name: "Trabajo en Equipo",
        description:
            "Excelente capacidad para colaborar en equipos multidisciplinarios, comunicando ideas de manera clara y efectiva. Experiencia en metodologías ágiles y resolución de conflictos.",
        imageUrl: "/profile1.png",
    },
    {
        id: 2,
        name: "Resolución de Problemas",
        description:
            "Habilidad para analizar situaciones complejas, identificar soluciones innovadoras y tomar decisiones efectivas bajo presión. Enfoque en resultados y mejora continua.",
        imageUrl: "/profile2.png",
    },
    {
        id: 3,
        name: "Adaptabilidad",
        description:
            "Capacidad para adaptarse rápidamente a nuevos entornos y tecnologías. Aprendizaje continuo y disposición para enfrentar nuevos desafíos con entusiasmo.",
        imageUrl: "/profile3.png",
    },
    {
        id: 4,
        name: "Mobile Development",
        description:
            "Desarrollo de aplicaciones móviles multiplataforma con React Native. Creación de experiencias nativas y optimizadas para diferentes dispositivos.",
        imageUrl: "/profile4.png",
    },
    {
        id: 5,
        name: "UI/UX Design",
        description:
            "Diseño de interfaces intuitivas y atractivas. Creación de prototipos y wireframes. Implementación de principios de diseño y accesibilidad.",
        imageUrl: "/profile5.png",
    },
    {
        id: 6,
        name: "Testing & Quality",
        description:
            "Implementación de pruebas unitarias, de integración y end-to-end. Aseguramiento de la calidad del código y optimización del rendimiento.",
        imageUrl: "/profile6.png",
    },
];

export const skills = [
    {
        name: "Frontend",
        level: "Intermedio",
        icon: <CodeSquare size={24} />
    },
    {
        name: "Backend",
        level: "Básico",
        icon: <Server size={24} />
    },
    {
        name: "Base de Datos",
        level: "Básico",
        icon: <Database size={24} />
    },
    {
        name: "DevOps",
        level: "Básico",
        icon: <Rocket size={24} />
    }
];