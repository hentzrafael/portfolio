import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowUpRight, Check, MessageCircle } from "lucide-react";
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

export default async function ServicePage({ params }: ServicePageProps) {
	const { slug } = await params;
	const service = services.find((item) => item.slug === slug);
	if (!service) notFound();
	const Icon = service.icon;
	const contactUrl = `https://wa.me/5549988666568?text=${encodeURIComponent(`Olá, Rafael! Quero conversar sobre ${service.title.toLowerCase()}.`)}`;
	const relatedServices = services.filter((item) => item.slug !== service.slug).slice(0, 3);

	return (
		<main id="conteudo" className="service-page">
			<section className="service-hero">
				<div className="section-wrap service-hero-inner">
					<div className="service-hero-copy">
						<a className="service-breadcrumb" href="/#servicos">Serviços <span>/</span> {service.title}</a>
						<div className="eyebrow"><span className="status-dot" /> {service.eyebrow}</div>
						<h1>{service.hero}</h1>
						<p>{service.introduction}</p>
						<a className="service-primary-cta" href={contactUrl} target="_blank" rel="noreferrer">
							<MessageCircle size={20} aria-hidden="true" /> Vamos conversar pelo WhatsApp <ArrowUpRight size={17} aria-hidden="true" />
						</a>
					</div>
					<div className="service-hero-visual" aria-hidden="true">
						<div className="service-visual-ring ring-a" />
						<div className="service-visual-ring ring-b" />
						<div className="service-visual-card">
							<span className="service-visual-icon"><Icon size={35} strokeWidth={1.5} /></span>
							<span className="service-visual-kicker">SOLUÇÃO DIGITAL</span>
							<strong>{service.title}</strong>
							<span className="service-visual-rule" />
							<span className="service-visual-lines"><i /><i /><i /></span>
							<span className="service-visual-check"><Check size={17} /></span>
						</div>
					</div>
				</div>
			</section>

			<section className="service-value section-wrap">
				<div className="service-section-heading">
					<div className="eyebrow">FEITO PARA A SUA REALIDADE</div>
					<h2>Uma solução clara, do escopo à entrega.</h2>
				</div>
				<div className="service-benefits">
					{service.benefits.map((benefit, index) => (
						<article className="service-benefit" key={benefit}>
							<span className="service-benefit-number">0{index + 1}</span>
							<h3>{benefit}</h3>
						</article>
					))}
				</div>
			</section>

			<section className="service-delivery">
				<div className="section-wrap service-delivery-grid">
					<div>
						<div className="eyebrow">O QUE PODE FAZER PARTE</div>
						<h2>Escopo feito com você, sem pacote genérico.</h2>
						<p>As entregas são ajustadas ao contexto do seu negócio. A conversa inicial serve para entender prioridades e montar um escopo transparente.</p>
					</div>
					<ul className="service-deliverables">
						{service.deliverables.map((deliverable) => (
							<li key={deliverable}><Check size={19} aria-hidden="true" /> {deliverable}</li>
						))}
					</ul>
				</div>
			</section>

			<section className="service-next section-wrap">
				<div className="service-next-card">
					<div className="eyebrow">PRÓXIMO PASSO</div>
					<h2>Vamos entender o que você precisa?</h2>
					<p>Conte um pouco sobre o seu projeto e receba uma conversa direta sobre caminhos, prioridades e escopo.</p>
					<a className="service-primary-cta" href={contactUrl} target="_blank" rel="noreferrer">
						<MessageCircle size={20} aria-hidden="true" /> Falar com Rafael no WhatsApp <ArrowUpRight size={17} aria-hidden="true" />
					</a>
				</div>
			</section>

			<section className="related-services section-wrap">
				<div className="service-section-heading">
					<div className="eyebrow">OUTRAS SOLUÇÕES</div>
					<h2>Conheça também</h2>
				</div>
				<div className="related-service-grid">
					{relatedServices.map((related) => (
						<a className="related-service-card" href={`/servicos/${related.slug}`} key={related.slug}>
							<span>{related.eyebrow}</span>
							<h3>{related.title}</h3>
							<p>{related.cardDescription}</p>
							<strong>Conhecer serviço <ArrowRight size={16} aria-hidden="true" /></strong>
						</a>
					))}
				</div>
				<a className="all-services-link" href="/#servicos">Ver todos os serviços <ArrowRight size={17} aria-hidden="true" /></a>
			</section>
		</main>
	);
}
