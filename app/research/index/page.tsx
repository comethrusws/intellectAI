"use client";
import { useEffect } from "react";

export default function Home() {    
    useEffect(() => {
        document.title=("Research Index | intellectAI")
    }, []);
    
    return (
        <main className="flex flex-col items-center justify-between p-10 md:p-24">
            <small className="text-xs md:text-sm mt-4 mb-1 items-center">Research Index</small>
            <h1 className="text-3xl md:text-5xl font-semibold items-center mb-6">Archive</h1>

        </main>
    );
}
