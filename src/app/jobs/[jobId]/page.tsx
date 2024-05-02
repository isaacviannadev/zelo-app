import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
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
import { Textarea } from '@/components/ui/textarea';

export default function Component() {
  return (
    <div className='grid gap-4 min-h-screen bg-gray-100 p-4 dark:bg-gray-900'>
      <Card>
        <CardHeader>
          <div className='flex items-center justify-between'>
            <div>
              <CardTitle>Vaga de Cuidador</CardTitle>
              <CardDescription>Detalhes da vaga atual</CardDescription>
            </div>
            <Avatar>
              <AvatarImage alt='Foto do paciente' src='/placeholder-user.jpg' />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </div>
        </CardHeader>
        <CardContent className='grid gap-4 md:grid-cols-2'>
          <div>
            <div className='space-y-1'>
              <Label htmlFor='name'>Nome do Paciente</Label>
              <Input disabled id='name' value='João Dias' />
            </div>
            <div className='space-y-1'>
              <Label htmlFor='age'>Idade</Label>
              <Input disabled id='age' value='82 anos' />
            </div>
          </div>
          <div>
            <div className='space-y-1'>
              <Label htmlFor='condition'>Condição Médica</Label>
              <Input disabled id='condition' value='Alzheimer, Hipertensão' />
            </div>
            <div className='space-y-1'>
              <Label htmlFor='location'>Localização</Label>
              <Input disabled id='location' value='São Paulo, SP' />
            </div>
          </div>
        </CardContent>
      </Card>

      <div className='grid gap-4 md:grid-cols-[1fr_320px]'>
        <Card>
          <CardHeader>
            <CardTitle>Registro de Atividades</CardTitle>
            <CardDescription>
              Preencha as informações sobre o trabalho realizado.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className='grid gap-4'>
              <div className='space-y-1'>
                <Label htmlFor='dailyActivities'>Atividades Diárias</Label>
                <Textarea
                  id='dailyActivities'
                  placeholder='Descreva as atividades realizadas com o paciente durante o dia.'
                />
              </div>
              <div className='space-y-1'>
                <Label htmlFor='healthStatus'>Estado de Saúde</Label>
                <Textarea
                  id='healthStatus'
                  placeholder='Descreva o estado de saúde atual do paciente.'
                />
              </div>
              <div className='space-y-1'>
                <Label htmlFor='observations'>Observações</Label>
                <Textarea
                  id='observations'
                  placeholder='Registre quaisquer observações relevantes.'
                />
              </div>
              <div className='space-y-1'>
                <Label htmlFor='nextSteps'>Próximos Passos</Label>
                <Textarea
                  id='nextSteps'
                  placeholder='Descreva os próximos passos a serem tomados no cuidado do paciente.'
                />
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button type='submit'>Salvar Registro</Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Relatórios Anteriores</CardTitle>
            <CardDescription>
              Visualize os relatórios anteriores sobre o paciente.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className='grid gap-4'>
              <div className='border rounded-lg p-4'>
                <div className='flex items-center justify-between'>
                  <div>
                    <h3 className='font-semibold'>01/06/2023</h3>
                    <p className='text-sm text-gray-500 dark:text-gray-400'>
                      Relatório diário
                    </p>
                  </div>
                  <Button size='sm' variant='outline'>
                    Ver detalhes
                  </Button>
                </div>
              </div>
              <div className='border rounded-lg p-4'>
                <div className='flex items-center justify-between'>
                  <div>
                    <h3 className='font-semibold'>31/05/2023</h3>
                    <p className='text-sm text-gray-500 dark:text-gray-400'>
                      Relatório diário
                    </p>
                  </div>
                  <Button size='sm' variant='outline'>
                    Ver detalhes
                  </Button>
                </div>
              </div>
              <div className='border rounded-lg p-4'>
                <div className='flex items-center justify-between'>
                  <div>
                    <h3 className='font-semibold'>30/05/2023</h3>
                    <p className='text-sm text-gray-500 dark:text-gray-400'>
                      Relatório diário
                    </p>
                  </div>
                  <Button size='sm' variant='outline'>
                    Ver detalhes
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
