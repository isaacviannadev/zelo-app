import { ArrowUpDownIcon, SearchIcon, StarIcon } from '@/components/icons';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';

export default function Search() {
  return (
    <section className='w-full py-12'>
      <div className='container px-4 md:px-6  mx-auto'>
        <div className='grid gap-6 md:gap-8'>
          <div className='flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8'>
            <div className='grid gap-1'>
              <h1 className='text-2xl font-bold tracking-tight'>
                Busca de Profissionais
              </h1>
              <p className='text-gray-500 dark:text-gray-400'>
                Encontre o profissional ideal para suas necessidades
              </p>
            </div>
            <form className='flex-1 ml-auto w-1/3 sm:flex-initial'>
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
            <div className='flex flex-col gap-4 items-start py-2'>
              <Accordion className='w-full' collapsible type='single'>
                <AccordionItem value='field'>
                  <AccordionTrigger className='text-base'>
                    Especialidade
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className='grid gap-2'>
                      <Label className='flex items-center gap-2'>
                        <Checkbox id='field-aux-nurse' />
                        Auxiliar de Enfermagem Certificado(a)
                      </Label>
                      <Label className='flex items-center gap-2'>
                        <Checkbox id='field-homecare' />
                        Auxiliar de Saúde Domiciliar
                      </Label>
                      <Label className='flex items-center gap-2'>
                        <Checkbox id='field-nurse' />
                        Enfermeiro(a) Registrado(a)
                      </Label>
                      <Label className='flex items-center gap-2'>
                        <Checkbox id='field-physical-therapist' />
                        Fisioterapeuta
                      </Label>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value='location'>
                  <AccordionTrigger className='text-base'>
                    Localização
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className='grid gap-2'>
                      <Label className='flex items-center gap-2 font-normal'>
                        <Checkbox id='location-rj' />
                        Rio de Janeiro
                      </Label>
                      <Label className='flex items-center gap-2 font-normal'>
                        <Checkbox id='location-sp' />
                        São Paulo
                      </Label>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value='experience'>
                  <AccordionTrigger className='text-base'>
                    Experiência
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className='grid gap-2'>
                      <Label className='flex items-center gap-2 font-normal'>
                        <Checkbox id='experience-entry' />
                        Até 2 anos
                      </Label>
                      <Label className='flex items-center gap-2 font-normal'>
                        <Checkbox id='experience-mid' />
                        Mais de 2 anos
                      </Label>
                      <Label className='flex items-center gap-2 font-normal'>
                        <Checkbox id='experience-senior' />
                        Mais de 5 anos
                      </Label>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value='rating'>
                  <AccordionTrigger className='text-base'>
                    Avaliação
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className='grid gap-2'>
                      <Label className='flex items-center gap-2 font-normal'>
                        <Checkbox id='rating-0' />
                        <div className='flex items-center gap-0.5'>
                          <StarIcon className='w-4 h-4 fill-muted   stroke-brand-700' />
                          <StarIcon className='w-4 h-4 fill-muted   stroke-brand-700' />
                          <StarIcon className='w-4 h-4 fill-muted   stroke-brand-700' />
                          <StarIcon className='w-4 h-4 fill-muted   stroke-brand-700' />
                          <StarIcon className='w-4 h-4 fill-muted   stroke-brand-700' />
                        </div>
                      </Label>
                      <Label className='flex items-center gap-2 font-normal'>
                        <Checkbox id='rating-1' />
                        <div className='flex items-center gap-0.5'>
                          <StarIcon className='w-4 h-4 fill-brand-400  stroke-brand-700' />
                          <StarIcon className='w-4 h-4 fill-muted   stroke-brand-700' />
                          <StarIcon className='w-4 h-4 fill-muted   stroke-brand-700' />
                          <StarIcon className='w-4 h-4 fill-muted   stroke-brand-700' />
                          <StarIcon className='w-4 h-4 fill-muted   stroke-brand-700' />
                        </div>
                      </Label>
                      <Label className='flex items-center gap-2 font-normal'>
                        <Checkbox id='rating-2' />
                        <div className='flex items-center gap-0.5'>
                          <StarIcon className='w-4 h-4 fill-brand-400 stroke-brand-700' />
                          <StarIcon className='w-4 h-4 fill-brand-400  stroke-brand-700' />
                          <StarIcon className='w-4 h-4 fill-muted   stroke-brand-700' />
                          <StarIcon className='w-4 h-4 fill-muted   stroke-brand-700' />
                          <StarIcon className='w-4 h-4 fill-muted   stroke-brand-700' />
                        </div>
                      </Label>
                      <Label className='flex items-center gap-2 font-normal'>
                        <Checkbox id='rating-3' />
                        <div className='flex items-center gap-0.5'>
                          <StarIcon className='w-4 h-4 fill-brand-400 stroke-brand-700' />
                          <StarIcon className='w-4 h-4 fill-brand-400  stroke-brand-700' />
                          <StarIcon className='w-4 h-4 fill-brand-400  stroke-brand-700' />
                          <StarIcon className='w-4 h-4 fill-muted   stroke-brand-700' />
                          <StarIcon className='w-4 h-4 fill-muted   stroke-brand-700' />
                        </div>
                      </Label>
                      <Label className='flex items-center gap-2 font-normal'>
                        <Checkbox id='rating-4' />
                        <div className='flex items-center gap-0.5'>
                          <StarIcon className='w-4 h-4 fill-brand-400 stroke-brand-700' />
                          <StarIcon className='w-4 h-4 fill-brand-400  stroke-brand-700' />
                          <StarIcon className='w-4 h-4 fill-brand-400  stroke-brand-700' />
                          <StarIcon className='w-4 h-4 fill-brand-400  stroke-brand-700' />
                          <StarIcon className='w-4 h-4 fill-muted   stroke-brand-700' />
                        </div>
                      </Label>
                      <Label className='flex items-center gap-2 font-normal'>
                        <Checkbox id='rating-5' />
                        <div className='flex items-center gap-0.5'>
                          <StarIcon className='w-4 h-4 fill-brand-400 stroke-brand-700' />
                          <StarIcon className='w-4 h-4 fill-brand-400  stroke-brand-700' />
                          <StarIcon className='w-4 h-4 fill-brand-400  stroke-brand-700' />
                          <StarIcon className='w-4 h-4 fill-brand-400  stroke-brand-700' />
                          <StarIcon className='w-4 h-4 fill-brand-400  stroke-brand-700' />
                        </div>
                      </Label>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
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
                <div className='flex gap-4 '>
                  <Avatar className='w-10 h-10 border'>
                    <AvatarImage alt='@shadcn' src='/placeholder-user.jpg' />
                    <AvatarFallback>MS</AvatarFallback>
                  </Avatar>
                  <div className='grid gap-4 w-full'>
                    <div className='flex gap-4 items-start'>
                      <div className='grid gap-0.5 text-sm'>
                        <h3 className='font-semibold'>Marta Santos</h3>
                        <div className='text-gray-500 dark:text-gray-400'>
                          Cuidadora de Idosos Certificada
                        </div>
                      </div>
                      <div className='flex items-center gap-0.5 ml-auto'>
                        <StarIcon className='w-5 h-5 fill-brand-200 stroke-brand-700' />
                        <StarIcon className='w-5 h-5 fill-brand-200 stroke-brand-700' />
                        <StarIcon className='w-5 h-5 fill-brand-200 stroke-brand-700' />
                        <StarIcon className='w-5 h-5 fill-muted stroke-brand-700' />
                        <StarIcon className='w-5 h-5 fill-muted stroke-brand-700' />
                      </div>
                    </div>
                    <div className='text-sm leading-loose text-gray-500 dark:text-gray-400'>
                      <p>
                        Cuidadora de idosos com mais de 3 anos de experiência.
                        Especialista em cuidados paliativos e pacientes com
                        Alzheimer.
                      </p>
                    </div>
                    <div className='flex gap-2'>
                      <Badge variant='secondary'>Cuidadora</Badge>
                      <Badge variant='secondary'>Especializado</Badge>
                      <Badge variant='careClub'>CareClub</Badge>
                    </div>
                  </div>
                </div>
                <Separator />
                <div className='flex gap-4'>
                  <Avatar className='w-10 h-10 border'>
                    <AvatarImage alt='@shadcn' src='/placeholder-user.jpg' />
                    <AvatarFallback>JA</AvatarFallback>
                  </Avatar>
                  <div className='grid gap-4 w-full'>
                    <div className='flex gap-4 items-start'>
                      <div className='grid gap-0.5 text-sm'>
                        <h3 className='font-semibold'>Jorge Alves</h3>
                        <div className='text-gray-500 dark:text-gray-400'>
                          Fisioterapeuta Registrado
                        </div>
                      </div>
                      <div className='flex items-center gap-0.5 ml-auto'>
                        <StarIcon className='w-5 h-5 fill-brand-200 stroke-brand-700' />
                        <StarIcon className='w-5 h-5 fill-brand-200 stroke-brand-700' />
                        <StarIcon className='w-5 h-5 fill-brand-200 stroke-brand-700' />
                        <StarIcon className='w-5 h-5 fill-brand-200 stroke-brand-700' />
                        <StarIcon className='w-5 h-5 fill-muted stroke-brand-700' />
                      </div>
                    </div>
                    <div className='text-sm leading-loose text-gray-500 dark:text-gray-400'>
                      <p>
                        Fisioterapeuta com mais de 5 anos de experiência.
                        Especialista em reabilitação pós-operatória e
                        fisioterapia domiciliar.
                      </p>
                    </div>
                    <div className='flex gap-2'>
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
    </section>
  );
}
