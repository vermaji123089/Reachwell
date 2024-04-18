import React from 'react';
import Head from 'next/head';
import './globals.css';
import Navbar from './components/Navbar/index';
import Footer from './components/Footer/Footer';

export const metadata = {
  title: 'Reachwell Worldwide Express',
  description: 'Global Logistics Partner - Logistics through innovation, dedication, and technology',
  author: 'Reachwell Worldwide Express',
  keywords: 'global logistics, innovation, dedication, technology',
  url: 'https://reachwell.vercel.app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="author" content={metadata.author} />
        <meta name="keywords" content={metadata.keywords} />
        <link rel="canonical" href={metadata.url} />
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
