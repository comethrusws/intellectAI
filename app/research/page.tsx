"use client";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Link from "next/link";
import Image from "next/image"
import { useEffect, useState } from "react";
import { IoMdArrowForward } from "react-icons/io";

export default function Home() {
    const [headerName, setHeaderName] = useState('intellectAI');
    
    useEffect(() => {
        const newHeaderName = "Research | intellectAI";
        setHeaderName(newHeaderName);
        document.title = newHeaderName;
    }, []);
    
    return (
        <main className="flex flex-col items-center justify-between p-10 md:p-24">
            <h1 className="text-4xl md:text-5xl font-normal items-center mb-6">Advancing Accessible and Safe AI</h1>
            <p className="text-sm md:text-xl md:px-40">
            We are dedicated to advancing artificial intelligence that is both safe and accessible. Our mission is to develop AI technologies that benefit everyone, ensuring innovation and ethical standards go hand in hand.
            </p>

            <div id="buttons" className="flex flex-col md:flex-row mt-10 justify-start">
                <Link href={"/research/index"}><button className="rounded-full dark:bg-white bg-black text-white dark:text-black text-sm p-3 hover:bg-neutral-400">View research index</button>
                </Link>
                <Link href={"/safety"}>
                    <button className="bg-transparent dark:text-white text-black text-sm p-3 hover:underline">
                        <span className="flex items-center">
                            Learn about safety
                            <IoMdArrowForward className="ml-2" />
                        </span>
                    </button>
                </Link>
            </div>

            <div className="md:w-11/12 md:h-3/4 w-full h-auto md:p-10 mt-8">
                <AspectRatio ratio={16 / 9}>
                    <Image src="/research.png" alt="MUSE-i" layout="fill" objectFit="cover" className="w-full rounded-md object-cover"/>
                </AspectRatio>
            </div>

            <p className="text-xl md:text-3xl md:px-40 mt-6">
            "Safeguarding the deployment of advanced AI systems is a key focus for us. Through methods like learning from human feedback, we're making progress and actively researching new solutions to address critical gaps."
            <small className="text-sm mt-4 flex text-center">Hanna Liu, Researcher at intellectAI</small>
            </p>

            <div className="flex items-center justify-center mb-5 mt-16">
                <div className="bg-neutral-600 text-white md:p-20 p-[20vw] rounded-lg shadow-lg text-center md:max-w-fit mx-auto max-w-min">
                    <h2 className="text-xl md:text-2xl font-normal mb-4">Explore all research</h2>
                    <a 
                        href="/resarch/index" 
                        className="inline-block md:text-xl text-xs bg-white text-black px-6 py-2 rounded-full font-normal shadow-md hover:bg-gray-200 transition duration-300 items-center"
                    >
                        <span className=" align-middle">View research index</span>
                    </a>
                </div>
            </div>

        </main>
    );
}
