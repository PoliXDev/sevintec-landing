'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function AboutUs() {
  return (
    <>
      <style jsx global>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out;
        }
        
        @keyframes slideInLeft {
          0% {
            opacity: 0;
            transform: translateX(-50px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-slide-in-left {
          animation: slideInLeft 0.8s ease-out;
        }
        
        @keyframes slideInRight {
          0% {
            opacity: 0;
            transform: translateX(50px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-slide-in-right {
          animation: slideInRight 0.8s ease-out;
        }
      `}</style>
      
      <div className="min-h-screen relative">
        {/* Background Gradient */}
        <div className="fixed inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-100 via-blue-100/50 to-gray-200"></div>
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-200/30 via-transparent to-gray-300/20"></div>
          {/* Subtle pattern overlay */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 20% 20%, #3b82f6 1px, transparent 1px),
                               radial-gradient(circle at 80% 80%, #2563eb 1px, transparent 1px),
                               radial-gradient(circle at 40% 60%, #1d4ed8 0.5px, transparent 0.5px)`,
              backgroundSize: '60px 60px, 40px 40px, 80px 80px'
            }}></div>
          </div>
        </div>

        {/* Navbar */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg shadow-sm border-b border-gray-200/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center md:justify-between items-center h-20">
              <div className="flex-shrink-0">
                <Link href="/">
                  <Image
                    src="/logo_brand_img/SEVINTEC_LOGO_FINAL2.png"
                    alt="SEVINTEC Logo"
                    width={330}
                    height={110}
                    className="object-contain py-2 cursor-pointer hover:opacity-80 transition-opacity duration-300"
                    priority
                  />
                </Link>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-center space-x-12">
                  <Link 
                    href="/#inicio" 
                    className="text-gray-800 hover:text-yellow-500 px-3 py-2 text-lg font-medium transition-colors duration-200 border-b-2 border-transparent hover:border-yellow-500"
                  >
                    Inicio
                  </Link>
                  <Link 
                    href="/#servicios" 
                    className="text-gray-800 hover:text-yellow-500 px-3 py-2 text-lg font-medium transition-colors duration-200 border-b-2 border-transparent hover:border-yellow-500"
                  >
                    Servicios
                  </Link>
                  <Link 
                    href="/services/about-us" 
                    className="text-blue-500 px-3 py-2 text-lg font-medium border-b-2 border-blue-500"
                  >
                    Quienes Somos
                  </Link>
                  <Link 
                    href="/#contacto" 
                    className="bg-blue-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-400 transition-colors duration-200 shadow-md hover:shadow-lg"
                  >
                    Contacto
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="relative z-10 pt-24 pb-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/60 p-8 md:p-12 lg:p-16">
              
              {/* Mission Section */}
              <section id="mision" className="mb-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                  <div className="animate-slide-in-left">
                    <div className="mb-6">
                      <span className="inline-block px-4 py-2 bg-blue-500/10 text-blue-600 text-sm font-semibold rounded-full mb-4">
                        Nuestra Empresa
                      </span>
                      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Nuestra <span className="text-blue-500">Misión</span>
                      </h2>
                    </div>
                    <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                      <p className="text-xl font-medium text-gray-800">
                        En <strong className="text-blue-500">SEVINTEC</strong> trabajamos con una misión clara: garantizar la seguridad de nuestros clientes mediante soluciones confiables, innovadoras y adaptadas a cada necesidad.
                      </p>
                      <p>
                        Somos una empresa especializada en vigilancia privada y en el diseño de sistemas de seguridad tecnológica, con un enfoque integral que combina la experiencia humana con herramientas modernas de prevención y control.
                      </p>
                      <p>
                        Nuestros servicios abarcan desde la protección física y vigilancia en instalaciones, hasta la implementación de sistemas avanzados de control de accesos, cámaras de videovigilancia (CCTV) y software especializado en seguridad.
                      </p>
                    </div>
                  </div>
                  <div className="animate-slide-in-right">
                    <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                      <Image
                        src="/images/abous_Us/monitoring-security-cameras.jpg"
                        alt="Monitoreo de seguridad"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                      <div className="absolute bottom-6 left-6 right-6">
                        <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4">
                          <h3 className="text-lg font-bold text-gray-900 mb-2">Monitoreo 24/7</h3>
                          <p className="text-gray-600 text-sm">Vigilancia continua y profesional</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Values Section */}
              <section className="mb-24">
                <div className="text-center mb-20">
                  <span className="inline-block px-4 py-2 bg-blue-500/10 text-blue-600 text-sm font-semibold rounded-full mb-4">
                    Nuestros Pilares
                  </span>
                  <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                    Nuestros <span className="text-blue-500">Valores</span>
                  </h2>
                  <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    La base de nuestro trabajo se fundamenta en principios sólidos que nos permiten ofrecer el mejor servicio
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                  <div className="bg-gradient-to-br from-white/90 to-blue-50/30 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/60 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">Confianza</h3>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      Construimos relaciones sólidas con cada cliente, estableciendo la confianza como pilar fundamental de nuestro servicio.
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-white/90 to-blue-50/30 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/60 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">Profesionalismo</h3>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      Mantenemos los más altos estándares de calidad y profesionalismo en cada proyecto que desarrollamos.
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-white/90 to-blue-50/30 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/60 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">Responsabilidad</h3>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      Asumimos el compromiso total de proteger lo que más importa a nuestros clientes con absoluta responsabilidad.
                    </p>
                  </div>
                </div>
              </section>

              {/* Commitment Section */}
              <section className="mb-24">
                <div className="text-center">
                  <span className="inline-block px-4 py-2 bg-blue-500/10 text-blue-600 text-sm font-semibold rounded-full mb-4">
                    Nuestro Compromiso
                  </span>
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                    Nuestro <span className="text-blue-500">Compromiso</span>
                  </h2>
                  <div className="bg-gradient-to-br from-white/90 to-blue-50/30 backdrop-blur-sm p-8 md:p-12 rounded-3xl shadow-xl border border-white/60">
                    <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-6">
                      En un mundo donde la seguridad evoluciona constantemente, en <strong className="text-blue-500">SEVINTEC</strong> estamos comprometidos en ofrecer soluciones que integren la tradición de la vigilancia con la innovación tecnológica, para asegurar un servicio eficaz, transparente y de calidad.
                    </p>
                    <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                      Garantizamos la tranquilidad de quienes depositan en nosotros la protección de lo que más importa, manteniendo siempre los más altos estándares de excelencia y profesionalismo.
                    </p>
                  </div>
                </div>
              </section>

              {/* CTA Section */}
              <section id="contacto" className="text-center">
                <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/20 rounded-3xl p-8 md:p-12 border border-blue-200/50">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">¿Listo para mejorar su seguridad?</h2>
                  <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto text-gray-700">
                    Contáctenos hoy mismo para una consulta gratuita y descubra cómo podemos ayudarle a proteger lo que más valora.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <Link 
                      href="/#contacto"
                      className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:from-blue-400 hover:to-blue-500 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl text-lg shadow-lg"
                    >
                      Solicitar Estudio Gratuito
                    </Link>
                    <Link 
                      href="/#servicios"
                      className="bg-gradient-to-r from-gray-800 to-gray-900 text-white px-8 py-4 rounded-xl font-bold hover:from-gray-700 hover:to-gray-800 transition-all duration-300 transform hover:-translate-y-1 text-lg shadow-lg"
                    >
                      Ver Nuestros Servicios
                    </Link>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-gray-900/90 backdrop-blur-sm text-white py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="border-t border-white/20 pt-6">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-gray-300 text-sm">
                  © {new Date().getFullYear()} SEVINTEC. Todos los derechos reservados.
                </p>
                <div className="flex items-center space-x-6">
                  <Link href="#" className="text-gray-300 hover:text-white text-sm transition-colors duration-300">
                    Términos y Condiciones
                  </Link>
                  <span className="text-gray-500">•</span>
                  <Link href="#" className="text-gray-300 hover:text-white text-sm transition-colors duration-300">
                    Política de Privacidad
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </footer>

        {/* Botón flotante de WhatsApp */}
        <Link
          href="https://wa.me/+584220777892"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#20BA5C] transition-all duration-300 z-50 flex items-center justify-center group"
          aria-label="Contactar por WhatsApp"
        >
          <svg
            className="w-6 h-6 group-hover:scale-110 transition-transform duration-300"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
          </svg>
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all duration-300">
            ¡Escríbenos!
          </span>
        </Link>
      </div>
    </>
  );
}
