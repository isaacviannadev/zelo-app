'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { LOGIN } from '@/api/graphql/mutations/login';
import { useMutation } from '@apollo/client';
import { ArrowLeft } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

type LoginFormData = z.infer<typeof formSchema>;

const formSchema = z.object({
  email: z.string().email('Email inválido'),
  password: z.string(),
  rememberMe: z.boolean().default(false),
});

export default function RegisterPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [login] = useMutation(LOGIN);

  const form = useForm<LoginFormData>({
    resolver: zodResolver(formSchema),
    mode: 'all',
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
  });

  const onSubmit = async (data: LoginFormData) => {
    setIsSubmitting(true);
    try {
      const variables = {
        data,
      };

      await login({ variables });
      toast.success('Bem-vindo ao ZeloClub!');
    } catch (error) {
      toast.error('Não foi possível fazer login. Verifique suas credenciais.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className='min-h-screen flex flex-col md:flex-row overflow-x-hidden'>
      {/* Seção de imagem/gradiente */}
      <section className='flex-1 bg-gradient-to-br from-brand-200 to-brand-700 hidden md:block relative animate-enterFromRight'>
        <div className='flex items-center justify-center h-full'>
          <div className='relative text-white text-center animate-fade'>
            <h1 className='text-2xl font-bold mb-4'>Bem-vindo a </h1>
            <h1 className='text-7xl font-bold mb-4 text-black'>zeloclub</h1>
          </div>
        </div>
        <Link
          href='/'
          className='absolute flex top-2 left-2 p-2 text-white text-center rounded-full bg-transparent hover:bg-brand-400 group hover:shadow-sm cursor-pointer'
        >
          <ArrowLeft />
          <span className='block transform -translate-x-full opacity-0 transition-all ease-in-out group-hover:translate-x-0 group-hover:opacity-100'>
            Voltar para o login
          </span>
        </Link>
      </section>
      {/* Seção do formulário */}
      <section className='flex-1 flex items-center justify-center p-10 animate-enterFromLeft'>
        <div className='w-full max-w-md space-y-8'>
          <div className='text-center'>
            <h2 className='mt-6 text-3xl font-bold text-gray-900'>
              Fazer login
            </h2>
            <p className='mt-2 text-sm text-gray-600'>
              Acesse sua conta para continuar
            </p>
          </div>
          test
        </div>
      </section>
    </div>
  );
}
