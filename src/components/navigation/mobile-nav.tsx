import { MenuIcon } from '@/components/icons';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import Image from 'next/image';
import Link from 'next/link';

type MobileNavProps = {
  isDashboard: boolean;
  isSearch: boolean;
  isHome: boolean;
};

export default function MobileNav({
  isDashboard,
  isSearch,
  isHome,
}: MobileNavProps) {
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
            href='/'
          >
            <SheetClose>
              <div className='h-10 w-10'>
                <Image
                  src='https://cdn.glitch.global/366c06b6-90d2-4995-9a79-d42af2d6b7c2/zc-favicon.png?v=1685107525308'
                  alt='Zelo'
                  width={48}
                  height={48}
                />
                <span className='sr-only'>Caregivers</span>
              </div>
            </SheetClose>
          </Link>

          <Link
            className={`text-gray-500 dark:text-gray-400 ${
              isHome && 'text-black font-extrabold'
            }`}
            href='/'
          >
            <SheetClose>Home</SheetClose>
          </Link>
          <Link
            className={`text-gray-500 dark:text-gray-400 ${
              isDashboard && 'text-black font-extrabold'
            }`}
            href='/dashboard'
          >
            <SheetClose>Dashboard</SheetClose>
          </Link>
          <Link
            className={`text-gray-500 dark:text-gray-400 ${
              isSearch && 'text-black font-extrabold'
            }`}
            href='/search'
          >
            <SheetClose>Buscar</SheetClose>
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
