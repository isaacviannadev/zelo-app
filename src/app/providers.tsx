'use client';

import { ApolloProvider } from '@apollo/client';
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

import client from '@/lib/apolloClient';

import { TooltipProvider } from '@/components/ui/tooltip';
import { AuthProvider } from '@/contexts/AuthContext';

import posthog from 'posthog-js';
import { PostHogProvider } from 'posthog-js/react';

if (typeof window !== 'undefined') {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY ?? 'x', {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
    person_profiles: 'identified_only', // or 'always' to create profiles for anonymous users as well
  });
}

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ApolloProvider client={client}>
        <AuthProvider>
          <PostHogProvider client={posthog}>
            <TooltipProvider>{children}</TooltipProvider>
          </PostHogProvider>
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
