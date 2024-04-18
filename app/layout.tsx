import React from 'react';
import Head from 'next/head';
import './globals.css';
import Navbar from './components/Navbar/index';
import Footer from './components/Footer/Footer';

export const metadata = {
  title: 'Reachwell Worldwide Express',
  description: 'Global Logistics Partner - Logistics through innovation, dedication, and technology',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        {/* Add other meta tags for SEO as needed */}
      </Head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </>
  );
}
