import { getAllCities, getStates } from '@/api/address';
import CreateProfileForm from '@/components/forms/create-profile';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { City, State } from '@/types';

async function Customers() {
  const states: State[] = await getStates();
  const cities: City[] = await getAllCities();

  return (
    <div className='grid gap-6'>
      <Card id='novo-perfil'>
        <CardHeader className='flex justify-between'>
          <CardTitle>Cadastro de Clientes</CardTitle>
        </CardHeader>

        <CreateProfileForm states={states} cities={cities} profile='CUSTOMER' />
      </Card>
    </div>
  );
}

export default Customers;
