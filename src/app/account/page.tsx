import { AwardIcon, StarIcon } from '@/components/icons';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';

export default function Account() {
  return (
    <main className='flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10'>
      <div className='grid gap-4 lg:grid-cols-[1fr_400px]'>
        <div className='flex flex-col gap-4'>
          <Card>
            <CardHeader>
              <div className='flex items-center gap-4'>
                <Avatar className='h-16 w-16'>
                  <AvatarImage alt='@username' src='/placeholder-avatar.jpg' />
                  <AvatarFallback>IS</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle>Isaac Santos</CardTitle>
                  <p className='text-sm text-gray-500 dark:text-gray-400'>
                    Cuidador de Idosos
                  </p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className='grid gap-4'>
                <div>
                  <div className='font-semibold'>Contato</div>
                  <div className='text-gray-500 dark:text-gray-400'>
                    isaacsantos@example.com
                  </div>
                  <div className='text-gray-500 dark:text-gray-400'>
                    (61) 99999-9999
                  </div>
                </div>
                <div>
                  <div className='font-semibold'>Sobre</div>
                  <p className='text-gray-500 dark:text-gray-400'>
                    Sou um cuidador de idosos experiente e dedicado, com mais de
                    5 anos de experiência. Meu objetivo é proporcionar um
                    ambiente seguro, acolhedor e respeitoso para os idosos sob
                    meus cuidados.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Histórico de Trabalhos</CardTitle>
            </CardHeader>
            <CardContent>
              <div className='grid gap-4'>
                <div className='flex items-center justify-between'>
                  <div>
                    <div className='font-semibold'>Maria Souza</div>
                    <div className='text-sm text-gray-500 dark:text-gray-400'>
                      Cuidados diários
                    </div>
                  </div>
                  <div className='flex items-center gap-1'>
                    <StarIcon className='w-4 h-4 fill-brand-200 stroke-brand-700' />
                    <StarIcon className='w-4 h-4 fill-brand-200 stroke-brand-700' />
                    <StarIcon className='w-4 h-4 fill-brand-200 stroke-brand-700' />
                    <StarIcon className='w-4 h-4 fill-muted stroke-brand-700' />
                    <StarIcon className='w-4 h-4 fill-muted stroke-brand-700' />
                  </div>
                </div>
                <div className='flex items-center justify-between'>
                  <div>
                    <div className='font-semibold'>José Silva</div>
                    <div className='text-sm text-gray-500 dark:text-gray-400'>
                      Acompanhamento médico
                    </div>
                  </div>
                  <div className='flex items-center gap-1'>
                    <StarIcon className='w-4 h-4 fill-brand-200 stroke-brand-700' />
                    <StarIcon className='w-4 h-4 fill-brand-200 stroke-brand-700' />
                    <StarIcon className='w-4 h-4 fill-brand-200 stroke-brand-700' />
                    <StarIcon className='w-4 h-4 fill-brand-200 stroke-brand-700' />
                    <StarIcon className='w-4 h-4 fill-brand-200 stroke-brand-700' />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Certificados</CardTitle>
            </CardHeader>
            <CardContent>
              <div className='grid gap-4'>
                <div className='flex items-center gap-4'>
                  <AwardIcon className='w-6 h-6' />
                  <div>
                    <div className='font-semibold'>Primeiros Socorros</div>
                    <div className='text-sm text-gray-500 dark:text-gray-400'>
                      Curso de Primeiros Socorros para Idosos
                    </div>
                  </div>
                </div>
                <div className='flex items-center gap-4'>
                  <AwardIcon className='w-6 h-6' />
                  <div>
                    <div className='font-semibold'>Cuidados Paliativos</div>
                    <div className='text-sm text-gray-500 dark:text-gray-400'>
                      Certificado em Cuidados Paliativos para Idosos
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className='flex flex-col gap-4'>
          <Card>
            <CardHeader>
              <CardTitle>Configurações de Conta</CardTitle>
            </CardHeader>
            <CardContent className='grid gap-4'>
              <div>
                <Label htmlFor='name'>Nome</Label>
                <Input defaultValue='Isaac Santos' id='name' />
              </div>
              <div>
                <Label htmlFor='email'>Email</Label>
                <Input defaultValue='isaacsantos@example.com' id='email' />
              </div>
              <div>
                <Label htmlFor='password'>Senha</Label>
                <Input id='password' type='password' />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Salvar Alterações</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Preferências e Disponibilidade</CardTitle>
            </CardHeader>
            <CardContent>
              <div className='grid gap-4'>
                <div>
                  <Label htmlFor='availability'>Disponibilidade</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder='Selecione sua disponibilidade' />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value='full-time'>Tempo Integral</SelectItem>
                      <SelectItem value='part-time'>Meio Período</SelectItem>
                      <SelectItem value='weekends'>Finais de Semana</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor='preferences'>Preferências</Label>
                  <Textarea
                    id='preferences'
                    placeholder='Descreva suas preferências de trabalho'
                  />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button>Salvar Preferências</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Agenda da Semana</CardTitle>
            </CardHeader>
            <CardContent>
              <div className='grid gap-4'>
                <div className='flex items-center justify-between'>
                  <div>
                    <div className='font-semibold'>Segunda-feira</div>
                    <div className='text-sm text-gray-500 dark:text-gray-400'>
                      9:00 - 12:00 Maria Souza
                    </div>
                  </div>
                  <Button size='sm' variant='outline'>
                    Detalhes
                  </Button>
                </div>
                <div className='flex items-center justify-between'>
                  <div>
                    <div className='font-semibold'>Terça-feira</div>
                    <div className='text-sm text-gray-500 dark:text-gray-400'>
                      14:00 - 18:00 José Silva
                    </div>
                  </div>
                  <Button size='sm' variant='outline'>
                    Detalhes
                  </Button>
                </div>
                <div className='flex items-center justify-between'>
                  <div>
                    <div className='font-semibold'>Quarta-feira</div>
                    <div className='text-sm text-gray-500 dark:text-gray-400'>
                      Sem agendamentos
                    </div>
                  </div>
                </div>
                <div className='flex items-center justify-between'>
                  <div>
                    <div className='font-semibold'>Quinta-feira</div>
                    <div className='text-sm text-gray-500 dark:text-gray-400'>
                      10:00 - 14:00 Ana Oliveira
                    </div>
                  </div>
                  <Button size='sm' variant='outline'>
                    Detalhes
                  </Button>
                </div>
                <div className='flex items-center justify-between'>
                  <div>
                    <div className='font-semibold'>Sexta-feira</div>
                    <div className='text-sm text-gray-500 dark:text-gray-400'>
                      Sem agendamentos
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
