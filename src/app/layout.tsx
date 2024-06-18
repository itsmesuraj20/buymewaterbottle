import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBottleWater } from "@fortawesome/free-solid-svg-icons"; // Correct import for the icon

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Buy me a Water Bottle",
  description: "Buy me a Water Bottle for my work",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="mb-16">
          <div className="flex justify-between max-w-2xl mx-auto px-4 py-4" >
          <Link href={'/'} className="inline-flex gap-1 items-center">
            <FontAwesomeIcon className="h-8" icon={faBottleWater} /> {/* Use the imported icon */}
            <span className="" >Buy me a Water Bottle </span> 
          </Link>
          <nav className="mt-2 flex gap-4 items-center text-base font-medium ">
            
            <Link href="/about">About</Link>
            <Link href="/about">FAQ</Link>
            <Link href="/about">Contact</Link>

            <div className="flex gap-4">
            <button className="border-2 rounded-full px-4 py-2 text-base font-medium ">
              Login
            </button>
            <button className="bg-yellow-300 rounded-full px-4 py-2 text-base font-medium">Sign up</button>
           
            </div>
            
          </nav>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
