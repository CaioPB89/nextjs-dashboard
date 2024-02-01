// Loading é uma file Next.js especial, que roda como um Fallback durante carregamento de conteudo

import DashboardSkeleton from "../../ui/skeletons";
// Durante o fetch das informações, vai mostrar este componente (streaming)
export default function Loading(){
    // ESqueleto da página
    return <DashboardSkeleton />;
}