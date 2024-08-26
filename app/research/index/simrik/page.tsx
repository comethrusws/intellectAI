import { Metadata } from "next";
import { GoArrowRight, GoArrowUpRight } from "react-icons/go";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Link from "next/link";
import Image from "next/image"
import '@/app/globals.css'
import AnimatedCardGrid from "@/components/AnimatedGrid";


export const metadata: Metadata ={
    title: 'SIMRIK | intellectAI'
}

export default function Home() {    
    return (
        <main className="flex flex-col items-center justify-between p-10 md:p-24">
            <small className="text-xs md:text-sm py-4 items-center">SIMRIK</small>
            <h1 className="text-4xl md:text-5xl font-normal items-center mb-2 text-center">
                Get answers. Find inspiration. <br />Be more productive.
            </h1>
            <small className="text-sm md:text-xl py-4 items-center">Free to use. Easy to try. Just ask and SIMRIK can <br />help with writing, learning, brainstorming, and more.</small>

            <div id="buttons" className="flex flex-col md:flex-row mt-10 justify-start">
                <Link href={"https://simrik.vercel.app"} target="_blank">
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
                            <GoArrowRight className="ml-0" />
                        </span>
                    </button>
                </Link>
            </div>

           

            <AnimatedCardGrid/>

            <h1 className="text-2xl md:text-4xl font-normal items-center text-center mb-2 mt-24">
            Creates, generates ideas, refines, <br />and investigates concepts with you.
            
            </h1>
            <small className="text-xs md:text-sm py-4 items-center">
            <span className="flex items-center align-bottom">
                            Learm More About SIMRIK
                            <GoArrowRight className="ml-1" />
                        </span>
            </small>
            <div className="md:w-11/12 md:h-full w-full h-3/4 md:p-10 mt-full md:overflow-hidden mb-10">
                <AspectRatio ratio={16 / 9}>
                    <Image src="/research/simrik/creative-prompt.png" alt="Creative Content" layout="fill" objectFit="cover" className="w-full rounded-md object-cover"/>
                </AspectRatio>
            </div>

            <h1 className="text-2xl md:text-4xl font-normal items-center text-center mb-4 md:mt-8 mt-10">
            Generate and debug code. <br /> Automate repetitive tasks. Learn new APIs.
            </h1>
            <div className="md:w-11/12 md:h-full w-full h-3/4 md:p-10 mt-full md:overflow-hidden mb-10">
                <AspectRatio ratio={16 / 9}>
                    <Image src="/research/simrik/code-prompt.png" alt="Creative Content" layout="fill" objectFit="cover" className="w-full rounded-md object-cover"/>
                </AspectRatio>
            </div>

            <h1 className="text-2xl md:text-4xl font-normal items-center text-center mb-4 md:mt-8 mt-10">
            Solve Coding Problems. <br />Generate Programming Logic. Learn New frameworks. 
            </h1>
            <div className="md:w-11/12 md:h-full w-full h-3/4 md:p-10 mt-full md:overflow-hidden mb-10">
                <AspectRatio ratio={16 / 9}>
                    <Image src="/research/simrik/automation-prompt.png" alt="Creative Content" layout="fill" objectFit="cover" className="w-full rounded-md object-cover"/>
                </AspectRatio>
            </div>



            


            <div id="bottom-card" className="flex items-center justify-center mb-3 mt-16 w-full md:overflow-hidden">
                <div className="bg-blue-300/70 text-black dark:text-white p-5 md:p-20 rounded-lg shadow-lg text-center w-full max-w-[3/4vw] mx-auto">
                    <h2 className="text-xl md:text-5xl font-normal mb-4">Join hundreds of  users <br /> and try SIMRIK today.</h2>
                    <a 
                        href="https://simrik.vercel.app" 
                        target="_blank"
                        className="inline-block md:text-xl text-xs bg-white text-black px-6 py-2 rounded-full font-normal shadow-md hover:bg-gray-200 transition duration-100 items-center mt-2 hover:scale-[95%]"
                    >
                        <span className="flex items-center justify-center">
                            Try SIMRIK
                            <GoArrowUpRight className="ml-1" />
                        </span>
                    </a>
                </div>
            </div>
        </main>
    );
}
