import { MenuIcon } from '@/components/icons';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';

type MobileNavProps = {
  isDashboard: boolean;
  isSearch: boolean;
};

export default function MobileNav({ isDashboard, isSearch }: MobileNavProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className='md:hidden' size='icon' variant='ghost'>
          <MenuIcon className='h-6 w-6' />
          <span className='sr-only'>Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side='top'>
        <nav className='flex flex-col gap-6 text-lg font-medium md:hidden'>
          <Link
            className='flex items-center gap-2 text-lg font-semibold md:text-base'
            href='/dashboard'
          >
            <SheetClose>
              <div className='h-10 w-10'>
                <Image
                  src='https://cdn.glitch.global/366c06b6-90d2-4995-9a79-d42af2d6b7c2/zc-favicon.png?v=1685107525308'
                  alt='Zelo'
                  width={48}
                  height={48}
                />
                <span className='sr-only'>zeloclub</span>
              </div>
            </SheetClose>
          </Link>

          <Link
            className={cn('text-gray-500 dark:text-gray-400', {
              'text-brand-600 font-bold': isDashboard,
            })}
            href='/dashboard'
          >
            <SheetClose>Dashboard</SheetClose>
          </Link>
          <Link
            className={cn('text-gray-500 dark:text-gray-400', {
              'text-brand-600 font-bold': isSearch,
            })}
            href='/search'
          >
            <SheetClose>Encontrar Cuidadores</SheetClose>
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
