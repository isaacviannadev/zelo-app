'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { CircleAlert } from 'lucide-react';
import { useFormContext } from 'react-hook-form';
import { StepsProps } from '../types';

export default function StepEmail({ nextStep, prevStep }: Partial<StepsProps>) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const handleNextStep = () => {
    if (!errors.email) {
      nextStep && nextStep();
    }
  };

  return (
    <div className='flex flex-col gap-2'>
      <h2 className='text-xl mb-8'>Qual o seu email?</h2>
      <Label htmlFor='email'>Email</Label>
      <Input id='email' {...register('email')} autoFocus />
      {errors.email && (
        <small className='inline-flex items-center gap-1 text-red-500 text-xs'>
          <CircleAlert size={12} />
          {errors.email.message?.toString()}
        </small>
      )}

      <div className='flex flex-row justify-end mt-8 gap-2'>
        <Button variant={'outline'} type='button' onClick={prevStep}>
          Voltar
        </Button>
        <Button type='button' onClick={handleNextStep}>
          Próximo
        </Button>
      </div>
    </div>
  );
}
