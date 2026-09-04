import './globals.css';
import { ReactNode } from 'react';
import { Space_Grotesk, Gugi } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--primary-font',
});

const gugi = Gugi({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-gugi',
});

export const metadata = {
  title: 'Sanket Jadhav | Portfolio',
  description: 'Front-End Developer Portfolio',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${gugi.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}