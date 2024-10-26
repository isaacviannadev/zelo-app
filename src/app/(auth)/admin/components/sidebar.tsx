'use client';

import {
  BarChartIcon,
  ListIcon,
  PieChartIcon,
  PlusIcon,
  UserPlusIcon,
  UserRoundCheck,
} from '@/components/icons';
import { LayoutDashboard, UserCog2, UserPlus2 } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className='bg-white border-r w-64 py-6 shrink-0 dark:bg-gray-800 relative'>
      <div className='px-4 space-y-4 sticky top-20'>
        <Link
          className={`flex items-center gap-2 p-2 rounded text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors dark:text-gray-300 dark:hover:text-gray-100 ${
            pathname === '/admin' ? 'bg-brand-400/20 text-gray-900' : ''
          }`}
          href='/admin'
        >
          <LayoutDashboard className='h-4 w-4' />
          Visão Geral
        </Link>

        <div>
          <h2 className='text-sm font-semibold text-gray-500 uppercase tracking-wide dark:text-gray-400'>
            Profissionais
          </h2>
          <div className='mt-3 space-y-2'>
            <Link
              className={`flex items-center gap-2 p-2 rounded text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors dark:text-gray-300 dark:hover:text-gray-100 ${
                pathname === '/admin/professionals'
                  ? 'bg-brand-400/20 text-gray-900'
                  : ''
              }`}
              href='/admin/professionals'
            >
              <UserPlusIcon className='h-4 w-4' />
              Novo Profissional
            </Link>
            <Link
              className={`flex items-center gap-2 p-2 rounded text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors dark:text-gray-300 dark:hover:text-gray-100 ${
                pathname.includes('/list')
                  ? 'bg-brand-400/20 text-gray-900'
                  : ''
              }`}
              href='/admin/professionals/list'
            >
              <UserRoundCheck className='h-4 w-4' />
              Ver Profissionais
            </Link>
          </div>
        </div>

        <div>
          <h2 className='text-sm font-semibold text-gray-500 uppercase tracking-wide dark:text-gray-400'>
            Vagas
          </h2>
          <div className='mt-3 space-y-2'>
            <Link
              className={`flex items-center gap-2 p-2 rounded text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors dark:text-gray-300 dark:hover:text-gray-100 ${
                pathname === '/admin/vacancies'
                  ? 'bg-brand-400/20 text-gray-900'
                  : ''
              }`}
              href='/admin/vacancies'
            >
              <PlusIcon className='h-4 w-4' />
              Nova vaga
            </Link>
            <Link
              className={`flex items-center gap-2 p-2 rounded text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors dark:text-gray-300 dark:hover:text-gray-100 ${
                pathname === '/admin/vacancies#ver-vagas'
                  ? 'bg-brand-400/20 text-gray-900'
                  : ''
              }`}
              href='/admin/vacancies#ver-vagas'
            >
              <ListIcon className='h-4 w-4' />
              Todas as vagas
            </Link>
          </div>
        </div>

        <div>
          <h2 className='text-sm font-semibold text-gray-500 uppercase tracking-wide dark:text-gray-400'>
            Clientes
          </h2>
          <div className='mt-3 space-y-2'>
            <Link
              className={`flex items-center gap-2 p-2 rounded text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors dark:text-gray-300 dark:hover:text-gray-100 ${
                pathname === '/admin/customers'
                  ? 'bg-brand-400/20 text-gray-900'
                  : ''
              }`}
              href='/admin/customers'
            >
              <UserPlus2 className='h-4 w-4' />
              Novo Cliente
            </Link>
          </div>
        </div>

        <div>
          <h2 className='text-sm font-semibold text-gray-500 uppercase tracking-wide dark:text-gray-400'>
            Backoffice
          </h2>
          <div className='mt-3 space-y-2'>
            <Link
              className={`flex items-center gap-2 p-2 rounded text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors dark:text-gray-300 dark:hover:text-gray-100 ${
                pathname === '/admin/backoffice'
                  ? 'bg-brand-400/20 text-gray-900'
                  : ''
              }`}
              href='/admin/backoffice'
            >
              <UserCog2 className='h-4 w-4' />
              Novo Operador
            </Link>
          </div>
        </div>

        <div className='hidden'>
          <h2 className='text-sm font-semibold text-gray-500 uppercase tracking-wide dark:text-gray-400'>
            Relatórios
          </h2>
          <div className='mt-3 space-y-2'>
            <Link
              className={`flex items-center gap-2 p-2 rounded text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors dark:text-gray-300 dark:hover:text-gray-100 ${
                pathname === '/admin' ? 'bg-brand-400/20 text-gray-900' : ''
              }`}
              href='#'
            >
              <BarChartIcon className='h-4 w-4' />
              Visão geral
            </Link>
            <Link
              className={`flex items-center gap-2 p-2 rounded text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors dark:text-gray-300 dark:hover:text-gray-100 ${
                pathname === '/admin' ? 'bg-brand-400/20 text-gray-900' : ''
              }`}
              href='#'
            >
              <PieChartIcon className='h-4 w-4' />
              Análise de vagas
            </Link>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
