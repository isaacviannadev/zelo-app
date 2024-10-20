'use client';

import { ProfileTypes } from '@/components/forms/create-profile/__mocks__';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useFormContext } from 'react-hook-form';
import { StepsProps } from '../types';

export default function StepProfileType({
  prevStep,
  onSubmit,
}: Partial<StepsProps>) {
  const { register } = useFormContext();

  return (
    <div className='flex flex-col gap-2'>
      <h2 className='text-xl'>O que você deseja fazer com o seu perfil?</h2>
      <label htmlFor='profileType'>Tipo de Perfil</label>
      <Select {...register('profileType')}>
        <SelectTrigger>
          <SelectValue placeholder='Selecione o tipo de perfil' />
        </SelectTrigger>
        <SelectContent>
          {ProfileTypes.map((type) => (
            <SelectItem key={type} value={type}>
              {type}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
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
        <Button type='submit' onClick={onSubmit}>
          Finalizar
        </Button>
      </div>
    </div>
  );
}
