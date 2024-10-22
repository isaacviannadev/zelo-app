'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { CircleAlert } from 'lucide-react';
import { useFormContext } from 'react-hook-form';
import { StepsProps } from '../types';

export default function StepPassword({
  nextStep,
  prevStep,
}: Partial<StepsProps>) {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext();

  const watchPassword = watch('password');
  const handleNextStep = () => {
    if (!errors || watchPassword !== '') {
      nextStep && nextStep();
    }
  };

  return (
    <div className='flex flex-col gap-2'>
      <h2 className='text-xl mb-8'>Defina uma senha para acessar sua conta</h2>
      <Label htmlFor='password'>Senha</Label>
      <Input
        id='password'
        type='password'
        {...register('password')}
        autoFocus
      />
      <Label htmlFor='confirmPassword'>Confirmar Senha</Label>
      <Input
        id='confirmPassword'
        type='password'
        {...register('confirmPassword')}
      />

      {errors.password && (
        <small className='inline-flex items-center gap-1 text-red-500 text-xs'>
          <CircleAlert size={12} />
          {errors.password.message?.toString()}
        </small>
      )}
      {errors.confirmPassword && (
        <small className='inline-flex items-center gap-1 text-red-500 text-xs'>
          <CircleAlert size={12} />
          {errors.confirmPassword.message?.toString()}
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
