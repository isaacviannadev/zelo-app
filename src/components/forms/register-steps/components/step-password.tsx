'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useFormContext } from 'react-hook-form';
import { StepsProps } from '../types';

export default function StepPassword({
  nextStep,
  prevStep,
}: Partial<StepsProps>) {
  const {
    register,
    formState: { isValid },
  } = useFormContext();

  const handleNextStep = () => {
    if (isValid) {
      nextStep && nextStep();
    }
  };

  return (
    <div className='flex flex-col gap-2'>
      <h2 className='text-xl'>Defina uma senha para acessar sua conta</h2>
      <label htmlFor='password'>Senha</label>
      <Input id='password' type='password' {...register('password')} />
      <label htmlFor='confirmPassword'>Confirmar Senha</label>
      <Input
        id='confirmPassword'
        type='password'
        {...register('confirmPassword')}
      />

      <div
        className='
        flex
        flex-row
        justify-end
         mt-8
        '
      >
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
