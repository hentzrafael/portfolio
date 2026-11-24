import { ArrowDownRight, ArrowRight, ArrowUpRight, Check, MessageCircle } from "lucide-react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { services, whatsappHref } from "@/lib/services";

const projects = [
	{
		kind: "PROJETO PESSOAL",
		title: "Finanças com mais clareza",
		description: "Aplicação pessoal para acompanhar contas corrente e poupança, registrar movimentações e transferir valores entre contas.",
		stack: ["Next.js", "TypeScript", "Web app"],
		href: "https://github.com/hentzrafael/piggy-bank",
		art: "finance",
	},
	{
		kind: "PESQUISA ACADÊMICA",
		title: "Dados que revelam mudanças",
		description: "Pesquisa aplicada a imagens de satélite e visão computacional para estimar biomassa acima do solo.",
		stack: ["U-Net", "ViT", "Sensoriamento remoto"],
		href: "https://github.com/hentzrafael/unet-vit-carbon-estimate",
		art: "biomass",
	},
	{
		kind: "PESQUISA ACADÊMICA",
		title: "Visão computacional em campo",
		description: "Projeto de pesquisa sobre detecção de mineração ilegal em imagens, usando classificação com ResNet50.",
		stack: ["Python", "ResNet50", "Visão computacional"],
		href: "https://github.com/hentzrafael/resnet50-illegal-mining",
		art: "vision",
	},
];

const processSteps = [
	{ number: "01", title: "Entender", description: "Alinhamos seus objetivos, seu público e o que precisa funcionar." },
	{ number: "02", title: "Desenhar o caminho", description: "Organizamos escopo, prioridades e uma proposta de solução." },
	{ number: "03", title: "Construir e revisar", description: "Você acompanha a evolução e valida o produto durante o trabalho." },
	{ number: "04", title: "Publicar e acompanhar", description: "Colocamos no ar e planejamos os próximos passos juntos." },
];

