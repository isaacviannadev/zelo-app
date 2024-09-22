import { getAllCities, getStates } from '@/api/address';
import CreateProfileForm from '@/components/forms/register-professional';
import {
  ArchiveIcon,
  BarChartIcon,
  BriefcaseIcon,
  CircleCheckIcon,
  DeleteIcon,
  EyeIcon,
  ListIcon,
  PieChartIcon,
  PlusIcon,
  UserPlusIcon,
  UserRoundCheck,
  UserXIcon,
  UsersIcon,
} from '@/components/icons';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Textarea } from '@/components/ui/textarea';
import { City, State } from '@/types';

import Link from 'next/link';

export default async function AdminArea() {
  const states: State[] = await getStates();
  const cities: City[] = await getAllCities();

  return (
    <div className='min-h-screen bg-gray-100 flex flex-col dark:bg-gray-900'>
      <main className='flex-1 flex '>
        <aside className='bg-white border-r w-64 py-6 shrink-0 dark:bg-gray-800 relative'>
          <div className='px-4 space-y-4 sticky top-4'>
            <div>
              <h2 className='text-xs font-semibold text-gray-500 uppercase tracking-wide dark:text-gray-400'>
                Gerenciar
              </h2>
              <div className='mt-3 space-y-2'>
                <Link
                  className='flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors dark:text-gray-300 dark:hover:text-gray-100'
                  href='#novo-profissional'
                >
                  <UserPlusIcon className='h-4 w-4' />
                  Novo Cuidador
                </Link>
                <Link
                  className='flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors dark:text-gray-300 dark:hover:text-gray-100'
                  href='#cuidadores'
                >
                  <UserRoundCheck className='h-4 w-4' />
                  Verificar Cuidadores
                </Link>
                <Link
                  className='flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors dark:text-gray-300 dark:hover:text-gray-100'
                  href='#nova-vaga'
                >
                  <PlusIcon className='h-4 w-4' />
                  Nova vaga
                </Link>
                <Link
                  className='flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors dark:text-gray-300 dark:hover:text-gray-100'
                  href='#ver-vagas'
                >
                  <ListIcon className='h-4 w-4' />
                  Todas as vagas
                </Link>
              </div>
            </div>
            <div>
              <h2 className='text-xs font-semibold text-gray-500 uppercase tracking-wide dark:text-gray-400'>
                Relatórios
              </h2>
              <div className='mt-3 space-y-2'>
                <Link
                  className='flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors dark:text-gray-300 dark:hover:text-gray-100'
                  href='#'
                >
                  <BarChartIcon className='h-4 w-4' />
                  Visão geral
                </Link>
                <Link
                  className='flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors dark:text-gray-300 dark:hover:text-gray-100'
                  href='#'
                >
                  <PieChartIcon className='h-4 w-4' />
                  Análise de vagas
                </Link>
              </div>
            </div>
          </div>
        </aside>
        <div className='flex-1 p-6 '>
          <div className='mb-6 grid gap-6 md:grid-cols-2 xl:grid-cols-4'>
            <Card>
              <CardHeader>
                <CardTitle>Vagas ativas</CardTitle>
                <CardDescription>
                  Número de vagas atualmente abertas
                </CardDescription>
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
          <div className='grid gap-6'>
            <Card id='#novo-profissional'>
              <CardHeader className='flex justify-between'>
                <CardTitle> Cadastro de Profissionais Cuidadores</CardTitle>
                <CardDescription>
                  Preencha os dados para cadastrar um novo cuidador.
                </CardDescription>
              </CardHeader>

              <CreateProfileForm states={states} cities={cities} />
            </Card>

            <Card id='#cuidadores'>
              <CardHeader className='flex justify-between'>
                <CardTitle className='flex justify-between'>
                  Cuidadores
                  <Button size='sm' variant='outline'>
                    Aprovar novos
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Nome</TableHead>
                      <TableHead>Cidade</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Ações</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>
                        <div className='flex items-center gap-2'>
                          <Avatar>
                            <AvatarImage
                              alt='Avatar'
                              src='/placeholder-avatar.jpg'
                            />
                            <AvatarFallback>MS</AvatarFallback>
                          </Avatar>
                          <span>Maria Silva</span>
                        </div>
                      </TableCell>
                      <TableCell>São Paulo, SP</TableCell>
                      <TableCell>
                        <Badge variant='success'>Ativo</Badge>
                      </TableCell>
                      <TableCell>
                        <div className='flex items-center gap-2'>
                          <Button size='sm' variant='ghost'>
                            <EyeIcon className='h-4 w-4' />
                            <span className='sr-only'>Visualizar</span>
                          </Button>
                          <Button size='sm' variant='ghost'>
                            <UserXIcon className='h-4 w-4' />
                            <span className='sr-only'>Desativar</span>
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            <Card id='#nova-vaga'>
              <CardHeader className='flex justify-between'>
                <CardTitle>Nova vaga</CardTitle>
              </CardHeader>
              <CardContent>
                <form className='space-y-4'>
                  <div>
                    <Label htmlFor='title'>Título</Label>
                    <Input id='title' placeholder='Ex: Cuidador de idosos' />
                  </div>
                  <div>
                    <Label htmlFor='description'>Descrição</Label>
                    <Textarea
                      id='description'
                      placeholder='Descreva as responsabilidades e requisitos da vaga'
                      rows={4}
                    />
                  </div>
                  <div className='grid gap-4 md:grid-cols-2'>
                    <div>
                      <Label htmlFor='salary'>Salário</Label>
                      <Input id='salary' placeholder='Ex: 2500' type='number' />
                    </div>
                    <div>
                      <Label htmlFor='location'>Localização</Label>
                      <Input id='location' placeholder='Ex: São Paulo, SP' />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor='requirements'>Requisitos</Label>
                    <Textarea
                      id='requirements'
                      placeholder='Liste os requisitos necessários para a vaga'
                      rows={3}
                    />
                  </div>
                  <div className='flex justify-end'>
                    <Button>Publicar vaga</Button>
                  </div>
                </form>
              </CardContent>
            </Card>

            <Card id='#ver-vagas'>
              <CardHeader className='flex justify-between'>
                <CardTitle className='flex justify-between'>
                  Vagas existentes{' '}
                  <Button size='sm' variant='outline'>
                    Arquivar vagas
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Título</TableHead>
                      <TableHead>Localização</TableHead>
                      <TableHead>Salário</TableHead>
                      <TableHead>Ações</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>Cuidador de idosos</TableCell>
                      <TableCell>São Paulo, SP</TableCell>
                      <TableCell>R$ 2.500</TableCell>
                      <TableCell>
                        <div className='flex items-center gap-2'>
                          <Button size='sm' variant='ghost'>
                            <DeleteIcon className='h-4 w-4' />
                            <span className='sr-only'>Editar</span>
                          </Button>
                          <Button size='sm' variant='ghost'>
                            <ArchiveIcon className='h-4 w-4' />
                            <span className='sr-only'>Arquivar</span>
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
