import { ArchiveIcon, DeleteIcon } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
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

async function Vacancies() {
  return (
    <div className='grid gap-6'>
      <Card id='nova-vaga'>
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

      <Card id='ver-vagas'>
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
  );
}

export default Vacancies;
