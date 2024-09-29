'use client';

import { getAddressByCep } from '@/api/address';
import { PlusIcon } from '@/components/icons';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
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
import { Textarea } from '@/components/ui/textarea';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { City, ProfileType, State } from '@/types';
import { formatCep } from '@/utils/formatters';
import { zodResolver } from '@hookform/resolvers/zod';
import { TrashIcon } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import { z } from 'zod';
import {
  ContactTypes,
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
import Divider from './components/Divider';
import { formSchema } from './utils/formSchema';

type FormValues = z.infer<typeof formSchema>;

const submitFormData = async (data: FormValues) => {
  console.log('Dados enviados:', data);
  return new Promise((resolve) =>
    setTimeout(() => resolve({ success: true }), 1000)
  );
};

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

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      gender: 'MALE',
      actionArea: [],
      services: [],
      chargePrice: 0,
      fullName: '',
      email: '',
      birthDate: '',
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
        { name: '', institution: '', year: new Date().getFullYear() },
      ],
    },
  });

  const watchState = form.watch('address.state');
  const watchCity = form.watch('address.city');
  const watchProfileType = form.watch('profileType');

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

      // Se houver uma cidade salva (proveniente do CEP), tenta selecioná-la
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
    const result = formSchema.safeParse(data);

    if (!result.success) {
      console.log(result.error);
    } else {
      console.log('Validação bem-sucedida:', result.data);
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
                      <Input type='date' {...field} />
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
                    name='actionArea'
                    render={() => (
                      <FormItem className='w-full'>
                        <FormLabel>Área de Atuação</FormLabel>
                        <FormField
                          control={form.control}
                          name='actionArea'
                          render={({ field }) => {
                            return (
                              <FormItem className='flex flex-row items-start space-x-3 space-y-0'>
                                <FormControl>
                                  <Select
                                    onValueChange={(value) =>
                                      field.onChange([value])
                                    }
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
                              </FormItem>
                            );
                          }}
                        />
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name='chargePrice'
                    render={({ field }) => (
                      <FormItem className='w-full'>
                        <FormLabel>Preço por Hora (R$)</FormLabel>
                        <FormControl>
                          <Input
                            type='number'
                            step='0.01'
                            {...field}
                            onChange={(e) =>
                              field.onChange(parseFloat(e.target.value))
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
                        <Textarea
                          placeholder='Liste os serviços oferecidos, separados por vírgula'
                          {...field}
                          onChange={(e) =>
                            field.onChange(
                              e.target.value.split(',').map((s) => s.trim())
                            )
                          }
                        />
                      </FormControl>
                      <FormDescription>
                        Ex: Cuidados básicos, Administração de medicamentos,
                        Acompanhamento em consultas
                      </FormDescription>
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
                        <FormItem className='w-2/3'>
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
                    <div className='flex items-end gap-4'>
                      <FormField
                        control={form.control}
                        name={`availability.${index}.startTime`}
                        render={({ field }) => (
                          <FormItem className='flex-grow'>
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
                          <FormItem className='flex-grow'>
                            <FormLabel>Hora de Término</FormLabel>
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
                          institution: '',
                          year: new Date().getFullYear(),
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
                  <div key={field.id} className='flex items-end gap-4'>
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
                      name={`certification.${index}.year`}
                      render={({ field }) => (
                        <FormItem className='w-36'>
                          <FormLabel>Ano</FormLabel>
                          <FormControl>
                            <Input
                              type='number'
                              {...field}
                              onChange={(e) =>
                                field.onChange(parseInt(e.target.value))
                              }
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    {certificationFields.length > 1 && (
                      <Button
                        type='button'
                        variant='outline'
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
              <div key={field.id} className='flex items-end gap-4'>
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
