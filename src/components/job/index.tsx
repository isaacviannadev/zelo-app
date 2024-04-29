import { Button } from '@/components/ui/button';
import Link from 'next/link';

export type JobProps = {
  id: number;
  title: string;
  description: string;
  location: string;
  salary: string;
  contract: string;
};

export default function Job({
  id,
  title,
  description,
  location,
  salary,
  contract,
}: JobProps) {
  return (
    <div className='grid gap-6 relative group'>
      <Link className='absolute inset-0 z-10' href='#'>
        <span className='sr-only'>Ver serviço</span>
      </Link>
      <div className='grid gap-1'>
        <h3 className='font-semibold'>{title}</h3>
        <p className='text-sm leading-none'>{description}</p>
        <p className='text-sm text-gray-500 dark:text-gray-400'>{location}</p>
        <p className='text-sm text-gray-500 dark:text-gray-400'>{salary}</p>
        <p className='text-sm text-gray-500 dark:text-gray-400'>
          Regime de contratação: {contract}
        </p>
      </div>
      <Button variant={'brand'}>Candidatar-se</Button>
    </div>
  );
}
