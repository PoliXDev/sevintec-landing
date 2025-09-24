// Site configuration types
export interface SiteConfig {
  company: {
    name: string;
    tagline: string;
    description: string;
    phone: string;
    email: string;
    whatsapp: string;
  };
  seo: {
    title: string;
    description: string;
    keywords: string[];
    ogImage: string;
  };
  social: {
    facebook?: string;
    instagram?: string;
    linkedin?: string;
  };
}

// Service types
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features?: string[];
}

// Contact form types
export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

// Component prop types
export interface HeroProps {
  logo: string;
  title: string;
  tagline: string;
  ctaText: string;
  whatsappNumber: string;
  heroImage?: string;
}

export interface ServicesProps {
  services: Service[];
}

export interface ContactFormProps {
  onSubmit: (data: ContactFormData) => Promise<void>;
  whatsappNumber: string;
  phone: string;
  email: string;
}

// Animation types for Framer Motion
export interface AnimationVariants {
  initial: object;
  animate: object;
  transition?: object;
}

export interface StaggerAnimationProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}