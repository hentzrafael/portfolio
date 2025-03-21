import Link from "next/link";
import Container from "./Container";
import Image from "next/image";
import Menu from "./Menu";
export default function Cabecalho() {
	return (
		<header className="flex w-full items-center h-16 bg-black/50">
			<Container className="flex-1 flex justify-center sm:justify-between items-center">
				<div className="flex flex-row gap-10 items-center">
					<Link href="/" className="hidden sm:block">
						<Image src="/logo.svg" alt="logo" width={80} height={0} />
					</Link>
					<Menu />
				</div>
				<div className="hidden sm:flex items-center">
					<Link
						href="https://www.linkedin.com/in/hentzrafael/"
						target="_blank"
						className="bg-red-500 rounded-full px-7 py-1 text-sm font-bold"
					>
						Perfil
					</Link>
				</div>
			</Container>
		</header >
	);
}
