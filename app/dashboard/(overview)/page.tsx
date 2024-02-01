// Isso é a rota ao entrar /dashboard (app/dashboard), em vez de só / (app/).
// Assim se cria roteamento, pastas em sequência com pages dentro
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { lusitana } from '@/app/ui/fonts';
// import {
//   fetchCardData,
// } from '../../lib/data'; // Pegando os dados pelo data, que faz conexão com querys ao servidor
import { Suspense } from 'react';
import { LatestInvoicesSkeleton, RevenueChartSkeleton,CardSkeleton } from '@/app/ui/skeletons';
import CardWrapper from '@/app/ui/dashboard/cards';

// Em uma questão de carregar paginas, é dificil saber a resposta correta. Carregar ela inteira gera problemas caso informações demorem. Fazer uma stream 
// para cada componente pode levar a tela poppando ao usuário. Usando wraps para carregar pedaços da página necessita da criação dos wrappers
// Suspense faz com que a o que ele está em volta só seja renderizado caso uma condição seja feita (exemplo, carregar dados). 
// Ele tambem permite o uso de fallback para carregar algo no meio tempo

export default async function Page() {
  // const revenue = await fetchRevenue();
// fetchLatestInvoices()
  // Da maneira acima, ele cria uma cascada de pedidos, já que os proximos só poderão ser feitos após o anterior finalizar
  // Para fazer os pedidos em paralelo, em JS, se usa Promise.all() (Esta em data.ts)
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Suspense fallback={<CardSkeleton />}>
          <CardWrapper />
        </Suspense>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <Suspense fallback={<RevenueChartSkeleton />}>
          <RevenueChart />
        </Suspense>
        <Suspense fallback={<LatestInvoicesSkeleton />}>
          <LatestInvoices />
        </Suspense>
        
      </div>
    </main>
  );
}
