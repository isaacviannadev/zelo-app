import Sidebar from './components/sidebar';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='flex flex-col flex-1 bg-gray-100  dark:bg-gray-900'>
      <main className='flex-1 flex '>
        <Sidebar />

        <div className='flex-1 p-6 '>{children}</div>
      </main>
    </div>
  );
}
