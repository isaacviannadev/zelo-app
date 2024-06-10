'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import MobileNav from './mobile-nav';

import { cn } from '@/lib/utils';
import { Button } from '../ui/button';

export default function Navigation() {
  const pathname = usePathname();
  const isDashboard = pathname === '/dashboard';
  const isSearch = pathname === '/search';
  const isHome = pathname === '/';

  return (
    <>
      {!isHome && <MobileNav isDashboard={isDashboard} isSearch={isSearch} />}
      <nav
        className={cn(
          'gap-6 justify-between w-full text-lg font-medium md:items-center md:gap-5 md:text-sm lg:gap-6',
          {
            'flex flex-row': isHome,
            'hidden md:flex md:flex-row': !isHome,
          }
        )}
      >
        {isHome ? (
          <>
            <Link href='/' className=' p-2'>
              <span className='sr-only'>zeloclub</span>
              <h1 className='font-alt text-4xl'>zeloclub</h1>
              <span className='sr-only'>Zeloclub</span>
            </Link>
            <div className='flex flex-row gap-2'>
              <Button size='sm' variant='brand'>
                Login
              </Button>
              <Button size='sm' variant='outline'>
                Cadastre-se
              </Button>
            </div>
          </>
        ) : (
          <div className='w-full flex flex-row items-center gap-4'>
            <Link
              className='flex items-center gap-2 text-lg font-semibold md:text-base'
              href='/dashboard'
            >
              <div className='h-10 w-10'>
                <Image
                  src='https://cdn.glitch.global/366c06b6-90d2-4995-9a79-d42af2d6b7c2/zc-favicon.png?v=1685107525308'
                  alt='Zelo'
                  width={48}
                  height={48}
                />
                <span className='sr-only'>Zeloclub</span>
              </div>
            </Link>

            <Link
              className={cn('text-gray-500 dark:text-gray-400', {
                'text-brand-600 font-bold': isDashboard,
              })}
              href='/dashboard'
            >
              Dashboard
            </Link>
            <Link
              className={cn('text-gray-500 dark:text-gray-400', {
                'text-brand-600 font-bold': isSearch,
              })}
              href='/search'
            >
              Encontrar Cuidadores
            </Link>
          </div>
        )}
      </nav>
    </>
  );
}
