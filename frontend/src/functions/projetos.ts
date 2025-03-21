import { Projeto, Tipo } from "@core";
import { httpGet } from "./api";

export async function getProjetos() {
    const projetos = await httpGet("/projetos");
    return {
        todos: projetos,
        get mobile() {
            return projetos.filter((projeto: Projeto) => projeto.tipo === Tipo.MOBILE);
        },
        get web() {
            return projetos.filter((projeto: Projeto) => projeto.tipo === Tipo.WEB);
        },
        get desktop() {
            return projetos.filter((projeto: Projeto) => projeto.tipo === Tipo.DESKTOP);
        },
        get jogos() {
            return projetos.filter((projeto: Projeto) => projeto.tipo === Tipo.JOGO);
        },
        get destaques() {
            return projetos.filter((projeto: Projeto) => projeto.destaque);
        }
    };
}

export async function getProjeto(id: string): Promise<Projeto | null> {
    const projeto = await httpGet(`/projetos/${id}`);
    return projeto;
}
