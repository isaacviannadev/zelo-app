'use client';

import { useState } from 'react';
import { useFormContext } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { CheckCircle2Icon } from 'lucide-react';

import { cn } from '@/lib/utils';
import {
  crossProfileTypes,
  ProfileTypes,
} from '../../create-profile/__mocks__';

import { ProfileType } from '@/types';
import { StepsProps } from '../types';

export default function StepProfileType({
  prevStep,
  onSubmit,
}: Partial<StepsProps>) {
  const { setValue } = useFormContext();

  const [profileType, setProfileType] = useState<ProfileType>(ProfileTypes[1]);

  const selectedProfileType = `border-brand-800 shadow-md`;

  const handleProfileType = (type: ProfileType) => {
    setValue('profileType', type);
    setProfileType(type);
  };

  return (
    <div className='flex flex-col gap-2'>
      <h2 className='mb-8 text-xl'>
        O que você deseja fazer com o seu perfil?
      </h2>
      <RadioGroup
        defaultValue={profileType}
        onValueChange={(value) => handleProfileType(value as ProfileType)}
        className='flex flex-row'
      >
        <Label
          htmlFor={ProfileTypes[1]}
          className={cn(
            `flex flex-col w-full p-4 gap-4 bg-white border border-slate-200 rounded-xl items-center cursor-pointer relative`,
            profileType === ProfileTypes[1] ? selectedProfileType : ''
          )}
        >
          <div className='flex flex-col gap-4'>
            <span>{crossProfileTypes[ProfileTypes[1]]}</span>
            <RadioGroupItem
              value={ProfileTypes[1]}
              id={ProfileTypes[1]}
              className='hidden'
            />
            {profileType === ProfileTypes[1] && (
              <CheckCircle2Icon className='top-2 right-2 absolute w-6 h-6 text-white fill-brand-400' />
            )}
            <span className='text-slate-500 text-sm'>
              Se você busca por cuidadores para você ou alguém da sua família.
            </span>
          </div>
        </Label>
        <Label
          htmlFor={ProfileTypes[0]}
          className={cn(
            `flex flex-col w-full p-4 gap-4 bg-white border border-slate-200 rounded-xl items-center cursor-pointer relative`,
            profileType === ProfileTypes[0] ? selectedProfileType : ''
          )}
        >
          <div className='flex flex-col gap-4'>
            <span>{crossProfileTypes[ProfileTypes[0]]}</span>
            <RadioGroupItem
              value={ProfileTypes[0]}
              id={ProfileTypes[0]}
              className='hidden'
            />
            {profileType === ProfileTypes[0] && (
              <CheckCircle2Icon className='top-2 right-2 absolute w-6 h-6 text-white fill-brand-400' />
            )}
            <span className='text-slate-500 text-sm'>
              Se você é um profissional de saúde e deseja atender pacientes.
            </span>
          </div>
        </Label>
      </RadioGroup>

      <div className='flex flex-row justify-end gap-2 mt-8'>
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
