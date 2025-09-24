'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function AlarmSystems() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            <div className="flex-shrink-0">
              <Link href="/">
                <Image
                  src="/logo_brand_img/SEVINTEC_LOGO_2.png"
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
                  Sistemas de <span className="text-yellow-400">Alarma</span>
                </h1>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Sistemas de alarmas inteligentes para hogares, negocios e industrias, diseñados para prevenir intrusiones, 
                  robos y emergencias. Tecnología de última generación con gestión sencilla.
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
                  src="/images/alarm-sistems/alarms_generic.webp"
                  alt="Sistema de Alarma"
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

        {/* Why Install Alarm Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">¿Por qué instalar una alarma de seguridad?</h2>
                <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                  Un sistema de alarma es una herramienta fundamental para la protección activa de personas y bienes.
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  En Sevintec ofrecemos sistemas de alarmas inteligentes para hogares, negocios e industrias, diseñados para prevenir intrusiones, robos y emergencias. Nuestras alarmas combinan tecnología de última generación con una gestión sencilla, brindando seguridad y tranquilidad en todo momento.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Detectar intrusiones en tiempo real</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Recibir notificaciones inmediatas en su móvil o central de seguridad</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Disuadir intentos de robo o vandalismo con sirenas y alertas visibles</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Integrar sensores de movimiento, humo o gas para una protección completa</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Proteger su empresa, comercio o vivienda las 24 horas del día, los 7 días de la semana</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/images/alarm-sistems/Alarm_kaypad.jpg"
                  alt="Panel de Control de Alarma"
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
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Soluciones de alarmas Sevintec</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Tecnología avanzada para todas sus necesidades de seguridad
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Solution 1 */}
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Alarmas Inalámbricas y Cableadas</h3>
                <p className="text-gray-600">
                  Sistemas flexibles que se adaptan a cualquier tipo de instalación y presupuesto.
                </p>
              </div>

              {/* Solution 2 */}
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Sensores de Movimiento</h3>
                <p className="text-gray-600">
                  Sensores de movimiento y apertura para puertas y ventanas con tecnología avanzada.
                </p>
              </div>

              {/* Solution 3 */}
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Monitoreo Remoto</h3>
                <p className="text-gray-600">
                  Alarmas con monitoreo remoto desde dispositivos móviles para control total.
                </p>
              </div>

              {/* Solution 4 */}
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Sistemas Anti-intrusión</h3>
                <p className="text-gray-600">
                  Sistemas anti-intrusión y anti-sabotaje para máxima protección.
                </p>
              </div>

              {/* Solution 5 */}
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Detección de Emergencias</h3>
                <p className="text-gray-600">
                  Sensores de humo, fuego y gas para protección integral contra emergencias.
                </p>
              </div>

              {/* Solution 6 */}
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Sirenas de Alta Potencia</h3>
                <p className="text-gray-600">
                  Sirenas internas y externas de alta potencia para máxima disuasión.
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
              <Image 
                src="/icons/azure.svg" 
                alt="Azure" 
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
            </div>
          </div>
        </section>

        {/* Installation Diagram Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative order-2 lg:order-1">
                <Image
                  src="/images/alarm-sistems/diagram_house_install_location_zones_alarm.jpg"
                  alt="Diagrama de Instalación de Sistema de Alarma"
                  width={600}
                  height={400}
                  className="rounded-xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Instalación Profesional</h2>
                <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                  Diseño e instalación personalizada según las necesidades específicas de su propiedad.
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Nuestros técnicos especializados realizan un análisis completo de su espacio para diseñar 
                  el sistema de alarma más eficiente, considerando zonas de acceso, puntos vulnerables y 
                  rutas de evacuación.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Análisis de vulnerabilidades de la propiedad</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Diseño de zonas de protección estratégicas</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Instalación profesional con garantía</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Capacitación en el uso del sistema</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Mantenimiento y soporte técnico continuo</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mobile Control Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Control desde tu Móvil</h2>
                <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                  Gestiona tu sistema de alarma desde cualquier lugar con nuestra aplicación móvil intuitiva.
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Conecta tu sistema de alarma a tu smartphone y mantén el control total de la seguridad 
                  de tu propiedad desde cualquier parte del mundo.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Activar y desactivar alarmas remotamente</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Recibir notificaciones instantáneas</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Monitoreo en tiempo real del estado del sistema</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Historial de eventos y alertas</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Control de múltiples propiedades desde una sola app</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/images/alarm-sistems/app_control.jpg"
                  alt="Control de Alarma desde Móvil"
                  width={600}
                  height={400}
                  className="rounded-xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">¿Listo para Proteger su Propiedad con Sistemas de Alarma?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Contáctenos hoy mismo para una consulta gratuita y descubra cómo nuestros sistemas 
              de alarma pueden brindarle la tranquilidad y protección que necesita.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-yellow-500 text-black px-8 py-4 rounded-lg font-bold hover:bg-yellow-400 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl">
                Solicitar Consulta Gratuita
              </button>
              <button className="bg-white/10 backdrop-blur-sm border-2 border-white/50 text-white px-8 py-4 rounded-lg font-bold hover:bg-white/20 hover:border-white transition-all duration-300 transform hover:-translate-y-1">
                Ver Otros Servicios
              </button>
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


