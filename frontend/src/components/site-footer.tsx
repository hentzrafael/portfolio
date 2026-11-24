import { ArrowUpRight } from "lucide-react";
import { whatsappHref } from "@/lib/services";

export function SiteFooter() {
	return (
		<footer className="rd-wrap rd-footer">
			<a className="rd-brand" href="/#inicio" aria-label="Hentz, início">hentz<span aria-hidden="true" /></a>
			<span>Hentz Serviços de TI · Rafael Hentz</span>
			<nav aria-label="Links de contato">
				<a href={whatsappHref} target="_blank" rel="noreferrer">WhatsApp <ArrowUpRight size={14} aria-hidden="true" /></a>
				<a href="https://github.com/hentzrafael" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={14} aria-hidden="true" /></a>
				<a href="https://www.linkedin.com/in/hentzrafael/" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={14} aria-hidden="true" /></a>
			</nav>
		</footer>
	);
}
