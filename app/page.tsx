import Banner from "@/app/parts/Home/Banner";
import Servicos from "@/app/parts/Home/Beneficios";
import Sobre from "@/app/parts/Home/Sobre";
import Contato from "@/app/parts/Home/Contato";

export default function Home() {
    return (
        <div>
            <Banner />
            <Servicos />
            <Sobre />
            <Contato />
        </div>
    );
}
