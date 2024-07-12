import React from 'react';
import { ClerkProvider } from '@clerk/nextjs';
import { cn } from '@/lib/utils';
import './globals.css';
import { IBM_Plex_Sans } from 'next/font/google';

const IBMPlex = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-ibm-plex',
});

type Metadata = {
  title: string;
  description: string;
  keywords: string;
  openGraph: {
    title: string;
    description: string;
    type: string;
    url: string;
  };
};

const metadata: Metadata = {
  title: 'KefkaAi',
  description: 'AI-powered image generator with filling, color changing, background removal, and object removal functionalities.',
  keywords: 'AI image generator, AI image tools, image manipulation, background removal, color change, object removal, image editing, AI tools',
  openGraph: {
    title: 'KefkaAi - AI-powered Image Generator',
    description: 'Use KefkaAi for advanced image manipulation with AI. Features include filling, color changing, background removal, and object removal.',
    type: 'website',
    url: 'https://imaginify-kefka-ai.vercel.app/',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider appearance={{ variables: { colorPrimary: '#624cf5' } }}>
      <html lang="en">
        <head>
          <meta name="description" content={metadata.description} />
          <meta name="keywords" content={metadata.keywords} />
          <meta property="og:title" content={metadata.openGraph.title} />
          <meta property="og:description" content={metadata.openGraph.description} />
          <meta property="og:type" content={metadata.openGraph.type} />
          <meta property="og:url" content={metadata.openGraph.url} />
          <title>{metadata.title}</title>
        </head>
        <body className={cn('font-IBMPlex antialiased', IBMPlex.variable)}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
