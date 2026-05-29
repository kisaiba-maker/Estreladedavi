import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import ContentLinks from "../dados/contentLinks"

export default function ContatoWhatsApp() {
    return (
        <a href={ContentLinks.whatsapp} target="_blank">
            <button className="rounded-lg text-contato text-xs px-6 md:text-2xl md:py-3 md:px-8 bg-indigo-500 w-full">
                <div className="flex items-center py-4 gap-x-6">
                    <FontAwesomeIcon className="w-7 h-7 " icon={faWhatsapp} />
                    Envie-nos uma mensagem
                </div>
            </button>
        </a>
    )
}