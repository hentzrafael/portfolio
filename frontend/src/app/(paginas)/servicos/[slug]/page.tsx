import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowUpRight, Check, MessageCircle } from "lucide-react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { services } from "@/lib/services";

type ServicePageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
	return services.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
	const { slug } = await params;
	const service = services.find((item) => item.slug === slug);
	if (!service) return { title: "Serviço não encontrado" };
	return {
		title: `${service.title} | Rafael Hentz`,
		description: service.cardDescription,
		alternates: { canonical: `/servicos/${service.slug}` },
	};
}

function ServiceArtwork({ art, title }: { art: string; title: string }) {
	return (
		<div className={`rd-detail-art rd-detail-art-${art}`} aria-hidden="true">
			{art === "site" ? (
				<div className="rd-editorial-window">
					<div className="rd-editorial-nav"><b>SUA MARCA</b><span>INÍCIO&nbsp;&nbsp; SERVIÇOS&nbsp;&nbsp; CONTATO</span></div>
					<div className="rd-editorial-content"><small>UMA PRESENÇA DIGITAL COM INTENÇÃO</small><strong>O seu trabalho<br />bem apresentado.</strong><i /><i className="rd-line-short" /><span>Fale com a gente <ArrowUpRight size={13} /></span></div>
				</div>
			) : art === "custom" ? (
				<div className="rd-workflow-art">
					<div><span>01</span><b>Equipe</b><small>rotina atual</small></div><i /><div><span>02</span><b>Solução</b><small>fluxo integrado</small></div><i /><div><span>03</span><b>Próximo passo</b><small>menos retrabalho</small></div>
				</div>
			) : (
				<div className="rd-service-art-card">
					<div className="rd-service-art-icon"><span /></div>
					<small>{title.toUpperCase()}</small>
					<b>Uma solução pensada para o seu contexto.</b>
					<div className="rd-service-art-lines"><i /><i /><i /></div>
				</div>
			)}
		</div>
	);
}

export default async function ServicePage({ params }: ServicePageProps) {
	const { slug } = await params;
	const service = services.find((item) => item.slug === slug);
	if (!service) notFound();
	const Icon = service.icon;
	const contactUrl = `https://wa.me/5549988666568?text=${encodeURIComponent(`Quero conversar sobre ${service.title.toLowerCase()}.`)}`;
	const relatedServices = services.filter((item) => item.slug !== service.slug).slice(0, 3);

	return (
		<>
			<SiteHeader />
			<main id="conteudo" className="rd-main rd-detail-page">
				<section className="rd-wrap rd-detail-intro">
					<div className="rd-breadcrumb"><a href="/#inicio">Início</a><span>/</span><a href="/#servicos">Serviços</a><span>/</span><b>{service.title}</b></div>
					<div className={`rd-detail-hero rd-detail-hero-${service.art}`}>
						<div className="rd-detail-copy">
							<div className="rd-eyebrow rd-eyebrow-green">{service.eyebrow}</div>
							<h1>{service.hero}</h1>
							<p>{service.introduction}</p>
							<a className="rd-button rd-button-green" href={contactUrl} target="_blank" rel="noreferrer"><MessageCircle size={18} aria-hidden="true" /> Conversar sobre {service.title.toLowerCase()} <ArrowUpRight size={16} aria-hidden="true" /></a>
						</div>
						<ServiceArtwork art={service.art} title={service.title} />
					</div>
				</section>

				<section className="rd-wrap rd-detail-problem">
					<div><div className="rd-eyebrow rd-eyebrow-green">O DESAFIO</div><h2>{service.problemTitle}</h2></div>
					<div className="rd-detail-approach"><p>{service.problem}</p><p>{service.approach}</p></div>
				</section>

				<section className="rd-detail-delivery">
					<div className="rd-wrap rd-detail-delivery-grid">
						<div><div className="rd-eyebrow rd-eyebrow-green">O QUE PODE FAZER PARTE</div><h2>Escopo claro, pensado com você.</h2><p>As entregas são ajustadas às prioridades e ao contexto do projeto.</p></div>
						<ul>{service.deliverables.map((item) => <li key={item}><Check size={19} aria-hidden="true" />{item}</li>)}</ul>
						<div className="rd-tools"><strong>Por trás da solução</strong><span>Ferramentas escolhidas de acordo com o projeto:</span><div>{service.tools.map((tool) => <i key={tool}>{tool}</i>)}</div></div>
					</div>
				</section>

				<section className="rd-wrap rd-section rd-engagement">
					<div className="rd-section-head"><h2>Do primeiro entendimento<br />à próxima evolução.</h2><p>Um processo transparente, com decisões compartilhadas e sem promessas de prazo antes de conhecer o escopo.</p></div>
					<div className="rd-process">
						{service.steps.map((step, index) => <article className="rd-step" key={step.title}><span>0{index + 1}</span><h3>{step.title}</h3><p>{step.description}</p></article>)}
					</div>
				</section>

				<section className="rd-detail-related">
					<div className="rd-wrap">
						<div className="rd-section-head"><h2>Outras formas de<br />fazer seu projeto avançar.</h2><a className="rd-text-link" href="/#servicos">Ver todos os serviços <ArrowRight size={16} aria-hidden="true" /></a></div>
						<div className="rd-related-grid">{relatedServices.map((related) => { const RelatedIcon = related.icon; return <a className="rd-related-card" href={`/servicos/${related.slug}`} key={related.slug}><RelatedIcon size={23} aria-hidden="true" /><span>{related.eyebrow}</span><h3>{related.title}</h3><p>{related.cardDescription}</p><strong>Conhecer serviço <ArrowRight size={16} aria-hidden="true" /></strong></a>; })}</div>
					</div>
				</section>

				<section className="rd-wrap rd-contact rd-service-contact">
					<div><h2>Tem um projeto em mente?</h2><p>Vamos conversar sobre o que sua empresa precisa resolver.</p></div>
					<a className="rd-button rd-button-lime" href={contactUrl} target="_blank" rel="noreferrer"><MessageCircle size={18} aria-hidden="true" /> Falar pelo WhatsApp <ArrowUpRight size={16} aria-hidden="true" /></a>
				</section>
			</main>
			<SiteFooter />
		</>
	);
}
