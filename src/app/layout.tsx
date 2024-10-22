import type { Metadata } from 'next';
import { Raleway } from 'next/font/google';
import localFont from 'next/font/local';

import { GoogleTagManager } from '@next/third-parties/google';

import { Toaster } from 'sonner';

import './globals.css';
import { Providers } from './providers';

const alice = localFont({
  src: '../assets/fonts/Alice-Regular.ttf',
  variable: '--font-alice',
});
const roxborough = localFont({
  src: '../assets/fonts/roxborough-cf-bold.ttf',
  weight: 'bold',
  variable: '--font-roxborough',
});

const raleway = Raleway({
  variable: '--font-raleway',
  subsets: ['latin'],
  weight: ['200', '400', '700'],
  style: ['normal', 'italic'],
});

export const metadata: Metadata = {
  title: 'Zelo App | Conectando corações',
  description: 'Zelo App feito para conectar pessoas',
};

export const Head = () => {
  return (
    <head>
      {/* <!-- Open Graph / Facebook --> */}
      <meta property='og:type' content='website' />
      <meta property='og:url' content='https://www.zeloclub.com.br/' />
      <meta property='og:title' content='Zeloclub | Conectando corações' />
      <meta
        property='og:description'
        content='O zeloclub é o aplicativo perfeito para conectar cuidadores de idosos com famílias que procuram assistência confiável. Nossa plataforma intuitiva e segura facilita o encontro de cuidadores qualificados, proporcionando um envelhecimento saudável e feliz para seus entes queridos. Experimente o zeloclub hoje e descubra a tranquilidade que vem com o cuidado especializado.'
      />
      <meta
        property='og:image'
        content='https://cdn.glitch.global/366c06b6-90d2-4995-9a79-d42af2d6b7c2/zeloclub%20Registr.png?v=1685524426272'
      />

      {/* <!-- Twitter --> */}
      <meta property='twitter:card' content='summary_large_image' />
      <meta property='twitter:url' content='https://www.zeloclub.com.br/' />
      <meta property='twitter:title' content='Zeloclub | Conectando corações' />
      <meta
        property='twitter:description'
        content='O zeloclub é o aplicativo perfeito para conectar cuidadores de idosos com famílias que procuram assistência confiável. Nossa plataforma intuitiva e segura facilita o encontro de cuidadores qualificados, proporcionando um envelhecimento saudável e feliz para seus entes queridos. Experimente o zeloclub hoje e descubra a tranquilidade que vem com o cuidado especializado.'
      />
      <meta
        property='twitter:image'
        content='https://cdn.glitch.global/366c06b6-90d2-4995-9a79-d42af2d6b7c2/zeloclub%20Registr.png?v=1685524426272'
      ></meta>
    </head>
  );
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <Head />
      <GoogleTagManager gtmId='GTM-PJLSTC5R' />

      <body
        className={`${alice.variable} ${raleway.variable} ${roxborough.variable} font-sans `}
        suppressHydrationWarning={true}
      >
        <Providers>
          <div className='flex flex-col min-h-screen'>{children}</div>
          <Toaster position='top-right' richColors />
        </Providers>
        {/* <!-- Google Tag Manager (noscript) --> */}
        <noscript>
          <iframe
            title='Google Tag Manager zeloclub'
            src='https://www.googletagmanager.com/ns.html?id=GTM-PJLSTC5R'
            height='0'
            width='0'
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        {/* <!-- End Google Tag Manager (noscript) --> */}
      </body>
    </html>
  );
}
