'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function SoftwareDevelopment() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            <div className="flex-shrink-0">
              <Link href="/">
                <Image
                  src="/logo_brand_img/SEVINTEC_LOGO_FINAL2.png"
                  alt="SEVINTEC Logo"
                  width={330}
                  height={110}
                  className="object-contain py-2"
                  priority
                />
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-12">
                <Link 
                  href="/" 
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
                  href="/#clientes" 
                  className="text-gray-800 hover:text-yellow-500 px-3 py-2 text-lg font-medium transition-colors duration-200 border-b-2 border-transparent hover:border-yellow-500"
                >
                  Quienes Somos
                </Link>
                <Link 
                  href="/#contacto" 
                  className="bg-yellow-500 text-black px-6 py-3 rounded-lg text-lg font-semibold hover:bg-yellow-400 transition-colors duration-200 shadow-md hover:shadow-lg"
                >
                  Contacto
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 text-white py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  Desarrollo de <span className="text-yellow-400">Software</span>
                </h1>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Soluciones de software personalizadas desarrolladas específicamente para satisfacer las necesidades únicas de su empresa. 
                  Tecnología a medida que se adapta perfectamente a sus procesos de negocio.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-yellow-500 text-black px-8 py-4 rounded-lg font-bold hover:bg-yellow-400 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl">
                    Solicitar Cotización
                  </button>
                  <button className="bg-white/10 backdrop-blur-sm border-2 border-white/50 text-white px-8 py-4 rounded-lg font-bold hover:bg-white/20 hover:border-white transition-all duration-300 transform hover:-translate-y-1">
                    Ver Tecnologías
                  </button>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/images/software_developer/do-full-stack-python-and-django-web-development.jpg"
                  alt="Desarrollo de Software Personalizado"
                  width={600}
                  height={400}
                  className="rounded-xl shadow-2xl"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* What is Custom Software Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">¿Qué es el desarrollo de software personalizado?</h2>
                <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                  El software personalizado es una solución tecnológica desarrollada específicamente para satisfacer las necesidades y requisitos únicos de su empresa.
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  A diferencia del software estándar o comercial, que está diseñado para cubrir las necesidades comunes de muchos usuarios, el software personalizado se desarrolla &quot;a la carta&quot; para resolver problemas específicos, optimizar procesos concretos o gestionar información particular de su organización.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Soluciones completamente alineadas con sus procesos de negocio</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Mayor flexibilidad y control sobre las funcionalidades</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Integración perfecta con sistemas existentes</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Escalabilidad adaptada a su crecimiento empresarial</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/images/software_developer/keyboard_icons_areas_use_cases.jpg"
                  alt="Aplicaciones y Desarrollo de Software"
                  width={600}
                  height={400}
                  className="rounded-xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Nuestros Servicios de Desarrollo</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Soluciones tecnológicas personalizadas para impulsar su negocio hacia el futuro
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Solution 1 */}
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Aplicaciones Web</h3>
                <p className="text-gray-600">
                  Desarrollo de aplicaciones web modernas y responsivas con las últimas tecnologías del mercado.
                </p>
              </div>

              {/* Solution 2 */}
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Páginas Web</h3>
                <p className="text-gray-600">
                  Sitios web corporativos, landing pages y portales web optimizados para conversión y SEO.
                </p>
              </div>

              {/* Solution 3 */}
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Aplicaciones Móviles</h3>
                <p className="text-gray-600">
                  Apps nativas e híbridas para iOS y Android con funcionalidades avanzadas y diseño intuitivo.
                </p>
              </div>

              {/* Solution 4 */}
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Automatizaciones</h3>
                <p className="text-gray-600">
                  Sistemas de automatización de procesos para mejorar la eficiencia y reducir costos operativos.
                </p>
              </div>

              {/* Solution 5 */}
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Software Empresarial</h3>
                <p className="text-gray-600">
                  Sistemas CRM, ERP y software de gestión diseñados específicamente para su industria.
                </p>
              </div>

              {/* Solution 6 */}
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Ciberseguridad</h3>
                <p className="text-gray-600">
                  Soluciones de seguridad informática para proteger sus datos y sistemas empresariales.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Development Process Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative order-2 lg:order-1">
                <Image
                  src="/images/software_developer/node.webp"
                  alt="Proceso de Desarrollo de Software"
                  width={600}
                  height={400}
                  className="rounded-xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Nuestro Proceso de Desarrollo</h2>
                <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                  Metodología ágil y colaborativa que asegura el éxito de su proyecto de software personalizado.
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Trabajamos estrechamente con usted en cada etapa del desarrollo, desde el análisis inicial hasta la implementación y mantenimiento continuo.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Análisis detallado de necesidades y requisitos</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Diseño de arquitectura y experiencia de usuario</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Desarrollo iterativo con feedback continuo</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Pruebas exhaustivas y optimización</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Implementación y capacitación del equipo</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Stack Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Tecnologías de Vanguardia</h2>
                <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                  Utilizamos las tecnologías más avanzadas y frameworks modernos para desarrollar software robusto y escalable.
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Nuestro equipo de desarrolladores está especializado en las últimas tecnologías del mercado, asegurando que su software sea moderno, seguro y preparado para el futuro.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Frameworks modernos: React, Angular, Vue.js</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Backend robusto: Node.js, Python, Java</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Bases de datos: PostgreSQL, MongoDB, MySQL</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Cloud computing: AWS, Azure, Google Cloud</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">DevOps y CI/CD para despliegues automatizados</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/images/software_developer/n8n.jpeg"
                  alt="Automatizaciones y Tecnologías"
                  width={600}
                  height={400}
                  className="rounded-xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Cybersecurity Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Ciberseguridad y Protección</h2>
                <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                  Protegemos sus sistemas y datos con las mejores prácticas de seguridad informática.
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  En un mundo digital cada vez más complejo, la seguridad de sus datos y sistemas es fundamental.
                  Implementamos soluciones robustas de ciberseguridad para mantener su información protegida.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Auditorías de seguridad y análisis de vulnerabilidades</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Implementación de firewalls y sistemas de protección</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Monitoreo continuo y detección de amenazas</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Capacitación en seguridad para su equipo</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Cumplimiento de normativas y estándares de seguridad</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/images/software_developer/cibersecurity2.jpg"
                  alt="Ciberseguridad y Protección de Datos"
                  width={600}
                  height={400}
                  className="rounded-xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Brands Section */}
        <section className="py-16 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
              Tecnologías y Marcas de Confianza
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center">
              <Image 
                src="/icons/aws.svg" 
                alt="AWS" 
                width={120} 
                height={60} 
                className="object-contain transform hover:scale-105 transition-transform duration-300 filter-none" 
              />
              <Image 
                src="/icons/azure.svg" 
                alt="Azure" 
                width={120} 
                height={60} 
                className="object-contain transform hover:scale-105 transition-transform duration-300 filter-none" 
              />
              <Image 
                src="/icons/google_cloud.svg" 
                alt="Google Cloud" 
                width={120} 
                height={60} 
                className="object-contain transform hover:scale-105 transition-transform duration-300 filter-none" 
              />
              <Image 
                src="/icons/oracle.svg" 
                alt="Oracle" 
                width={120} 
                height={60} 
                className="object-contain transform hover:scale-105 transition-transform duration-300 filter-none" 
              />
              <Image 
                src="/icons/ibm_cloud.svg" 
                alt="IBM Cloud" 
                width={120} 
                height={60} 
                className="object-contain transform hover:scale-105 transition-transform duration-300 filter-none" 
              />
              <Image 
                src="/icons/vm_ware.svg" 
                alt="VMware" 
                width={120} 
                height={60} 
                className="object-contain transform hover:scale-105 transition-transform duration-300 filter-none" 
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">¿Listo para Desarrollar su Software Personalizado?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Contáctenos hoy mismo para una consulta gratuita y descubra cómo podemos crear la solución de software perfecta para su empresa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-yellow-500 text-black px-8 py-4 rounded-lg font-bold hover:bg-yellow-400 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl">
                Solicitar Consulta Gratuita
              </button>
              <Link 
                href="/#servicios" 
                className="bg-white/10 backdrop-blur-sm border-2 border-white/50 text-white px-8 py-4 rounded-lg font-bold hover:bg-white/20 hover:border-white transition-all duration-300 transform hover:-translate-y-1 inline-block text-center"
              >
                Ver Otros Servicios
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-t border-gray-800 pt-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} SEVINTEC. Todos los derechos reservados.
              </p>
              <div className="flex items-center space-x-6">
                <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                  Términos y Condiciones
                </Link>
                <span className="text-gray-700">•</span>
                <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                  Política de Privacidad
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
