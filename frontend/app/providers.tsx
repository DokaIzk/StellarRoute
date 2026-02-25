'use client';

import { ReactNode } from 'react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

import { ThemeProvider } from '@/components/providers/theme-provider';
import { WalletProvider } from '@/components/providers/wallet-provider';

interface ProvidersProps {
  children: ReactNode;
  defaultTheme?: string;
}

export function Providers({ children, defaultTheme = 'dark' }: ProvidersProps) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme={defaultTheme}
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </NextThemesProvider>
  );
}
//  <ThemeProvider defaultTheme="system" storageKey="stellarroute-theme">
//       <WalletProvider defaultNetwork="testnet">
//         {children}
//       </WalletProvider>
//     </ThemeProvider>