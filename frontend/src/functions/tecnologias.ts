import { httpGet } from "./api";
import { Tecnologia } from "@core/tecnologia";
export async function getTecnologias() {
	const tecnologias: Tecnologia[] = await httpGet("tecnologias");
	return {
		todas: tecnologias,
		get destaques() {
			return tecnologias.filter((t) => t.destaque);
		},
	};
}
