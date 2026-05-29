"use client";
import Link from "next/link";
import ContentLinks from "../dados/contentLinks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

export default function Banner() {
    return (
        <div className="bg-[url(/img/banner-bg.png)] bg-cover bg-center bg-no-repeat w-full relative">
            <div className="bg-[url(/img/carro.png)] bg-bottom-left bg-cover bg-no-repeat hidden md:block md:absolute h-64 bottom-0 right-0 md:h-[80%] w-full md:w-1/2"></div>
            <div className="container mx-auto px-4">
                <div className="w-full items-center grid md:grid-cols-2 gap-4 md:gap-6 lg:gap-10 justify-center pt-32 md:pb-16">
                    <div className="-mt-[2rem] flex flex-col gap-4 lg:gap-6 items-center md:items-start text-center md:text-left w-full py-8">
                        <h2 className="text-sm md:text-base xl:text-lg 2xl:text-xl text-red-500 font-semibold !leading-tight">Sua proteção começa por aqui</h2>
                        <h2 className="text-2xl md:text-4xl xl:text-5xl 2xl:text-6xl text-white font-bold italic !leading-snug">Seguro veicular sem complicação</h2>
                        <h2 className="text-base md:text-lg xl:text-xl 2xl:text-2xl text-white font-light !leading-tight">Cobertura completa, atendimento rápido e o melhor custo-benefício para você e seu carro.</h2>
                        <div className="flex gap-2 mt-2">
                            <Link href={ContentLinks.whatsapp} target="_blank">
                                <button className="flex flex-row gap-2 items-center rounded-full py-2 px-4 md:py-2 md:px-12 bg-red-500 text-white text-xs md:text-lg uppercase font-bold">
                                    Saiba Mais
                                    <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4 md:w-6 md:h-6" />
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div>
                        <Image src={"/img/carro.png"} alt="Banner" width={500} height={500} className="w-full h-auto block md:hidden object-cover rounded-lg shadow-lg" />
                    </div>
                </div>
            </div>
        </div>
    );
}
