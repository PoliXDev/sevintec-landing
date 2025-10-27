import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Quiénes Somos - SEVINTEC',
  description: 'Conoce a SEVINTEC, empresa líder en servicios de seguridad privada, prevención y control de acceso. Nuestra misión, visión y valores.',
  alternates: {
    canonical: '/services/about-us',
  },
  openGraph: {
    title: 'Quiénes Somos - SEVINTEC',
    description: 'Conoce a SEVINTEC, empresa líder en servicios de seguridad privada y prevención.',
    url: 'https://sevintec.com/services/about-us',
    type: 'website',
  },
};

export default function AboutUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

