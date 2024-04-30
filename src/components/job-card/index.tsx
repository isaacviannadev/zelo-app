import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
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
    <Card className='hover:shadow-md  '>
      <CardHeader>
        <h2 className='font-semibold text-xl md:text-center'>{title}</h2>
        <div className='md:text-center'>
          <Badge variant={'outline'}>{contract}</Badge>
        </div>
      </CardHeader>

      <CardContent className='grid gap-6 relative group '>
        <Link className='absolute inset-0 z-10' href='#'>
          <span className='sr-only'>Ver serviço</span>
        </Link>
        <div className='grid gap-2'>
          <p className='text-sm leading-none'>{description}</p>
          <p className='text-sm text-gray-500 dark:text-gray-400'>{location}</p>
          <p className='text-sm text-gray-500 dark:text-gray-400'>{salary}</p>
        </div>
      </CardContent>

      <CardFooter>
        <Button className='w-full' variant={'brand'}>
          Candidatar-se
        </Button>
      </CardFooter>
    </Card>
  );
}
