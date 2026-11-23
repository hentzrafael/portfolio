import {
	ArrowDown,
	ArrowRight,
	ArrowUpRight,
	Braces,
	Check,
	Github,
	Globe2,
	Layers3,
	Linkedin,
	Menu,
	MonitorSmartphone,
	Workflow,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
	{
		number: "01",
		kind: "PROJETO PESSOAL",
		title: "Finanças com mais clareza",
		description:
			"Aplicação pessoal para acompanhar contas corrente e poupança, registrar movimentações e transferir valores entre contas.",
		stack: ["Next.js", "TypeScript", "Web app"],
		mark: "saldo.",
		visual: "finance",
		href: "https://github.com/hentzrafael/piggy-bank",
	},
	{
		number: "02",
		kind: "PESQUISA ACADÊMICA",
		title: "Dados que revelam mudanças",
		description:
			"Pesquisa aplicada a imagens de satélite e visão computacional para estimar biomassa acima do solo.",
		stack: ["U-Net", "ViT", "Sensoriamento remoto"],
		mark: "BIO / DATA",
		visual: "earth",
		href: "https://github.com/hentzrafael/unet-vit-carbon-estimate",
	},
	{
		number: "03",
		kind: "PESQUISA ACADÊMICA",
		title: "Visão computacional em campo",
		description:
			"Projeto de pesquisa sobre detecção de mineração ilegal em imagens, usando classificação com ResNet50.",
		stack: ["Python", "ResNet50", "Visão computacional"],
		mark: "IMAGE\nANALYSIS",
		visual: "vision",
		href: "https://github.com/hentzrafael/resnet50-illegal-mining",
	},
];

const services = [
	{
		icon: Globe2,
		title: "Criação de sites",
		description:
			"Sites institucionais e landing pages que explicam bem o que você faz e facilitam o próximo passo.",
	},
	{
		icon: Layers3,
		title: "Aplicações web",
		description:
			"Portais, painéis e ferramentas sob medida para simplificar processos e dar forma a novas ideias.",
	},
	{
		icon: MonitorSmartphone,
		title: "Aplicativos mobile",
		description:
			"Aplicativos para iOS e Android, de produtos novos à evolução de experiências que já existem.",
	},
	{
		icon: Workflow,
		title: "APIs e integrações",
		description:
			"Sistemas e serviços conectados para que dados e tarefas fluam com menos trabalho manual.",
	},
	{
		icon: Braces,
		title: "Cloud e evolução",
		description:
			"Deploy, manutenção e consultoria técnica para manter seu produto confiável conforme ele cresce.",
	},
];

const steps = [
	"Entendimento",
	"Proposta e escopo",
	"Design e desenvolvimento",
	"Revisão e publicação",
	"Acompanhamento",
];

