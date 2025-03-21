"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Menu() {
    const caminho = usePathname();
    return (
        <nav className="flex gap-6">
            <MenuItem href="/" selecionado={caminho === "/"}>Início</MenuItem>
            <MenuItem href="/projeto/1" selecionado={caminho.startsWith("/projeto")}>Projetos</MenuItem>
            <MenuItem href="mailto:hentz.dev@gmail.com" selecionado={false} novaAba={true}>Contato</MenuItem>
        </nav>
    );
}

function MenuItem(props: {
    children: React.ReactNode
    href: string
    selecionado: boolean
    novaAba?: boolean
}) {
    return (
        <Link href={props.href} target={props.novaAba ? "_blank" : "_self"}>
            <span className={`flex items-center gap-2 text-sm border-red-600 hover:text-white ${props.selecionado ? "border-b-4 text-white" : "text-zinc-300"}`}>
                {props.children}
            </span>
        </Link>
    );
}
