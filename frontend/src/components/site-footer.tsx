import { ArrowUpRight, MessageCircle } from "lucide-react";
import { whatsappHref } from "@/lib/services";

export function SiteFooter() {
	return (
		<footer className="footer">
			<a className="brand footer-brand" href="/" aria-label="Hentz, início">
				<span className="brand-mark">h<span>.</span></span>
				<span className="brand-name">HENTZ <i>SERVIÇOS DE TI</i></span>
			</a>
			<span>Desenvolvimento de software com Rafael Hentz.</span>
			<nav className="footer-links" aria-label="Links de contato e redes">
				<a href={whatsappHref} target="_blank" rel="noreferrer"><MessageCircle size={17} aria-hidden="true" /> WhatsApp</a>
				<a href="https://github.com/hentzrafael" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={14} aria-hidden="true" /></a>
				<a href="https://www.linkedin.com/in/hentzrafael/" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={14} aria-hidden="true" /></a>
			</nav>
			<small>© {new Date().getFullYear()} Hentz Serviços de TI</small>
		</footer>
	);
}
