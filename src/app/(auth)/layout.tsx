import Header from '@/components/header';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header user={null} />
      {children}
    </>
  );
}
