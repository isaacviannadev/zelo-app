'use client';

import Form from 'next/form';
import { useEffect, useState } from 'react';

import { CREATE_PROFILE } from '@/api/graphql/mutations/profile';
import { useMutation } from '@apollo/client';

import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';
import * as z from 'zod';

import { ProfileTypes } from '@/components/forms/create-profile/__mocks__';

import { validarTelefoneBR } from '@/utils/phoneNumberMask';
import { useRouter } from 'next-nprogress-bar';
import { toast } from 'sonner';
import StepEmail from './components/step-email';
import StepName from './components/step-name';
import StepPassword from './components/step-password';
import StepPhone from './components/step-phone';
import StepProfileType from './components/step-profile-type';

const formSchema = z
  .object({
    name: z.string().min(1, { message: 'Nome é obrigatório' }),
    phone: z
      .string({ required_error: 'Telefone é obrigatório' })
      .min(11, 'Deve conter pelo menos 11 dígitos')
      .refine(validarTelefoneBR, {
        message: 'Telefone inválido',
      }),
    email: z
      .string({
        required_error: 'Email é obrigatório',
      })
      .email({
        message: 'Email inválido',
      }),
    password: z
      .string()
      .min(8, { message: 'Senha deve conter pelo menos 8 caracteres' }),
    confirmPassword: z.string(),
    profileType: z.enum(ProfileTypes),
  })
  .refine((values) => values.password === values.confirmPassword, {
    message: 'Senhas não conferem',
    path: ['confirmPassword'],
  });

type FormSchema = z.infer<typeof formSchema>;

type StepFormProps = {
  onStepChange: (step: number) => void;
};

export default function StepForm({ onStepChange }: StepFormProps) {
  const [step, setStep] = useState(0);
  const router = useRouter();

  const [createProfessional] = useMutation(CREATE_PROFILE);

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

  const onSubmit = async (data: FormSchema) => {
    const payload = {
      fullName: data.name,
      email: data.email,
      password: data.password,
      profileType: data.profileType,
      contacts: [{ type: 'phone', value: data.phone.replace(/\D/g, '') }],
      gender: 'NOT_INFORMED',
      birthDate: new Date(
        new Date().setFullYear(new Date().getFullYear() - 20)
      ).toISOString(),
    };

    try {
      const variables = {
        data: payload,
      };

      createProfessional({ variables });
      router.push('/login');
      toast.success('Perfil cadastrado com sucesso!', {
        duration: 8000,
      });
    } catch (error) {
      console.error(error);
      toast.error('Erro ao cadastrar perfil. Tente novamente mais tarde.');
    }
  };

  useEffect(() => {
    onStepChange(step);
  }, [onStepChange, step]);

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
      <Form action={''} onSubmit={methods.handleSubmit(onSubmit)}>
        {steps[step]}
      </Form>
    </FormProvider>
  );
}
