import SideNav from '../ui/dashboard/sidenav';
// Qualquer componentes importado pode fazer parte do layout
// Estas propriedades children, podem ser tanto paginas como outros layouts. Neste caso, as paginas dentro de dashboard (page de costumers e invoices) 
// vão ser colocadas automaticamente neste <Layout />

// O motivo que a fonte continua igual do resto é porque qualquer coisa colocada no RootLayout vai ser usada por todas 
// as paginas, apesar do layout na dashboard possuir coisas unicas
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}
