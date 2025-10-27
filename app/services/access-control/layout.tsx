import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Control de Acceso - SEVINTEC',
  description: 'Soluciones avanzadas de control de acceso biométrico, tarjetas inteligentes y sistemas integrados para empresas e industrias.',
  alternates: {
    canonical: '/services/access-control',
  },
  openGraph: {
    title: 'Control de Acceso - SEVINTEC',
    description: 'Soluciones avanzadas de control de acceso biométrico y tarjetas inteligentes.',
    url: 'https://sevintec.com/services/access-control',
    type: 'website',
  },
};

export default function AccessControlLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

