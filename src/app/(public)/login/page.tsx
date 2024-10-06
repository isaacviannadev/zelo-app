'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { LOGIN } from '@/api/graphql/mutations/login';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useMutation } from '@apollo/client';
import { Loader2, LockIcon, MailIcon } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

type LoginFormData = z.infer<typeof formSchema>;

const formSchema = z.object({
  username: z.string(),
  password: z.string(),
});

export default function AdminLogin() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [login] = useMutation(LOGIN);

  const form = useForm<LoginFormData>({
    resolver: zodResolver(formSchema),
    mode: 'all',
    defaultValues: {
      username: '',
      password: '',
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
      {/* Seção do formulário */}
      <section className='flex-1 flex items-center justify-center p-10 animate-enterFromRight'>
        <div className='w-full max-w-md space-y-8'>
          <div className='text-center'>
            <h2 className='mt-6 text-3xl font-bold text-gray-900'>
              Fazer login
            </h2>
            <p className='mt-2 text-sm text-gray-600'>
              Acesse sua conta para continuar
            </p>
          </div>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className='mt-8 space-y-6'
            >
              <div className='flex flex-col gap-2 rounded-md shadow-sm'>
                <FormField
                  control={form.control}
                  name='username'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor='username' className='sr-only'>
                        Endereço de Email
                      </FormLabel>
                      <FormControl>
                        <div className='relative'>
                          <MailIcon
                            className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400'
                            size={20}
                          />
                          <Input
                            id='username'
                            type='email'
                            autoComplete='email'
                            className='pl-10 rounded-t-md'
                            placeholder='Endereço de Email'
                            {...field}
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='password'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor='password' className='sr-only'>
                        Senha
                      </FormLabel>
                      <FormControl>
                        <div className='relative'>
                          <LockIcon
                            className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400'
                            size={20}
                          />
                          <Input
                            id='password'
                            type='password'
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
              </div>

              {/* <div className='flex items-center justify-between'>
                <FormField
                  control={form.control}
                  name='rememberMe'
                  render={({ field }) => (
                    <FormItem className='flex flex-row items-start space-x-3 space-y-0'>
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className='space-y-1 leading-none'>
                        <FormLabel>Lembrar-me</FormLabel>
                      </div>
                    </FormItem>
                  )}
                />

                <div className='text-sm'>
                  <Link
                    href='#'
                    className='font-medium text-brand-600 hover:text-brand-500'
                  >
                    Esqueceu sua senha?
                  </Link>
                </div>
              </div> */}

              <Button
                type='submit'
                variant='brand'
                className='w-full'
                disabled={isSubmitting}
              >
                {isSubmitting && (
                  <Loader2 className='mr-2 h-4 w-4 animate-spin' />
                )}
                {isSubmitting ? 'Carregando...' : 'Entrar'}
              </Button>
            </form>
          </Form>

          <div>
            <p className='mt-2 text-center text-sm text-gray-600'>
              Ao acessar, você concorda com os{' '}
              <Link
                href='#'
                className='font-medium text-brand-600 hover:text-brand-500'
              >
                Termos de Serviço
              </Link>
            </p>
            <p className=' text-center text-sm text-gray-600'>
              Não tem uma conta?{' '}
              <Link
                href='register'
                className='font-medium text-brand-600 hover:text-brand-500'
              >
                Registre-se agora
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* Seção de imagem/gradiente */}
      <section className='flex-1 bg-gradient-to-br from-brand-200 to-brand-700 hidden md:block animate-enterFromLeft'>
        <div className='flex items-center justify-center h-full'>
          <div className='text-white text-center'>
            <h1 className='text-2xl font-bold mb-4'>Bem-vindo a </h1>
            <h1 className='text-7xl font-bold mb-4 text-black'>zeloclub</h1>
          </div>
        </div>
      </section>
    </div>
  );
}
