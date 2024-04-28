import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';

export default function Vagas() {
  return (
    <section className='w-full py-12'>
      <div className='container grid gap-6 md:gap-8 px-4 md:px-6 max-w-xl mx-auto lg:max-w-none'>
        <div className='flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8'>
          <div className='grid gap-1'>
            <h1 className='text-2xl font-bold tracking-tight'>
              Serviços de Cuidado a Idosos
            </h1>
            <p className='text-gray-500 dark:text-gray-400'>
              Encontre a solução perfeita para o cuidado de idosos, incluindo
              vagas fixas, serviços pontuais, fisioterapia e home care.
            </p>
          </div>
        </div>
        <div>
          <h4 className='text-xl font-bold tracking-tight'>Filtros</h4>
          <div className='flex flex-col sm:flex-row gap-4'>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder='Cidade' />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Cidades</SelectLabel>
                  <SelectItem value='sao-paulo'>São Paulo, SP</SelectItem>
                  <SelectItem value='rio-de-janeiro'>
                    Rio de Janeiro, RJ
                  </SelectItem>
                  <SelectItem value='belo-horizonte'>
                    Belo Horizonte, MG
                  </SelectItem>
                  <SelectItem value='curitiba'>Curitiba, PR</SelectItem>
                  <SelectItem value='porto-alegre'>Porto Alegre, RS</SelectItem>
                  <SelectItem value='recife'>Recife, PE</SelectItem>
                  <SelectItem value='salvador'>Salvador, BA</SelectItem>
                  <SelectItem value='fortaleza'>Fortaleza, CE</SelectItem>
                  <SelectItem value='brasilia'>Brasília, DF</SelectItem>
                  <SelectItem value='goiania'>Goiânia, GO</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder='Tipo de serviço' />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Tipo de serviço</SelectLabel>
                  <SelectItem value='cuidador-idosos'>
                    Cuidador de Idosos
                  </SelectItem>
                  <SelectItem value='acompanhante-idosos'>
                    Acompanhante de Idosos
                  </SelectItem>
                  <SelectItem value='cuidador-noturno'>
                    Cuidador Noturno de Idosos
                  </SelectItem>
                  <SelectItem value='cuidador-clinica'>
                    Cuidador de Idosos em Clínica
                  </SelectItem>
                  <SelectItem value='cuidador-alzheimer'>
                    Cuidador de Idosos com Alzheimer
                  </SelectItem>
                  <SelectItem value='cuidador-residencia'>
                    Cuidador de Idosos em Residência
                  </SelectItem>
                  <SelectItem value='cuidador-asilo'>
                    Cuidador de Idosos em Asilo
                  </SelectItem>
                  <SelectItem value='cuidador-mobilidade'>
                    Cuidador de Idosos com Mobilidade Reduzida
                  </SelectItem>
                  <SelectItem value='cuidador-instituicao'>
                    Cuidador de Idosos em Instituição
                  </SelectItem>
                  <SelectItem value='cuidador-domicilio'>
                    Cuidador de Idosos em Domicílio
                  </SelectItem>
                  <SelectItem value='fisioterapeuta'>
                    Fisioterapeuta para Idosos
                  </SelectItem>
                  <SelectItem value='home-care'>
                    Home Care para Idosos
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder='Regime de contratação' />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Regime de contratação</SelectLabel>
                  <SelectItem value='clt'>CLT</SelectItem>
                  <SelectItem value='pj'>PJ</SelectItem>
                  <SelectItem value='servico-pontual'>
                    Serviço pontual
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        <Separator />
        <div className='grid lg:grid-cols-3 gap-8'>
          <div className='grid gap-6 relative group'>
            <Link className='absolute inset-0 z-10' href='#'>
              <span className='sr-only'>Ver serviço</span>
            </Link>
            <div className='grid gap-1'>
              <h3 className='font-semibold'>Cuidador de Idosos</h3>
              <p className='text-sm leading-none'>
                Cuidar de idosos em sua residência, auxiliando nas atividades
                diárias, como higiene pessoal, alimentação, medicação e
                acompanhamento médico.
              </p>
              <p className='text-sm text-gray-500 dark:text-gray-400'>
                São Paulo, SP
              </p>
              <p className='text-sm text-gray-500 dark:text-gray-400'>
                Salário: R$ 2.000,00 - R$ 3.000,00
              </p>
              <p className='text-sm text-gray-500 dark:text-gray-400'>
                Regime de contratação: CLT
              </p>
            </div>
            <Button>Candidatar-se</Button>
          </div>
          <div className='grid gap-4 relative group'>
            <Link className='absolute inset-0 z-10' href='#'>
              <span className='sr-only'>Ver serviço</span>
            </Link>
            <div className='grid gap-1'>
              <h3 className='font-semibold'>Acompanhante de Idosos</h3>
              <p className='text-sm leading-none'>
                Acompanhar idosos em passeios, consultas médicas e atividades
                externas, garantindo sua segurança e bem-estar.
              </p>
              <p className='text-sm text-gray-500 dark:text-gray-400'>
                Rio de Janeiro, RJ
              </p>
              <p className='text-sm text-gray-500 dark:text-gray-400'>
                Salário: R$ 1.500,00 - R$ 2.500,00
              </p>
              <p className='text-sm text-gray-500 dark:text-gray-400'>
                Regime de contratação: PJ
              </p>
            </div>
            <Button>Candidatar-se</Button>
          </div>
          <div className='grid gap-4 relative group'>
            <Link className='absolute inset-0 z-10' href='#'>
              <span className='sr-only'>Ver serviço</span>
            </Link>
            <div className='grid gap-1'>
              <h3 className='font-semibold'>Cuidador Noturno de Idosos</h3>
              <p className='text-sm leading-none'>
                Cuidar de idosos durante o período noturno, garantindo segurança
                e conforto, auxiliando em eventuais necessidades.
              </p>
              <p className='text-sm text-gray-500 dark:text-gray-400'>
                Belo Horizonte, MG
              </p>
              <p className='text-sm text-gray-500 dark:text-gray-400'>
                Salário: R$ 1.800,00 - R$ 2.800,00
              </p>
              <p className='text-sm text-gray-500 dark:text-gray-400'>
                Regime de contratação: CLT
              </p>
            </div>
            <Button>Candidatar-se</Button>
          </div>
          <div className='grid gap-4 relative group'>
            <Link className='absolute inset-0 z-10' href='#'>
              <span className='sr-only'>Ver serviço</span>
            </Link>
            <div className='grid gap-1'>
              <h3 className='font-semibold'>Cuidador de Idosos em Clínica</h3>
              <p className='text-sm leading-none'>
                Cuidar de idosos em uma clínica de repouso, auxiliando nas
                atividades diárias, como higiene pessoal, alimentação, medicação
                e acompanhamento médico.
              </p>
              <p className='text-sm text-gray-500 dark:text-gray-400'>
                Curitiba, PR
              </p>
              <p className='text-sm text-gray-500 dark:text-gray-400'>
                Salário: R$ 2.200,00 - R$ 3.200,00
              </p>
              <p className='text-sm text-gray-500 dark:text-gray-400'>
                Regime de contratação: CLT
              </p>
            </div>
            <Button>Candidatar-se</Button>
          </div>
          <div className='grid gap-4 relative group'>
            <Link className='absolute inset-0 z-10' href='#'>
              <span className='sr-only'>Ver serviço</span>
            </Link>
            <div className='grid gap-1'>
              <h3 className='font-semibold'>
                Cuidador de Idosos com Alzheimer
              </h3>
              <p className='text-sm leading-none'>
                Cuidar de idosos com Alzheimer, fornecendo suporte
                especializado, acompanhamento e estimulação cognitiva.
              </p>
              <p className='text-sm text-gray-500 dark:text-gray-400'>
                Porto Alegre, RS
              </p>
              <p className='text-sm text-gray-500 dark:text-gray-400'>
                Salário: R$ 2.500,00 - R$ 4.000,00
              </p>
              <p className='text-sm text-gray-500 dark:text-gray-400'>
                Regime de contratação: CLT
              </p>
            </div>
            <Button>Candidatar-se</Button>
          </div>
          <div className='grid gap-4 relative group'>
            <Link className='absolute inset-0 z-10' href='#'>
              <span className='sr-only'>Ver serviço</span>
            </Link>
            <div className='grid gap-1'>
              <h3 className='font-semibold'>
                Cuidador de Idosos em Residência
              </h3>
              <p className='text-sm leading-none'>
                Cuidar de idosos em sua própria residência, auxiliando nas
                atividades diárias, como higiene pessoal, alimentação, medicação
                e acompanhamento médico.
              </p>
              <p className='text-sm text-gray-500 dark:text-gray-400'>
                Recife, PE
              </p>
              <p className='text-sm text-gray-500 dark:text-gray-400'>
                Salário: R$ 1.800,00 - R$ 2.800,00
              </p>
              <p className='text-sm text-gray-500 dark:text-gray-400'>
                Regime de contratação: PJ
              </p>
            </div>
            <Button>Candidatar-se</Button>
          </div>
          <div className='grid gap-4 relative group'>
            <Link className='absolute inset-0 z-10' href='#'>
              <span className='sr-only'>Ver serviço</span>
            </Link>
            <div className='grid gap-1'>
              <h3 className='font-semibold'>Cuidador de Idosos em Asilo</h3>
              <p className='text-sm leading-none'>
                Cuidar de idosos em um asilo, auxiliando nas atividades diárias
                e fornecendo companhia, estimulação cognitiva e apoio emocional.
              </p>
              <p className='text-sm text-gray-500 dark:text-gray-400'>
                Salvador, BA
              </p>
              <p className='text-sm text-gray-500 dark:text-gray-400'>
                Salário: R$ 2.000,00 - R$ 3.000,00
              </p>
              <p className='text-sm text-gray-500 dark:text-gray-400'>
                Regime de contratação: CLT
              </p>
            </div>
            <Button>Candidatar-se</Button>
          </div>
          <div className='grid gap-4 relative group'>
            <Link className='absolute inset-0 z-10' href='#'>
              <span className='sr-only'>Ver serviço</span>
            </Link>
            <div className='grid gap-1'>
              <h3 className='font-semibold'>
                Cuidador de Idosos com Mobilidade Reduzida
              </h3>
              <p className='text-sm leading-none'>
                Cuidar de idosos com mobilidade reduzida, auxiliando na
                locomoção e atividades diárias, como higiene pessoal,
                alimentação, medicação e acompanhamento médico.
              </p>
              <p className='text-sm text-gray-500 dark:text-gray-400'>
                Fortaleza, CE
              </p>
              <p className='text-sm text-gray-500 dark:text-gray-400'>
                Salário: R$ 2.200,00 - R$ 3.200,00
              </p>
              <p className='text-sm text-gray-500 dark:text-gray-400'>
                Regime de contratação: CLT
              </p>
            </div>
            <Button>Candidatar-se</Button>
          </div>
          <div className='grid gap-4 relative group'>
            <Link className='absolute inset-0 z-10' href='#'>
              <span className='sr-only'>Ver serviço</span>
            </Link>
            <div className='grid gap-1'>
              <h3 className='font-semibold'>
                Cuidador de Idosos em Instituição
              </h3>
              <p className='text-sm leading-none'>
                Cuidar de idosos em uma instituição de longa permanência,
                auxiliando nas atividades diárias e fornecendo companhia,
                estimulação cognitiva e apoio emocional.
              </p>
              <p className='text-sm text-gray-500 dark:text-gray-400'>
                Brasília, DF
              </p>
              <p className='text-sm text-gray-500 dark:text-gray-400'>
                Salário: R$ 2.500,00 - R$ 3.500,00
              </p>
              <p className='text-sm text-gray-500 dark:text-gray-400'>
                Regime de contratação: CLT
              </p>
            </div>
            <Button>Candidatar-se</Button>
          </div>
          <div className='grid gap-4 relative group'>
            <Link className='absolute inset-0 z-10' href='#'>
              <span className='sr-only'>Ver serviço</span>
            </Link>
            <div className='grid gap-1'>
              <h3 className='font-semibold'>Cuidador de Idosos em Domicílio</h3>
              <p className='text-sm leading-none'>
                Cuidar de idosos em seu próprio domicílio, auxiliando nas
                atividades diárias e fornecendo companhia, estimulação cognitiva
                e apoio emocional.
              </p>
              <p className='text-sm text-gray-500 dark:text-gray-400'>
                Goiânia, GO
              </p>
              <p className='text-sm text-gray-500 dark:text-gray-400'>
                Salário: R$ 2.000,00 - R$ 3.000,00
              </p>
              <p className='text-sm text-gray-500 dark:text-gray-400'>
                Regime de contratação: PJ
              </p>
            </div>
            <Button>Candidatar-se</Button>
          </div>
          <div className='grid gap-4 relative group'>
            <Link className='absolute inset-0 z-10' href='#'>
              <span className='sr-only'>Ver serviço</span>
            </Link>
            <div className='grid gap-1'>
              <h3 className='font-semibold'>Fisioterapeuta para Idosos</h3>
              <p className='text-sm leading-none'>
                Fornecer serviços de fisioterapia para idosos, auxiliando na
                reabilitação, manutenção da mobilidade e qualidade de vida.
              </p>
              <p className='text-sm text-gray-500 dark:text-gray-400'>
                Rio de Janeiro, RJ
              </p>
              <p className='text-sm text-gray-500 dark:text-gray-400'>
                Valor por sessão: R$ 100,00 - R$ 200,00
              </p>
              <p className='text-sm text-gray-500 dark:text-gray-400'>
                Regime de contratação: Serviço pontual
              </p>
            </div>
            <Button>Contratar</Button>
          </div>
          <div className='grid gap-4 relative group'>
            <Link className='absolute inset-0 z-10' href='#'>
              <span className='sr-only'>Ver serviço</span>
            </Link>
            <div className='grid gap-1'>
              <h3 className='font-semibold'>Home Care para Idosos</h3>
              <p className='text-sm leading-none'>
                Serviços de cuidado domiciliar para idosos, incluindo
                assistência nas atividades diárias, higiene, alimentação e
                acompanhamento médico.
              </p>
              <p className='text-sm text-gray-500 dark:text-gray-400'>
                São Paulo, SP
              </p>
              <p className='text-sm text-gray-500 dark:text-gray-400'>
                Valor por hora: R$ 50,00 - R$ 80,00
              </p>
              <p className='text-sm text-gray-500 dark:text-gray-400'>
                Regime de contratação: Serviço pontual
              </p>
            </div>
            <Button>Contratar</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
