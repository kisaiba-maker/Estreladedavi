import Image from "next/image";
import Link from "next/link";
import klsWhite from "@/public/img/credits/kls-full-white.png"

export default function FooterCredits() {
    return (
        <Link href="https://www.agenciakls.com.br/" target="_blank">
        <div className="flex justify-center lg:justify-start gap-3 mt-8">
            <div className="text-sm">
                Desenvolvido por
            </div>
            <Image src={klsWhite} width={64} height={24} className="w-16" alt="Logo da Agência KLS" />
        </div>
        </Link>
    )
}