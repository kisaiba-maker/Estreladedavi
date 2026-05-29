"use client";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import "@splidejs/react-splide/css";
import React from "react";
import { beneficiosList } from "@/app/parts/dados/contentBeneficios";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import ContentLinks from "../dados/contentLinks";
import Link from "next/link";

export default function Seguro() {
    return (
        <div className="h-full py-6 lg:py-20 relative" id="seguro">
            <div className="container mx-auto px-4 relative  ">
                <div className="mb-12 text-center md:w-1/3 mx-auto">
                    <h2 className="text-zinc-default font-bold text-xl sm:text-3xl lg:text-4x text-center">Porque escolher a Estrela de Davi Seguros?</h2>
                    <p className="text-sm md:text-base font-normal italic text-red-600 my-4">Conheça os diferenciais que fazem a nossa proteção ser  a escolha certa para o seu veículo.</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 px-6 md:px-0 mb-8">
                    {
                        beneficiosList.map((beneficioSingle) => (
                            <Link key={beneficioSingle.slug} href={ContentLinks.whatsapp} target="_blank">
                                <div key={beneficioSingle.slug} className="w-full flex flex-col justify-between h-[21rem] md:h-full bg-white border-gray-100 border-1 text-black break-words text-sm sm:text-xl md:text-2xl lg:text-4xl rounded-xl md:rounded-3xl overflow-hidden shadow-md">
                                    <Image src={beneficioSingle.img} alt="" className='w-full' />
                                    <div className="px-2 py-2 md:px-4 md:py-5  ">
                                        <h4 className="text-sm md:text-base font-semibold text-blue-600 text-center pb-3">{beneficioSingle.title}</h4>
                                        <p className="text-xs md:text-sm font-normal h-full mb-3 text-center">{beneficioSingle.text}</p>
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
        </div>
    );
}
