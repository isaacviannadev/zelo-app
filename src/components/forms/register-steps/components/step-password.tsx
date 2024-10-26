'use client';

import { Button } from '@/components/ui/button';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { PasswordInput } from '@/components/ui/password-input';
import { CircleAlert, LockIcon } from 'lucide-react';
import { useFormContext } from 'react-hook-form';
import { StepsProps } from '../types';

export default function StepPassword({
  nextStep,
  prevStep,
}: Partial<StepsProps>) {
  const {
    control,
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
      <FormField
        control={control}
        name='password'
        render={({ field }) => (
          <FormItem>
            <FormLabel htmlFor='password' className='sr-only'>
              Senha
            </FormLabel>
            <FormControl>
              <div className='relative'>
                <LockIcon
                  className='absolute left-3 top-1/2 transform -translate-y-1/2 z-10 text-gray-400'
                  size={20}
                />
                <PasswordInput
                  id='password'
                  autoComplete='current-password'
                  className='pl-10 rounded-b-md'
                  placeholder='Senha'
                  {...field}
                />
              </div>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name='confirmPassword'
        render={({ field }) => (
          <FormItem>
            <FormLabel htmlFor='confirmPassword' className='sr-only'>
              Confirmar Senha
            </FormLabel>
            <FormControl>
              <div className='relative'>
                <LockIcon
                  className='absolute left-3 top-1/2 transform -translate-y-1/2 z-10 text-gray-400'
                  size={20}
                />
                <PasswordInput
                  id='confirmPassword'
                  autoComplete='current-password'
                  className='pl-10 rounded-b-md'
                  placeholder='Senha'
                  {...field}
                />
              </div>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
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
