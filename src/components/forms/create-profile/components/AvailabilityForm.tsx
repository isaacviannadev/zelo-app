// components/AvailabilityForm.tsx

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
import { DaysOfWeek, crossDaysOfWeek } from '../__mocks__';

type AvailabilityFormProps = {
  control: any;
};

export default function AvailabilityForm({ control }: AvailabilityFormProps) {
  const {
    fields: availabilityFields,
    append: appendAvailability,
    remove: removeAvailability,
  } = useFieldArray({
    control,
    name: 'availability',
  });

  return (
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
            control={control}
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
            control={control}
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
            control={control}
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
              className='flex mt-8'
              onClick={() => removeAvailability(index)}
            >
              <TrashIcon className='h-4 w-4 text-red-700' />
            </Button>
          )}
        </div>
      ))}
    </div>
  );
}
