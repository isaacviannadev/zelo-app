'use client';
import Job from '@/components/job';
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
import { normalizeLocation, transformToKebabCase } from '@/helpers';
import { jobs } from '@/mocks/jobs';
import { useState } from 'react';

export default function Vagas() {
  const [location, setLocation] = useState('');
  const [jobType, setJobType] = useState('');
  const [contractType, setContractType] = useState('');

  const handleLocationChange = (location: string) => {
    setLocation(location);
  };

  const handleJobTypeChange = (jobType: string) => {
    setJobType(jobType);
  };

  const handleContractTypeChange = (contractType: string) => {
    setContractType(contractType);
  };

  const filteredJobs = jobs.filter((job) => {
    if (location && jobType && contractType) {
      return (
        normalizeLocation(job.location) === location &&
        transformToKebabCase(job.title) === jobType &&
        job.contract === contractType
      );
    }

    if (location && jobType) {
      return (
        normalizeLocation(job.location) === location &&
        transformToKebabCase(job.title) === jobType
      );
    }

    if (location) {
      return normalizeLocation(job.location) === location;
    }

    if (jobType) {
      return transformToKebabCase(job.title) === jobType;
    }

    if (contractType) {
      return job.contract === contractType;
    }

    return jobs;
  });

  const locations = jobs.reduce((acc, job) => {
    if (!acc.includes(job.location)) {
      acc.push(job.location);
    }
    return acc;
  }, [] as string[]);

  const jobTypes = jobs.reduce((acc, job) => {
    if (!acc.includes(job.title)) {
      acc.push(job.title);
    }
    return acc;
  }, [] as string[]);

  const contractTypes = jobs.reduce((acc, job) => {
    if (!acc.includes(job.contract)) {
      acc.push(job.contract);
    }
    return acc;
  }, [] as string[]);

  return (
    <section className='flex min-h-[calc(100vh_-_theme(spacing.16))] bg-gray-100/40 flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10 dark:bg-gray-800/40'>
      <div className='container grid gap-6 md:gap-8 px-4 md:px-6 max-w-xl mx-auto lg:max-w-7xl'>
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
            <Select onValueChange={(value) => handleLocationChange(value)}>
              <SelectTrigger>
                <SelectValue placeholder='Cidade' />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Cidades</SelectLabel>
                  {locations.map((location, index) => (
                    <SelectItem
                      key={`${location}+${index}`}
                      value={normalizeLocation(location)}
                    >
                      {location}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
            <Select onValueChange={(value) => handleJobTypeChange(value)}>
              <SelectTrigger>
                <SelectValue placeholder='Tipo de serviço' />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Tipo de serviço</SelectLabel>
                  {jobTypes.map((types, index) => (
                    <SelectItem
                      key={`${types}+${index}`}
                      value={transformToKebabCase(types)}
                    >
                      {types}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
            <Select onValueChange={(value) => handleContractTypeChange(value)}>
              <SelectTrigger>
                <SelectValue placeholder='Regime de contratação' />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Regime de contratação</SelectLabel>
                  {contractTypes.map((types, index) => (
                    <SelectItem key={`${types}+${index}`} value={types}>
                      {types}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        <Separator />
        <div className='grid lg:grid-cols-3 gap-8'>
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => <Job key={job.id} {...job} />)
          ) : (
            <p className='text-center text-gray-500 dark:text-gray-400'>
              Nenhuma vaga encontrada com os filtros selecionados.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