export default function Home() {
	return (
		<main>
			<header className="topbar">
				<a className="brand" href="#inicio" aria-label="Hentz, início">
					<span className="brand-mark">
						h<span>.</span>
					</span>
					<span className="brand-name">
						HENTZ <i>SERVIÇOS DE TI</i>
					</span>
				</a>
				<nav className="nav">
					<a href="#projetos">Projetos</a>
					<a href="#servicos">Serviços</a>
					<a href="#processo">Como funciona</a>
					<a href="#sobre">Sobre</a>
				</nav>
				<a className="nav-cta" href="#contato">
					Vamos conversar <ArrowUpRight size={15} />
				</a>
				<details className="mobile-menu">
					<summary aria-label="Abrir menu">
						<Menu />
					</summary>
					<nav className="mobile-nav-panel">
						<a href="#projetos">Projetos</a>
						<a href="#servicos">Serviços</a>
						<a href="#processo">Como funciona</a>
						<a href="#sobre">Sobre</a>
						<a href="#contato">Contato</a>
					</nav>
				</details>
			</header>

			<section className="hero section-wrap" id="inicio">
				<div className="hero-copy">
					<div className="eyebrow">
						<span className="status-dot" /> RAFAEL HENTZ · DESENVOLVIMENTO DE SOFTWARE
					</div>
					<h1>
						Sites feitos para o jeito que <span>sua empresa trabalha.</span>
					</h1>
					<p className="hero-lede">
						Crio sites rápidos, claros e sob medida — e, quando o projeto pede, conecto
						a experiência a sistemas, dados e integrações.
					</p>
					<div className="hero-actions">
						<Button asChild className="button button-dark">
							<a href="#contato">
								Vamos conversar <ArrowRight size={16} />
							</a>
						</Button>
						<a className="text-link" href="#projetos">
							Ver projetos <ArrowDown size={15} />
						</a>
					</div>
					<div className="hero-note">
						<span className="note-line" /> Uma parceria direta, do primeiro rascunho à
						publicação.
					</div>
				</div>
				<div className="hero-art" aria-label="Ilustração de uma página web responsiva">
					<div className="art-orbit orbit-one" />
					<div className="art-orbit orbit-two" />
					<div className="art-glow" />
					<div className="browser-card">
						<div className="browser-top">
							<div className="browser-dots">
								<i />
								<i />
								<i />
							</div>
							<span>seunegocio.com.br</span>
							<span className="browser-lock">⌑</span>
						</div>
						<div className="browser-body">
							<div className="mock-nav">
								<b>
									marca<span>.</span>
								</b>
								<div>
									<i />
									<i />
									<i />
								</div>
								<em>Fale com a gente ↗</em>
							</div>
							<div className="mock-content">
								<small>UMA NOVA FORMA DE FAZER</small>
								<strong>
									Ideias boas
									<br />
									merecem espaço.
								</strong>
								<p>
									Experiências digitais para
									<br />
									negócios em movimento.
								</p>
								<span className="mock-button">
									Conheça nosso trabalho <ArrowRight size={12} />
								</span>
							</div>
							<div className="mock-side">
								<div className="mock-tile tile-a" />
								<div className="mock-tile tile-b" />
								<div className="mock-tile tile-c" />
							</div>
							<span className="mock-caption">
								DESIGN COM INTENÇÃO · TECNOLOGIA QUE FUNCIONA
							</span>
						</div>
					</div>
					<div className="floating-tag tag-top">
						<span>✳</span> pensado para pessoas
					</div>
					<div className="floating-tag tag-bottom">
						<div className="tag-icon">
							<Check size={15} />
						</div>
						<div>
							<b>Leve e responsivo</b>
							<small>em cada tamanho de tela</small>
						</div>
					</div>
					<div className="art-stamp">
						RH
						<br />
						<i>01—25</i>
					</div>
				</div>
			</section>

			<section className="trust-strip">
				<div>
					<span className="strip-label">DA IDEIA AO PRODUTO</span>
					<span className="strip-copy">Um ponto de contato para todo o seu projeto.</span>
				</div>
				<div className="strip-stack">
					<span>WEB</span>
					<b>·</b>
					<span>MOBILE</span>
					<b>·</b>
					<span>BACKEND</span>
					<b>·</b>
					<span>CLOUD</span>
				</div>
			</section>

			<section className="projects section-wrap" id="projetos">
				<div className="section-heading">
					<div>
						<div className="eyebrow">TRABALHOS SELECIONADOS</div>
						<h2>
							Ideias em <span>movimento.</span>
						</h2>
					</div>
					<p>
						Uma amostra de projetos pessoais e pesquisa. Em cada trabalho, tecnologia é
						o meio para responder a uma pergunta real.
					</p>
				</div>
				<div className="project-grid">
					{projects.map((project) => (
						<article className="project-card" key={project.number}>
							<div className={`project-visual ${project.visual}`}>
								<div className="project-visual-top">
									<span>{project.kind}</span>
									<span>VISUAL ILUSTRATIVO</span>
								</div>
								{project.visual === "finance" ? (
									<div className="finance-ui">
										<div className="finance-head">
											<span className="finance-logo">
												saldo<span>.</span>
											</span>
											<span className="avatar">RH</span>
										</div>
										<div className="finance-label">
											SALDO TOTAL <span>•••</span>
										</div>
										<div className="finance-value">R$ ••••</div>
										<div className="finance-bars">
											<i />
											<i />
											<i />
											<i />
											<i />
											<i />
											<i />
											<i />
											<i />
											<i />
											<i />
											<i />
											<i />
										</div>
										<div className="finance-foot">
											<span>Conta corrente</span>
											<span>Poupança</span>
										</div>
									</div>
								) : (
									<div className="research-ui">
										<div className="research-ring ring-outer" />
										<div className="research-ring ring-inner" />
										<div className="research-core">
											{project.mark.split("\n").map((line) => (
												<span key={line}>{line}</span>
											))}
										</div>
										<span className="research-label label-one">
											SATELLITE / 2024
										</span>
										<span className="research-label label-two">
											MODEL · v1.0
										</span>
										<span className="research-label label-three">
											{project.visual === "earth" ? "GEO / 04" : "IMG / 50"}
										</span>
									</div>
								)}
							</div>
							<div className="project-meta">
								<span>{project.kind}</span>
								<span>{project.number}</span>
							</div>
							<h3>{project.title}</h3>
							<p>{project.description}</p>
							<div className="tag-list">
								{project.stack.map((tag) => (
									<span key={tag}>{tag}</span>
								))}
							</div>
							<a
								className="project-link"
								href={project.href}
								target="_blank"
								rel="noreferrer"
							>
								Ver repositório <ArrowUpRight size={13} />
							</a>
						</article>
					))}
				</div>
				<p className="project-disclaimer">
					Projetos pessoais e de pesquisa — não representam trabalhos realizados para
					clientes da Hentz Serviços de TI.
				</p>
			</section>

			<section className="services-section" id="servicos">
				<div className="services section-wrap">
					<div className="section-heading">
						<div>
							<div className="eyebrow">O QUE POSSO FAZER</div>
							<h2>
								Do primeiro clique ao <span>produto completo.</span>
							</h2>
						</div>
						<p>
							Você fala direto com quem planeja e desenvolve. O escopo acompanha a
							necessidade real do seu negócio.
						</p>
					</div>
					<div className="service-list">
						{services.map(({ icon: Icon, title, description }, index) => (
							<article className="service-row" key={title}>
								<span className="service-number">0{index + 1}</span>
								<span className="service-icon">
									<Icon size={21} strokeWidth={1.6} />
								</span>
								<h3>{title}</h3>
								<p>{description}</p>
								<ArrowUpRight className="service-arrow" size={18} />
							</article>
						))}
					</div>
				</div>
			</section>

			<section className="process section-wrap" id="processo">
				<div className="process-intro">
					<div className="eyebrow">UM CAMINHO CLARO</div>
					<h2>
						Boas entregas começam com <span>boas conversas.</span>
					</h2>
					<p>
						Você acompanha o projeto com escopo definido e atualizações ao longo do
						caminho — sem surpresas no final.
					</p>
					<a className="text-link" href="#contato">
						Conte sua ideia <ArrowRight size={15} />
					</a>
				</div>
				<div className="process-steps">
					{steps.map((step, index) => (
						<div className="process-step" key={step}>
							<span className="step-index">0{index + 1}</span>
							<div className="step-marker">
								<span />
							</div>
							<div className="step-content">
								<h3>{step}</h3>
								<p>
									{
										[
											"Entendo o momento do negócio, as pessoas e o que precisa mudar.",
											"Alinhamos entregas, prioridades e o que faz parte do projeto.",
											"Construo a solução com decisões compartilhadas e progresso visível.",
											"Ajustamos os detalhes, validamos e colocamos o projeto no ar.",
											"Fico por perto para apoiar os próximos passos e melhorias.",
										][index]
									}
								</p>
							</div>
						</div>
					))}
				</div>
			</section>

			<section className="about-section" id="sobre">
				<div className="about section-wrap">
					<div className="about-visual">
						<div className="portrait-frame">
							<div className="portrait-sun" />
							<div className="portrait-letters">
								RH<span>.</span>
							</div>
							<div className="portrait-caption">
								CONSTRUINDO COM CUIDADO
								<br />E CURIOSIDADE.
							</div>
							<div className="portrait-cross">+</div>
						</div>
						<div className="about-side-note">
							UM PROJETO DE CADA VEZ <span>↗</span>
						</div>
					</div>
					<div className="about-copy">
						<div className="eyebrow">QUEM ESTÁ POR TRÁS</div>
						<h2>
							Oi, eu sou o <span>Rafael.</span>
						</h2>
						<p>
							Sou engenheiro de software e trabalho diretamente com cada cliente para
							transformar necessidades em produtos digitais confiáveis — cuidando do
							detalhe técnico e da experiência de quem vai usar.
						</p>
						<p>
							Atuo em português e inglês, colaborando de perto em cada etapa para que
							a solução faça sentido para as pessoas e para o negócio.
						</p>
						<div className="about-links">
							<a
								href="https://github.com/hentzrafael"
								target="_blank"
								rel="noreferrer"
							>
								<Github size={17} /> GitHub <ArrowUpRight size={13} />
							</a>
							<a
								href="https://www.linkedin.com/in/hentzrafael/"
								target="_blank"
								rel="noreferrer"
							>
								<Linkedin size={17} /> LinkedIn <ArrowUpRight size={13} />
							</a>
						</div>
						<div className="about-signature">
							Rafael Hentz <span>DESENVOLVEDOR · BRASIL</span>
						</div>
					</div>
				</div>
			</section>

			<section className="contact section-wrap" id="contato">
				<div className="contact-grid">
					<div className="eyebrow">
						<span className="status-dot" /> TEM UM PROJETO EM MENTE?
					</div>
					<h2>
						Vamos tirar sua ideia <span>do papel.</span>
					</h2>
					<p>
						Me conte o que você está planejando. A gente começa entendendo o que faz
						sentido para o seu negócio.
					</p>
					<Button asChild className="button button-light">
						<a
							href="https://www.linkedin.com/in/hentzrafael/"
							target="_blank"
							rel="noreferrer"
						>
							Converse pelo LinkedIn <ArrowUpRight size={16} />
						</a>
					</Button>
					<span className="contact-orbit orbit-left" />
					<span className="contact-orbit orbit-right" />
					<span className="contact-star">✳</span>
				</div>
			</section>

			<footer className="footer">
				<a className="brand footer-brand" href="#inicio">
					<span className="brand-mark">
						h<span>.</span>
					</span>
					<span className="brand-name">
						HENTZ <i>SERVIÇOS DE TI</i>
					</span>
				</a>
				<span>Desenvolvimento de software com Rafael Hentz.</span>
				<div className="footer-links">
					<a href="https://github.com/hentzrafael" target="_blank" rel="noreferrer">
						GitHub
					</a>
					<a
						href="https://www.linkedin.com/in/hentzrafael/"
						target="_blank"
						rel="noreferrer"
					>
						LinkedIn
					</a>
					<a href="#inicio">Voltar ao topo ↑</a>
				</div>
				<small>© {new Date().getFullYear()} Hentz Serviços de TI</small>
			</footer>
		</main>
	);
}
