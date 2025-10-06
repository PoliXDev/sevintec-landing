'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function VideovigilanciaCCTV() {
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
                  Videovigilancia <span className="text-yellow-400">CCTV</span>
                </h1>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Sistemas de videovigilancia de última generación para proteger su propiedad 24/7. 
                  Tecnología avanzada con visión nocturna, reconocimiento facial y monitoreo en tiempo real.
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
                  src="/images/cctv_building_brick.jpg"
                  alt="Sistema de Videovigilancia CCTV"
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

        {/* What is CCTV Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">¿Qué es un sistema de videovigilancia CCTV?</h2>
                <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                  Un sistema de videovigilancia CCTV (Circuit Closed Television) es una tecnología que permite monitorear y grabar actividades en tiempo real mediante cámaras de seguridad conectadas a un sistema de grabación.
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  En Sevintec somos especialistas en sistemas de videovigilancia CCTV diseñados para empresas, industrias y hogares que requieren monitoreo continuo y registro de actividades. Nuestros sistemas permiten supervisar y proteger sus instalaciones las 24 horas del día, proporcionando evidencia visual en caso de incidentes y disuadiendo actividades delictivas.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Monitoreo en tiempo real desde cualquier ubicación</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Grabación continua para evidencia legal</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Disuasión efectiva contra robos y vandalismo</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Control remoto y alertas inteligentes</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Integración con otros sistemas de seguridad</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/images/cctv_img/cctv_home.jpeg"
                  alt="Sistema de Videovigilancia CCTV Residencial"
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
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Soluciones de videovigilancia que ofrecemos en Sevintec</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Tecnología avanzada para todas sus necesidades de monitoreo y seguridad
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Solution 1 */}
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Cámaras de Alta Resolución</h3>
                <p className="text-gray-600">
                  Cámaras 4K y 8MP para capturar detalles nítidos en cualquier condición de iluminación.
                </p>
              </div>

              {/* Solution 2 */}
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Visión Nocturna Avanzada</h3>
                <p className="text-gray-600">
                  Tecnología infrarroja y visión nocturna para monitoreo continuo las 24 horas del día.
                </p>
              </div>

              {/* Solution 3 */}
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Inteligencia Artificial</h3>
                <p className="text-gray-600">
                  Reconocimiento facial, detección de objetos y análisis de comportamiento inteligente.
                </p>
              </div>

              {/* Solution 4 */}
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Monitoreo Remoto</h3>
                <p className="text-gray-600">
                  Acceso desde cualquier dispositivo móvil con aplicación intuitiva y segura.
                </p>
              </div>

              {/* Solution 5 */}
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Alertas Inteligentes</h3>
                <p className="text-gray-600">
                  Notificaciones instantáneas por email, SMS y push cuando se detecta actividad sospechosa.
                </p>
              </div>

              {/* Solution 6 */}
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Almacenamiento Seguro</h3>
                <p className="text-gray-600">
                  Grabación en la nube y almacenamiento local con respaldo automático y encriptación.
                </p>
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
                src="/icons/hik_vision.svg" 
                alt="HikVision" 
                width={120} 
                height={60} 
                className="object-contain transform hover:scale-105 transition-transform duration-300 filter-none" 
              />
              <Image 
                src="/icons/axis.svg" 
                alt="Axis" 
                width={120} 
                height={60} 
                className="object-contain transform hover:scale-105 transition-transform duration-300 filter-none" 
              />
              <Image 
                src="/icons/lucicam.svg" 
                alt="LuciCam" 
                width={120} 
                height={60} 
                className="object-contain transform hover:scale-105 transition-transform duration-300 filter-none" 
              />
              <Image 
                src="/icons/eagle_eye.svg" 
                alt="Eagle Eye" 
                width={120} 
                height={60} 
                className="object-contain transform hover:scale-105 transition-transform duration-300 filter-none" 
              />
              <Image 
                src="/icons/ajhua.svg" 
                alt="Ajhua" 
                width={120} 
                height={60} 
                className="object-contain transform hover:scale-105 transition-transform duration-300 filter-none" 
              />
              <Image 
                src="/icons/aws.svg" 
                alt="AWS" 
                width={120} 
                height={60} 
                className="object-contain transform hover:scale-105 transition-transform duration-300 filter-none" 
              />
            </div>
          </div>
        </section>

        {/* High Resolution Cameras Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative order-2 lg:order-1">
                <Image
                  src="/images/cctv_img/diferents_models_cameras.webp"
                  alt="Diferentes Modelos de Cámaras de Seguridad"
                  width={600}
                  height={400}
                  className="rounded-xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Cámaras de Alta Resolución</h2>
                <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                  Tecnología de vanguardia con cámaras 4K y 8MP para capturar cada detalle con máxima claridad.
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Nuestras cámaras de alta resolución ofrecen imágenes nítidas y cristalinas que permiten identificar personas, 
                  vehículos y objetos con precisión excepcional, incluso en condiciones de iluminación adversas.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Resolución 4K y 8MP para detalles excepcionales</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Zoom digital y óptico para acercamiento preciso</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Corrección automática de luz y contraste</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Resistencia a condiciones climáticas adversas</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Grabación en tiempo real sin pérdida de calidad</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Night Vision Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Visión Nocturna Avanzada</h2>
                <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                  Tecnología infrarroja de última generación para monitoreo continuo las 24 horas del día.
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Nuestros sistemas de visión nocturna utilizan tecnología infrarroja avanzada que permite 
                  capturar imágenes claras y detalladas incluso en completa oscuridad, garantizando 
                  la seguridad de sus instalaciones en todo momento.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Iluminación infrarroja de largo alcance</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Detección automática de cambios de iluminación</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Imágenes en blanco y negro de alta calidad</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Reducción automática de ruido digital</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Cobertura de hasta 30 metros en oscuridad total</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/images/cctv_img/360_model.webp"
                  alt="Cámara 360° con Visión Nocturna"
                  width={600}
                  height={400}
                  className="rounded-xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Cloud Security Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative order-2 lg:order-1">
                <Image
                  src="/images/cctv_img/cloud-security-camera.jpg"
                  alt="Sistema de Seguridad en la Nube"
                  width={600}
                  height={400}
                  className="rounded-xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Seguridad en la Nube</h2>
                <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                  Almacenamiento seguro en la nube con acceso remoto y respaldo automático de datos.
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Nuestros sistemas de videovigilancia integran almacenamiento en la nube para garantizar 
                  que sus grabaciones estén seguras y accesibles desde cualquier lugar, con respaldo automático 
                  y protección contra pérdida de datos.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Almacenamiento en la nube con encriptación de extremo a extremo</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Acceso remoto desde cualquier dispositivo conectado a internet</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Respaldo automático y sincronización en tiempo real</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Almacenamiento local como respaldo adicional</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Gestión de usuarios y permisos de acceso personalizados</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final Message Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">¿Listo para Proteger su Propiedad con Sistemas de Videovigilancia?</h2>
            <p className="text-xl mb-8 max-w-4xl mx-auto leading-relaxed">
              En Sevintec trabajamos para que su empresa, negocio o residencia cuente con la máxima seguridad y control, 
              apoyados en la tecnología más avanzada del mercado de videovigilancia.
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
