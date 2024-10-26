// components/AddressForm.tsx

import { getAddressByCep } from '@/api/address';
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
import { City, State } from '@/types';
import { formatCep } from '@/utils/formatters';
import { useEffect, useState } from 'react';

type AddressFormProps = {
  control: any;
  states: State[];
  cities: City[];
  watchState: string;
  watchCity: string;
  setValue: any;
};

export default function AddressForm({
  control,
  states,
  cities,
  watchState,
  watchCity,
  setValue,
}: AddressFormProps) {
  const [filteredCities, setFilteredCities] = useState<City[]>([]);
  const [cepCity, setCepCity] = useState<string | null>(null);

  const handleCepChange = async (cep: string) => {
    if (cep.length < 9) return;
    const cepWithoutHyphen = cep.replace('-', '');
    const address = await getAddressByCep(cepWithoutHyphen);

    if (address.erro) {
      alert('CEP não encontrado. Por favor, verifique o CEP informado.');
      return;
    }

    setValue('address.street', address.logradouro);
    setValue('address.neighborhood', address.bairro);
    setValue('address.state', address.uf);

    setCepCity(address.localidade);
    setValue('address.city', address.localidade);
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
          setValue('address.city', matchingCity.nome);
          setCepCity(null);
        }
      }
    }
  }, [watchState, cepCity, cities, setValue]);

  return (
    <>
      <h2 className='text-xl font-semibold'>Endereço</h2>
      <div className='grid grid-cols-3 grid-rows-3 gap-4'>
        <FormField
          control={control}
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
          control={control}
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
          control={control}
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
          control={control}
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
          control={control}
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
          control={control}
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
          control={control}
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
    </>
  );
}
