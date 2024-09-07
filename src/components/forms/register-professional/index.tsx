'use client';

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
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { zodResolver } from '@hookform/resolvers/zod';
import { TrashIcon } from 'lucide-react';
import { useState } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import { z } from 'zod';
import {
  BrazilianState,
  ContactTypes,
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

export default function CaregiverRegistration() {
  const [isSubmitting, setIsSubmitting] = useState(false);

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
      address: { street: '', city: '', state: 'SP', zipCode: '' },
      contacts: [{ type: 'PHONE', value: '' }],
      specialty: 'CAREGIVER',
      profileType: 'PROFESSIONAL',
      availability: [{ dayOfWeek: 'MONDAY', startTime: '', endTime: '' }],
      certification: [
        { name: '', institution: '', year: new Date().getFullYear() },
      ],
    },
  });

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

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    try {
      await submitFormData(data);
      alert('Cadastro realizado com sucesso!');
    } catch (error) {
      console.error('Erro ao enviar dados:', error);
      alert('Erro ao realizar cadastro. Por favor, tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className='mx-auto p-6'>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
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

            <div className='grid grid-cols-2 gap-4'>
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
            </div>
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
                          {gender}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Divider />

          {/* SERVIÇOS */}
          <div className='space-y-4'>
            <h2 className='text-xl font-semibold'>Informação de Serviços </h2>
            <div className='flex w-full gap-4'>
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
                                  field.onChange({
                                    ...field.value,
                                    state: value,
                                  })
                                }
                              >
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder='Estado' />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {BrazilianState.map((state) => (
                                    <SelectItem key={state} value={state}>
                                      {state}
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
                  <FormItem>
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

          {/* Endereço */}
          <div className='space-y-4'>
            <h2 className='text-xl font-semibold'>Endereço</h2>

            <FormField
              control={form.control}
              name='address'
              render={({ field }) => (
                <FormItem>
                  <div className='flex gap-4'>
                    <div className='flex-1'>
                      <FormLabel>CEP</FormLabel>
                      <Input
                        placeholder='CEP'
                        {...field}
                        value={field.value.zipCode}
                        className='w-40'
                        onChange={(e) =>
                          field.onChange({
                            ...field.value,
                            zipCode: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className='w-full'>
                      <FormLabel>Rua</FormLabel>
                      <Input
                        placeholder='Rua'
                        {...field}
                        value={field.value.street}
                        onChange={(e) =>
                          field.onChange({
                            ...field.value,
                            street: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                  <div className='flex gap-4'>
                    <div className='w-1/3'>
                      <FormLabel>Cidade</FormLabel>
                      <Input
                        placeholder='Cidade'
                        {...field}
                        value={field.value.city}
                        onChange={(e) =>
                          field.onChange({
                            ...field.value,
                            city: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className='w-full'>
                      <FormLabel>Estado</FormLabel>

                      <Select
                        onValueChange={(value) =>
                          field.onChange({ ...field.value, state: value })
                        }
                        defaultValue={field.value.state}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder='Estado' />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {BrazilianState.map((state) => (
                            <SelectItem key={state} value={state}>
                              {state}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Divider />

          {/* Contatos */}
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
                  <p> Adicionar Contato</p>
                </TooltipContent>
              </Tooltip>
            </div>

            {contactFields.map((field, index) => (
              <div key={field.id} className='flex items-end gap-2'>
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
                              {type}
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

          {/* Informações Profissionais */}

          <div className='space-y-4'>
            <h2 className='text-xl font-semibold'>Informações Profissionais</h2>

            <div className='flex gap-4'>
              <FormField
                control={form.control}
                name='specialty'
                render={({ field }) => (
                  <FormItem className='w-1/3'>
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
                            {role}
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
                name='profileType'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tipo de Perfil</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className='flex items-center'
                      >
                        {ProfileTypes.map((type) => (
                          <FormItem
                            key={type}
                            className='flex items-center space-x-3 space-y-0'
                          >
                            <FormControl>
                              <RadioGroupItem value={type} />
                            </FormControl>
                            <FormLabel className='font-normal'>
                              {type}
                            </FormLabel>
                          </FormItem>
                        ))}
                      </RadioGroup>
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <Divider />

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
              <div key={field.id} className='flex w-full items-center gap-4 '>
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
                              {day}
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

          <div className='flex  justify-end'>
            <Button type='submit' disabled={isSubmitting}>
              {isSubmitting ? 'Enviando...' : 'Cadastrar'}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
