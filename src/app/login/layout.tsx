import localFont from 'next/font/local';
import { ReactNode } from 'react';

const alice = localFont({
  src: '../../assets/fonts/Alice-Regular.ttf',
  variable: '--font-alice',
});
const roxborough = localFont({
  src: '../../assets/fonts/roxborough-cf-bold.ttf',
  weight: 'bold',
  variable: '--font-roxborough',
});

type LoginLayoutProps = {
  children: ReactNode;
};

export default function LoginLayout({ children }: LoginLayoutProps) {
  return (
    <html lang='en'>
      <body
        className={`${alice.variable} ${roxborough.variable} font-sans `}
        suppressHydrationWarning={true}
      >
        <main>{children}</main>
      </body>
    </html>
  );
}
