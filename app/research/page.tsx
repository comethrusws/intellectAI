import { AspectRatio } from "@/components/ui/aspect-ratio";
import Link from "next/link";
import Image from "next/image"
import { useEffect } from "react";
import { IoMdArrowForward } from "react-icons/io";
import ResearchCarousel from "@/components/researchCarousel";
import { carouselImage, carouselrsrch, carouselText } from "@/lib/data";
import { Metadata } from "next";

export const metadata: Metadata ={
    title: 'Research | intellectAI'
}

export default function Home() {        
    return (
        <main className="flex flex-col items-center justify-between p-10 md:p-24 md:overflow-hidden">
            <h1 className="text-4xl md:text-5xl font-normal items-center mb-6">Advancing Accessible and Safe AI</h1>
            <p className="text-sm md:text-xl md:px-40">
            We are dedicated to advancing artificial intelligence that is both safe and accessible. Our mission is to develop AI technologies that benefit everyone, ensuring innovation and ethical standards go hand in hand.
            </p>

            <div id="buttons" className="flex flex-col md:flex-row mt-10 justify-start">
                <Link href={"/research/index"}><button className="rounded-full dark:bg-white bg-black text-white dark:text-black text-sm p-3 hover:bg-neutral-400">View research index</button>
                </Link>
                <Link href={"/safety"}>
                    <button className="bg-transparent dark:text-white text-black text-sm p-3 hover:underline">
                        <span className="flex items-center align-bottom">
                            Learn about safety
                            <IoMdArrowForward className="ml-1" />
                        </span>
                    </button>
                </Link>
            </div>

            <div className="md:w-11/12 md:h-3/4 w-full h-auto md:p-10 mt-8 md:overflow-hidden">
                <AspectRatio ratio={16 / 9}>
                    <Image src="/research2.png" alt="MUSE-i" layout="fill" objectFit="cover" className="w-full rounded-md object-cover"/>
                </AspectRatio>
            </div>

            <p className="text-xl md:text-3xl md:px-40 mt-6">
            "Safeguarding the deployment of advanced AI systems is a key focus for us. Through methods like learning from human feedback, we're making progress and actively researching new solutions to address critical gaps."
            <small className="text-sm mt-4 flex text-center">Hanna Liu, Researcher at intellectAI</small>
            </p>

            <div id="focus-areas" className="mt-20 md:px-40 text-center">
            <h1 className="text-2xl md:text-4xl font-normal items-center mb-6">Focus Areas</h1>
            <p className="text-sm md:text-[16px] mt-2">We build our generative models using a technology called deep learning, <br />which leverages large amounts of data to train an AI system to perform a task.</p>
            </div>

            <div id="text" className="mt-20 md:px-40 text-center">
            <h1 className="text-2xl md:text-[30px] font-normal items-center mb-6">Text</h1>
            <p className="text-sm md:text-[16px] mt-2">Our text models are sophisticated language processing tools designed to generate,<br />classify, and summarize text with exceptional coherence and precision.</p>
            <ResearchCarousel items={carouselText}/>

            <h1 className="text-2xl md:text-[30px] font-normal items-center mb-6 mt-8 md:mt-12">Image</h1>
            <p className="text-sm md:text-[16px] mt-2">Our research has led to MUSE (Multimodal Universal Synthesis Engine), <br /> a lightweight, highly accurate model for generating detailed and diverse visuals.</p>
            <ResearchCarousel items={carouselImage}/>

            <h1 className="text-2xl md:text-[30px] font-normal items-center mb-6 mt-8 md:mt-12">Key Research</h1>
            <p className="text-sm md:text-[16px] mt-2">Our current AI research leverages a rich foundation <br /> of prior projects and advancements.</p>
            <Link href={"/research/index"}><button className="rounded-full dark:bg-white bg-black text-white dark:text-black text-sm p-3 hover:bg-neutral-500 mt-6">View research index</button>
            </Link>
            <ResearchCarousel items={carouselrsrch}/>

            </div>


            <div id="bottom-card" className="flex items-center justify-center mb-3 mt-16 w-full md:overflow-hidden">
                <div className="bg-neutral-800 text-white p-5 md:p-20 rounded-lg shadow-lg text-center w-full max-w-screen-xl mx-auto">
                    <h2 className="text-xl md:text-2xl font-normal mb-4">Explore all research</h2>
                    <a 
                        href="/research/index" 
                        className="inline-block md:text-xl text-xs bg-white text-black px-6 py-2 rounded-full font-normal shadow-md hover:bg-gray-200 transition duration-300 items-center"
                    >
                        <span className="align-middle">View research index</span>
                    </a>
                </div>
            </div>
        </main>
    );
}
