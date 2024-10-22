'use client';

import { CREATE_PROFILE } from '@/api/graphql/mutations/profile';
import { useMutation } from '@apollo/client';
import { toast } from 'sonner';

import { getAddressByCep } from '@/api/address';
import { zodResolver } from '@hookform/resolvers/zod';
import { TrashIcon } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import { z } from 'zod';

import { PlusIcon } from '@/components/icons';
import MultiSelect from '@/components/multiselect';
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import Divider from './components/Divider';

import {
  CertificationTypes,
  ContactTypes,
  crossCertificationTypes,
  crossContactName,
  crossDaysOfWeek,
  crossGenderName,
  crossHealthcareRole,
  crossProfileTypes,
  DaysOfWeek,
  EnumGender,
  HealthcareRole,
  ProfileTypes,
} from './__mocks__';

import { servicesOptions } from '@/mocks/services';
import { City, ProfileType, State } from '@/types';
import { birthDateDefault } from '@/utils/constant';
import { formatCep } from '@/utils/formatters';
import { formSchema } from './utils/formSchema';

type FormValues = z.infer<typeof formSchema>;

type CreateProfileFormProps = {
  states: State[];
  cities: City[];
};

export default function CreateProfileForm({
  states,
  cities,
}: CreateProfileFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [filteredCities, setFilteredCities] = useState<City[]>([]);
  const [cepCity, setCepCity] = useState(null);

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

  const {
    fields: contactFields,
    append: appendContact,
    remove: removeContact,
  } = useFieldArray({
    control: form.control,
    name: 'contacts',
  });

  const {
    fields: availabilityFields,
    append: appendAvailability,
    remove: removeAvailability,
  } = useFieldArray({
    control: form.control,
    name: 'availability',
  });

  const {
    fields: certificationFields,
    append: appendCertification,
    remove: removeCertification,
  } = useFieldArray({
    control: form.control,
    name: 'certification',
  });

  const handleCepChange = async (cep: string) => {
    if (cep.length < 9) return;
    const cepWithoutHyphen = cep.replace('-', '');
    const address = await getAddressByCep(cepWithoutHyphen);

    if (address.erro) {
      alert('CEP não encontrado. Por favor, verifique o CEP informado.');
      return;
    }

    form.setValue('address.street', address.logradouro);
    form.setValue('address.neighborhood', address.bairro);
    form.setValue('address.state', address.uf);

    setCepCity(address.localidade);
    form.setValue('address.city', address.localidade);
  };

  useEffect(() => {
    if (watchState) {
      const citiesFromState = cities.filter(
        (city) => city.microrregiao.mesorregiao.UF.sigla === watchState
      );
      setFilteredCities(citiesFromState);

      if (cepCity) {
        const matchingCity = citiesFromState.find(
          (city) => city.nome === cepCity
        );
        if (matchingCity) {
          form.setValue('address.city', matchingCity.nome);
          setCepCity(null);
        }
      }
    }
  }, [watchState, cepCity, cities, form]);

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

  return (
    <div className='mx-auto p-6'>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
          {/* Tipo de Perfil */}
          <div className='space-y-4'>
            <h2 className='text-xl font-semibold'>Tipo de Perfil</h2>
            <span className='text-sm text-gray-500'>
              Selecione o perfil que deseja cadastrar antes de prosseguir
            </span>

            <ToggleGroup
              size={'lg'}
              variant={'brand'}
              type='single'
              onValueChange={(value) =>
                handleProfileTypeChange(value as ProfileType)
              }
              defaultValue={watchProfileType}
              className='flex justify-start bg-slate-50  rounded rounded-t-3xl p-4 gap-4'
            >
              {ProfileTypes.map((type) => (
                <ToggleGroupItem
                  key={type}
                  value={type}
                  aria-label={crossProfileTypes[type]}
                >
                  {crossProfileTypes[type]}
                </ToggleGroupItem>
              ))}
            </ToggleGroup>
          </div>

          {/* Dados pessoais */}
          <div className='space-y-4'>
            <h2 className='text-xl font-semibold'>Dados Pessoais </h2>

            <FormField
              control={form.control}
              name='fullName'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome Completo</FormLabel>
                  <FormControl>
                    <Input placeholder='João da Silva' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className='grid grid-cols-3 gap-4'>
              <FormField
                control={form.control}
                name='email'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        type='email'
                        placeholder='joao@exemplo.com'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name='birthDate'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Data de Nascimento</FormLabel>
                    <FormControl>
                      <Input
                        type='date'
                        max={new Date().toISOString().split('T')[0]}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name='gender'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Gênero</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder='Selecione o gênero' />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {EnumGender.map((gender) => (
                          <SelectItem key={gender} value={gender}>
                            {crossGenderName[gender]}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <Divider />

          {isProfessionalRegister && (
            <>
              {/* SERVIÇOS */}
              <div className='space-y-4'>
                <h2 className='text-xl font-semibold'>
                  Informação de Serviços{' '}
                </h2>
                <div className='flex w-full  gap-4'>
                  <FormField
                    control={form.control}
                    name='specialty'
                    render={({ field }) => (
                      <FormItem className='w-full'>
                        <FormLabel>Especialidade</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder='Selecione a especialidade' />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {HealthcareRole.map((role) => (
                              <SelectItem key={role} value={role}>
                                {crossHealthcareRole[role]}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name='workingArea'
                    render={({ field }) => (
                      <div className='flex w-full gap-4'>
                        <FormItem className='w-full'>
                          <FormLabel>Área de Atuação</FormLabel>
                          <FormControl>
                            <Select
                              onValueChange={(value) => field.onChange([value])}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder='Estado' />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {states.map(({ id, sigla, nome }) => (
                                  <SelectItem key={id} value={sigla}>
                                    {nome}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      </div>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name='shiftValue'
                    render={({ field }) => (
                      <FormItem className='w-full'>
                        <FormLabel>Preço por Hora (R$)</FormLabel>
                        <FormControl>
                          <Input
                            type='number'
                            step='10.00'
                            max='1000.00'
                            min='10.00'
                            {...field}
                            onChange={(e) =>
                              field.onChange(
                                parseFloat(e.target.value.replace(',', '.'))
                              )
                            }
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name='services'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Serviços Oferecidos</FormLabel>
                      <FormControl>
                        <MultiSelect
                          options={servicesOptions}
                          selectedValues={watchServices}
                          {...field}
                          onChange={(e) => {
                            field.onChange(e);
                          }}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <Divider />
            </>
          )}

          {!isBackofficeRegister && (
            <>
              {/* Endereço */}
              <h2 className='text-xl font-semibold'>Endereço</h2>
              <div className='grid grid-cols-3 grid-rows-3 gap-4'>
                <FormField
                  control={form.control}
                  name='address.zipCode'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>CEP</FormLabel>
                      <FormControl>
                        <Input
                          placeholder='CEP'
                          maxLength={9}
                          {...field}
                          onChange={({ target: { value } }) => {
                            field.onChange(formatCep(value));
                            if (value.length === 9) {
                              handleCepChange(value);
                            }
                          }}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name='address.street'
                  render={({ field }) => (
                    <FormItem className='col-span-2'>
                      <FormLabel>Rua</FormLabel>
                      <FormControl>
                        <Input placeholder='Rua' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name='address.complement'
                  render={({ field }) => (
                    <FormItem className='col-span-2 row-start-2'>
                      <FormLabel>Complemento</FormLabel>
                      <FormControl>
                        <Input placeholder='Complemento' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name='address.number'
                  render={({ field }) => (
                    <FormItem className='col-start-3 row-start-2'>
                      <FormLabel>Número</FormLabel>
                      <FormControl>
                        <Input placeholder='Número' type='number' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name='address.neighborhood'
                  render={({ field }) => (
                    <FormItem className='row-start-3'>
                      <FormLabel>Bairro</FormLabel>
                      <FormControl>
                        <Input placeholder='Bairro' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name='address.state'
                  render={({ field }) => (
                    <FormItem className='row-start-3'>
                      <FormLabel>Estado</FormLabel>
                      <Select
                        onValueChange={(value) => field.onChange(value)}
                        value={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder='Estado' />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {states.map(({ id, nome, sigla }) => (
                            <SelectItem key={id} value={sigla}>
                              {nome}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name='address.city'
                  render={({ field }) => (
                    <FormItem className='row-start-3'>
                      <FormLabel>Cidade</FormLabel>
                      <FormControl>
                        <Select
                          onValueChange={(value) => field.onChange(value)}
                          value={watchCity}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder='Cidade' />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {filteredCities.map((city) => (
                              <SelectItem key={city.id} value={city.nome}>
                                {city.nome}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <Divider />
            </>
          )}
          {isProfessionalRegister && (
            <>
              {/* Disponibilidade */}
              <div className='space-y-4'>
                <div className='flex justify-between'>
                  <h2 className='text-xl font-semibold'>Disponibilidade</h2>

                  <Tooltip>
                    <TooltipTrigger
                      type='button'
                      className='flex items-center justify-center w-8 h-8 bg-brand-200 rounded-full'
                      onClick={() =>
                        appendAvailability({
                          dayOfWeek: 'MONDAY',
                          startTime: '',
                          endTime: '',
                        })
                      }
                    >
                      <PlusIcon className='h-4 w-4' />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Adicionar Disponibilidade</p>
                    </TooltipContent>
                  </Tooltip>
                </div>

                {availabilityFields.map((field, index) => (
                  <div
                    key={field.id}
                    className='flex w-full items-center gap-4 '
                  >
                    <FormField
                      control={form.control}
                      name={`availability.${index}.dayOfWeek`}
                      render={({ field }) => (
                        <FormItem className='w-full'>
                          <FormLabel>Dia da Semana</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder='Selecione o dia' />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {DaysOfWeek.map((day) => (
                                <SelectItem key={day} value={day}>
                                  {crossDaysOfWeek[day]}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name={`availability.${index}.startTime`}
                      render={({ field }) => (
                        <FormItem className='min-w-24 '>
                          <FormLabel>Hora de Início</FormLabel>
                          <FormControl>
                            <Input type='time' {...field} />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name={`availability.${index}.endTime`}
                      render={({ field }) => (
                        <FormItem className='min-w-24'>
                          <FormLabel>Hora de Fim</FormLabel>
                          <FormControl>
                            <Input type='time' {...field} />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    {availabilityFields.length > 1 && (
                      <Button
                        type='button'
                        variant='outline'
                        onClick={() => removeAvailability(index)}
                      >
                        <TrashIcon className='h-4 w-4 text-red-700' />
                      </Button>
                    )}
                  </div>
                ))}
              </div>

              <Divider />

              {/* Certificações */}
              <div className='space-y-4'>
                <div className='flex justify-between'>
                  <h2 className='text-xl font-semibold'>Certificações</h2>
                  <Tooltip>
                    <TooltipTrigger
                      type='button'
                      className='flex items-center justify-center w-8 h-8 bg-brand-200 rounded-full'
                      onClick={() =>
                        appendCertification({
                          name: '',
                          type: 'COURSE',
                          institution: '',
                          completionDate: new Date()
                            .toISOString()
                            .split('T')[0],
                        })
                      }
                    >
                      <PlusIcon className='h-4 w-4' />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Adicionar Certificação</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
                {certificationFields.map((field, index) => (
                  <div key={field.id} className='flex gap-4'>
                    <FormField
                      control={form.control}
                      name={`certification.${index}.name`}
                      render={({ field }) => (
                        <FormItem className='flex-grow'>
                          <FormLabel>Nome da Certificação</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name={`certification.${index}.type`}
                      render={({ field }) => (
                        <FormItem className='flex-grow'>
                          <FormLabel>Tipo</FormLabel>
                          <FormControl>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder='Selecione o tipo' />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {CertificationTypes.map((type) => (
                                  <SelectItem key={type} value={type}>
                                    {crossCertificationTypes[type]}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name={`certification.${index}.institution`}
                      render={({ field }) => (
                        <FormItem className='flex-grow'>
                          <FormLabel>Instituição</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name={`certification.${index}.completionDate`}
                      render={({ field }) => (
                        <FormItem className='w-36'>
                          <FormLabel>Completo em:</FormLabel>
                          <FormControl>
                            <Input
                              type='date'
                              {...field}
                              max={new Date().toISOString().split('T')[0]}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    {certificationFields.length > 1 && (
                      <Button
                        type='button'
                        variant='outline'
                        className='flex mt-auto'
                        onClick={() => removeCertification(index)}
                      >
                        <TrashIcon className='h-4 w-4 text-red-700' />
                      </Button>
                    )}
                  </div>
                ))}
              </div>
            </>
          )}

          {/* CONTATO */}
          <div className='space-y-4'>
            <div className='flex justify-between'>
              <h2 className='text-xl font-semibold'>Informações de Contato</h2>
              <Tooltip>
                <TooltipTrigger
                  type='button'
                  className='flex items-center justify-center w-8 h-8 bg-brand-200 rounded-full'
                  onClick={() => appendContact({ type: 'PHONE', value: '' })}
                >
                  <PlusIcon className='h-4 w-4' />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Adicionar Contato</p>
                </TooltipContent>
              </Tooltip>
            </div>

            {contactFields.map((field, index) => (
              <div key={field.id} className='flex gap-4'>
                <FormField
                  control={form.control}
                  name={`contacts.${index}.type`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Tipo de Contato</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder='Selecione o tipo' />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {ContactTypes.map((type) => (
                            <SelectItem key={type} value={type}>
                              {crossContactName[type]}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name={`contacts.${index}.value`}
                  render={({ field }) => (
                    <FormItem className='flex-grow'>
                      <FormLabel>Valor do Contato</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {contactFields.length > 1 && (
                  <Button
                    type='button'
                    variant='outline'
                    onClick={() => removeContact(index)}
                  >
                    <TrashIcon className='h-4 w-4 text-red-700' />
                  </Button>
                )}
              </div>
            ))}
          </div>

          <Divider />

          <div className='flex justify-end'>
            <Button type='submit' variant={'brand'} disabled={isSubmitting}>
              {isSubmitting ? 'Enviando...' : 'Cadastrar'}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
