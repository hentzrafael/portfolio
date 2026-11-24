import {
	Braces,
	Cloud,
	Globe2,
	Layers3,
	MonitorSmartphone,
	Workflow,
	type LucideIcon,
} from "lucide-react";

export type Service = {
	slug: string;
	title: string;
	cardDescription: string;
	eyebrow: string;
	hero: string;
	introduction: string;
	problemTitle: string;
	problem: string;
	approach: string;
	deliverables: string[];
	tools: string[];
	steps: { title: string; description: string }[];
	icon: LucideIcon;
	art: "site" | "custom" | "web" | "mobile" | "api" | "cloud";
};

const sharedSteps = [
	{ title: "Entender o contexto", description: "Alinhamos objetivos, pessoas e o processo que precisa funcionar." },
	{ title: "Definir o caminho", description: "Organizamos prioridades, escopo e uma proposta de solução." },
	{ title: "Construir e evoluir", description: "Você acompanha o progresso, revisa e planeja os próximos passos." },
];

export const services: Service[] = [
	{
		slug: "criacao-de-sites",
		title: "Criação de sites",
		cardDescription: "Sites institucionais e páginas de campanha feitos para apresentar seu negócio com clareza e facilitar o contato.",
		eyebrow: "PRINCIPAL SERVIÇO",
		hero: "Um site claro, rápido e pronto para trazer a próxima conversa.",
		introduction: "Apresente seu negócio com clareza e ajude as pessoas certas a dar o próximo passo. Do conteúdo à publicação, cada parte é pensada para o seu público.",
		problemTitle: "Seu valor precisa ficar claro para quem visita.",
		problem: "Quando o site não explica bem o que a empresa faz, fica mais difícil para clientes em potencial encontrar a informação certa e iniciar uma conversa.",
		approach: "Organizo a mensagem, a navegação e os próximos passos em uma experiência responsiva, construída em torno do seu serviço e da jornada de quem visita.",
		deliverables: ["Arquitetura e direção de conteúdo", "Design responsivo para celular e computador", "Implementação e fundamentos de SEO", "Publicação e apoio no lançamento"],
		tools: ["Next.js", "TypeScript", "Acessibilidade", "SEO essencial"],
		steps: sharedSteps,
		icon: Globe2,
		art: "site",
	},
	{
		slug: "desenvolvimento-personalizado",
		title: "Desenvolvimento personalizado",
		cardDescription: "Soluções digitais sob medida para processos e necessidades que ferramentas prontas não resolvem bem.",
		eyebrow: "SOLUÇÕES SOB MEDIDA",
		hero: "Sistemas sob medida para o trabalho que sua empresa já faz.",
		introduction: "Conecte ferramentas, automatize etapas repetitivas e crie experiências digitais ajustadas aos processos reais da sua equipe.",
		problemTitle: "Seu processo não precisa caber em uma ferramenta genérica.",
		problem: "Planilhas desconectadas, tarefas repetidas e sistemas que não conversam podem tornar o trabalho diário mais difícil do que precisa ser.",
		approach: "Primeiro entendo o fluxo atual e os pontos de atrito. Depois desenho interface, lógica e integrações como partes de uma solução que faça sentido para quem usa.",
		deliverables: ["Levantamento de fluxo e requisitos", "Interface e serviços de backend", "APIs e integrações combinadas no escopo", "Testes, implantação e documentação"],
		tools: ["TypeScript", "Node.js", "Python", "APIs e integrações"],
		steps: sharedSteps,
		icon: Braces,
		art: "custom",
	},
	{
		slug: "aplicacoes-web",
		title: "Aplicações web",
		cardDescription: "Painéis, portais e ferramentas para organizar informações e simplificar tarefas do dia a dia.",
		eyebrow: "PRODUTOS WEB",
		hero: "Ferramentas web alinhadas ao trabalho da sua equipe.",
		introduction: "Uma aplicação web pode reunir informações, orientar fluxos e tornar tarefas mais simples, direto no navegador.",
		problemTitle: "Informação espalhada dificulta o trabalho em equipe.",
		problem: "Quando cada etapa vive em uma ferramenta diferente, acompanhar tarefas e encontrar dados pode consumir tempo da equipe.",
		approach: "Desenho os fluxos prioritários e construo uma interface web que reúne o que cada pessoa precisa para realizar seu trabalho.",
		deliverables: ["Painéis, portais ou ferramentas internas", "Telas e fluxos definidos a partir do escopo", "Conexão com serviços e dados acordados", "Preparação para publicação e evolução"],
		tools: ["React", "Next.js", "TypeScript", "APIs"],
		steps: sharedSteps,
		icon: Layers3,
		art: "web",
	},
	{
		slug: "aplicativos-mobile",
		title: "Aplicativos mobile",
		cardDescription: "Aplicativos para iOS e Android, do planejamento de uma nova ideia à evolução de um produto existente.",
		eyebrow: "EXPERIÊNCIAS MOBILE",
		hero: "Uma experiência prática para quem usa seu produto em movimento.",
		introduction: "Planejo aplicativos móveis considerando os objetivos do produto e a rotina de quem vai utilizá-lo.",
		problemTitle: "Uma boa ideia precisa funcionar fora do computador.",
		problem: "Clientes e equipes esperam realizar tarefas importantes pelo celular, com uma experiência simples e adequada à tela que têm nas mãos.",
		approach: "Priorizar as jornadas essenciais ajuda a transformar a ideia em uma experiência mobile clara, conectada aos serviços que o produto precisa usar.",
		deliverables: ["Aplicativo para iOS e Android conforme o projeto", "Fluxos e funcionalidades do escopo aprovado", "Integração com APIs e serviços necessários", "Orientação para publicação e manutenção"],
		tools: ["Flutter", "Dart", "APIs", "Integrações"],
		steps: sharedSteps,
		icon: MonitorSmartphone,
		art: "mobile",
	},
	{
		slug: "apis-integracoes",
		title: "APIs e integrações",
		cardDescription: "Conecte sistemas, serviços e dados para reduzir tarefas manuais e manter informações em sintonia.",
		eyebrow: "SISTEMAS CONECTADOS",
		hero: "Faça seus sistemas conversarem melhor.",
		introduction: "Integrações bem definidas ajudam sistemas e serviços a compartilhar informações de forma consistente.",
		problemTitle: "Tarefas repetidas podem ser sinal de sistemas desconectados.",
		problem: "Copiar dados entre ferramentas aumenta o retrabalho e torna mais difícil manter a informação atualizada em cada etapa.",
		approach: "Mapeio o que precisa se conectar e planejo uma integração com os dados, limites e cenários de falha definidos para o projeto.",
		deliverables: ["APIs para conectar aplicações", "Integrações entre serviços escolhidos", "Tratamento de dados e falhas previstos no escopo", "Documentação técnica para continuidade"],
		tools: ["Node.js", "Python", "REST", "Webhooks"],
		steps: sharedSteps,
		icon: Workflow,
		art: "api",
	},
	{
		slug: "cloud-e-evolucao",
		title: "Nuvem e evolução",
		cardDescription: "Implantação, manutenção e orientação técnica para manter seu produto digital evoluindo.",
		eyebrow: "IMPLANTAÇÃO E CONTINUIDADE",
		hero: "Uma base técnica pronta para acompanhar seu produto.",
		introduction: "Da publicação à manutenção, a infraestrutura faz parte da experiência do produto e precisa acompanhar as necessidades reais dele.",
		problemTitle: "Publicar é só o começo da vida de um produto.",
		problem: "Sem um caminho claro para implantação, manutenção e evolução, pequenas mudanças podem ficar mais difíceis de entregar com confiança.",
		approach: "Avalio as necessidades técnicas e ajudo a organizar a publicação e as próximas melhorias de forma compreensível e gradual.",
		deliverables: ["Configuração de implantação conforme o projeto", "Ajustes de infraestrutura e automação", "Manutenção e melhorias combinadas", "Consultoria técnica para decisões futuras"],
		tools: ["AWS", "Google Cloud", "Docker", "Automação"],
		steps: sharedSteps,
		icon: Cloud,
		art: "cloud",
	},
];

export const whatsappHref =
	"https://wa.me/5549988666568?text=Ol%C3%A1%2C%20Rafael!%20Quero%20conversar%20sobre%20um%20projeto.";
