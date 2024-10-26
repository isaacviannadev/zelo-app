import { getAllCities, getStates } from '@/api/address';
import CreateProfileForm from '@/components/forms/create-profile';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { City, State } from '@/types';

export async function Professionals() {
  const states: State[] = await getStates();
  const cities: City[] = await getAllCities();

  return (
    <div className='grid gap-6'>
      <Card id='novo-perfil'>
        <CardHeader className='flex justify-between'>
          <CardTitle> Cadastro de Perfil</CardTitle>
        </CardHeader>

        <CreateProfileForm
          states={states}
          cities={cities}
          profile='PROFESSIONAL'
        />
      </Card>
    </div>
  );
}

export default Professionals;
