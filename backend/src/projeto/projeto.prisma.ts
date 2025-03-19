import { Projeto } from "@core";
import { Injectable } from "@nestjs/common";
import { PrismaProvider } from "src/db/prisma.provider";

@Injectable()
export class ProjetoPrisma {
	constructor(private readonly repo: PrismaProvider) {}

	async findAll(): Promise<Projeto[]> {
		return this.repo.projeto.findMany() as any;
	}

	async findOne(id: number): Promise<Projeto | null> {
		return this.repo.projeto.findUnique({
			where: {
				id,
			},
			include: {
				tecnologias: true,
			},
		}) as any;
	}
}
