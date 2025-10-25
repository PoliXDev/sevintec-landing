import { SiteConfig } from '@/types';


export const siteConfig: SiteConfig = {
  company: {
    name: "SEVINTEC",
    tagline: "Seguridad, Confianza e Innovación Tecnológica",
    description: "Empresa líder en servicios de seguridad privada, prevención y control de acceso, alarmas y CCTV.",
    phone: "+58 422-0777892", 
    email: "contacto@sevintec.com", 
    whatsapp: "584220777892" 
  },
  seo: {
    title: "SEVINTEC -  Seguridad privada, prevención y control de acceso, alarmas y CCTV.",
    description: "Empresa líder en servicios de seguridad privada, prevención y control de acceso, alarmas y CCTV.",
    keywords: [
      "vigilancia privada",
      "seguridad",
      "prevención",
      "control de acceso",
      "SEVINTEC",
      "Sevintec",
      "seguridad empresarial",
      "vigilancia corporativa"
    ],
    ogImage: "/images/og-image.jpg"
  },
  social: {
    facebook: "https://facebook.com/sevintec", 
    instagram: "https://instagram.com/sevintec",
    linkedin: "https://linkedin.com/company/sevintec"
  }
};

// Services configuration
export const services = [
  {
    id: "prevencion",
    title: "Prevención",
    description: "Sistemas avanzados de prevención y detección temprana para proteger sus activos y personal.",
    icon: "shield-check",
    features: [
      "Análisis de riesgos",
      "Sistemas de alarma",
      "Monitoreo 24/7",
      "Protocolos de seguridad"
    ]
  },
  {
    id: "vigilancia",
    title: "Vigilancia",
    description: "Servicios profesionales de vigilancia con personal altamente capacitado y tecnología de punta.",
    icon: "eye",
    features: [
      "Personal especializado",
      "Vigilancia física",
      "Patrullaje",
      "Informes detallados"
    ]
  },
  {
    id: "control-acceso",
    title: "Control de Acceso",
    description: "Soluciones tecnológicas para el control y gestión de accesos en sus instalaciones.",
    icon: "key",
    features: [
      "Sistemas biométricos",
      "Tarjetas de acceso",
      "Control de visitantes",
      "Registro de actividad"
    ]
  }
];


export const colors = {
  primary: {
    blue: "#1e40af",      
    secondary: "#3b82f6"  
  },
  accent: {
    green: "#10b981"      
  },
  neutral: {
    gray: "#6b7280",      
    lightGray: "#f3f4f6", 
    darkText: "#1f2937"   
  },
  white: "#ffffff"
};

// Navigation items
export const navigation = [
  { name: "Inicio", href: "#hero" },
  { name: "Quiénes Somos", href: "#about" },
  { name: "Contacto", href: "#contact" }
];