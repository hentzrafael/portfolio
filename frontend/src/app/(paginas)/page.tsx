import Principal from "@/components/landing/Principal";
import Curriculo from "@/components/curriculo";
import { getTecnologias } from "@/functions/tecnologias";
import Container from "@/components/shared/Container";
import { getProjetos } from "@/functions/projetos";
import Projetos from "@/components/projetos/Projetos";

export default async function Home() {
	const tecnologias = await getTecnologias();
	const projetos = await getProjetos();

	return (
		<div>
			<Principal tecnologias={tecnologias.destaques} />
			<Container className="py-16 flex flex-col items-center gap-12">
				<Projetos titulo="Destaque" lista={projetos.destaques} />
				<Projetos titulo="Mobile" lista={projetos.mobile} />
				<Projetos titulo="Web" lista={projetos.web} />
				<Projetos titulo="Jogos" lista={projetos.jogos} />
				<Curriculo tecnologias={tecnologias.todas} />
			</Container>
		</div>
	);
}
