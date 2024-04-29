import { StarIcon } from '@/components/icons';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

export default function SearchFilters() {
  return (
    <Accordion className='w-full' collapsible type='single'>
      <AccordionItem value='field'>
        <AccordionTrigger className='text-base'>Especialidade</AccordionTrigger>
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
        <AccordionTrigger className='text-base'>Localização</AccordionTrigger>
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
        <AccordionTrigger className='text-base'>Experiência</AccordionTrigger>
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
        <AccordionTrigger className='text-base'>Avaliação</AccordionTrigger>
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
  );
}
