"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/public/img/logo.png";
import Image from "next/image";
import ContentLinks from "../dados/contentLinks";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function Menu() {
    const namePath = usePathname();

    const [menuActive, setMenuActive] = useState("");
    const [menuNavigation, setMenuNavigation] = useState("-right-full");

    const menuBurger = () => {
        const currentActive = menuActive == "" ? "is-active" : "";
        const currentNavigation = menuActive == "" ? "right-0" : "-right-full";
        setMenuActive(currentActive);
        setMenuNavigation(currentNavigation);
    };

    return (
        <>
            <header className={ "w-full py-6 md:py-10 z-50 " + (namePath == "/" ? " absolute " : " relative bg-blue-900 bg-[url(/img/banner-bg.png)]") }>
                <div className="container mx-auto px-4">
                    <div className="flex flex-row justify-between items-center h-auto">
                        <div className="logo z-20 ">
                            <Link href="/">
                                <Image src={Logo} width={168} height={112} className="block h-[2rem] xl:h-[4rem] md:bottom-2 lg:-bottom-0 xl:-bottom-0  2xl:-bottom-2 w-auto " alt="Logo - Persevere Consórcios"
                                />
                            </Link>
                        </div>
                        <nav className="flex items-center gap-x-4 lg:gap-x-10  ">
                            <ul className="hidden md:flex gap-x-[2rem] lg:gap-x-[2.5rem] xl:gap-x-10 2xl:gap-x-[3rem] text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl font-medium items-center uppercase">
                                <li>
                                    <Link href="/" className={ "text-white hover:text-blue-500" + (namePath == "/" ? " py-4 !text-red-500 " : "") } >
                                        Início
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/sobre" className={ "text-white hover:text-blue-500" + (namePath == "/sobre" ? " py-4 !text-red-500" : "") } >
                                        Sobre
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/servicos" className={ "text-white hover:text-blue-500" + (namePath == "/servicos" ? " py-4 !text-red-500" : "") } >
                                        Serviços
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contato" className={ "text-white hover:text-blue-500" + (namePath == "/contato" ? " py-4 !text-red-500" : "") } >
                                        Contato
                                    </Link>
                                </li>
                                <li>
                                    <Link href={ContentLinks.whatsapp} target="_blank">
                                        <button className="lex flex-row gap-2 justify-center rounded-full py-2 px-4 md:py-2 lg:px-8 bg-red-500 hover:bg-red-600 text-white items-center text-xs md:text-lg uppercase font-light">
                                            <FontAwesomeIcon
                                                icon={faPhone}
                                                className="w-3 h-3 md:w-6 md:h-6 mr-2"
                                            />
                                            <span><span className="hidden xl:inline">Entre em</span> contato</span>
                                        </button>
                                    </Link>
                                </li>
                            </ul>
                            <div className="flex items-center gap-x-4 md:hidden">
                                <div className="z-20 block md:hidden " onClick={menuBurger}>
                                    <div className={"hamburger hamburger--squeeze " + menuActive}>
                                        <div className="hamburger-box">
                                            <div className="hamburger-inner"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>
            <nav className={ "block md:hidden z-40 w-full h-screen bg-blue-900 fixed top-0 px-6 pt-28 transition-all duration-300 ease-in-out " + menuNavigation } >
                <div className="container mx-auto">
                    <ul className="flex flex-col gap-5 xl:gap-10 text-xl font-medium">
                        <li>
                            <Link onClick={menuBurger} href="/" className={ "text-white" + (namePath == "/" ? " border-b-2 py-1 border-red-500" : "") }>
                                Início
                            </Link>
                        </li>
                        <li>
                            <Link onClick={menuBurger} href="/sobre" className={ "text-white" + (namePath == "/sobre" ? " border-b-2 py-1 border-red-500" : "") }>
                                Sobre
                            </Link>
                        </li>

                        <li>
                            <Link onClick={menuBurger} href="/servicos" className={ "text-white" + (namePath == "/servicos" ? " border-b-2 py-1 border-red-500" : "") }>
                                Serviços
                            </Link>
                        </li>
                        <li>
                            <Link onClick={menuBurger} href="/contato" className={ "text-white" + (namePath == "/contato" ? " border-b-2 py-1 border-red-500" : "") }>
                                Contato
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}
