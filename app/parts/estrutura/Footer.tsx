
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import ContentLinks from "../dados/contentLinks";
import Image from "next/image";
import logoWhite from "@/public/img/logo.png";
import FooterCredits from "./FooterCredits";
import RodapeRedesSociais from "../Componentes/RodapeRedesSociais";

export default function Rodape() {
    return (
        <footer className="bg-blue-900 py-10 relative ">
            <div className="container mx-auto px-4  text-white ">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 lg:text-left pb-6 lg:gap-x-8 text-center lg:place-items-start ">
                    <Image src={logoWhite} alt="" className=" mx-auto my-4" />
                    <div className=" items-end justify-center my-3 ">
                        <div className="mb-4">
                            <h3 className=" text-red-500 md:mb-2 text-lg md:text-xl font-medium ">Menu</h3>
                        </div>
                        <ul className="text-white flex flex-col items-center  lg:items-start text-xs font-normal 2xl:text-base">
                            <li className="py-2">
                                <Link href="/" className="text-white hover:text-red-500 ">Início</Link>
                            </li>
                            <li className="py-2">
                                <Link href="/sobre" className="text-white hover:text-red-500">Quem Somos</Link>
                            </li>
                            <li className="py-2">
                                <Link href="/servicos" className="text-white hover:text-red-500">Servicos</Link>
                            </li>
                            <li className="py-2">
                                <Link href="/contato" className="text-white hover:text-red-500">Contato</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="my-3 break-words text-wrap ">
                        <div className="mb-4">
                            <h3 className=" text-red-500 md:mb-2 text-lg md:text-xl font-medium">Contatos</h3>
                        </div>
                        <ul className="text-white flex flex-col items-center md:items-start text-xs font-normal 2xl:text-base">
                            <li className="py-2">
                                <Link href={ContentLinks.email} target="_blank" className="text-white hover:text-red-500 transition-all flex gap-x-1 md:gap-x-2 items-center md:items-start  ">
                                    <FontAwesomeIcon icon={faEnvelope} className="w-3 h-3 md:w-4 md:h-4 2xl:w-5 2xl:h-5" />
                                    <div className="break-all">{ContentLinks.emailShow}</div>
                                </Link>
                            </li>
                            <li className="py-2">
                                <Link href={ContentLinks.phone} target="_blank" className="text-white hover:text-red-500 transition-all flex gap-x-1 md:gap-x-2  items-center md:items-start ">
                                    <FontAwesomeIcon icon={faPhone} className="w-3 h-3 md:w-4 md:h-4  2xl:w-5 2xl:h-5" />
                                    <div className="break-all">{ContentLinks.phoneShow}</div>
                                </Link>
                            </li>
                            <li className="py-2">
                                <Link href={ContentLinks.whatsapp} target="_blank" className="text-white hover:text-red-500 transition-all flex gap-x-1 md:gap-x-2  items-center md:items-start ">
                                    <FontAwesomeIcon icon={faWhatsapp} className="w-3 h-3 md:w-4 md:h-4  2xl:w-5 2xl:h-5" />
                                    <div className="break-all">{ContentLinks.whatsappShow}</div>
                                </Link>
                            </li>
                            <li className="py-2">
                                <Link href={ContentLinks.maps} target="_blank" className="text-white hover:text-red-500 transition-all flex gap-x-1 md:gap-x-2  items-center md:items-start ">
                                    <FontAwesomeIcon icon={faLocationDot} className="w-3 h-3 md:w-4 md:h-4  2xl:w-5 2xl:h-5" />
                                    <div className="break-all">{ContentLinks.address1}</div>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="my-3 md:col-span-3 lg:col-span-1 ">
                        <div className="mb-4">
                            <h3 className=" text-red-500 md:mb-2 text-lg md:text-xl font-medium">Redes sociais</h3>
                        </div>
                        <div>
                            <RodapeRedesSociais />
                        </div>
                        <FooterCredits />
                    </div>
                </div>
                <div>
                    <p className=" text-sm  text-zinc-400 text-center ">
                        Estrela de Davi - Todos os direitos reservados.
                    </p>
                </div>
            </div>
        </footer>
    )
}