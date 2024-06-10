'use client';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Separator } from '@/components/ui/separator';
import { UserType } from '@/types/user';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { LogoutIcon, SettingsIcon, UserIcon } from '../icons';
import Navigation from '../navigation';

export type HeaderProps = {
  user: UserType | null;
};

export default function Header({ user }: HeaderProps) {
  const [scroll, setScroll] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 40) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  const headerClasses =
    'flex items-center justify-between h-16 px-4 shrink-0 md:px-6  ';

  const headerClassesOnScroll = scroll
    ? `${headerClasses + 'fixed inset-x-0 top-0 z-10 bg-white shadow-sm'}`
    : `${headerClasses + 'bg-transparent'}`;

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [scroll]);

  return (
    // <header className='flex items-center justify-between h-16 px-4 border-b shrink-0 md:px-6 z-1'>
    <header className={headerClassesOnScroll}>
      <Navigation />

      {user && (
        <div className='flex items-center w-fit gap-4 md:ml-auto md:gap-2 lg:gap-4'>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className='rounded-full' size='icon' variant='ghost'>
                <Avatar>
                  <AvatarImage alt='Avatar' src='/placeholder-avatar.jpg' />
                  <AvatarFallback>IS</AvatarFallback>
                </Avatar>
                <span className='sr-only'>Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='w-36'>
              <Link href='/account'>
                <DropdownMenuItem>
                  <UserIcon className='w-4 h-4 mr-2' />
                  Meu Perfil
                </DropdownMenuItem>
              </Link>
              <Link href='/settings'>
                <DropdownMenuItem>
                  <SettingsIcon className='w-4 h-4 mr-2' />
                  Configurações
                </DropdownMenuItem>
              </Link>
              <Separator />
              <DropdownMenuItem>
                <LogoutIcon className='w-4 h-4 mr-2' />
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      )}
    </header>
  );
}
