import {
  CalendarIcon,
  MessageCircleIcon,
  UserPlusIcon,
  UsersIcon,
} from '@/components/icons';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function Dashboard() {
  return (
    <main className='flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10'>
      <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
        <Card>
          <CardHeader className='flex flex-row items-center justify-between pb-2 space-y-0'>
            <CardTitle className='text-sm font-medium'>
              Cuidados Realizados
            </CardTitle>
            <UsersIcon className='w-4 h-4 text-gray-500 dark:text-gray-400' />
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold'>321</div>
            <p className='text-xs text-gray-500 dark:text-gray-400'>
              +10 desde o último mês
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className='flex flex-row items-center justify-between pb-2 space-y-0'>
            <CardTitle className='text-sm font-medium'>
              Agendamentos Ativos
            </CardTitle>
            <CalendarIcon className='w-4 h-4 text-gray-500 dark:text-gray-400' />
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold'>12</div>
            <p className='text-xs text-gray-500 dark:text-gray-400'>
              +4 desde a última semana
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className='flex flex-row items-center justify-between pb-2 space-y-0'>
            <CardTitle className='text-sm font-medium'>
              Mensagens não lidas
            </CardTitle>
            <MessageCircleIcon className='w-4 h-4 text-gray-500 dark:text-gray-400' />
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold'>3</div>
            <p className='text-xs text-gray-500 dark:text-gray-400'>
              +2 desde seu último login
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className='flex flex-row items-center justify-between pb-2 space-y-0'>
            <CardTitle className='text-sm font-medium'>
              Visualização de perfil
            </CardTitle>
            <UserPlusIcon className='w-4 h-4 text-gray-500 dark:text-gray-400' />
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold'>487</div>
            <p className='text-xs text-gray-500 dark:text-gray-400'>
              16 visualizações hoje
            </p>
          </CardContent>
        </Card>
      </div>
      <div className='grid gap-4 md:grid-cols-2'>
        <Card>
          <CardHeader>
            <CardTitle>Perfis de Cuidadores</CardTitle>
          </CardHeader>
          <CardContent>
            <div className='grid gap-4'>
              <div className='flex items-center gap-4'>
                <Avatar>
                  <AvatarImage alt='Avatar' src='/placeholder-avatar.jpg' />
                  <AvatarFallback>GV</AvatarFallback>
                </Avatar>
                <div>
                  <h4 className='font-semibold'>Geiza Vianna</h4>
                  <p className='text-sm text-gray-500 dark:text-gray-400'>
                    Assistente de enfermagem certificada
                  </p>
                </div>
              </div>
              <div className='flex items-center gap-4'>
                <Avatar>
                  <AvatarImage alt='Avatar' src='/placeholder-avatar.jpg' />
                  <AvatarFallback>ES</AvatarFallback>
                </Avatar>
                <div>
                  <h4 className='font-semibold'>Eliza Saraiva</h4>
                  <p className='text-sm text-gray-500 dark:text-gray-400'>
                    Auxiliar de saúde domiciliar
                  </p>
                </div>
              </div>
              <div className='flex items-center gap-4'>
                <Avatar>
                  <AvatarImage alt='Avatar' src='/placeholder-avatar.jpg' />
                  <AvatarFallback>VG</AvatarFallback>
                </Avatar>
                <div>
                  <h4 className='font-semibold'>Vera Gusmão</h4>
                  <p className='text-sm text-gray-500 dark:text-gray-400'>
                    Enfermeira Registrada
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Mensagens Recebidas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className='grid gap-4'>
              <div className='flex items-start gap-4'>
                <Avatar>
                  <AvatarImage alt='Avatar' src='/placeholder-avatar.jpg' />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div>
                  <h4 className='font-semibold'>Janete Damasceno</h4>
                  <p className='text-sm text-gray-500 dark:text-gray-400'>
                    Pode me confirmar se consegue antecipar o horário de amanhã
                    para às 10h?
                  </p>
                </div>
              </div>
              <div className='flex items-start gap-4'>
                <Avatar>
                  <AvatarImage alt='Avatar' src='/placeholder-avatar.jpg' />
                  <AvatarFallback>AA</AvatarFallback>
                </Avatar>
                <div>
                  <h4 className='font-semibold'>Amanda Alves</h4>
                  <p className='text-sm text-gray-500 dark:text-gray-400'>
                    Olá, Gostaria de saber se vocês têm disponibilidade para o
                    dia 15 de outubro.
                  </p>
                </div>
              </div>
              <div className='flex items-start gap-4'>
                <Avatar>
                  <AvatarImage alt='Avatar' src='/placeholder-avatar.jpg' />
                  <AvatarFallback>SG</AvatarFallback>
                </Avatar>
                <div>
                  <h4 className='font-semibold'>Sarah Gomes</h4>
                  <p className='text-sm text-gray-500 dark:text-gray-400'>
                    Obrigada pelo atendimento de ontem. Foi excelente.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant={'brand'}>Enviar mensagem</Button>
          </CardFooter>
        </Card>
      </div>
    </main>
  );
}
