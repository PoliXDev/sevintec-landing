import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Videovigilancia CCTV - SEVINTEC',
  description: 'Sistemas de videovigilancia CCTV de última generación. Cámaras IP, analítica de video, almacenamiento en la nube y monitoreo 24/7.',
  alternates: {
    canonical: '/services/cctv-surveillance',
  },
  openGraph: {
    title: 'Videovigilancia CCTV - SEVINTEC',
    description: 'Sistemas de videovigilancia CCTV de última generación con monitoreo 24/7.',
    url: 'https://sevintec.com/services/cctv-surveillance',
    type: 'website',
  },
};

export default function CCTVSurveillanceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

