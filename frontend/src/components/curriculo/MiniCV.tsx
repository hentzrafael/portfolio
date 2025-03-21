import Image from "next/image";

export default function MiniCV() {
    return (
        <div className="flex-1 flex md:flex-row flex-col-reverse xl:flex-row lg:flex-col-reverse lg:items-center md:items-start items-center xl:items-start gap-6 bg-black border border-zinc-800 rounded-2xl px-6 pt-6">
            <div className="relative min-w-72 h-64 xl:self-end">
                <Image src={"/minha-foto.png"} alt="Minha foto" fill />
            </div>
            <div className="flex flex-col gap-5 self-center py-6 md:items-start xl:items-start lg:items-center items-center">
                <div className="flex flex-col md:items-start items-center lg:items-center xl:items-start ">
                    <span className="bg-gradient-to-r from-red-500 via-white to-white text-transparent bg-clip-text text-2xl font-bold">Rafael Hentz</span>
                    <span className="text-zinc-400 text-sm">Desenvolvedor Full Stack</span>

                </div>
                <p className="text-sm md:text-left text-center xl:text-left lg:text-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
                </p>
            </div>
        </div>
    );
}