import { CheckCircle2Icon } from 'lucide-react';

interface SidebarStepsProps {
  currentStep: number;
}

export default function SidebarSteps({ currentStep }: SidebarStepsProps) {
  return (
    <aside className='w-full'>
      <div className={`mb-8 ${currentStep >= 1 ? '' : 'opacity-50'}`}>
        <div
          className={`flex items-center ${
            currentStep >= 1 ? 'text-brand-600' : 'text-gray-600'
          } font-semibold mb-2`}
        >
          <div
            className={`w-6 h-6 rounded-full ${
              currentStep >= 1 ? 'text-brand-600' : 'text-gray-600'
            } flex items-center justify-center mr-2`}
          >
            <CheckCircle2Icon />
          </div>
          Seus nome
        </div>
        <div className='text-sm text-gray-500 ml-8'>
          Por favor, como gostaria de ser chamado?
        </div>
      </div>
      <div className={`mb-8 ${currentStep >= 2 ? '' : 'opacity-50'}`}>
        <div
          className={`flex items-center ${
            currentStep >= 2 ? 'text-brand-600' : 'text-gray-600'
          } font-semibold mb-2`}
        >
          <div
            className={`w-6 h-6 rounded-full ${
              currentStep >= 2 ? 'text-brand-600' : 'text-gray-600'
            } flex items-center justify-center mr-2`}
          >
            <CheckCircle2Icon />
          </div>
          Seu contato
        </div>
        <div className='text-sm text-gray-500 ml-8'>
          Qual o melhor número de telefone para contato?
        </div>
      </div>
      <div className={`mb-8 ${currentStep >= 3 ? '' : 'opacity-50'}`}>
        <div
          className={`flex items-center ${
            currentStep >= 3 ? 'text-brand-600' : 'text-gray-600'
          } font-semibold mb-2`}
        >
          <div
            className={`w-6 h-6 rounded-full ${
              currentStep >= 3 ? 'text-brand-600' : 'text-gray-600'
            } flex items-center justify-center mr-2`}
          >
            <CheckCircle2Icon />
          </div>
          Seu email
        </div>
        <div className='text-sm text-gray-500 ml-8'>
          Qual o melhor email para contato?
        </div>
      </div>
      <div className={`mb-8 ${currentStep >= 4 ? '' : 'opacity-50'}`}>
        <div
          className={`flex items-center ${
            currentStep >= 4 ? 'text-brand-600' : 'text-gray-600'
          } font-semibold mb-2`}
        >
          <div
            className={`w-6 h-6 rounded-full ${
              currentStep >= 4 ? 'text-brand-600' : 'text-gray-600'
            } flex items-center justify-center mr-2`}
          >
            <CheckCircle2Icon />
          </div>
          Segurança de acesso
        </div>
        <div className='text-sm text-gray-500 ml-8'>
          Por favor, crie uma senha segura para acesso
        </div>
      </div>
      <div className={` ${currentStep >= 5 ? '' : 'opacity-50'}`}>
        <div
          className={`flex items-center ${
            currentStep >= 5 ? 'text-brand-600' : 'text-gray-600'
          } font-semibold mb-2`}
        >
          <div
            className={`w-6 h-6 rounded-full ${
              currentStep >= 5 ? 'text-brand-600' : 'text-gray-600'
            } flex items-center justify-center mr-2`}
          >
            <CheckCircle2Icon />
          </div>
          Seu objetivo
        </div>
        <div className='text-sm text-gray-500 ml-8'>O que você procura?</div>
      </div>
    </aside>
  );
}
