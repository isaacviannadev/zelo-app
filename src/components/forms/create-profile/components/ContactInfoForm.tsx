// components/ContactInfoForm.tsx

import { PlusIcon } from '@/components/icons';
import { Button } from '@/components/ui/button';
import {
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
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { phoneNumberMask } from '@/utils/phoneNumberMask';
import { TrashIcon } from 'lucide-react';
import { useFieldArray } from 'react-hook-form';
import { ContactTypes, crossContactName } from '../__mocks__';

type ContactInfoFormProps = {
  control: any;
  watch: any;
};

export default function ContactInfoForm({
  control,
  watch,
}: ContactInfoFormProps) {
  const {
    fields: contactFields,
    append: appendContact,
    remove: removeContact,
  } = useFieldArray({
    control,
    name: 'contacts',
  });

  return (
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

      {contactFields.map((field, index) => {
        const contactType = watch(`contacts.${index}.type`);

        return (
          <div key={field.id} className='flex w-full items-start gap-4 '>
            <FormField
              control={control}
              name={`contacts.${index}.type`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tipo de Contato</FormLabel>
                  <Select
                    onValueChange={(value) => {
                      field.onChange(value);
                      control.setValue(`contacts.${index}.value`, '');
                      control.clearErrors(`contacts.${index}.value`);
                    }}
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
              control={control}
              name={`contacts.${index}.value`}
              render={({ field }) => (
                <FormItem className='flex-grow'>
                  <FormLabel>Valor do Contato</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      onChange={({ target: { value } }) => {
                        if (contactType !== 'EMAIL')
                          return field.onChange(phoneNumberMask(value));

                        field.onChange(value);
                      }}
                      type={contactType === 'EMAIL' ? 'email' : 'tel'}
                      placeholder={
                        contactType === 'EMAIL'
                          ? 'email@email.com'
                          : '(00) 00000-0000'
                      }
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {contactFields.length > 1 && (
              <Button
                type='button'
                variant='outline'
                className='flex mt-8'
                onClick={() => removeContact(index)}
              >
                <TrashIcon className='h-4 w-4 text-red-700' />
              </Button>
            )}
          </div>
        );
      })}
    </div>
  );
}
