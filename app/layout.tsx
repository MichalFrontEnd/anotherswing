/* eslint-disable linebreak-style */
import '@mantine/core/styles.css';
import React from 'react';
import { MantineProvider, ColorSchemeScript, Container } from '@mantine/core';
import { theme } from '../theme';
import Navbar from '@/components/organisms/Navbar/Navbar';

export const metadata = {
  title: 'Another Swing Dance Festival',
  description: 'Practice Project with Mantine & Next.js!',
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <MantineProvider theme={theme}>
          <Container fluid size="xl">
            <Navbar />
            {children}
          </Container>
        </MantineProvider>
      </body>
    </html>
  );
}
