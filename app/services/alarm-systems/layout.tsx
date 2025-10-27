import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sistemas de Alarma - SEVINTEC',
  description: 'Sistemas de alarmas inteligentes para hogares, negocios e industrias. Tecnología de última generación con gestión sencilla.',
  alternates: {
    canonical: '/services/alarm-systems',
  },
  openGraph: {
    title: 'Sistemas de Alarma - SEVINTEC',
    description: 'Sistemas de alarmas inteligentes para hogares, negocios e industrias.',
    url: 'https://sevintec.com/services/alarm-systems',
    type: 'website',
  },
};

export default function AlarmSystemsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

