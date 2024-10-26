'use client';

import { useMutation } from '@apollo/client';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

import { CREATE_PROFILE } from '@/api/graphql/mutations/profile';
import { zodResolver } from '@hookform/resolvers/zod';

import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import Divider from './components/Divider';

import AddressForm from './components/AddressForm';
import AvailabilityForm from './components/AvailabilityForm';
import CertificationForm from './components/CertificationForm';
import ContactInfoForm from './components/ContactInfoForm';
import PersonalDataForm from './components/PersonalDataForm';
import ProfileTypeSelector from './components/ProfileTypeSelector';
import ServicesInfoForm from './components/ServicesInfoForm';

import { City, ProfileType, State } from '@/types';
import { birthDateDefault } from '@/utils/constant';
import { formSchema } from './utils/formSchema';

type FormValues = z.infer<typeof formSchema>;

type CreateProfileFormProps = {
  states: State[];
  cities: City[];
  profile?: ProfileType;
};

export default function CreateProfileForm({
  states,
  cities,
  profile,
}: CreateProfileFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [createProfessional] = useMutation(CREATE_PROFILE);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    mode: 'all',
    defaultValues: {
      gender: 'MALE',
      workingArea: [],
      services: [],
      shiftValue: 10.0,
      fullName: '',
      email: '',
      birthDate: birthDateDefault.split('T')[0],
      address: {
        street: '',
        complement: '',
        number: '',
        neighborhood: '',
        city: '',
        state: 'SP',
        zipCode: '',
        country: 'Brasil',
      },
      contacts: [{ type: 'PHONE', value: '' }],
      specialty: 'CAREGIVER',
      profileType: 'PROFESSIONAL',
      availability: [{ dayOfWeek: 'MONDAY', startTime: '', endTime: '' }],
      certification: [
        {
          name: '',
          type: 'COURSE',
          institution: '',
          completionDate: new Date().toISOString().split('T')[0],
        },
      ],
    },
  });

  const watchState = form.watch('address.state');
  const watchCity = form.watch('address.city');
  const watchProfileType = form.watch('profileType');
  const watchServices = form.watch('services');

  const isProfessionalRegister = watchProfileType === 'PROFESSIONAL';
  const isBackofficeRegister = watchProfileType === 'BACKOFFICE';

  const handleProfileTypeChange = (type: ProfileType) => {
    form.clearErrors();
    form.setValue('profileType', type);
  };

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);

    try {
      const variables = {
        data: {
          ...data,
        },
      };

      await createProfessional({ variables });
      toast.success('Perfil cadastrado com sucesso!');
    } catch (error) {
      console.error(error);
      toast.error('Erro ao cadastrar perfil. Tente novamente mais tarde.');
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (profile) {
      form.setValue('profileType', profile);
    }
  }, []);

  return (
    <div className='mx-auto p-6'>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
          {/* Profile Type Selector */}
          {!profile && (
            <ProfileTypeSelector
              control={form.control}
              handleProfileTypeChange={handleProfileTypeChange}
              defaultValue={watchProfileType}
            />
          )}

          {/* Personal Data Form */}
          <PersonalDataForm control={form.control} />

          {isProfessionalRegister && (
            <>
              {/* Services Info Form */}
              <ServicesInfoForm
                control={form.control}
                states={states}
                watchServices={watchServices}
              />
              <Divider />

              {/* Availability Form */}
              <AvailabilityForm control={form.control} />
              <Divider />

              {/* Certification Form */}
              <CertificationForm control={form.control} />
              <Divider />
            </>
          )}

          {!isBackofficeRegister && (
            <>
              {/* Address Form */}
              <AddressForm
                control={form.control}
                states={states}
                cities={cities}
                watchState={watchState}
                watchCity={watchCity}
                setValue={form.setValue}
              />
              <Divider />
            </>
          )}

          {/* Contact Info Form */}
          <ContactInfoForm control={form.control} watch={form.watch} />

          <Divider />

          <div className='flex justify-end'>
            <Button type='submit' variant='brand' disabled={isSubmitting}>
              {isSubmitting ? 'Enviando...' : 'Cadastrar'}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
