import SVGHero from '@/components/SVGHero';
import Footer from '@/components/footer';
import { StarIcon } from '@/components/icons';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';

export default function Landing() {
  return (
    <main className='isolate bg-white'>
      <section className='relative isolate -z-10'>
        <SVGHero />

        <div
          className='absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48'
          aria-hidden='true'
        >
          <div
            className='aspect-[801/1036] w-[40.0625rem] bg-[#ABEDD8] '
            style={{
              clipPath:
                'polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)',
            }}
          />
        </div>
        <div className='overflow-hidden'>
          <div className='mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32'>
            <div className='mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center'>
              <div className='w-full max-w-xl lg:shrink-0 xl:max-w-2xl'>
                <h1 className='font-alt text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>
                  Conectando corações, cuidando de vidas.
                </h1>
                <p className='relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none'>
                  O <strong className='text-black'>zeloclub</strong> é a
                  plataforma perfeita para conectar cuidadores com pessoas que
                  precisam de cuidados para seus entes queridos. Nossa
                  plataforma, segura e intuitiva facilita o encontro de
                  cuidadores para que eles possam auxiliar a rotina das pessoas
                  proporcionando qualidade de vida.
                </p>

                <div className='mt-10 flex w-full flex-col items-center gap-4 gap-x-6 sm:flex-row'>
                  <Link href='#contact' className='w-full sm:w-fit'>
                    <Button variant={'brand'}>Sou cuidador!</Button>
                  </Link>
                  <Link href='#contact' className='w-full sm:w-fit'>
                    <Button variant='secondary'>Preciso de um cuidador!</Button>
                  </Link>
                </div>
              </div>
              <div className='mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0'>
                <div className='ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80'>
                  <div className='relative'>
                    <Image
                      src='https://cdn.glitch.global/366c06b6-90d2-4995-9a79-d42af2d6b7c2/cuidador-de-idosos-3b-850x560.jpg?v=1685398591426'
                      alt='Cuidador de idosos e paciente'
                      className='aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg'
                      width={176}
                      height={264}
                    />
                    <div className='pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10' />
                  </div>
                </div>
                <div className='mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36'>
                  <div className='relative'>
                    <Image
                      src='https://cdn.glitch.global/366c06b6-90d2-4995-9a79-d42af2d6b7c2/idosos6.webp?v=1714301316876'
                      alt='casal de idosos sorrindo'
                      className='aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg'
                      width={176}
                      height={264}
                    />
                    <div className='pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10' />
                  </div>
                  <div className='relative'>
                    <Image
                      src='https://cdn.glitch.global/366c06b6-90d2-4995-9a79-d42af2d6b7c2/idosos2.webp?v=1714301314896'
                      alt='mãos de idosa com aliança dourada e sorrindo ao fundo'
                      className='aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg'
                      width={176}
                      height={264}
                    />
                    <div className='pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10' />
                  </div>
                </div>
                <div className='w-44 flex-none space-y-8 pt-32 sm:pt-0'>
                  <div className='relative'>
                    <Image
                      src='https://cdn.glitch.global/366c06b6-90d2-4995-9a79-d42af2d6b7c2/idosos3.webp?v=1714301315536'
                      alt='paciente e cuidadora sorrindo'
                      className='aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg'
                      width={176}
                      height={264}
                    />
                    <div className='pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10' />
                  </div>
                  <div className='relative'>
                    <Image
                      src='https://cdn.glitch.global/366c06b6-90d2-4995-9a79-d42af2d6b7c2/idosos1.webp?v=1714301312160'
                      alt='cuidadora com as mão no ombro de idosa sorrindo'
                      className='aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg'
                      width={176}
                      height={264}
                    />
                    <div className='pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className=' py-12 md:py-24 lg:py-32'>
        <div className='container mx-auto px-4'>
          <div className='text-center'>
            <h2 className='text-4xl font-semibold mb-6'>Nossos Cuidadores</h2>
            <p className='text-lg text-gray-600 mb-12'>
              Profissionais qualificados e prontos para fornecer o melhor
              cuidado.
            </p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            <Card className='bg-gray-100'>
              <CardContent className='flex flex-col items-center p-4'>
                <div className='relative w-full h-48 mb-4'>
                  <Image
                    src='https://cdn.glitch.global/366c06b6-90d2-4995-9a79-d42af2d6b7c2/leilani-angel-K84vnnzxmTQ-unsplash.jpg?v=1714948810485'
                    alt='Cuidador 1'
                    className='rounded-lg object-cover w-full h-48'
                    width={192}
                    height={192}
                  />
                </div>
                <h3 className='mt-4 text-xl font-medium'>Marco Silva</h3>
                <p className='text-center text-gray-600'>
                  Especialista em cuidado de idosos.
                </p>
                <div className='flex items-center mt-2'>
                  <StarIcon className='w-4 h-4 fill-brand-200 stroke-brand-700' />
                  <StarIcon className='w-4 h-4 fill-brand-200 stroke-brand-700' />
                  <StarIcon className='w-4 h-4 fill-brand-200 stroke-brand-700' />
                  <StarIcon className='w-4 h-4 fill-brand-200 stroke-brand-700' />
                  <StarIcon className='w-4 h-4 fill-brand-200 stroke-brand-700' />
                  <span className='ml-2 text-sm text-gray-600'>
                    5.0 (120 serviços)
                  </span>
                </div>
                <p className='mt-2 text-sm text-gray-600'>Rio de Janeiro, RJ</p>
                <div className='mt-4'>
                  <p className='text-sm text-gray-600'>
                    Formado em Enfermagem pela Universidade Federal do Rio de
                    Janeiro, Marco possui mais de 10 anos de experiência no
                    cuidado de idosos. Ele é conhecido por sua paciência,
                    carinho e dedicação na assistência às necessidades físicas e
                    emocionais dos pacientes.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className='bg-gray-100'>
              <CardContent className='flex flex-col items-center p-4'>
                <div className='relative w-full h-48 mb-4'>
                  <Image
                    src='https://cdn.glitch.global/366c06b6-90d2-4995-9a79-d42af2d6b7c2/Screenshot%202024-05-05%20at%2023.53.37.png?v=1714949634905'
                    alt='Cuidador 1'
                    className='rounded-lg object-cover object-top w-full h-48'
                    width={192}
                    height={192}
                  />
                </div>
                <h3 className='mt-4 text-xl font-medium'>Carlos Souza</h3>
                <p className='text-center text-gray-600'>
                  Experiência em acompanhamento hospitalar.
                </p>
                <div className='flex items-center mt-2'>
                  <StarIcon className='w-4 h-4 fill-brand-200 stroke-brand-700' />
                  <StarIcon className='w-4 h-4 fill-brand-200 stroke-brand-700' />
                  <StarIcon className='w-4 h-4 fill-brand-200 stroke-brand-700' />
                  <StarIcon className='w-4 h-4 fill-brand-200 stroke-brand-700' />
                  <StarIcon className='w-4 h-4 fill-muted stroke-brand-700' />
                  <span className='ml-2 text-sm text-gray-600'>
                    4.0 (80 serviços)
                  </span>
                </div>
                <p className='mt-2 text-sm text-gray-600'>São Paulo, SP</p>
                <div className='mt-4'>
                  <p className='text-sm text-gray-600'>
                    Carlos é um técnico de enfermagem altamente capacitado, com
                    mais de 8 anos de experiência em hospitais e clínicas. Ele é
                    especializado em acompanhamento hospitalar, garantindo que
                    os pacientes recebam os cuidados necessários durante a
                    internação.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className='bg-gray-100'>
              <CardContent className='flex flex-col items-center p-4'>
                <div className='relative w-full h-48 mb-4'>
                  <Image
                    src='https://cdn.glitch.global/366c06b6-90d2-4995-9a79-d42af2d6b7c2/foto-sushi-jKuch64WZ_o-unsplash.jpg?v=1714948814463'
                    alt='Cuidador 1'
                    className='rounded-lg object-cover w-full h-48'
                    width={192}
                    height={192}
                  />
                </div>
                <h3 className='mt-4 text-xl font-medium'>Mariana Costa</h3>
                <p className='text-center text-gray-600'>
                  Cuidadora infantil com carinho e atenção.
                </p>
                <div className='flex items-center mt-2'>
                  <StarIcon className='w-4 h-4 fill-brand-200 stroke-brand-700' />
                  <StarIcon className='w-4 h-4 fill-brand-200 stroke-brand-700' />
                  <StarIcon className='w-4 h-4 fill-brand-200 stroke-brand-700' />
                  <StarIcon className='w-4 h-4 fill-muted stroke-brand-700' />
                  <StarIcon className='w-4 h-4 fill-muted stroke-brand-700' />
                  <span className='ml-2 text-sm text-gray-600'>
                    5.0 (150 serviços)
                  </span>
                </div>
                <p className='mt-2 text-sm text-gray-600'>Belo Horizonte, MG</p>
                <div className='mt-4'>
                  <p className='text-sm text-gray-600'>
                    Mariana é uma cuidadora infantil experiente e carinhosa.
                    Formada em Pedagogia, ela tem um jeito especial de lidar com
                    crianças, proporcionando um ambiente seguro, divertido e
                    estimulante para o desenvolvimento saudável dos pequenos.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className=' bg-brand-100/20 py-12 md:py-24 lg:py-32'>
        <div className='container mx-auto px-4 md:px-6 lg:px-8'>
          <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold mb-8'>
            Principais Recursos
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            <div className='bg-white rounded-lg shadow-md p-6'>
              <h3 className='text-xl font-bold mb-4'>
                Encontre Cuidadores Confiáveis
              </h3>
              <p className='text-gray-600 mb-4'>
                Nossa plataforma conecta você com cuidadores experientes e
                verificados.
              </p>
              <a
                className='text-blue-500 hover:text-blue-600 font-semibold'
                href='#'
              >
                Saiba Mais
              </a>
            </div>
            <div className='bg-white rounded-lg shadow-md p-6'>
              <h3 className='text-xl font-bold mb-4'>Agendamento Fácil</h3>
              <p className='text-gray-600 mb-4'>
                Agende os serviços de cuidado com apenas alguns cliques.
              </p>
              <a
                className='text-blue-500 hover:text-blue-600 font-semibold'
                href='#'
              >
                Saiba Mais
              </a>
            </div>
            <div className='bg-white rounded-lg shadow-md p-6'>
              <h3 className='text-xl font-bold mb-4'>Suporte 24/7</h3>
              <p className='text-gray-600 mb-4'>
                Nossa equipe de suporte está disponível para ajudá-lo a qualquer
                momento.
              </p>
              <a
                className='text-blue-500 hover:text-blue-600 font-semibold'
                href='#'
              >
                Saiba Mais
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className='bg-gray-100/20 py-12 md:py-24 lg:py-32'>
        <div className='container px-4 md:px-6'>
          <div className='mx-auto max-w-3xl text-center'>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
              O que Nossos Usuários Dizem
            </h2>
            <p className='mt-4 text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400'>
              Ouça dos cuidadores e idosos que transformaram suas vidas com o
              <strong className='text-brand-900'>zeloclub</strong>.
            </p>
          </div>
          <div className='mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
            <Card>
              <CardContent className='p-4'>
                <div className='flex items-center gap-4'>
                  <Avatar>
                    <AvatarImage src='/placeholder-avatar.png' />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className='text-lg font-semibold'>John Doe</h4>
                    <p className='text-gray-500 dark:text-gray-400'>Cuidador</p>
                  </div>
                </div>
                <p className='text-gray-500 dark:text-gray-400'>
                  &ldquo;<strong className='text-brand-900'>zeloclub</strong>{' '}
                  foi um divisor de águas para o meu negócio de cuidados. O
                  aplicativo facilita muito o gerenciamento dos meus clientes e
                  o agendamento de consultas.&rdquo;
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className='p-4'>
                <div className='flex items-center gap-4'>
                  <Avatar>
                    <AvatarImage src='/placeholder-avatar.png' />
                    <AvatarFallback>JA</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className='text-lg font-semibold'>Jane Arden</h4>
                    <p className='text-gray-500 dark:text-gray-400'>Idoso</p>
                  </div>
                </div>
                <p className='text-gray-500 dark:text-gray-400'>
                  &ldquo;Como idosa, estava hesitante em experimentar um novo
                  aplicativo, mas o{' '}
                  <strong className='text-brand-900'>zeloclub</strong> tornou
                  minha vida muito mais fácil. O suporte 24/7 é um
                  salva-vidas.&ldquo;
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className='p-4'>
                <div className='flex items-center gap-4'>
                  <Avatar>
                    <AvatarImage src='/placeholder-avatar.png' />
                    <AvatarFallback>SM</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className='text-lg font-semibold'>Sarah Mayer</h4>
                    <p className='text-gray-500 dark:text-gray-400'>Cuidador</p>
                  </div>
                </div>
                <p className='text-gray-500 dark:text-gray-400'>
                  &ldquo;<strong className='text-brand-900'>zeloclub</strong>{' '}
                  otimizou meu fluxo de trabalho de cuidados. Os recursos de
                  monitoramento de saúde ajudam-me a fornecer melhor cuidado aos
                  meus clientes.&ldquo;
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
