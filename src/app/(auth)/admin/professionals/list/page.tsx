import { EyeIcon, UserXIcon } from '@/components/icons';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

function ListProfessionals() {
  return (
    <div className='grid gap-6'>
      <Card id='cuidadores'>
        <CardHeader className='flex justify-between'>
          <CardTitle className='flex justify-between'>
            Profissionais
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
                        src='https://zeloclub-public.s3.amazonaws.com/zelo-avatar-placeholder.svg'
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
    </div>
  );
}

export default ListProfessionals;
