import HeaderTitle from "@/app/parts/estrutura/headerTitle";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare, faInstagram, faYoutube, } from "@fortawesome/free-brands-svg-icons";
import ContentLinks from "@/app/parts/dados/contentLinks";
import SobreImg from "@/public/img/sobre-quem-somos.png";
import SobreMissao from "@/public/img/sobre-missao-visao.png";
import SobreValores from "@/public/img/sobre-valores.png";
import React from "react";
import Image from "next/image";
import { faArrowRight, faCheckSquare } from "@fortawesome/free-solid-svg-icons";


const valores = [
    "Fé e integridade", "Responsabilidade", "Transparência", "Compromisso", "Agilidade", "Eficiência", "Respeito", "Empatia"
]

const Sobre = () => {
    return (
        <div className="">
            <HeaderTitle title="Quem Somos" />
            <section className="py-8 md:py-10 z-10 relative ">
                <div className="z-20 relative container mx-auto px-4 ">
                    <div className="flex flex-col sm:flex-row md:flex-row-reverse items-center md:gap-4 mb-6">
                        <div className="w-full md:w-1/2 p-4 flex items-center justify-center">
                            <Image src={SobreImg} width={400} height={400} alt="Conceito" className="w-2/3 sm:w-full mx-auto" />
                        </div>
                        <div className="w-full md:w-1/2 p-4 text-gray-500 text-md md:text-lg lg:text-xl text-sm text-justify">
                            <h3 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl lg:mb-6 text-blue-500 font-medium mb-2">Quem Somos</h3>
                            <p className="mb-4">Na Estrela de Davi Proteção Veicular, acreditamos que proteger o seu patrimônio vai muito além de oferecer uma simples cobertura. </p>

                            <p className="mb-4">É sobre estar presente nos momentos difíceis, garantir tranquilidade e construir uma relação de confiança com cada cliente.</p>

                            <p className="mb-4">Com uma equipe preparada e atendimento humanizado, atuamos com responsabilidade, agilidade e excelência, cuidando do que é seu como se fosse nosso.</p>


                            <Link href={ContentLinks.whatsapp}>
                                <button className="flex flex-row gap-2 items-center rounded-full py-2 px-4 md:py-2 md:px-12 mt-8 bg-red-500 text-white text-xs md:text-lg uppercase font-bold">
                                    Saiba Mais
                                    <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4 md:w-6 md:h-6" />
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-blue-900 py-4 md:py-16 z-10 relative bg-[url(/img/sobre-fundo.png)] bg-cover bg-center">
                <div className="z-20 relative container mx-auto px-4 p-4 flex flex-col">
                    <h3 className=" text-center text-white text-md md:text-3xl font-bold uppercase p-4 mb-4">
                        Siga-nos nas Redes Sociais
                    </h3>
                    <div className="flex justify-center items-center gap-6 md:gap-8">
                        <Link href={ContentLinks.facebook} target="_blank" className="text-white hover:text-red-500 transition-all">
                            <FontAwesomeIcon icon={faFacebookSquare} className="w-8 h-auto md:w-12 text-5xl mx-2" />
                        </Link>
                        <Link href={ContentLinks.instagram} target="_blank" className="text-white hover:text-red-500 transition-all">
                            <FontAwesomeIcon icon={faInstagram} className="w-8 h-auto md:w-12 text-5xl mx-2" />
                        </Link>
                        <Link href={ContentLinks.youtube} target="_blank" className="text-white hover:text-red-500 transition-all">
                            <FontAwesomeIcon icon={faYoutube} className="w-10 h-auto md:w-16 text-5xl mx-2" />
                        </Link>
                    </div>
                </div>
            </section>
            <section className="container mx-auto px-4 py-10 md:py-16 z-10 relative flex flex-col gap-2">
                <div className="z-20 relative">
                    <div className="flex flex-col sm:grid sm:grid-cols-2 md:gap-4">
                        <div className=" text-sm md:text-lg lg:text-xl p-4 text-justify">
                            <h3 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl lg:mb-6 text-blue-500 font-medium mb-2">Missão</h3>
                            <p className="mb-4">Proteger vidas e patrimônios com excelência, oferecendo soluções acessíveis, transparentes e seguras para quem busca tranquilidade no trânsito.
                            </p>
                            <h3 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl lg:mb-6 text-blue-500 font-medium mb-2">Visão</h3>
                            <p className="mb-4">Ser referência em proteção veicular no Brasil, reconhecida pela qualidade no atendimento, inovação e compromisso com nossos associados.
                            </p>
                        </div>
                        <div className=" p-4 flex items-center justify-center">
                            <Image src={SobreMissao} width={600} height={350} alt="" className="aspect-video object-cover rounded-xl" />
                        </div>
                    </div>

                    <div className="flex flex-col sm:grid sm:grid-cols-2 md:gap-4">
                        <div className=" text-sm md:text-lg lg:text-xl p-4 text-justify">
                            <h3 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl lg:mb-6 text-blue-500 font-medium mb-2">Valores</h3>
                            <p className="mb-4">Buscar os objetivos pautados nos seguintes valores:</p>
                            <div className="grid md:grid-cols-2 gap-3 md:gap-4 mt-5 md:mt-10">
                                {valores.map((valor) => (
                                    <div key={valor}>
                                        <div className="flex gap-2 items-center">
                                            <div className="w-10"><FontAwesomeIcon icon={faCheckSquare} className="text-red-500 h-5 w-5 " /></div>
                                            <p className="text-sm md:text-base lg:text-lg 2xl:text-xl font-normal  h-full ">
                                                {valor}
                                            </p>
                                        </div>
                                    </div>
                                ))
                                }
                            </div>
                        </div>
                        <div className=" p-4 flex items-center justify-center">
                            <Image src={SobreValores} width={600} height={350} alt="" className="aspect-video object-cover rounded-xl" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
export default Sobre;
