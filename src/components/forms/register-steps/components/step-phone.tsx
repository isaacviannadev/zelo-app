'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { phoneMask } from '@/utils/formatters';
import { CircleAlert } from 'lucide-react';
import { useFormContext } from 'react-hook-form';
import { StepsProps } from '../types';

export default function StepPhone({ nextStep, prevStep }: Partial<StepsProps>) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const handleNextStep = () => {
    if (!errors.phone) {
      nextStep && nextStep();
    }
  };

  return (
    <div className='flex flex-col gap-2'>
      <h2 className='text-xl mb-8'>
        Qual o melhor número de telefone para contato?
      </h2>
      <Label htmlFor='phone'>Telefone</Label>
      <Input
        id='phone'
        placeholder='(00) 00000-0000'
        maxLength={15}
        autoFocus
        {...register('phone', {
          onChange: (e) => {
            e.target.value = phoneMask(e.target.value);
          },
        })}
      />
      {errors.phone && (
        <small className='inline-flex items-center gap-1 text-red-500 text-xs'>
          <CircleAlert size={12} />
          {errors.phone.message?.toString()}
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
