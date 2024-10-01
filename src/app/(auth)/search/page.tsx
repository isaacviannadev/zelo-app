import { ArrowUpDownIcon, SearchIcon, StarIcon } from '@/components/icons';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import SearchFilters from './search-filters';

export default function Search() {
  return (
    <main className='flex min-h-[calc(100vh_-_theme(spacing.16))] bg-gray-100/40 flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10 dark:bg-gray-800/40 '>
      <div className='max-w-7xl mx-auto w-full'>
        <div className='grid gap-6 md:gap-8  '>
          <div className='flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8'>
            <div className='grid gap-1'>
              <h1 className='text-2xl font-bold tracking-tight'>
                Busca de Profissionais
              </h1>
              <p className='text-gray-500 dark:text-gray-400'>
                Encontre o profissional ideal para suas necessidades
              </p>
            </div>
            <form className='flex-1 w-full md:ml-auto md:w-1/3 sm:flex-initial '>
              <div className='relative'>
                <SearchIcon className='absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400' />
                <Input
                  className='pl-8'
                  placeholder='Encontre um profissional...'
                  type='search'
                />
              </div>
            </form>
          </div>
          <div className='grid md:grid-cols-[300px_1fr] gap-6 md:gap-8'>
            <div className='hidden flex-col gap-4 items-start py-2 md:flex'>
              <SearchFilters />
            </div>
            <div className='flex flex-col gap-4 items-start py-2 md:hidden'>
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant='outline' size={'sm'} className='w-full'>
                    <span className='inline-flex gap-1'>Filtros</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side={'bottom'}>
                  <SearchFilters />
                  <Button variant={'brand'} size={'sm'} className='w-full mt-8'>
                    Aplicar Filtros
                  </Button>
                </SheetContent>
              </Sheet>
            </div>
            <div className='grid gap-6'>
              <div className='flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8'>
                <div className='grid gap-1'>
                  <h2 className='text-xl font-bold tracking-tight'>
                    Resultados
                  </h2>
                  <p className='text-gray-500 dark:text-gray-400'>
                    Foram encontrados{' '}
                    <strong className='font-bold text-lg text-brand-700'>
                      2
                    </strong>{' '}
                    profissionais
                  </p>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button className='ml-auto shrink-0' variant='outline'>
                      <ArrowUpDownIcon className='w-4 h-4 mr-2' />
                      Ordenar por
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align='end' className='w-[200px]'>
                    <DropdownMenuRadioGroup value='rating'>
                      <DropdownMenuRadioItem value='rating'>
                        Avaliação
                      </DropdownMenuRadioItem>
                      <DropdownMenuRadioItem value='experience'>
                        Experiencia
                      </DropdownMenuRadioItem>
                      <DropdownMenuRadioItem value='location'>
                        Localização
                      </DropdownMenuRadioItem>
                    </DropdownMenuRadioGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <div className='grid gap-6'>
                <div className='flex flex-col gap-2 md:gap-4  md:flex-row '>
                  <Avatar className='w-10 h-10 border'>
                    <AvatarImage
                      alt='avatar image'
                      src='/placeholder-user.jpg'
                    />
                    <AvatarFallback>MS</AvatarFallback>
                  </Avatar>
                  <div className='grid gap-4 w-full'>
                    <div className='flex flex-col gap-4 items-start md:flex-row'>
                      <div className='grid gap-0.5 text-sm'>
                        <h3 className='font-semibold'>Marta Santos</h3>
                        <div className='text-gray-500 dark:text-gray-400'>
                          Cuidadora de Idosos Certificada
                        </div>
                      </div>
                      <div className='flex items-center gap-0.5 md:ml-auto'>
                        <StarIcon className='w-5 h-5 fill-brand-200 stroke-brand-700' />
                        <StarIcon className='w-5 h-5 fill-brand-200 stroke-brand-700' />
                        <StarIcon className='w-5 h-5 fill-brand-200 stroke-brand-700' />
                        <StarIcon className='w-5 h-5 fill-muted stroke-brand-700' />
                        <StarIcon className='w-5 h-5 fill-muted stroke-brand-700' />
                      </div>
                    </div>
                    <div className='text-sm leading-4 md:leading-loose text-gray-500 dark:text-gray-400'>
                      <p>
                        Cuidadora de idosos com mais de 3 anos de experiência.
                        Especialista em cuidados paliativos e pacientes com
                        Alzheimer.
                      </p>
                    </div>
                    <div className='flex flex-wrap gap-2'>
                      <Badge variant='secondary'>Cuidadora</Badge>
                      <Badge variant='secondary'>Especializado</Badge>
                      <Badge variant='careClub'>CareClub</Badge>
                    </div>
                  </div>
                </div>
                <Separator />
                <div className='flex flex-col md:flex-row gap-2 md:gap-4'>
                  <Avatar className='w-10 h-10 border'>
                    <AvatarImage
                      alt='avatar image'
                      src='/placeholder-user.jpg'
                    />
                    <AvatarFallback>JA</AvatarFallback>
                  </Avatar>
                  <div className='grid gap-4 w-full'>
                    <div className='flex flex-col gap-4 items-start md:flex-row'>
                      <div className='grid gap-0.5 text-sm'>
                        <h3 className='font-semibold'>Jorge Alves</h3>
                        <div className='text-gray-500 dark:text-gray-400'>
                          Fisioterapeuta Registrado
                        </div>
                      </div>
                      <div className='flex items-center gap-0.5 md:ml-auto'>
                        <StarIcon className='w-5 h-5 fill-brand-200 stroke-brand-700' />
                        <StarIcon className='w-5 h-5 fill-brand-200 stroke-brand-700' />
                        <StarIcon className='w-5 h-5 fill-brand-200 stroke-brand-700' />
                        <StarIcon className='w-5 h-5 fill-brand-200 stroke-brand-700' />
                        <StarIcon className='w-5 h-5 fill-muted stroke-brand-700' />
                      </div>
                    </div>
                    <div className='text-sm leading-4 md:leading-loose text-gray-500 dark:text-gray-400'>
                      <p>
                        Fisioterapeuta com mais de 5 anos de experiência.
                        Especialista em reabilitação pós-operatória e
                        fisioterapia domiciliar.
                      </p>
                    </div>
                    <div className='flex flex-wrap gap-2'>
                      <Badge variant='secondary'>Fisioterapeuta</Badge>
                      <Badge variant='secondary'>Especializado</Badge>
                      <Badge variant='premium'>Assinante</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
