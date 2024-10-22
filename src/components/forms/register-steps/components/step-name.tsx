'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { CircleAlert } from 'lucide-react';
import { useFormContext } from 'react-hook-form';
import { StepsProps } from '../types';

export default function StepName({ nextStep }: Partial<StepsProps>) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const handleNextStep = () => {
    if (!errors.name) {
      nextStep && nextStep();
    }
  };

  return (
    <div className='flex flex-col gap-2'>
      <h2 className='text-xl mb-8'>Como você gostaria de ser chamado?</h2>
      <Label htmlFor='name'>Nome</Label>
      <Input id='name' {...register('name')} autoFocus />
      {errors.name && (
        <small className='inline-flex items-center gap-1 text-red-500 text-xs'>
          <CircleAlert size={12} />
          {errors.name.message?.toString()}
        </small>
      )}

      <div className='flex flex-row justify-end mt-8 gap-2'>
        <Button type='button' onClick={handleNextStep}>
          Próximo
        </Button>
      </div>
    </div>
  );
}
