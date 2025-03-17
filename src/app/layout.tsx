'use client';

import { useEffect } from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';

import theme from '@/theme';

import Header from '@/components/Header/Header';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    document.body.setAttribute('data-lt-installed', 'true');
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <html lang="en">
        <body suppressHydrationWarning={true}>
          <Header />
          {children}
        </body>
      </html>
    </ThemeProvider>
  );
}
