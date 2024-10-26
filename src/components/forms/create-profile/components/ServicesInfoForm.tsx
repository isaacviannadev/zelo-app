import MultiSelect from '@/components/multiselect';
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
import { servicesOptions } from '@/mocks/services';
import { State } from '@/types';
import { HealthcareRole, crossHealthcareRole } from '../__mocks__';

type ServicesInfoFormProps = {
  control: any;
  states: State[];
  watchServices: any;
};

export default function ServicesInfoForm({
  control,
  states,
  watchServices,
}: ServicesInfoFormProps) {
  return (
    <div className='space-y-4'>
      <h2 className='text-xl font-semibold'>Informação de Serviços</h2>
      <div className='flex w-full gap-4'>
        <FormField
          control={control}
          name='specialty'
          render={({ field }) => (
            <FormItem className='w-full'>
              <FormLabel>Especialidade</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
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
          control={control}
          name='workingArea'
          render={({ field }) => (
            <FormItem className='w-full'>
              <FormLabel>Área de Atuação</FormLabel>
              <Select onValueChange={(value) => field.onChange([value])}>
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
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
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
                    field.onChange(parseFloat(e.target.value.replace(',', '.')))
                  }
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <FormField
        control={control}
        name='services'
        render={({ field }) => (
          <FormItem>
            <FormLabel>Serviços Oferecidos</FormLabel>
            <FormControl>
              <MultiSelect
                options={servicesOptions}
                selectedValues={watchServices}
                {...field}
                onChange={(e) => field.onChange(e)}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}
