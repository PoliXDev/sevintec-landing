'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useWindowSize } from '@/hooks/useWindowSize';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Home() {
  const { width } = useWindowSize();
  
  // Estados para el formulario de contacto
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
  // Array de imágenes del carrusel
  const carouselImages = [
    '/carrusel_img/1.webp',
    '/carrusel_img/2.jpg',
    '/carrusel_img/3.jpg',
    '/carrusel_img/4.png',
    '/carrusel_img/5.webp',
    '/carrusel_img/6.jpg',
  ];
  
  // Imagen fija para móvil
  const mobileImage = '/carrusel_img/4.png';
  
  // Determinar si es móvil (menos de 768px)
  const isMobile = width < 768;

  // Función para manejar cambios en el formulario
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Función para enviar el formulario
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Configuración de EmailJS
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      // Verificar que las variables de entorno estén configuradas
      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS no está configurado. Por favor, configura las variables de entorno.');
      }

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: 'contacto@sevintec.com'
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Limpiar mensaje de éxito después de 5 segundos
      setTimeout(() => setSubmitStatus('idle'), 5000);
      
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
      
      // Limpiar mensaje de error después de 5 segundos
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <style jsx global>{`
        @keyframes carousel {
          0%, 12% {
            opacity: 1;
            transform: scale(1);
          }
          15%, 97% {
            opacity: 0;
            transform: scale(1.02);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes carouselIndicator {
          0%, 12% {
            opacity: 1;
            transform: scale(1.2);
            background-color: rgba(255, 255, 255, 0.9);
          }
          15%, 97% {
            opacity: 0.3;
            transform: scale(1);
            background-color: rgba(255, 255, 255, 0.3);
          }
          100% {
            opacity: 1;
            transform: scale(1.2);
            background-color: rgba(255, 255, 255, 0.9);
          }
        }
        
        .animate-carousel {
          animation: carousel 24s infinite;
        }
        
        .animate-indicator {
          animation: carouselIndicator 24s infinite;
        }
        
        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: scale(1.05);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .animate-fade-in {
          animation: fadeIn 1.5s ease-out;
        }
        
        @keyframes pulse {
          0% {
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7);
          }
          
          70% {
            transform: scale(1.05);
            box-shadow: 0 0 0 15px rgba(37, 211, 102, 0);
          }
          
          100% {
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(37, 211, 102, 0);
          }
        }

        .whatsapp-button {
          animation: pulse 2s infinite;
        }

        .whatsapp-button:hover {
          animation: none;
          transform: scale(1.1);
        }
      `}</style>
      
      <div className="min-h-screen">
        {/* Navbar */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center md:justify-between items-center h-24">
              <div className="flex-shrink-0">
                <Image
                  src="/logo_brand_img/SEVINTEC_LOGO_2.png"
                  alt="SEVINTEC Logo"
                  width={330}
                  height={110}
                  className="object-contain py-2"
                  priority
                />
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-center space-x-12">
                  <a 
                    href="#inicio" 
                    className="text-gray-800 hover:text-yellow-500 px-3 py-2 text-lg font-medium transition-colors duration-200 border-b-2 border-transparent hover:border-yellow-500"
                  >
                    Inicio
                  </a>
                  <a 
                    href="#servicios" 
                    className="text-gray-800 hover:text-yellow-500 px-3 py-2 text-lg font-medium transition-colors duration-200 border-b-2 border-transparent hover:border-yellow-500"
                  >
                    Servicios
                  </a>
                  <a 
                    href="#clientes" 
                    className="text-gray-800 hover:text-yellow-500 px-3 py-2 text-lg font-medium transition-colors duration-200 border-b-2 border-transparent hover:border-yellow-500"
                  >
                    Quienes Somos
                  </a>
                  <a 
                    href="#contacto" 
                    className="bg-yellow-500 text-black px-6 py-3 rounded-lg text-lg font-semibold hover:bg-yellow-400 transition-colors duration-200 shadow-md hover:shadow-lg"
                  >
                    Contacto
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="pt-16">
          {/* Hero Section */}
          <section id="inicio" className="relative overflow-hidden bg-gray-900">
            {/* Contenedor responsive */}
            <div className="w-full relative min-h-[70vh] md:min-h-[80vh] lg:min-h-[90vh]">
              {/* Contenedor del carrusel */}
              <div className="absolute inset-0">
                {/* Para móvil: imagen fija */}
                {isMobile ? (
                  <div className="absolute inset-0">
                    <Image
                      src={mobileImage}
                      alt="Imagen de fondo SEVINTEC"
                      fill
                      className="object-cover animate-fade-in"
                      sizes="100vw"
                      quality={90}
                      priority={true}
                      style={{
                        objectPosition: 'calc(50% - 200px) center'
                      }}
                    />
                  </div>
                ) : (
                  /* Para desktop: carrusel animado */
                  <div className="absolute inset-0 overflow-hidden z-[1]">
                    {carouselImages.map((imagePath, index) => {
                      return (
                        <div
                          key={index}
                          className="absolute inset-0 animate-carousel"
                          style={{
                            animationDelay: `${index * 4}s`,
                            opacity: index === 0 ? 1 : 0,
                          }}
                        >
                          <Image
                            src={imagePath}
                            alt={`Slide ${index + 1}`}
                            fill
                            className="object-cover"
                            sizes="100vw"
                            quality={100}
                            priority={index === 0}
                            style={{
                              objectPosition: 'center center'
                            }}
                          />
                        </div>
                      );
                    })}
                  </div>
                )}

                {/* Overlay gradiente permanente */}
                <div className="absolute inset-0 z-[5]">
                  <div className="absolute inset-0 bg-gradient-to-r from-black/40 from-0% via-black/10 via-45% to-transparent to-85% sm:from-black/60 sm:via-black/20"></div>
                  <div className="absolute inset-0 bg-gradient-to-l from-black/40 from-100% via-black/10 via-55% to-transparent to-15% sm:from-black/60 sm:via-black/20"></div>
                  {/* Overlay adicional sutil para móvil */}
                  <div className="absolute inset-0 bg-black/20 sm:hidden"></div>
                </div>
              </div>

              {/* Texto superpuesto */}
              <div className="absolute inset-0 z-20 flex items-end sm:items-center pb-14 sm:pb-0" style={{ transform: isMobile ? 'translateY(-30px)' : 'none' }}>
                <div className="container mx-auto px-4 sm:px-6">
                  <div className="max-w-xl md:max-w-2xl lg:max-w-3xl">
                    <div className="transform transition-all duration-1000 translate-y-0 hover:translate-y-[-5px]">
                      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 text-white leading-tight drop-shadow-lg">
                        Mejore su nivel de<br />
                        <span className="text-yellow-400 drop-shadow-lg">Seguridad empresarial</span>
                      </h1>
                      <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 text-gray-100 drop-shadow-md font-medium max-w-xl">
                        Soluciones de seguridad integrales para su empresa con la última tecnología
                      </p>
                      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                        <button 
                          onClick={() => {
                            const contactSection = document.getElementById('contacto');
                            contactSection?.scrollIntoView({ behavior: 'smooth' });
                          }}
                          className="bg-yellow-500 text-black px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold hover:bg-yellow-400 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl text-sm sm:text-base md:text-lg shadow-lg"
                        >
                          Solicitar Estudio Gratuito
                        </button>
                        <button 
                          onClick={() => {
                            const servicesSection = document.getElementById('servicios');
                            servicesSection?.scrollIntoView({ behavior: 'smooth' });
                          }}
                          className="bg-white/10 backdrop-blur-sm border-2 border-white/50 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold hover:bg-white/20 hover:border-white transition-all duration-300 transform hover:-translate-y-1 text-sm sm:text-base md:text-lg shadow-lg"
                        >
                          Ver Servicios
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Indicadores del carrusel - Solo en desktop */}
            {!isMobile && (
              <div className="absolute bottom-6 right-4 md:right-8 z-30 flex space-x-2">
                {Array.from({ length: carouselImages.length }, (_, i) => (
                  <div
                    key={i}
                    className="w-2 h-2 rounded-full bg-white/30 transition-all duration-300 animate-indicator"
                    style={{
                      animationDelay: `${i * 4}s`,
                      opacity: 0.3,
                    }}
                  />
                ))}
              </div>
            )}
          </section>

          {/* Brands Section */}
          <section className="py-16 bg-gradient-to-b from-white to-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-semibold text-center text-gray-800 mb-12">
                Tecnologías y Marcas de Confianza
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 items-center justify-items-center">
                <Image 
                  src="/icons/aws.svg" 
                  alt="aws" 
                  width={180} 
                  height={90} 
                  className="object-contain transform hover:scale-105 transition-transform duration-300 filter-none" 
                />
                <Image 
                  src="/icons/hik_vision.svg" 
                  alt="hik_vision" 
                  width={180} 
                  height={90} 
                  className="object-contain transform hover:scale-105 transition-transform duration-300 filter-none" 
                />
                <Image 
                  src="/icons/azure.svg" 
                  alt="azure" 
                  width={180} 
                  height={90} 
                  className="object-contain transform hover:scale-105 transition-transform duration-300 filter-none" 
                />
                <Image 
                  src="/icons/lucicam.svg" 
                  alt="lucicam" 
                  width={180} 
                  height={90} 
                  className="object-contain transform hover:scale-105 transition-transform duration-300 filter-none" 
                />
                <Image 
                  src="/icons/oracle.svg" 
                  alt="nexxis" 
                  width={180} 
                  height={90} 
                  className="object-contain transform hover:scale-105 transition-transform duration-300 filter-none" 
                />
                <Image 
                  src="/icons/ajhua.svg" 
                  alt="ajhua" 
                  width={180} 
                  height={90} 
                  className="object-contain transform hover:scale-105 transition-transform duration-300 filter-none" 
                />
              </div>
            </div>
          </section>

          {/* Services Grid */}
          <section id="servicios" className="py-24 bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Nuestros Servicios de Seguridad</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Soluciones integrales de seguridad y tecnología para proteger lo que más valora
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Service Card 1 */}
                <Link href="/services/cctv-surveillance" className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 block">
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src="/images/cctv_building_brick.jpg"
                      alt="CCTV"
                      fill
                      className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
                  </div>
                  <div className="p-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-yellow-500 transition-colors">
                      Videovigilancia CCTV
                    </h3>
                    <p className="text-gray-600">
                      Sistemas de última generación para monitoreo 24/7 con tecnología de punta
                    </p>
                  </div>
                </Link>

                {/* Service Card 2 */}
                <Link href="/services/access-control" className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 block">
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src="/images/access_control_finger.webp"
                      alt="Control de Acceso"
                      fill
                      className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
                  </div>
                  <div className="p-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-yellow-500 transition-colors">
                      Control de Acceso
                    </h3>
                    <p className="text-gray-600">
                      Soluciones biométricas y tarjetas inteligentes para acceso seguro
                    </p>
                  </div>
                </Link>

                {/* Service Card 3 */}
                <Link href="/services/alarm-systems" className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 block">
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src="/images/access_control_card.jpg"
                      alt="Alarmas"
                      fill
                      className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
                  </div>
                  <div className="p-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-yellow-500 transition-colors">
                      Sistemas de Alarma
                    </h3>
                    <p className="text-gray-600">
                      Detección temprana y respuesta inmediata ante cualquier amenaza
                    </p>
                  </div>
                </Link>

                {/* Service Card 4 */}
                <Link href="/services/software-development" className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 block">
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src="/images/software-development.webp"
                      alt="Software"
                      fill
                      className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
                  </div>
                  <div className="p-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-yellow-500 transition-colors">
                      Ingeniería de Software
                    </h3>
                    <p className="text-gray-600">
                      Desarrollo de software personalizado y soluciones a medida
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </section>

          {/* Property Types Section */}
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center mb-12">¿Qué tipo de propiedad desea proteger?</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center max-w-5xl mx-auto">
                <div className="p-6">
                  <div className="w-[195px] h-[195px] mx-auto mb-6 relative">
                    <Image 
                      src="/images/residencial_access_control.webp" 
                      alt="Casa" 
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <h3 className="font-semibold text-xl text-gray-800">Residencial</h3>
                  <p className="mt-2 text-gray-600">Protección para su hogar y familia</p>
                </div>
                <div className="p-6">
                  <div className="w-[195px] h-[195px] mx-auto mb-6 relative">
                    <Image 
                      src="/images/comercial_card.avif" 
                      alt="Edificio" 
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <h3 className="font-semibold text-xl text-gray-800">Comercial</h3>
                  <p className="mt-2 text-gray-600">Seguridad para su negocio</p>
                </div>
                <div className="p-6">
                  <div className="w-[195px] h-[195px] mx-auto mb-6 relative">
                    <Image 
                      src="/images/industrial_card.jpg" 
                      alt="Industria" 
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <h3 className="font-semibold text-xl text-gray-800">Industrial</h3>
                  <p className="mt-2 text-gray-600">Protección para su industria</p>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contacto" className="py-16 bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-6">¿Listo para mejorar su seguridad?</h2>
                  <p className="text-lg mb-8">
                    Contáctenos hoy mismo para una consulta gratuita y descubra cómo podemos ayudarle a proteger lo que más valora.
                  </p>
                  <div className="space-y-4">
                    <p className="flex items-center">
                      <span className="mr-3">📞</span> +58 422-0777892
                    </p>
                    <p className="flex items-center">
                      <span className="mr-3">✉️</span> contacto@sevintec.com
                    </p>
                    <div className="flex items-center justify-start space-x-4 mt-8">
                      <a 
                        href="#" 
                        className="bg-gray-800 p-3 rounded-full text-gray-400 hover:text-white hover:bg-blue-600 transition-all duration-300 transform hover:scale-110"
                        aria-label="Facebook"
                      >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                        </svg>
                      </a>
                      <a 
                        href="#" 
                        className="bg-gray-800 p-3 rounded-full text-gray-400 hover:text-white hover:bg-pink-600 transition-all duration-300 transform hover:scale-110"
                        aria-label="Instagram"
                      >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                        </svg>
                      </a>
                      <a 
                        href="#" 
                        className="bg-gray-800 p-3 rounded-full text-gray-400 hover:text-white hover:bg-blue-400 transition-all duration-300 transform hover:scale-110"
                        aria-label="Twitter"
                      >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="bg-white/10 p-8 rounded-lg backdrop-blur-sm">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Mensaje de éxito */}
                    {submitStatus === 'success' && (
                      <div className="bg-green-500/20 border border-green-500/50 text-green-100 px-4 py-3 rounded-lg">
                        ✅ ¡Mensaje enviado exitosamente! Te contactaremos pronto.
                      </div>
                    )}
                    
                    {/* Mensaje de error */}
                    {submitStatus === 'error' && (
                      <div className="bg-red-500/20 border border-red-500/50 text-red-100 px-4 py-3 rounded-lg">
                        ❌ Error al enviar el mensaje. Por favor, inténtalo de nuevo.
                      </div>
                    )}

                    <div>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Nombre completo"
                        required
                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500 text-white placeholder-gray-300"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Correo electrónico"
                        required
                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500 text-white placeholder-gray-300"
                      />
                    </div>
                    <div>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Mensaje"
                        rows={4}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500 text-white placeholder-gray-300 resize-none"
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-yellow-500 text-black py-3 px-6 rounded-lg font-semibold hover:bg-yellow-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Línea divisoria y footer inferior */}
            <div className="border-t border-gray-800 pt-4">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-gray-400 text-sm">
                  © {new Date().getFullYear()} SEVINTEC. Todos los derechos reservados.
                </p>
                <div className="flex items-center space-x-6">
                  <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                    Términos y Condiciones
                  </a>
                  <span className="text-gray-700">•</span>
                  <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                    Política de Privacidad
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>

        {/* Botón flotante de WhatsApp */}
        <a
          href="https://wa.me/00584220777892"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-button fixed bottom-8 right-8 bg-[#25D366] text-white p-6 rounded-full shadow-xl hover:bg-[#20BA5C] transition-all duration-300 z-50 flex items-center justify-center group"
          aria-label="Contactar por WhatsApp"
        >
          <svg
            className="w-8 h-8 group-hover:scale-110 transition-transform duration-300"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
          </svg>
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all duration-300">
            ¡Escríbenos!
          </span>
        </a>

      </div>
    </>
  );
}