import BotaoChat from "@/components/chat/BotaoChat";
export default function Layout(props: React.PropsWithChildren) {
	return (
		<div>
			{props.children}
			<BotaoChat />
		</div>
	);
}
