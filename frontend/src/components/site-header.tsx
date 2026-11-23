import { ArrowUpRight, Menu, MessageCircle } from "lucide-react";
import { whatsappHref } from "@/lib/services";

export function SiteHeader() {
	return (
		<>
			<a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
			<header className="topbar">
				<a className="brand" href="/" aria-label="Hentz, início">
					<span className="brand-mark">h<span>.</span></span>
					<span className="brand-name">HENTZ <i>SERVIÇOS DE TI</i></span>
				</a>
				<nav className="nav" aria-label="Navegação principal">
					<a href="/#servicos">Serviços</a>
					<a href="/#projetos">Projetos</a>
					<a href="/#processo">Como funciona</a>
					<a href="/#sobre">Sobre</a>
				</nav>
				<a className="nav-cta" href={whatsappHref} target="_blank" rel="noreferrer">
					<MessageCircle size={17} aria-hidden="true" /> WhatsApp <ArrowUpRight size={15} aria-hidden="true" />
				</a>
				<details className="mobile-menu">
					<summary aria-label="Menu"><Menu size={21} aria-hidden="true" /></summary>
					<nav className="mobile-nav-panel" aria-label="Navegação móvel">
						<a href="/#servicos">Serviços</a>
						<a href="/#projetos">Projetos</a>
						<a href="/#processo">Como funciona</a>
						<a href="/#sobre">Sobre</a>
						<a href={whatsappHref} target="_blank" rel="noreferrer">Fale pelo WhatsApp</a>
					</nav>
				</details>
			</header>
		</>
	);
}
