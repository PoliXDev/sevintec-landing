// Utility functions for SEVINTEC project

// WhatsApp integration utility
export const generateWhatsAppLink = (number: string, message: string) => {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${number}?text=${encodedMessage}`;
};

// Default WhatsApp message
export const DEFAULT_WHATSAPP_MESSAGE = "Hola, me interesa conocer más sobre los servicios de SEVINTEC.";

// Format phone number for display
export const formatPhoneNumber = (phone: string) => {
  // Remove all non-numeric characters
  const cleaned = phone.replace(/\D/g, '');
  
  // Format as Venezuelan phone number
  if (cleaned.length === 11 && cleaned.startsWith('58')) {
    return `+${cleaned.slice(0, 2)} ${cleaned.slice(2, 6)}-${cleaned.slice(6)}`;
  }
  
  return phone;
};

// Form validation utilities
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validateName = (name: string): boolean => {
  return name.trim().length >= 2;
};

export const validateMessage = (message: string): boolean => {
  return message.trim().length >= 10;
};

// Animation utilities for Framer Motion
export const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

export const hoverScale = {
  whileHover: { scale: 1.05 },
  transition: { duration: 0.2 }
};

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export const staggerItem = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 }
};