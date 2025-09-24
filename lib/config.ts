import { SiteConfig } from '@/types';

// Site configuration based on SEVINTEC requirements
export const siteConfig: SiteConfig = {
  company: {
    name: "SEVINTEC",
    tagline: "Seguridad, Confianza e Innovación Tecnológica",
    description: "Empresa líder en servicios de vigilancia privada, prevención y control de acceso. Evolución de Sevinca con tecnología innovadora.",
    phone: "+58 424-123-4567", // Replace with actual phone
    email: "contacto@sevintec.com", // Replace with actual email
    whatsapp: "584241234567" // Replace with actual WhatsApp number
  },
  seo: {
    title: "SEVINTEC - Servicios de Vigilancia y Seguridad Privada",
    description: "Empresa líder en servicios de vigilancia privada, prevención y control de acceso. Evolución de Sevinca con tecnología innovadora.",
    keywords: [
      "vigilancia privada",
      "seguridad",
      "prevención",
      "control de acceso",
      "SEVINTEC",
      "Sevinca",
      "seguridad empresarial",
      "vigilancia corporativa"
    ],
    ogImage: "/images/og-image.jpg"
  },
  social: {
    facebook: "https://facebook.com/sevintec", // Replace with actual URLs
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

// Color palette based on SEVINTEC logo
export const colors = {
  primary: {
    blue: "#1e40af",      // Azul primario del logo
    secondary: "#3b82f6"  // Azul secundario del logo
  },
  accent: {
    green: "#10b981"      // Verde de acento
  },
  neutral: {
    gray: "#6b7280",      // Gris neutro
    lightGray: "#f3f4f6", // Gris claro
    darkText: "#1f2937"   // Texto oscuro
  },
  white: "#ffffff"
};

// Navigation items
export const navigation = [
  { name: "Inicio", href: "#hero" },
  { name: "Quiénes Somos", href: "#about" },
  { name: "Contacto", href: "#contact" }
];