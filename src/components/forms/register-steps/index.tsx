'use client';

import { ProfileTypes } from '@/components/forms/create-profile/__mocks__';
import { validatePhoneNumber } from '@/utils/formatters';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import * as z from 'zod';
import StepEmail from './components/step-email';
import StepName from './components/step-name';
import StepPassword from './components/step-password';
import StepPhone from './components/step-phone';
import StepProfileType from './components/step-profile-type';

const formSchema = z.object({
  name: z.string({ required_error: 'Nome é obrigatório' }),
  phone: z
    .string({ required_error: 'Telefone é obrigatório' })
    .min(11, 'Deve conter pelo menos 11 dígitos')
    .refine(validatePhoneNumber, {
      message: 'Telefone inválido',
    }),
  email: z
    .string({
      required_error: 'Email é obrigatório',
    })
    .email({
      message: 'Email inválido',
    }),
  password: z.string().min(8),
  confirmPassword: z.string().min(8),
  profileType: z.enum(ProfileTypes),
});

type FormSchema = z.infer<typeof formSchema>;

type StepFormProps = {
  onStepChange: (step: number) => void;
};

export default function StepForm({ onStepChange }: StepFormProps) {
  const [step, setStep] = useState(0);

  const methods = useForm({
    resolver: zodResolver(formSchema),
    mode: 'all',
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      password: '',
      confirmPassword: '',
      profileType: ProfileTypes[1],
    },
  });

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const onSubmit = (data: FormSchema) => {
    console.log(data, 'data submited');
    // Handle form submission
  };

  useEffect(() => {
    onStepChange(step);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [step]);

  const steps = [
    <StepName nextStep={nextStep} key='stepName' />,
    <StepPhone nextStep={nextStep} prevStep={prevStep} key='stepPhone' />,
    <StepEmail nextStep={nextStep} prevStep={prevStep} key='stepEmail' />,
    <StepPassword nextStep={nextStep} prevStep={prevStep} key='stepPassword' />,
    <StepProfileType
      prevStep={prevStep}
      onSubmit={methods.handleSubmit(onSubmit)}
      key='stepProfileType'
    />,
  ];

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{steps[step]}</form>
    </FormProvider>
  );
}
