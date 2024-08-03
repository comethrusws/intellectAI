import React from "react";
import { GoArrowUpRight } from "react-icons/go";

export default function Try(){
    return(
        <div className="flex items-center justify-center mb-20">
        <div className="bg-gray-900 text-white md:p-10 p-[20vw] rounded-lg shadow-lg text-center md:max-w-fit mx-auto max-w-min">
            <h2 className="text-xl md:text-2xl font-bold mb-4">Quick answers.<br />Improved Workflow. Unlimited Ideas.</h2>
            <a 
                href="/try-simrik" 
                className="md:text-xl text-xs inline-flex bg-white text-black px-6 py-2 rounded-full font-semibold shadow-md hover:bg-gray-200 transition duration-300 items-center"
            >
                Try SIMRIK<span className="inline-block ml-1 align-middle"><GoArrowUpRight /></span>
            </a>
        </div>
    </div>
    )}