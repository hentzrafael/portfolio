import { Controller, Get, Param } from "@nestjs/common";
import { ProjetoPrisma } from "./projeto.prisma";
import { Projeto } from "@core";

@Controller("projetos")
export class ProjetoController {
	constructor(private readonly repo: ProjetoPrisma) {}

	@Get()
	async findAll(): Promise<Projeto[]> {
		return this.repo.findAll();
	}

	@Get(":id")
	async findOne(@Param("id") id: string): Promise<Projeto | null> {
		return this.repo.findOne(Number(id));
	}
}
