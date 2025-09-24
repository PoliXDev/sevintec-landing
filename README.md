# SEVINTEC Landing Page

Landing page moderna para SEVINTEC, empresa líder en servicios de vigilancia privada, prevención y control de acceso. Evolución de Sevinca con tecnología innovadora.

## 🚀 Características

- **Framework**: Next.js 15 con App Router
- **Frontend**: React 19 + TypeScript
- **Estilos**: Tailwind CSS
- **Optimización**: Imágenes optimizadas, SEO completo
- **Responsive**: Diseño adaptable a todos los dispositivos
- **Performance**: Optimizado para Vercel

## 🛠️ Tecnologías

- Next.js 15.5.3
- React 19.1.0
- TypeScript 5
- Tailwind CSS 3.4.0
- Google Fonts (Roboto)

## 📦 Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/tu-usuario/sevintec-landing.git
cd sevintec-landing
```

2. Instala las dependencias:
```bash
npm install
```

3. Configura las variables de entorno:
```bash
cp .env.example .env.local
# Edita .env.local con tus valores
```

4. Ejecuta el servidor de desarrollo:
```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 🚀 Despliegue en Vercel

### Opción 1: Despliegue automático desde GitHub

1. Conecta tu repositorio de GitHub con Vercel
2. Vercel detectará automáticamente Next.js
3. Configura las variables de entorno en el dashboard de Vercel
4. ¡Despliegue automático en cada push!

### Opción 2: Despliegue manual

```bash
# Instala Vercel CLI
npm i -g vercel

# Despliega
vercel

# Para producción
vercel --prod
```

## 📁 Estructura del Proyecto

```
sevintec-landing/
├── app/                    # App Router de Next.js
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Página principal
│   ├── globals.css        # Estilos globales
│   └── services/          # Páginas de servicios
├── hooks/                 # Custom hooks
├── lib/                   # Configuraciones
├── types/                 # Definiciones TypeScript
├── public/                # Assets estáticos
└── vercel.json           # Configuración de Vercel
```

## 🎨 Servicios Incluidos

- **Videovigilancia CCTV**: Sistemas 4K con visión nocturna
- **Control de Acceso**: Biométricos y tarjetas inteligentes
- **Sistemas de Alarma**: Detección temprana y respuesta
- **Desarrollo de Software**: Soluciones personalizadas

## 🔧 Scripts Disponibles

- `npm run dev` - Servidor de desarrollo
- `npm run dev:turbo` - Desarrollo con Turbopack
- `npm run build` - Build de producción
- `npm run start` - Servidor de producción
- `npm run lint` - Linter de código

## 📱 Responsive Design

- **Móvil**: Imagen estática optimizada
- **Desktop**: Carrusel animado con indicadores
- **Breakpoints**: Adaptativo con Tailwind CSS

## 🔒 SEO y Seguridad

- Meta tags optimizados
- Open Graph y Twitter Cards
- Headers de seguridad
- Optimización de imágenes
- Compresión automática

## 📞 Contacto

- **Teléfono**: +58 422-0777892
- **Email**: contacto@sevintec.com
- **WhatsApp**: +58 422-0777892

## 📄 Licencia

© 2024 SEVINTEC. Todos los derechos reservados.
