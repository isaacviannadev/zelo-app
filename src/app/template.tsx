import Header from '@/components/header';

type TemplateProps = {
  children: React.ReactNode;
};

export default function Template({ children }: TemplateProps) {
  return (
    <>
      <Header user={null} />
      {children}
    </>
  );
}
