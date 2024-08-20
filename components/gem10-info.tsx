"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const GEM1oComponent = () => {
    const [activeTab, setActiveTab] = useState("creativity");
    const [displayedText, setDisplayedText] = useState("");
    const [isBlinking, setIsBlinking] = useState(true);

    const tabContent = {
        creativity: {
            input: "Explain the plot of Cinderella in a sentence where each word has to begin with the next letter in the alphabet from A to Z, without repeating any letters.",
            output: "A beautiful Cinderella, dwelling eagerly, finally gains happiness; inspiring jealous kin, love magically nurtures opulent prince; quietly rescues, slipper triumphs, uniting very wondrously, xenial youth zealously.",
            description: "Explore the imaginative capabilities of AI through creative writing challenges."
        },
        visual: {
            input: "Describe an image of a sunset over the mountains.",
            output: "A radiant sun dips below rugged mountain peaks, casting an orange and pink hue across the sky, with silhouettes of trees in the foreground.",
            description: "Analyze visual descriptions to understand how AI interprets and conveys imagery."
        },
        context: {
            input: "Explain the importance of context in natural language processing.",
            output: "Context in NLP provides the necessary background that ensures the accurate interpretation of words, phrases, and sentences, crucial for understanding meaning.",
            description: "Delve into the significance of context in NLP for accurate comprehension and response generation."
        }
    };

    useEffect(() => {
        let words = tabContent[activeTab].output.split(" ");
        let index = 0;

        // Clear the text and reset the blinking state
        setDisplayedText("");
        setIsBlinking(true);

        const interval = setInterval(() => {
            if (index < words.length) {
                setDisplayedText((prev) => (prev ? `${prev} ${words[index]}` : words[index]));
                index++;
            } else {
                clearInterval(interval);
                setIsBlinking(false); // Stop blinking when text fully displayed
            }
        }, 200);

        return () => clearInterval(interval);
    }, [activeTab]);

    return (
        <div className="bg-transparent text-white p-8 rounded-lg w-full max-w-5xl mx-auto font-sans">
            <div className="flex md:flex-row justify-center md:space-x-8 mb-8 dark:text-gray-400 text-black">
                <button
                    className={`text-lg py-2 focus:outline-none transition-colors duration-300 ${
                        activeTab === "creativity" ? "text-green-500 border-b-2 border-green-500" : "text-gray-400"
                    }`}
                    onClick={() => setActiveTab("creativity")}
                >
                    Creativity
                </button>
                <button
                    className={`text-lg py-2 focus:outline-none transition-colors duration-300 ${
                        activeTab === "visual" ? "text-green-500 border-b-2 border-green-500" : "text-gray-400"
                    }`}
                    onClick={() => setActiveTab("visual")}
                >
                    Visual input
                </button>
                <button
                    className={`text-lg py-2 focus:outline-none transition-colors duration-300 ${
                        activeTab === "context" ? "text-green-500 border-b-2 border-green-500" : "text-gray-400"
                    }`}
                    onClick={() => setActiveTab("context")}
                >
                    Longer context
                </button>
            </div>

            <div className="flex flex-col md:flex-row md:space-x-8">
                <div className="w-full md:w-1/2 text-left mb-8 md:mb-0">
                    <h2 className="text-2xl font-bold mb-4 text-black dark:text-gray-200">
                        {activeTab === "creativity" ? "Creativity" : activeTab === "visual" ? "Visual Input" : "Longer Context"}
                    </h2>
                    <p className="text-lg text-black dark:text-gray-200">
                        {tabContent[activeTab].description}
                    </p>
                </div>

                <div className="w-full md:w-1/2 dark:bg-neutral-900 bg-neutral-700 p-6 rounded-lg md:text-base text-sm">
                    <div className="mb-4 text-gray-500">
                        <span className="font-semibold mb-4">Input <br /></span> 
                        {tabContent[activeTab].input}
                    </div>
                    <hr className="mb-2"/>
                    <span className="font-semibold mb-4">Output <br /></span>
                    <motion.div
                        className="flex items-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <span className="ml-2">{displayedText}</span>
                        {isBlinking && <span className="animate-blink">|</span>}
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default GEM1oComponent;
