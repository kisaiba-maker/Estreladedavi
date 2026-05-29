import ContentLinks from "@/app/parts/dados/contentLinks";
import { serviceList } from "@/app/parts/dados/contentServicos";
import HeaderTitle from "@/app/parts/estrutura/headerTitle";
import { faArrowRight, faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

const Servicos = () => {
    return (
        <>
            <HeaderTitle title="Consórcios" />
            <div className="container mx-auto px-4 relative h-full py-8 md:py-16">
                <div className="mb-12 text-center">
                    <h2 className="text-zinc-default font-bold text-xl sm:text-3xl lg:text-4x text-center">Proteção completa para você dirigir com tranquilidade</h2>
                    <p className="text-sm md:text-base font-normal italic text-red-600 my-4">Oferecemos soluções sob medida para garantir sua segurança e tranquilidade: roubo, colisão, assistência 24h, carro reserva e muito mais. Tudo com agilidade, confiança e atendimento humanizado.</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 px-6 md:px-0 mb-8">
                    {
                        serviceList.map((serviceSingle, indexService) => (
                            <Link key={serviceSingle.slug} href={ContentLinks.whatsapp} target="_blank">
                                <div className="w-full flex flex-col justify-between h-[21rem] md:h-full bg-white border-gray-100 border-1 text-black break-words text-sm sm:text-xl md:text-2xl lg:text-4xl rounded-xl md:rounded-3xl overflow-hidden shadow-md">
                                    <Image src={serviceSingle.img} alt="" className='w-full' />
                                    <div className="px-2 py-2 md:px-4 md:py-5  ">
                                        <h4 className="text-sm md:text-base font-semibold text-blue-600 text-center pb-3">{serviceSingle.title}</h4>
                                        <p className="text-[0.75rem] md:text-xs font-normal text-zinc-400 mb-3 text-center">{serviceSingle.text}</p>
                                        <hr className="border border-zinc-100" />
                                        <div className="flex flex-col gap-4 md:gap-6 my-4 md:my-6">
                                            {serviceSingle.list.map((valor, indexList) => (
                                                <div key={indexList} className="flex gap-2 items-start">
                                                    <FontAwesomeIcon icon={faCheckSquare} className={`text-base h-4 w-4` + (indexService > 0 && indexList > 0 ? ` text-blue-500 ` : ` text-red-500 `)} />
                                                    <div className={`text-[0.75rem] md:text-xs ` + (indexService > 0 && indexList > 0 ? `font-semibold` : `font-normal`)}>
                                                        {valor}
                                                    </div>
                                                </div>
                                            ))
                                            }
                                        </div>
                                        <hr className="border border-zinc-100" />
                                    </div>
                                    <button className="w-full flex gap-2 items-center justify-center mb-6 text-red-500 text-xs md:text-base">
                                        Saiba Mais
                                        <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4 md:w-6 md:h-6" />
                                    </button>
                                </div>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </>
    );
};
export default Servicos;
