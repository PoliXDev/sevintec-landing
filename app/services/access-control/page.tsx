'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function AccessControl() {
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
                  href="/#services" 
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
                  href="/#contact" 
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
                  Control de <span className="text-yellow-400">Acceso</span>
                </h1>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Sistemas biométricos y tarjetas inteligentes para controlar el acceso a sus instalaciones. 
                  Tecnología avanzada de reconocimiento facial, huella dactilar y tarjetas RFID.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    href="/#contact" 
                    className="bg-yellow-500 text-black px-8 py-4 rounded-lg font-bold hover:bg-yellow-400 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl text-center"
                  >
                    Solicitar Cotización
                  </Link>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/images/access_control_img/access_banner.jpg"
                  alt="Sistema de Control de Acceso"
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

        {/* What is Access Control Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">¿Qué es un sistema de control de acceso?</h2>
                <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                  Un sistema de control de acceso electrónico permite autorizar, restringir y registrar la entrada de personas a determinadas áreas.
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  En Sevintec somos especialistas en sistemas de control de acceso diseñados para empresas, industrias y hogares que requieren seguridad, organización y control en sus espacios. Nuestros equipos permiten gestionar y restringir el ingreso a áreas específicas, garantizando protección y eficiencia en todo momento.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Saber quién accede, cuándo y dónde</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Mantener un registro detallado de entradas y salidas</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Asignar permisos personalizados según niveles de acceso</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Mejorar la seguridad en áreas sensibles de su empresa o residencia</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/images/access_control_img/Access-Control-systems.png"
                  alt="Sistema de Control de Acceso Biométrico"
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
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Soluciones que ofrecemos en Sevintec</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Tecnología avanzada para todas sus necesidades de control de acceso
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Solution 1 */}
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Lectores Biométricos</h3>
                <p className="text-gray-600">
                  Huella dactilar y reconocimiento facial para máxima seguridad y comodidad.
                </p>
              </div>

              {/* Solution 2 */}
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Chapas Magnéticas</h3>
                <p className="text-gray-600">
                  Chapas magnéticas y electromecánicas para control de puertas y accesos.
                </p>
              </div>

              {/* Solution 3 */}
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Lectores de Tarjetas</h3>
                <p className="text-gray-600">
                  Lectores de tarjetas y teclados de acceso para control rápido y eficiente.
                </p>
              </div>

              {/* Solution 4 */}
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Detectores de Metal</h3>
                <p className="text-gray-600">
                  Detectores de metal y barreras físicas para áreas de alta seguridad.
                </p>
              </div>

              {/* Solution 5 */}
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Barras de Pánico</h3>
                <p className="text-gray-600">
                  Barras de pánico para puertas y sistemas de emergencia integrados.
                </p>
              </div>

              {/* Solution 6 */}
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Tarjetas Personalizadas</h3>
                <p className="text-gray-600">
                  Botones de activación y tarjetas personalizadas para cada usuario.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Biometric Access Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative order-2 lg:order-1">
                <Image
                  src="/images/access_control_img/biometric_access.webp"
                  alt="Sistema de Acceso Biométrico"
                  width={600}
                  height={400}
                  className="rounded-xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Acceso Biométrico</h2>
                <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                  Tecnología de identificación única mediante características físicas para máxima seguridad y comodidad.
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Los sistemas biométricos ofrecen la más alta seguridad al utilizar características únicas e irrepetibles 
                  de cada persona, eliminando la posibilidad de pérdida, robo o duplicación de credenciales.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Reconocimiento facial avanzado con IA</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Lectores de huella dactilar de alta precisión</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Escaneo de iris para áreas de máxima seguridad</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Resistente a condiciones ambientales adversas</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Imposible de falsificar o duplicar</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Card Access Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative order-2 lg:order-1">
                <Image
                  src="/images/access_control_img/access_card.webp"
                  alt="Sistema de Acceso por Tarjeta"
                  width={600}
                  height={400}
                  className="rounded-xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Acceso por Tarjeta</h2>
                <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                  Sistemas de tarjetas inteligentes RFID y NFC para control de acceso rápido y eficiente.
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Las tarjetas de acceso ofrecen una solución práctica y económica para el control de acceso, 
                  permitiendo gestión centralizada de usuarios y fácil reemplazo en caso de pérdida.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Tarjetas RFID de proximidad</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Tecnología NFC para smartphones</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Tarjetas personalizadas con foto y datos</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Activación y desactivación instantánea</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Integración con sistemas de nómina</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vehicular Access Control Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative order-2 lg:order-1">
                <Image
                  src="/images/access_control_img/vehicular_access_control.jpg"
                  alt="Sistema de Control de Acceso Vehicular"
                  width={600}
                  height={400}
                  className="rounded-xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Control de Acceso Vehicular</h2>
                <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                  Sistemas especializados para el control y gestión de vehículos en estacionamientos, 
                  garajes y áreas de acceso restringido.
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Nuestros sistemas de control de acceso vehicular permiten gestionar de manera eficiente 
                  el ingreso y egreso de vehículos, garantizando seguridad y organización en sus instalaciones.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Control automático de barreras y portones</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Lectura de placas vehiculares con reconocimiento automático</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Gestión de espacios de estacionamiento</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Control de acceso por horarios y permisos</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Integración con sistemas de videovigilancia</span>
                  </div>
                </div>
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
            </div>
          </div>
        </section>


        {/* Final Message Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">¿Listo para Controlar el Acceso a sus Instalaciones?</h2>
            <p className="text-xl mb-8 max-w-4xl mx-auto leading-relaxed">
              En Sevintec trabajamos para que su empresa, negocio o residencia cuente con la máxima seguridad y control, 
              apoyados en la tecnología más avanzada del mercado.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/#contact" 
                className="bg-yellow-500 text-black px-8 py-4 rounded-lg font-bold hover:bg-yellow-400 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl text-center"
              >
                Solicitar Consulta Gratuita
              </Link>
              <Link 
                href="/#services" 
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


