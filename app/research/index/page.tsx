import { Metadata } from "next";

export const metadata: Metadata ={
    title: 'Research Index | intellectAI'
}

export default function Home() {    
    return (
        <main className="flex flex-col items-center justify-between p-10 md:p-24">
            <small className="text-xs md:text-sm mt-4 mb-1 items-center">Research Index</small>
            <h1 className="text-3xl md:text-5xl font-semibold items-center mb-6">Archive</h1>

        </main>
    );
}
