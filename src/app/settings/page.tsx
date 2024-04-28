import { AtSignIcon, BellIcon, EyeOffIcon } from '@/components/icons';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';

export default function Settings() {
  return (
    <main className='flex min-h-[calc(100vh_-_theme(spacing.16))] bg-gray-100/40 flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10 dark:bg-gray-800/40 '>
      <div className='max-w-7xl w-full mx-auto grid gap-2 '>
        <h1 className='font-semibold text-3xl'>Configurações da Conta</h1>
      </div>
      <div className='grid md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr] items-start gap-6 max-w-7xl w-full mx-auto '>
        <nav className='text-sm text-gray-500 grid gap-4 dark:text-gray-400 sticky top-4 '>
          <Link
            className='font-semibold text-gray-900 dark:text-gray-50'
            href='#'
          >
            Perfil
          </Link>
          <Link href='#'>Disponibilidade</Link>
          <Link href='#'>Preferências</Link>
          <Link href='#'>Notificações</Link>
        </nav>
        <div className='grid gap-6'>
          <Card>
            <CardHeader>
              <CardTitle>Informações de Contato</CardTitle>
              <CardDescription>
                Atualize suas informações de contato.
              </CardDescription>
            </CardHeader>
            <CardContent className='space-y-4'>
              <div className='space-y-2'>
                <Label htmlFor='name'>Nome</Label>
                <Input id='name' placeholder='Digite seu nome' />
              </div>
              <div className='space-y-2'>
                <Label htmlFor='email'>Email</Label>
                <Input id='email' placeholder='Digite seu email' type='email' />
              </div>
              <div className='space-y-2'>
                <Label htmlFor='phone'>Telefone</Label>
                <Input id='phone' placeholder='Digite seu telefone' />
              </div>
            </CardContent>
            <CardFooter className='border-t p-6'>
              <Button variant={'brand'}>Salvar</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Disponibilidade</CardTitle>
              <CardDescription>
                Selecione os dias e horários que você está disponível para
                trabalhar.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className='grid gap-4'>
                <div>
                  <Label htmlFor='availability'>Disponibilidade</Label>
                  <div className='flex flex-wrap gap-2'>
                    <Button size='sm' variant='outline'>
                      Seg
                    </Button>
                    <Button size='sm' variant='outline'>
                      Ter
                    </Button>
                    <Button size='sm' variant='outline'>
                      Qua
                    </Button>
                    <Button size='sm' variant='outline'>
                      Qui
                    </Button>
                    <Button size='sm' variant='outline'>
                      Sex
                    </Button>
                    <Button size='sm' variant='outline'>
                      Sáb
                    </Button>
                    <Button size='sm' variant='outline'>
                      Dom
                    </Button>
                  </div>
                </div>
                <div>
                  <Label htmlFor='hours'>Horários</Label>
                  <div className='flex gap-2'>
                    <Input
                      className='max-w-[120px]'
                      id='start-time'
                      placeholder='Início'
                      type='time'
                    />
                    <span>-</span>
                    <Input
                      className='max-w-[120px]'
                      id='end-time'
                      placeholder='Fim'
                      type='time'
                    />
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className='border-t p-6'>
              <Button variant={'brand'}>Salvar</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Preferências</CardTitle>
              <CardDescription>
                Selecione suas preferências de trabalho.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className='grid gap-4'>
                <div>
                  <Label htmlFor='location'>Localização</Label>
                  <Input id='location' placeholder='Digite o endereço ou CEP' />
                </div>
                <div>
                  <Label htmlFor='radius'>Raio de Distância</Label>
                  <Input
                    id='radius'
                    placeholder='Digite a distância em km'
                    type='number'
                  />
                </div>
                <div>
                  <Label htmlFor='preferences'>Preferências</Label>
                  <div className='flex flex-wrap gap-2'>
                    <Button size='sm' variant='outline'>
                      Idosos Ativos
                    </Button>
                    <Button size='sm' variant='outline'>
                      Idosos com Demência
                    </Button>
                    <Button size='sm' variant='outline'>
                      Idosos Acamados
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className='border-t p-6'>
              <Button variant={'brand'}>Salvar</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Notificações</CardTitle>
              <CardDescription>
                Escolha o que você deseja ser notificado.
              </CardDescription>
            </CardHeader>
            <CardContent className='grid gap-1'>
              <div className='-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-gray-50'>
                <BellIcon className='mt-px h-5 w-5' />
                <div className='space-y-1'>
                  <p className='text-sm font-medium leading-none'>Tudo</p>
                  <p className='text-sm text-gray-500 dark:text-gray-400'>
                    Receber todas as notificações.
                  </p>
                </div>
              </div>
              <div className='-mx-2 flex items-start space-x-4 rounded-md bg-gray-100 p-2 text-gray-900 transition-all dark:bg-gray-800 dark:text-gray-50'>
                <AtSignIcon className='mt-px h-5 w-5' />
                <div className='space-y-1'>
                  <p className='text-sm font-medium leading-none'>Disponível</p>
                  <p className='text-sm text-gray-500 dark:text-gray-400'>
                    Apenas notificações de novas vagas.
                  </p>
                </div>
              </div>
              <div className='-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-gray-50'>
                <EyeOffIcon className='mt-px h-5 w-5' />
                <div className='space-y-1'>
                  <p className='text-sm font-medium leading-none'>Ignorando</p>
                  <p className='text-sm text-gray-500 dark:text-gray-400'>
                    Desativar todas as notificações.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
