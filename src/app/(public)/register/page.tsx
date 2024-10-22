'use client';

import DotsNav from '@/components/dots-navigation';
import StepForm from '@/components/forms/register-steps';
import SidebarSteps from '@/components/sidebar-steps';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function RegisterPage() {
  const [step, setStep] = useState(1);

  return (
    <div className='flex flex-row  min-h-screen md:flex-row relative'>
      <Link
        href={'/'}
        className='flex flex-row gap-4 absolute top-6 left-6 z-10'
      >
        <Image
          src='https://zeloclub-public.s3.amazonaws.com/heart.svg'
          alt='ZeloClub'
          width={48}
          height={48}
        />
        <h1 className='text-3xl'>zeloclub</h1>
      </Link>

      {/* Seção de imagem/gradiente */}
      <section className='w-1/3 p-8 bg-brand-100/25 relative hidden md:flex '>
        <div className='flex pt-48  h-full'>
          <SidebarSteps currentStep={step} />
        </div>
      </section>

      {/* Seção do formulário */}
      <section className='flex flex-col w-full md:w-2/3 bg-white items-center justify-center p-10 relative'>
        <div className='absolute w-6 h-full -left-6 bg-white rounded-tl-3xl rounded-bl-3xl' />
        <div className='flex flex-col justify-center w-full h-full max-w-lg space-y-8'>
          <StepForm onStepChange={(step) => setStep(step + 1)} />
        </div>

        <div className=''>
          <DotsNav currentStep={step} totalSteps={5} />
        </div>
      </section>
    </div>
  );
}
