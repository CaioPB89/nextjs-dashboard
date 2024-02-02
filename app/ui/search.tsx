'use client';

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useSearchParams,usePathname,useRouter } from 'next/navigation';
import { useDebouncedCallback } from "use-debounce";

export default function Search({ placeholder }: { placeholder: string }) {
  const searchParams =  useSearchParams();
  const pathNme = usePathname();
  const {replace} = useRouter();
  
  const handleSearch = useDebouncedCallback(( term) =>{
    console.log(`Searching...${term}`);
    // Em aplicações grandes, é melhor limitar chamadas de função.
    // EStá pratica se chama Debouncing. Possui -> Trigger Event, Wait, Execution
    const params = new URLSearchParams(searchParams);
    params.set("page","1");
    if (term){
      params.set("query", term); // query=input
    }else{
      params.delete("query"); // se vazio, remova query
    }
    replace(`${pathNme}?${params.toString()}`); //toString transforma o input do user em um formato URL friendly. Esse replace faz o update da URL par apossui o input do user
  }, 300); // Roda a função só 300 ml que o user parou de digitar
    // ex: /dashboard/invoices?query=lee
    // Sem recarregar a página, graças ao sistema de navegação client side do Next

  return (
    <div className="relative flex flex-1 flex-shrink-0">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
        placeholder={placeholder}
        // Ao ter uma alteração, faça algo com o novo valor
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        defaultValue={searchParams.get("query")?.toString()}
      />
      <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
    </div>
  );
}
