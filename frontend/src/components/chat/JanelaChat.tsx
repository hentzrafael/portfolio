"use client";

import { IconMessages, IconReload, IconSend } from "@tabler/icons-react";
import useChat from "@/hooks/useChat";
import { useEffect, useRef, useState } from "react";
import BalaoMensagem from "./BalaoMensagem";
import Image from "next/image";

export default function JanelaChat() {
    const { limparMensagens, mensagens, adicionarMensagem, thinking } = useChat();
    const [texto, setTexto] = useState("");
    const fimChatRef = useRef<HTMLDivElement>(null);


    function enviarMensagem() {
        adicionarMensagem(texto);
        setTexto("");
    }

    useEffect(() => {
        fimChatRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [mensagens]);

    return (
        <div className="flex flex-col bg-zinc-300 rounded-2xl text-black overflow-hidden border-none">
            <div className="flex justify-between items-center bg-white p-4">
                <h2 className="text-xl font-bold">Olá visitante</h2>
                <IconReload size={24} className="text-black cursor-pointer" onClick={limparMensagens} />
            </div>
            {
                mensagens.length === 0 ? (
                    <div className="flex flex-col justify-center items-center min-h-[400px] sm:min-h-[500px]">
                        <IconMessages size={230} stroke={0.2} className="text-black/30" />
                        <span className="text-2xl">Vamos conversar?</span>
                    </div>
                ) : (
                    <div className="flex flex-col p-2 gap-2 min-h-[400px] sm:min-h-[500px] max-h-[400px] sm:max-h-[500px] overflow-y-scroll">
                        {mensagens.map((mensagem, i) => {
                            const mesmoAutor = i > 0 && mensagens[i - 1].autor === mensagem.autor;
                            return <BalaoMensagem key={mensagem.id} mensagem={mensagem} omitirAutor={mesmoAutor} />
                        })}
                        {thinking && (
                            <Image src={"/pensando.gif"} alt="Pensando" width={50} height={50} />
                        )}
                        <div ref={fimChatRef} />
                    </div>
                )
            }
            <div className="h-px bg-zinc-400 mt-4" />
            <div className="flex items-center gap-2 p-1 rounded-full h-10 bg-white m-4">
                <input
                    type="text"
                    value={texto}
                    className="flex-1 bg-transparent h-8 outline-none pl-3"
                    onChange={(e) => setTexto(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") enviarMensagem();
                    }}
                />
                <button className="flex justify-center items-center bg-red-500 min-w-8 min-h-8 rounded-full"
                    onClick={enviarMensagem}
                >
                    <IconSend size={18} className="text-white" />
                </button>
            </div>
        </div>
    );
}