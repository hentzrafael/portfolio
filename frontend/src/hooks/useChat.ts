import Mensagem from "@/model/Mensagem";
import { Id } from "@core/shared";
import useLocalStorage from "./useLocalStorage";
import chat from "@/functions/chat";
import { useState } from "react";
export default function useChat() {
	const [chatId] = useLocalStorage<string>("chatId", Id.gen());
	const [mensagens, setMensagens] = useLocalStorage<Mensagem[]>("mensagens", []);
	const [thinking, setThinking] = useState(false);

	async function adicionarMensagem(texto: string) {
		setThinking(true);
		try {
			const novaMensagem: Mensagem = {
				id: Id.gen(),
				texto,
				autor: "Visitante",
				lado: "direito",
			};
			setMensagens((msgs) => [...msgs, novaMensagem]);

			const resposta = await chat(chatId, novaMensagem);
			if (!resposta) {
				return;
			}

			const mensagemResposta: Mensagem = {
				id: Id.gen(),
				texto: resposta,
				autor: "Assistente",
				lado: "esquerdo",
			};
			setMensagens((msgs) => [...msgs, mensagemResposta]);
		} finally {
			setThinking(false);
		}
	}

	function limparMensagens() {
		setMensagens([]);
	}

	return {
		chatId,
		mensagens,
		thinking,
		adicionarMensagem,
		limparMensagens,
	};
}
