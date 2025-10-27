import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Desarrollo de Software - SEVINTEC',
  description: 'Desarrollo de software personalizado, aplicaciones web, móviles y soluciones tecnológicas a medida para su empresa.',
  alternates: {
    canonical: '/services/software-development',
  },
  openGraph: {
    title: 'Desarrollo de Software - SEVINTEC',
    description: 'Desarrollo de software personalizado y soluciones tecnológicas a medida.',
    url: 'https://sevintec.com/services/software-development',
    type: 'website',
  },
};

export default function SoftwareDevelopmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

