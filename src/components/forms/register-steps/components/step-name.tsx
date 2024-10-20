'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useFormContext } from 'react-hook-form';
import { StepsProps } from '../types';

export default function StepName({ nextStep }: Partial<StepsProps>) {
  const {
    register,
    watch,
    setError,
    clearErrors,
    formState: { errors },
  } = useFormContext();

  const watchName = watch('name');
  const handleNextStep = () => {
    if (!watchName) {
      setError('name', {
        type: 'manual',
        message: 'Nome é obrigatório',
      });
      return;
    }

    if (!errors.name || watchName !== '') {
      clearErrors('name');
      nextStep && nextStep();
    }
  };

  return (
    <div className='flex flex-col gap-2'>
      <h2 className='text-xl mb-4'>Como você gostaria de ser chamado?</h2>
      <label htmlFor='name'>Nome</label>
      <Input id='name' {...register('name')} />
      {errors.name && (
        <span className='text-red-500 text-sm'>
          {errors.name.message?.toString()}
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
        <Button type='button' onClick={handleNextStep}>
          Próximo
        </Button>
      </div>
    </div>
  );
}
