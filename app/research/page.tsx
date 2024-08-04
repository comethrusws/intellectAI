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
        <main className="flex flex-col items-center justify-between px-24 py-6 mb-6">
            Research Page
        </main>
    );
}
