import {
	Braces,
	Globe2,
	Layers3,
	MonitorSmartphone,
	Workflow,
	Cloud,
	type LucideIcon,
} from "lucide-react";

export type Service = {
	slug: string;
	title: string;
	cardDescription: string;
	eyebrow: string;
	hero: string;
	introduction: string;
	benefits: string[];
	deliverables: string[];
	icon: LucideIcon;
};

export const services: Service[] = [
	{
		slug: "criacao-de-sites",
		title: "Criação de sites",
		cardDescription: "Sites institucionais e páginas de campanha feitos para apresentar seu negócio com clareza e facilitar o contato.",
		eyebrow: "PRESENÇA DIGITAL",
		hero: "Um site que apresenta bem o seu negócio.",
		introduction: "Planejo e desenvolvo sites rápidos, responsivos e fáceis de navegar. O conteúdo e a estrutura são pensados para ajudar cada visitante a entender o que você oferece e como dar o próximo passo.",
		benefits: ["Mensagem clara para quem visita", "Boa experiência em celulares e computadores", "Estrutura preparada para mecanismos de busca"],
		deliverables: ["Site institucional ou página de campanha", "Layout adaptado à identidade da empresa", "Formulários e integrações combinados no escopo", "Publicação e orientação para os próximos passos"],
		icon: Globe2,
	},
	{
		slug: "desenvolvimento-personalizado",
		title: "Desenvolvimento personalizado",
		cardDescription: "Soluções digitais sob medida para processos e necessidades que ferramentas prontas não resolvem bem.",
		eyebrow: "TECNOLOGIA SOB MEDIDA",
		hero: "Sua ideia, transformada em uma solução que faz sentido.",
		introduction: "Quando um processo pede algo além de um site ou de uma ferramenta pronta, desenho e desenvolvo uma solução sob medida. O trabalho começa entendendo o contexto, as pessoas envolvidas e o resultado esperado.",
		benefits: ["Escopo alinhado à necessidade real", "Decisões técnicas explicadas com clareza", "Evolução possível conforme o produto amadurece"],
		deliverables: ["Levantamento de necessidades e prioridades", "Aplicação ou sistema personalizado", "Integrações definidas junto com você", "Documentação e suporte combinados no projeto"],
		icon: Braces,
	},
	{
		slug: "aplicacoes-web",
		title: "Aplicações web",
		cardDescription: "Portais, painéis e ferramentas web para organizar informações e simplificar tarefas do dia a dia.",
		eyebrow: "PRODUTOS WEB",
		hero: "Ferramentas web alinhadas ao trabalho da sua equipe.",
		introduction: "Uma aplicação web pode reunir informações, orientar fluxos e tornar tarefas mais simples. Construo experiências acessíveis pelo navegador, com foco em clareza e nas necessidades definidas para o projeto.",
		benefits: ["Acesso pelo navegador em diferentes dispositivos", "Fluxos organizados para cada perfil de uso", "Base para conectar dados e serviços"],
		deliverables: ["Painéis, portais ou ferramentas internas", "Telas e fluxos definidos a partir do escopo", "Conexão com serviços e dados acordados", "Preparação para publicação e evolução"],
		icon: Layers3,
	},
	{
		slug: "aplicativos-mobile",
		title: "Aplicativos mobile",
		cardDescription: "Aplicativos para iOS e Android, do planejamento de uma nova ideia à evolução de um produto existente.",
		eyebrow: "EXPERIÊNCIAS MOBILE",
		hero: "Uma experiência prática para quem usa seu produto em movimento.",
		introduction: "Planejo e desenvolvo aplicativos para dispositivos móveis considerando os objetivos do produto e a rotina de quem vai utilizá-lo. Cada etapa é definida com transparência e alinhada ao escopo.",
		benefits: ["Experiência pensada para telas móveis", "Jornadas e funcionalidades priorizadas", "Integrações planejadas desde o início"],
		deliverables: ["Aplicativo para iOS e Android conforme o projeto", "Fluxos e funcionalidades do escopo aprovado", "Integração com APIs e serviços necessários", "Orientação para publicação e manutenção"],
		icon: MonitorSmartphone,
	},
	{
		slug: "apis-integracoes",
		title: "APIs e integrações",
		cardDescription: "Conecte sistemas, serviços e dados para reduzir tarefas manuais e manter informações em sintonia.",
		eyebrow: "SISTEMAS CONECTADOS",
		hero: "Faça seus sistemas conversarem melhor.",
		introduction: "Integrações bem definidas ajudam sistemas e serviços a compartilhar informações de forma consistente. Mapeio o que precisa se conectar e implemento a solução dentro dos requisitos do seu projeto.",
		benefits: ["Menos retrabalho entre ferramentas", "Fluxos de dados documentados", "Integrações alinhadas à operação"],
		deliverables: ["APIs para conectar aplicações", "Integrações entre serviços escolhidos", "Tratamento de dados e falhas previstos no escopo", "Documentação técnica para continuidade"],
		icon: Workflow,
	},
	{
		slug: "cloud-e-evolucao",
		title: "Nuvem e evolução",
		cardDescription: "Implantação, manutenção e orientação técnica para manter seu produto digital evoluindo com segurança.",
		eyebrow: "IMPLANTAÇÃO E CONTINUIDADE",
		hero: "Uma base técnica pronta para acompanhar seu produto.",
		introduction: "Da publicação à manutenção, a infraestrutura faz parte da experiência do produto. Avalio as necessidades de implantação e evolução para propor os próximos passos com clareza.",
		benefits: ["Publicação organizada", "Atenção à estabilidade e manutenção", "Recomendações técnicas explicadas"],
		deliverables: ["Configuração de implantação conforme o projeto", "Ajustes de infraestrutura e automação", "Manutenção e melhorias combinadas", "Consultoria técnica para decisões futuras"],
		icon: Cloud,
	},
];

export const whatsappHref =
	"https://wa.me/5549988666568?text=Ol%C3%A1%2C%20Rafael!%20Quero%20conversar%20sobre%20um%20projeto.";
