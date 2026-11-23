import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "Rafael Hentz — Sites e produtos digitais sob medida",
	description: "Desenvolvimento de sites, aplicações e sistemas digitais com Rafael Hentz.",
	metadataBase: new URL("https://hentzrafael.com"),
	openGraph: {
		title: "Rafael Hentz — Sites e produtos digitais sob medida",
		description: "Sites e produtos digitais feitos para o jeito que sua empresa trabalha.",
		locale: "pt_BR",
		type: "website",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pt-BR">
			<body className="antialiased">{children}</body>
		</html>
	);
}
