import "@/app/ui/global.css"; //Importando o arquivo CSS global UI
// Tailwind é um framework CSS que permite escrever classes de utilidade direto no seu markup TSX
// Exemplo, na page.tsx, temos o uso de tailwind com as classNames no elementos do componente Page
import { inter } from "@/app/ui/fonts";
import { Metadata } from "next";
// Importando as fontes para este arquivo to-level
// Por aplicar a fonte no body deste arquivo, a fonte geral foi alterada

// Esse arquivo RootLayout é o top level da aplicação

// Metdadados
export const metadata: Metadata = {
  title: {
    template: "%s | Acme Dashboard",
    default: "Acme Dasboard"
  },
  description: 'The official Next.js Course Dashboard, built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
