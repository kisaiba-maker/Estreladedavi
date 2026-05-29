import Image from "next/image";

export default function Sobre() {
    return (
        <div className="bg-blue-920 py-[3rem] xl:py-[4rem] relative">
            <div className="bg-[url(/img/ferramenta.png)] bg-center bg-cover  opacity-100 md:opacity-15 lg:opacity-100 md:absolute h-64 md:h-full w-full md:w-1/2 -mt-[3rem] md:-my-[3rem] xl:-my-[4rem]">
                <Image src="/img/elemento-sobre.png" alt="Ferramenta" width={500} height={500} className="hidden md:block absolute top-0 -right-10 w-auto h-full object-cover" />
                <Image src="/img/sobre-elemento-2.png" alt="Elemento Decorativo" width={500} height={500} className="mx-auto lg:mx-0 lg:my-0 relative lg:absolute -top-16 md:-top-12 lg:top-[30%] lg:right-0 w-32 lg:w-48 object-cover" />  
            </div>
            <div className="container mx-auto px-4 relative">
                <div className="grid grid-cols-1 lg:grid-cols-2 justify-center p-2 lg:p-0">
                    <div className="col-start-2 md:pl-6">
                        <h3 className="text-white mb-4 text-lg md:text-xl lg:text-3xl font-semibold text-center lg:text-start uppercase">Cuidar do seu veículo <br className="hidden md:block" /> é nossa missão</h3>
                        <div className="text-xs md:text-sm lg:text-base my-6 text-white font-light ">
                            <p className="mb-4">A Estrela de Davi Proteção Veicular nasceu com o propósito de oferecer muito mais do que uma cobertura automotiva: oferecemos confiança, agilidade e compromisso com a sua segurança. </p>

                            <p className="mb-4">Com uma gestão transparente, atendimento humanizado e assistência 24h, nossa missão é proteger o que é seu com excelência e valores sólidos. Somos guiados pela responsabilidade e pela fé que carrega nosso nome, cuidando do seu veículo como se fosse nosso.</p>
                        </div>
                        <div className="grid grid-cols-2 gap-4 text-white text-center">
                            <div className="bg-blue-950 flex flex-col items-center justify-center p-4">
                                <h4 className="text-lg md:text-2xl xl:text-3xl font-semibold">+3.000</h4>
                                <p className="text-xs md:text-sm md:w-3/4 lg:w-2/3">Veículos Protegidos</p>
                            </div>
                            <div className="bg-blue-950 flex flex-col items-center justify-center p-4">
                                <h4 className="text-lg md:text-2xl xl:text-3xl font-semibold">+20</h4>
                                <p className="text-xs md:text-sm md:w-3/4 lg:w-2/3">Cidades Atendidas</p>
                            </div>
                            <div className="bg-blue-950 flex flex-col items-center justify-center p-4">
                                <h4 className="text-lg md:text-2xl xl:text-3xl font-semibold">30</h4>
                                <p className="text-xs md:text-sm md:w-3/4 lg:w-2/3">minutos ou menos de resposta</p>
                            </div>
                            <div className="bg-blue-950 flex flex-col items-center justify-center p-4">
                                <h4 className="text-lg md:text-2xl xl:text-3xl font-semibold">97%</h4>
                                <p className="text-xs md:text-sm md:w-3/4 lg:w-2/3">Veículos Protegidos</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
