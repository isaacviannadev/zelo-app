'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { phoneMask } from '@/utils/formatters';
import { useFormContext } from 'react-hook-form';
import { StepsProps } from '../types';

export default function StepPhone({ nextStep, prevStep }: Partial<StepsProps>) {
  const {
    register,
    watch,
    setError,
    clearErrors,
    formState: { errors },
  } = useFormContext();

  const watchPhone = watch('phone');

  const handleNextStep = () => {
    if (!watchPhone) {
      setError('phone', {
        type: 'manual',
        message: 'Telefone é obrigatório',
      });
      return;
    }

    if (!errors.phone || watchPhone !== '') {
      clearErrors('phone');
      nextStep && nextStep();
    }
  };

  return (
    <div className='flex flex-col gap-2'>
      <h2 className='text-xl'>
        Qual o melhor número de telefone para contato?
      </h2>
      <label htmlFor='phone'>Telefone</label>
      <Input
        id='phone'
        placeholder='(00) 00000-0000'
        maxLength={15}
        {...register('phone', {
          onChange: (e) => {
            e.target.value = phoneMask(e.target.value);
          },
        })}
      />
      {errors.phone && (
        <span className='text-red-500 text-sm'>
          {errors.phone.message?.toString()}
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
