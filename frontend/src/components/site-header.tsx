import { ArrowUpRight, Menu, MessageCircle } from "lucide-react";
import { whatsappHref } from "@/lib/services";

export function SiteHeader() {
	return (
		<>
			<a className="rd-skip-link" href="#conteudo">Pular para o conteúdo</a>
			<header className="rd-wrap rd-header">
				<a className="rd-brand" href="/#inicio" aria-label="Hentz, início">hentz<span aria-hidden="true" /></a>
				<nav className="rd-nav" aria-label="Navegação principal">
					<a href="/#projetos">Projetos</a>
					<a href="/#servicos">Serviços</a>
					<a href="/#processo">Processo</a>
					<a href="/#sobre">Sobre</a>
				</nav>
				<div className="rd-header-actions">
					<span className="rd-language" lang="pt-BR">PT-BR</span>
					<a className="rd-button rd-button-header" href={whatsappHref} target="_blank" rel="noreferrer" aria-label="Falar pelo WhatsApp">
						<MessageCircle size={17} aria-hidden="true" /><span className="rd-header-label-long">Falar pelo WhatsApp</span><span className="rd-header-label-short" aria-hidden="true">WhatsApp</span> <ArrowUpRight size={15} aria-hidden="true" />
					</a>
				</div>
				<details className="rd-mobile-menu">
					<summary aria-label="Menu"><Menu size={21} aria-hidden="true" /></summary>
					<nav className="rd-mobile-panel" aria-label="Navegação móvel">
						<a href="/#projetos">Projetos</a>
						<a href="/#servicos">Serviços</a>
						<a href="/#processo">Processo</a>
						<a href="/#sobre">Sobre</a>
						<a href={whatsappHref} target="_blank" rel="noreferrer">Falar pelo WhatsApp</a>
					</nav>
				</details>
			</header>
		</>
	);
}
