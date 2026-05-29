import { serviceList } from "../dados/contentServicos";
import Image from "next/image";
import { UseFormRegister, UseFormWatch } from "react-hook-form";
import { ContatoTypes } from "./ContatoFormHome";

interface SegurosContatoProps {
    register: UseFormRegister<ContatoTypes>;
    watch: UseFormWatch<ContatoTypes>;
}

export default function SegurosContato({ register, watch }: SegurosContatoProps) {
    const selectedValue = watch("consorcios"); // Agora o estado vem do React Hook Form

    return (
        <section id="segurosContato">
            <div className="container">
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 lg:gap-4">
                    {serviceList.map((serviceSingle) => (
                        <div key={serviceSingle.slug}>
                            <label className="cursor-pointer">
                                <input {...register("consorcios")} type="radio" value={serviceSingle.title} className="hidden" />
                                <Image src={serviceSingle.img} alt="" className={`w-full aspect-square object-contain p-1 border border-blue-500 rounded-md ${selectedValue === serviceSingle.title ? "scale-110 ring-4 ring-black" : "" }`} />
                                <div className="text-center text-xs font-semibold mt-2 text-black"> {serviceSingle.title} </div>
                            </label>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}