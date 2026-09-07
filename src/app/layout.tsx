import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Sameer Bagwan | Portfolio',
  description:
    'Full Stack Developer & React Native Specialist crafting modern web and mobile experiences.',
  icons: {
    icon: '/images/sb-logo.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={`${poppins.variable} scroll-smooth`}>
      <body className='bg-primary text-white font-sans antialiased'>
        {children}
      </body>
    </html>
  );
}
