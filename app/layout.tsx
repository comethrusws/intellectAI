import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ThemeContextProvider from "@/context/theme-context";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import CookiePolicy from "@/components/cookiePolicy";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "intellectAI",
  description: "IntellectAI, is a cutting-edge AI and ML solutions provider, specializing in innovative software development, custom AI models, and advanced data analytics. We empower businesses with intelligent automation, tailored AI systems, and next-gen technology to drive growth and efficiency.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeContextProvider>
          <Navbar/>
          {children}
          <CookiePolicy/>
          <Footer/>
        </ThemeContextProvider>
        </body>
    </html>
  );
}
