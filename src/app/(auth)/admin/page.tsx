import {
  BriefcaseIcon,
  CircleCheckIcon,
  UserPlusIcon,
  UsersIcon,
} from '@/components/icons';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default async function AdminArea() {
  return (
    <div className='mb-6 grid gap-6 md:grid-cols-2 xl:grid-cols-4'>
      <Card>
        <CardHeader>
          <CardTitle>Vagas ativas</CardTitle>
          <CardDescription>Número de vagas atualmente abertas</CardDescription>
        </CardHeader>
        <CardContent className='flex items-center justify-between'>
          <div className='text-3xl font-bold'>27</div>
          <BriefcaseIcon className='h-8 w-8 text-gray-400' />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Cuidadores</CardTitle>
          <CardDescription>
            Número total de cuidadores cadastrados
          </CardDescription>
        </CardHeader>
        <CardContent className='flex items-center justify-between'>
          <div className='text-3xl font-bold'>158</div>
          <UsersIcon className='h-8 w-8 text-gray-400' />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Vagas preenchidas</CardTitle>
          <CardDescription>
            Vagas que foram preenchidas recentemente
          </CardDescription>
        </CardHeader>
        <CardContent className='flex items-center justify-between'>
          <div className='text-3xl font-bold'>14</div>
          <CircleCheckIcon className='h-8 w-8 text-green-500' />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Novos cadastros</CardTitle>
          <CardDescription>
            Novos cuidadores cadastrados nos últimos 7 dias
          </CardDescription>
        </CardHeader>
        <CardContent className='flex items-center justify-between'>
          <div className='text-3xl font-bold'>9</div>
          <UserPlusIcon className='h-8 w-8 text-blue-500' />
        </CardContent>
      </Card>
    </div>
  );
}
