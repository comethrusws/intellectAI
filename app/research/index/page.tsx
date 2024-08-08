"use client";
import { useEffect, useState } from "react";

export default function Home() {
    const [headerName, setHeaderName] = useState('intellectAI');
    
    useEffect(() => {
        const newHeaderName = "Research | intellectAI";
        setHeaderName(newHeaderName);
        document.title = newHeaderName;
    }, []);
    
    return (
        <main className="flex flex-col items-center justify-between p-10 md:p-24">
            <h1 className="text-4xl md:text-5xl font-normal items-center mb-6">hello from index.tsx</h1>
        </main>
    );
}
