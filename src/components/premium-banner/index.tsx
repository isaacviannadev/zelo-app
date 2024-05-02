import { Card } from '@/components/ui/card';

export default function PremiumBanner() {
  return (
    <Card className='flex items-end justify-end bg-hero-premium bg-cover bg-center h-96 relative overflow-hidden '>
      <div className='bg-brand-600/90 absolute -bottom-20 -right-14 w-80 rounded-full h-40 -rotate-[45deg]'></div>
      <div className='bg-white/80 absolute -bottom-24 -right-11 w-80 rounded-full h-40 -rotate-[25deg]'></div>
      <h1 className='p-4 z-0 text-2xl'>Premium</h1>
    </Card>
  );
}
