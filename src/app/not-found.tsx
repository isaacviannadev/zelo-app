import { FileWarningIcon } from '@/components/icons';
import Link from 'next/link';

export default function NotFound() {
  return (
    <section className='flex flex-col items-center justify-center flex-1 bg-gray-100 dark:bg-gray-900 '>
      <div className='max-w-lg mx-auto text-center z-10'>
        <div className='inline-flex items-center justify-center w-20 h-20 mb-6 rounded-full bg-red-100'>
          <FileWarningIcon className='w-12 h-12 text-red-500' />
        </div>
        <div className='space-y-4'>
          <h1 className='text-5xl font-bold text-gray-800 dark:text-white'>
            Ops!
          </h1>
          <p className='text-lg text-gray-600 dark:text-gray-300'>
            Parece que a página que você tava procurando não foi encontrada.
          </p>
          <p className='text-gray-500 dark:text-gray-400'>
            Não se preocupa, é fácil voltar pro caminho certo. Clica no botão
            abaixo pra voltar pra página inicial e encontrar as melhores vagas
            pra cuidadores de idosos.
          </p>
          <Link
            className='inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-brand-600 rounded-md shadow-md hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800'
            href='/'
          >
            Voltar pra página inicial
          </Link>
        </div>
      </div>
    </section>
  );
}
