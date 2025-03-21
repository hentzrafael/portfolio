export default function Experiencia() {



    return (
        <div className="flex flex-col sm:flex-row lg:flex-col items-center bg-black border border-zinc-800 rounded-2xl gap-6 p-6 justify-around">
            <Item principal="+3" label="anos de experiência" />
            <Item principal="+20" label="projetos concluídos" />
            <Item principal="100%" label="de satisfação dos clientes" />
        </div>
    );
}

function Item(props: { principal: string, label: string }) {
    return (
        <div className="flex flex-col items-center">
            <span className="text-red-500 text-3xl font-bold leading-6">{props.principal}</span>
            <span className="text-zinc-400 text-sm text-center">{props.label}</span>
        </div>
    );
}