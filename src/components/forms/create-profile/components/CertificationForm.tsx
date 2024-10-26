// components/CertificationForm.tsx

import { PlusIcon } from '@/components/icons';
import { Button } from '@/components/ui/button';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
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
import { TrashIcon } from 'lucide-react';
import { useFieldArray } from 'react-hook-form';
import { CertificationTypes, crossCertificationTypes } from '../__mocks__';

type CertificationFormProps = {
  control: any;
};

export default function CertificationForm({ control }: CertificationFormProps) {
  const {
    fields: certificationFields,
    append: appendCertification,
    remove: removeCertification,
  } = useFieldArray({
    control,
    name: 'certification',
  });

  return (
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
                completionDate: new Date().toISOString().split('T')[0],
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
            control={control}
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
            control={control}
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
            control={control}
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
            control={control}
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
  );
}
