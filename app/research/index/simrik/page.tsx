import { Metadata } from "next";
import { GoArrowUpRight } from "react-icons/go";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Link from "next/link";
import Image from "next/image"


export const metadata: Metadata ={
    title: 'SIMRIK | intellectAI'
}

export default function Home() {    
    return (
        <main className="flex flex-col items-center justify-between p-10 md:p-24">
            <small className="text-xs md:text-sm py-4 items-center">August 12, 2024</small>
            <h1 className="text-4xl md:text-6xl font-normal items-center mb-6 mt-2">SIMRIK</h1>

            <div id="buttons" className="flex flex-col md:flex-row mt-10 justify-start">
                <Link href={"https://simrik.vercel.app"}>
                    <button className="w-40 md:w-40 rounded-full dark:bg-white bg-black text-white dark:text-black text-sm p-3 hover:dark:bg-neutral-200 transition-transform">
                        <span className="flex items-center justify-center">
                            Try SIMRIK
                            <GoArrowUpRight className="ml-1" />
                        </span>
                    </button>
                </Link>
                <Link href={"/docs/GEM-1o: System Card.pdf"}>
                    <button className="bg-transparent dark:text-white text-black text-sm p-3 hover:underline">
                        <span className="flex items-center align-bottom">
                            View system card
                            <GoArrowUpRight className="ml-1" />
                        </span>
                    </button>
                </Link>
            </div>

            <div className="md:w-full md:h-1/2 w-full h-auto md:p-10 mt-8 md:overflow-hidden">
                <AspectRatio ratio={16 / 9}>
                    <Image src="/research/simrik/muse-3.png" alt="MUSE-i" layout="fill" objectFit="cover" className="w-full rounded-md object-cover"/>
                </AspectRatio>
                <p className="text-xs text-gray-400 mt-1">Image Generated with MUSE for SIMRIK</p>
            </div>

        </main>
    );
}
