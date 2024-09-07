'use client';

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { LockIcon, MailIcon } from 'lucide-react';
import { useState } from 'react';

export default function AdminLogin() {
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <div className='min-h-screen flex flex-col md:flex-row'>
      {/* Seção do formulário */}
      <div className='flex-1 flex items-center justify-center p-10'>
        <div className='w-full max-w-md space-y-8'>
          <div className='text-center'>
            <h2 className='mt-6 text-3xl font-bold text-gray-900'>
              Admin Dashboard
            </h2>
            <p className='mt-2 text-sm text-gray-600'>
              Acesse o painel administrativo
            </p>
          </div>
          <form className='mt-8 space-y-6'>
            <div className='rounded-md shadow-sm -space-y-px'>
              <div>
                <Label htmlFor='email-address' className='sr-only'>
                  Endereço de Email
                </Label>
                <div className='relative'>
                  <MailIcon
                    className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400'
                    size={20}
                  />
                  <Input
                    id='email-address'
                    name='email'
                    type='email'
                    autoComplete='email'
                    required
                    className='pl-10 rounded-t-md'
                    placeholder='Endereço de Email'
                  />
                </div>
              </div>
              <div>
                <Label htmlFor='password' className='sr-only'>
                  Senha
                </Label>
                <div className='relative'>
                  <LockIcon
                    className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400'
                    size={20}
                  />
                  <Input
                    id='password'
                    name='password'
                    type='password'
                    autoComplete='current-password'
                    required
                    className='pl-10 rounded-b-md'
                    placeholder='Senha'
                  />
                </div>
              </div>
            </div>

            <div className='flex items-center justify-between'>
              <div className='flex items-center'>
                <Checkbox
                  id='remember-me'
                  checked={rememberMe}
                  onCheckedChange={(checked) =>
                    setRememberMe(checked as boolean)
                  }
                />
                <Label
                  htmlFor='remember-me'
                  className='ml-2 block text-sm text-gray-900'
                >
                  Lembrar-me
                </Label>
              </div>

              <div className='text-sm'>
                <a
                  href='#'
                  className='font-medium text-blue-600 hover:text-blue-500'
                >
                  Esqueceu sua senha?
                </a>
              </div>
            </div>

            <div>
              <Button type='submit' className='w-full'>
                Entrar
              </Button>
            </div>
          </form>
          <p className='mt-2 text-center text-sm text-gray-600'>
            Ao acessar, você concorda com os{' '}
            <a
              href='#'
              className='font-medium text-blue-600 hover:text-blue-500'
            >
              Termos de Serviço
            </a>
          </p>
        </div>
      </div>

      {/* Seção de imagem/gradiente */}
      <div className='flex-1 bg-gradient-to-r from-blue-500 to-indigo-600 hidden md:block'>
        <div className='flex items-center justify-center h-full'>
          <div className='text-white text-center'>
            <h1 className='text-4xl font-bold mb-4'>Bem-vindo ao Admin</h1>
            <p className='text-xl'>Gerencie seu sistema com facilidade</p>
          </div>
        </div>
      </div>
    </div>
  );
}
