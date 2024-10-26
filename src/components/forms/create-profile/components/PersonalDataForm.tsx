// components/PersonalDataForm.tsx

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
import { EnumGender, crossGenderName } from '../__mocks__';

type PersonalDataFormProps = {
  control: any;
};

export default function PersonalDataForm({ control }: PersonalDataFormProps) {
  return (
    <div className='space-y-4'>
      <h2 className='text-xl font-semibold'>Dados Pessoais</h2>

      <FormField
        control={control}
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
          control={control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type='email' placeholder='joao@exemplo.com' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
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
          control={control}
          name='gender'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Gênero</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
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
  );
}
