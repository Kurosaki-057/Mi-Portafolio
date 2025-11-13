import type { ReactElement } from "react";
import { BookText, CodeSquare, HomeIcon, UserRound, Linkedin, Instagram, Rss, Crop, Pencil, Computer, Rocket, Server, Database } from "lucide-react";

// Tipos para los datos exportados
export interface SocialNetwork {
    id: number;
    logo: ReactElement;
    src: string;
}

export interface NavItem {
    id: number;
    title: string;
    icon: ReactElement;
    link: string;
}

export interface AboutItem {
    id: number;
    title: string;
    date?: string;
    subtitle?: string;
    description?: string;
}

export interface CounterItem {
    id: number;
    endCounter: number;
    text: string;
    lineRight: boolean;
    lineRightMobile: boolean;
}

export interface ServiceItem {
    icon: ReactElement;
    title: string;
    description: string;
}

export interface PortfolioItem {
    id: number;
    title: string;
    image: string;
    urlGithub: string;
    urlDemo: string;
}

export interface TestimonialItem {
    id: number;
    name: string;
    description: string;
    imageUrl: string;
}

export interface SkillItem {
    name: string;
    level: string;
    icon: ReactElement;
}

export const socialNetworks: SocialNetwork[] = [
    {
        id: 2,
        logo: <Linkedin size={30} strokeWidth={1} />,
        src: "www.linkedin.com/in/danielcantillo05",
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

export const itemsNavbar: NavItem[] = [
    {
        id: 1,
        title: "Inicio",
        icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
        link: "/",
    },
    {
        id: 2,
        title: "Sobre mí",
        icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
        link: "/about-me",
    },
    {
        id: 3,
        title: "Servicios",
        icon: <BookText size={25} color="#fff" strokeWidth={1} />,
        link: "/services",
    },
    {
        id: 4,
        title: "Portafolio",
        icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
        link: "/portfolio",
    },
    // Testimonios eliminado: no hay testimonios de clientes
];

export const dataAboutPage: AboutItem[] = [];

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
        endCounter: 7,
        text: "semestres de estudio",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 3,
        endCounter: 4,
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
        title: "Skateland",
        image: "/skateland.png",
        urlGithub: "https://github.com/Kurosaki-057/Mobile",
        urlDemo: "#!",
    },
    {
        id: 2,
        title: "Aviu",
        image: "/aviu.png",
        urlGithub: "https://github.com/lupisAV/aivU/tree/Daniel/backend",
        urlDemo: "#!",
    },
    {
        
    }
];

// Sección de testimonios eliminada porque no aplicaba

export const skills = [
    {
        name: "Frontend",
        level: "Intermedio",
        icon: <CodeSquare size={24} />
    },
    {
        name: "Backend",
        level: "avanzado",
        icon: <Server size={24} />
    },
    {
        name: "Base de Datos",
        level: "intermedio",
        icon: <Database size={24} />
    },
    {
        name: "DevOps",
        level: "Básico",
        icon: <Rocket size={24} />
    }
];