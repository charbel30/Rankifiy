import '@mantine/core/styles.css';
import React from 'react';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import { theme } from '../theme';
import { HeaderMegaMenu } from '@/components/Navbar/HeaderMegaMenu';
import { Footer } from '@/components/Footer/Footer';
import '../components/global.css';
import { SpeedInsights } from "@vercel/speed-insights/next"
export const metadata = {
  title: 'Rankifiy',
  description: 'Tierlists for everything',
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <MantineProvider theme={theme}>
          <HeaderMegaMenu />
          

          {children}
          <Footer/>
        </MantineProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
