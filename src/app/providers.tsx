'use client';

import { ApolloProvider } from '@apollo/client';
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

import client from '@/lib/apolloClient';

import { TooltipProvider } from '@/components/ui/tooltip';
import { AuthProvider } from '@/contexts/AuthContext';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ApolloProvider client={client}>
        <AuthProvider>
          <TooltipProvider>{children}</TooltipProvider>
        </AuthProvider>
      </ApolloProvider>
      <ProgressBar
        height='4px'
        color='#45AA99'
        options={{ showSpinner: false }}
        shallowRouting
      />
    </>
  );
}
