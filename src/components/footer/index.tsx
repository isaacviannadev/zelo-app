import Image from 'next/image';

export default function Footer() {
  return (
    <footer className='mx-auto mt-10 max-w-7xl overflow-hidden px-6 pb-20 sm:mt-24 sm:pb-24 lg:px-8'>
      <div className=' space-10 flex justify-center'>
        <Image
          src='https://cdn.glitch.global/366c06b6-90d2-4995-9a79-d42af2d6b7c2/zc-favicon.png?v=1685107525308'
          alt='Zelo'
          className='h-12 w-auto'
          width={48}
          height={48}
        />
      </div>
      <p className='mt-10 text-center text-xs leading-5 text-gray-500'>
        &copy; 2023 zeloclub, ltda. Todos os direitos reservados.
      </p>
    </footer>
  );
}
