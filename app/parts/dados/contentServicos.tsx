
import CoberturaCompletaImg from "@/public/img/beneficios/foto-1.png";
import AtendimentoRapidoImg from "@/public/img/beneficios/foto-2.png";
import PrecoJustoImg from "@/public/img/beneficios/foto-3.png";
import Assistencia24H from "@/public/img/beneficios/foto-4.png";

export const serviceList = [
    { title: "Plano Essencial", slug: "plano-essencial", img: CoberturaCompletaImg, text: "Proteção básica ideal para quem busca economia e os principais serviços para rodar com segurança.", list: [
        "Cobertura contra roubo e furto",
        "Assistência 24h (guincho, chaveiro, troca de pneu)",
        "Suporte via WhatsApp",
        "Vistoria Simplificada",
    ] },
    { title: "Plano Plus", slug: "plano-plus", img: AtendimentoRapidoImg, text: "Uma proteção mais completa com benefícios extras para quem quer mais segurança no dia a dia.", list: [
        "Todos os benefícios do Plano Essencial",
        "Cobertura para colisão parcial",
        "Carro reserva por até 3 dias",
        "Atendimento prioritário",
    ] },
    { title: "Plano Premium", slug: "plano-premium", img: PrecoJustoImg, text: "Cobertura total e assistência completa para quem não abre mão de tranquilidade e praticidade em qualquer situação.", list: [
        "Todos os benefícios do Plano Plus",
        "Cobertura para perda total",
        "Cobertura contra terceiros",
        "Carro reserva por até 7 dias",
    ] },
    { title: "Plano Família", slug: "plano-familia", img: Assistencia24H, text: "A melhor opção para proteger vários veículos da mesma família com descontos, vantagens e atendimento exclusivo.", list: [
        "Todos os benefícios do Plano Premium",
        "Desconto progressivo por veículo adicional",
        "Central de atendimento exclusiva",
        "Condições especiais para renovação",
    ] },
];
