type DotsNavProps = {
  currentStep: number;
  totalSteps: number;
};

export default function DotsNav({ currentStep, totalSteps }: DotsNavProps) {
  const currentClass =
    'w-9 h-2 rounded-4xl bg-brand-600 transition-all duration-300';

  return (
    <div className='flex gap-2'>
      {Array.from({ length: totalSteps }).map((_, index) => (
        <div
          key={`dot-${index + 1}`}
          className={`w-2 h-2 rounded-full ${
            currentStep >= index + 1 ? 'bg-brand-600' : 'bg-gray-300'
          } ${currentStep === index + 1 ? currentClass : ''}
            `}
        />
      ))}
    </div>
  );
}
