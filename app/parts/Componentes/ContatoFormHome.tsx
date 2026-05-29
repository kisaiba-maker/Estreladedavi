"use client";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import SegurosContato from "./SegurosContato";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export interface ContatoTypes {
    nome: string;
    email: string;
    telefone: string;
    consorcios: string;
    mensagem: string;
}
interface ContactProps {
    home: boolean;
}

export default function ContatoForm({ home }: ContactProps) {
    const { register, handleSubmit, reset, watch } = useForm<ContatoTypes>();
    const [message, setMessage] = useState<string>("");
    const [colorMessage, setColorMessage] = useState<string>("bg-teal-700");

    function onSubmitSend(data: ContatoTypes) {
        if (data.consorcios == null) { setMessage("Selecione qual consórcio você tem interesse."); }
        else if (data.nome == null || data.nome.length < 3) { setMessage("O nome digitado não é válido"); }
        else if (data.email == null || data.email.length < 5) { setMessage("O e-mail digitado não é válido"); }
        else if (data.telefone == null || data.telefone.length < 7) { setMessage("O telefone digitado não é válido"); }
        else if (!data.email.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) { setMessage("O e-mail digitado não é válido"); }
        else {
            setMessage("");
            axios.post("/api/resend", data).then(function (response) {
                if (response.data) {
                    setMessage("Mensagem enviada com sucesso");
                    setColorMessage("bg-teal-700");
                    reset();
                } else {
                    setMessage("Mensagem não enviada, verifique todos os campos e tente novamente");
                    setColorMessage("bg-teal-700");
                }
            }).catch(() => setMessage("HOUVE UM ERRO AO ENVIAR A MENSAGEM"));
        }
    }
    
    return (
        <form onSubmit={handleSubmit(onSubmitSend)}>
            <div className="text-base md:text-3xl font-semibold text-teal-700 mb-4">
                <SegurosContato register={register} watch={watch} />
            </div>
            <h4 className="text-sm md:text-base font-normal text-black"> Insira os dados abaixo para receber o contato de um especialista. </h4>
            <div className="my-4 grid grid-cols-1 gap-4 md:gap-6 2xl:gap-8 ">
                <input {...register("nome")} className={` bg-trueGray-100 text-base lg:text-lg 2xl:text-xl font-light py-3 md:py-3 lg:py-4  block w-full rounded-md md:rounded-lg   placeholder-trueGray-500 outline-none px-4 ` + (home ? " px-4" : "")} placeholder="Nome" />
                <input {...register("telefone")} className={` bg-trueGray-100 text-base lg:text-lg 2xl:text-xl font-light py-3 md:py-3 lg:py-4  block w-full rounded-md md:rounded-lg  placeholder-trueGray-500 outline-none px-4` + (home ? " px-4" : "")} placeholder="Telefone" />
                <input {...register("email")} className={` bg-trueGray-100 text-base lg:text-lg 2xl:text-xl font-light py-3 md:py-3 lg:py-4  block w-full rounded-md md:rounded-lg  placeholder-trueGray-500 outline-none px-4` + (home ? " px-4" : "")} placeholder="E-mail" />
            </div>
            <button className="my-3 flex place-items-center gap-2 md:gap-4 bg-black hover:bg-zinc-800 transition-all rounded-lg text-blue-500 text-xs md:text-xl lg:text-xl px-4 py-2 md:px-6 lg:px-10 lg:py-2 font-normal  ">
                <FontAwesomeIcon icon={faArrowRight} className="w-3 lg:w-4" />
                ENVIAR DADOS
            </button>
            {message != "" ? (
                <div id="response-contact" className="w-full">
                    <div className={"wpcf7-response-output w-full text-white text-sm md:text-base xl:text-lg my-2 p-2 uppercase text-center border-2 border-white border-dashed " + colorMessage} role="alert">{message}</div>
                </div>
            ) : (
                ""
            )}
        </form>
    );
}