export default function Home() {
	const websiteService = services[0];
	const customService = services[1];
	const otherServices = services.slice(2);

	return (
		<>
			<SiteHeader />
			<main id="conteudo" className="rd-main">
				<section className="rd-wrap rd-hero" id="inicio">
					<div className="rd-hero-copy">
						<div className="rd-eyebrow">HENTZ SERVIÇOS DE TI · RAFAEL HENTZ</div>
						<h1>Seu próximo site pode fazer mais pelo seu negócio.</h1>
						<p>Crio sites rápidos, claros e sob medida — e conecto a experiência aos sistemas que sua empresa já usa.</p>
						<div className="rd-actions">
							<a className="rd-button rd-button-lime" href={whatsappHref} target="_blank" rel="noreferrer">
								Conversar sobre meu projeto <ArrowUpRight size={17} aria-hidden="true" />
							</a>
							<a className="rd-button rd-button-outline" href="#projetos">Explorar trabalhos <ArrowDownRight size={17} aria-hidden="true" /></a>
						</div>
						<div className="rd-proof-line">Contato direto <span>·</span> Escopo claro <span>·</span> Código feito para evoluir</div>
					</div>
					<div className="rd-hero-visual" aria-hidden="true">
						<div className="rd-hero-orbit" />
						<div className="rd-annotation">feito sob medida</div>
						<div className="rd-browser">
							<div className="rd-browser-bar"><i /><i /><i /><span /></div>
							<div className="rd-mock-nav"><b>CASA NORTE</b><span>SOLUÇÕES&nbsp;&nbsp; SOBRE&nbsp;&nbsp; CONTATO</span></div>
							<div className="rd-mock-body">
								<div className="rd-mock-copy">
									<small>PROJETOS PARA SUA CASA</small>
									<strong>Mais espaço para viver bem.</strong>
									<p>Um jeito simples de encontrar a solução certa para o seu próximo projeto.</p>
									<b>Conheça nossos serviços <ArrowRight size={11} /></b>
								</div>
								<div className="rd-mock-image" />
							</div>
						</div>
						<div className="rd-integration-chip">↗ Integrações <span>site · agenda · CRM</span></div>
					</div>
				</section>

				<section className="rd-wrap rd-trust" aria-label="Como é trabalhar com Rafael">
					<strong>Da primeira conversa à publicação</strong>
					<div><b>01</b> Escopo transparente</div>
					<div><b>02</b> Acompanhamento próximo</div>
					<div><b>03</b> Base pronta para crescer</div>
				</section>

				<section id="projetos" className="rd-wrap rd-section">
					<div className="rd-section-head">
						<h2>Projetos com contexto,<br />não só telas.</h2>
						<p>Trabalhos pessoais e de pesquisa mostram como penso e construo. Projetos de clientes entram aqui quando houver autorização.</p>
					</div>
					<div className="rd-work-grid">
						{projects.map((project, index) => (
							<article className={`rd-work-card ${index === 0 ? "rd-work-feature" : ""}`} key={project.title}>
								<div className={`rd-work-art rd-art-${project.art}`} aria-hidden="true">
									<span className="rd-project-badge">{project.kind}</span>
									{project.art === "finance" ? (
										<div className="rd-finance-ui">
											<div className="rd-finance-top"><span>minhas finanças</span><span>•••</span></div>
											<div className="rd-finance-balance">Saldo disponível<strong>R$ ••••</strong></div>
											<div className="rd-finance-bars"><i /><i /><i /><i /><i /><i /></div>
										</div>
									) : <div className="rd-research-shape"><i /><i /><i /></div>}
								</div>
								<div className="rd-work-copy">
									<span className="rd-work-kind">{project.kind}</span>
									<h3>{project.title}</h3>
									<p>{project.description}</p>
									<div className="rd-stack">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
									<a className="rd-text-link" href={project.href} target="_blank" rel="noreferrer">Ver no GitHub <ArrowUpRight size={15} aria-hidden="true" /></a>
								</div>
							</article>
						))}
					</div>
				</section>

				<section id="servicos" className="rd-services">
					<div className="rd-wrap rd-section">
						<div className="rd-section-head">
							<h2>Da presença digital<br />ao produto completo.</h2>
							<p>Comece pelo que seu negócio precisa agora. A solução pode crescer junto com ele.</p>
						</div>
						<div className="rd-service-feature-grid">
							<a className="rd-service-primary" href={`/servicos/${websiteService.slug}`}>
								<div>
									<div className="rd-service-number">01 / PRINCIPAL SERVIÇO</div>
									<h3>{websiteService.title}</h3>
									<p>Um site profissional, rápido e fácil de entender — pensado para apresentar seu negócio e facilitar o próximo contato.</p>
									<div className="rd-deliverables"><span>Estrutura e conteúdo</span><span>Design responsivo</span><span>SEO essencial</span></div>
								</div>
									<strong>Conhecer criação de sites <ArrowRight size={17} aria-hidden="true" /></strong>
							</a>
							<a className="rd-service-secondary" href={`/servicos/${customService.slug}`}>
								<div>
									<div className="rd-service-number">02 / SOLUÇÕES SOB MEDIDA</div>
									<h3>{customService.title}</h3>
									<p>Aplicações, APIs e integrações para simplificar processos e conectar as ferramentas que você já usa.</p>
								</div>
								<strong>Conhecer desenvolvimento <ArrowRight size={17} aria-hidden="true" /></strong>
							</a>
						</div>
						<nav className="rd-mini-services" aria-label="Outros serviços">
							{otherServices.map(({ slug, title, cardDescription }) => (
								<a href={`/servicos/${slug}`} key={slug}>{title}<span>{cardDescription}</span><ArrowUpRight size={17} aria-hidden="true" /></a>
							))}
						</nav>
					</div>
				</section>

				<section id="processo" className="rd-wrap rd-section">
					<div className="rd-section-head">
						<h2>Um caminho claro,<br />do começo à evolução.</h2>
						<p>Você acompanha as decisões e o progresso em cada etapa.</p>
					</div>
					<div className="rd-process">
						{processSteps.map((step) => <article className="rd-step" key={step.number}>
							<span>{step.number}</span><h3>{step.title}</h3><p>{step.description}</p>
						</article>)}
					</div>
				</section>

				<section id="sobre" className="rd-about">
					<div className="rd-wrap rd-about-grid">
						<div className="rd-monogram" aria-hidden="true">RH</div>
						<div className="rd-about-copy">
							<div className="rd-eyebrow rd-eyebrow-green">SOBRE RAFAEL</div>
							<h2>Tecnologia boa deixa o trabalho mais simples.</h2>
							<p>Sou Rafael Hentz, engenheiro de software. Trabalho diretamente com cada cliente para transformar necessidades reais em produtos digitais confiáveis — com atenção à experiência e aos detalhes técnicos.</p>
							<div className="rd-about-links">
								<a href="https://github.com/hentzrafael" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={15} aria-hidden="true" /></a>
								<a href="https://www.linkedin.com/in/hentzrafael/" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={15} aria-hidden="true" /></a>
							</div>
						</div>
					</div>
				</section>

				<section id="contato" className="rd-wrap rd-contact">
					<div><h2>Tem um projeto em mente?</h2><p>Me conte o que sua empresa precisa resolver.</p></div>
					<div className="rd-contact-actions">
						<a className="rd-button rd-button-lime" href={whatsappHref} target="_blank" rel="noreferrer"><MessageCircle size={18} aria-hidden="true" /> Conversar pelo WhatsApp <ArrowUpRight size={16} aria-hidden="true" /></a>
						<a className="rd-contact-link" href="https://www.linkedin.com/in/hentzrafael/" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={15} aria-hidden="true" /></a>
					</div>
				</section>
			</main>
			<SiteFooter />
		</>
	);
}
