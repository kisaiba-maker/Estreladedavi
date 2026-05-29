import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import redesLista from "../dados/contentRedes";
import Link from "next/link";

export default function RodapeRedesSociais() {
    return (
        <div className="flex  md:flex-row-2 space-x-10 justify-center items-center lg:justify-start">
            {
                redesLista.map((singleLista) => (
                    <div key={singleLista.link}>
                        <Link href={singleLista.link} target="_blank">
                            <FontAwesomeIcon icon={singleLista.icon} className="hover:text-red-500 w-6 h-6 md:w-8 md:h-8  2xl:w-10 2xl:h-10 text-xl md:text-2xl " />
                        </Link>
                    </div >
                ))
            }
        </div>
    )
}