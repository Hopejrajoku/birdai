// app/layout.tsx or pages/_app.js

import { Playfair_Display, Roboto } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-playfair',
});

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-roboto',
});

export const metadata = {
  title: 'BirdAI',
  description: 'Get all info of your favorite bird with ease.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${roboto.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
