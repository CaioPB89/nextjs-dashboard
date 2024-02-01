import { Inter,Lusitana } from "next/font/google";

// Algumas fontes aceitam subsets(tipo continentes) e weight (normal, bold, etc)
export const lusitana = Lusitana({subsets:["latin"], weight:["400","700"]});
export const inter = Inter({subsets: ["latin"]});