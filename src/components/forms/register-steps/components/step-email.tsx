'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useFormContext } from 'react-hook-form';
import { StepsProps } from '../types';

export default function StepEmail({ nextStep, prevStep }: Partial<StepsProps>) {
  const {
    register,
    watch,
    setError,
    clearErrors,
    formState: { errors },
  } = useFormContext();

  const watchEmail = watch('email');

  const handleNextStep = () => {
    if (!watchEmail) {
      setError('email', {
        type: 'manual',
        message: 'Email é obrigatório',
      });
      return;
    }

    if (!errors.email || watchEmail !== '') {
      clearErrors('email');
      nextStep && nextStep();
    }
  };

  return (
    <div className='flex flex-col gap-2'>
      <h2 className='text-xl'>Qual o seu email?</h2>
      <label htmlFor='email'>Email</label>
      <Input id='email' {...register('email')} />
      {errors.email && (
        <span className='text-red-500 text-sm'>
          {errors.email.message?.toString()}
        </span>
      )}

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
