"use server";
import Mensagem from "@/model/Mensagem";

export default async function chat(chatId: string, mensagem: Mensagem): Promise<string | null> {
    const webhookUrl = process.env.CHAT_WEBHOOK;

    if (!webhookUrl) {
        return null;
    }

    const res = await fetch(webhookUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            chatId,
            mensagem: mensagem.texto,
        }),
    });

    if (!res.ok) {
        return null;
    }
    const msg = await res.json();

    return msg.resposta;
}
