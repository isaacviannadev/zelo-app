// app/providers.tsx
'use client';

import { TooltipProvider } from '@/components/ui/tooltip';
import client from '@/lib/apolloClient';
import { ApolloProvider } from '@apollo/client';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ApolloProvider client={client}>
      <TooltipProvider>{children}</TooltipProvider>
    </ApolloProvider>
  );
}
