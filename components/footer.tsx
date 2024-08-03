import { navData } from "@/lib/data";
import React from "react";
import { BsInstagram, BsLinkedin, BsTwitterX, BsYoutube } from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { GoArrowUpRight } from "react-icons/go";


export default function Footer(){
    return(
        <div className="min-h-screen">
            <div id="Foot-Notes" className="text-xs container mx-auto px-8 md:px-4 mb-4 md:mb-8 py-10">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
                        {navData.map((section, index) => (
                            <div key={index}>
                                <p className="text-gray-950 dark:text-gray-500 mb-4 font-semibold">{section.title}</p>
                                <ul>
                                    {section.links.map((link) => (
                                        <li key={link.name} className="mb-3">
                                            <a href={link.url} className="text-gray-950 dark:text-gray-300 hover:text-gray-400">
                                                <span className="flex items-center">{link.name} {link.external && <GoArrowUpRight />}</span>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>            
            </div>

            <div id="Footer" className="flex flex-col-reverse md:flex-row content-center justify-between px-10">
                <footer className="mb-4 text-center dark:text-gray-500 text-gray-950 md:text-left align-top">
                    <small className="mx-4 block text-s align-middle">
                        intellectAI &copy; 2018-2024
                    </small>
                </footer>

                <div id="Social-Icons" className="flex mb-4 justify-center dark:text-gray-300 text-gray-950 cursor-pointer gap-5 md:gap-8">
                    <FaGithub />
                    <BsInstagram />
                    <BsLinkedin />
                    <BsYoutube />
                    <BsTwitterX />
                    <FaDiscord />
                </div>
            </div>
        </div>
    )}