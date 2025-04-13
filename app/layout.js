// app/layout.tsx or pages/_app.js

import { Playfair_Display, Roboto } from 'next/font/google';
import './globals.css';
import { ClerkProvider } from '@clerk/nextjs';
import Header from '@/components/header';
import Footer from '@/components/footer';

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
  title: 'Pluma',
  description: 'Get all info of your favorite bird with ease.',
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={`${playfair.variable} ${roboto.variable} antialiased`}>
        <Header />
        <main className="min-h-screen">
        {children}
        </main>
        <Footer />
      </body>
    </html>
    </ClerkProvider>
  );
}
