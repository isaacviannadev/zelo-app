import { X } from 'lucide-react';

type PillProps = {
  value: string;
  remover: () => void;
};
export function Pill({ value, remover }: PillProps) {
  return (
    <span className='flex items-center pl-3 rounded-2xl bg-brand-100/50 text-brand-secondary'>
      {value}
      <X
        className='h-4 w-4 rounded-full p-[2px] ml-1 hover:scale-110 hover:bg-brand-200 transition-all'
        onClick={remover}
      />
    </span>
  );
}
