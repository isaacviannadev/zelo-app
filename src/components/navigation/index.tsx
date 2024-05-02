'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import MobileNav from './mobile-nav';

import { cn } from '@/lib/utils';

export default function Navigation() {
  const pathname = usePathname();
  const isDashboard = pathname === '/dashboard';
  const isSearch = pathname === '/search';
  const isHome = pathname === '/';

  return (
    <>
      <MobileNav
        isDashboard={isDashboard}
        isSearch={isSearch}
        isHome={isHome}
      />
      <nav className='flex-col hidden gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6'>
        <Link
          className='flex items-center gap-2 text-lg font-semibold md:text-base'
          href='/'
        >
          <div className='h-10 w-10'>
            <Image
              src='https://cdn.glitch.global/366c06b6-90d2-4995-9a79-d42af2d6b7c2/zc-favicon.png?v=1685107525308'
              alt='Zelo'
              width={48}
              height={48}
            />
            <span className='sr-only'>Caregivers</span>
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
      </nav>
    </>
  );
}
