import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import redesLista from "../dados/contentRedes";
import Link from "next/link";

interface PropsRedesSociais {
    classColor: string;
    classHoverColor: string;
} 

export default function RedesSociais(props: PropsRedesSociais) {
    const iconColor = props.classColor;
    const hoverColor = props.classHoverColor;
    return (
        <div className={` ${iconColor} flex md:flex-row-2 space-x-10 justify-center items-center lg:justify-start `}>
            {
                redesLista.map((singleLista) => (
                    <div key={singleLista.link}>
                        <Link href={singleLista.link} target="_blank">
                            <FontAwesomeIcon icon={singleLista.icon} className={`w-6 h-6 md:w-6 md:h-6  2xl:w-8 2xl:h-8  ${hoverColor}  `} />
                        </Link>
                    </div >
                ))
            }
        </div>
    )
}