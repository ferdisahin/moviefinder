import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/sidebar";
import {FaSearch} from "react-icons/fa";
import SearchForm from "@/components/search-form";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: process.env.NEXT_PUBLIC_SITE_NAME,
    description: process.env.NEXT_PUBLIC_SITE_DESC,
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body className={`bg-gray-900 font-inter antialiased text-white min-h-svh flex ${inter.className}`}>
            <Sidebar />
            <div className="flex-1 flex flex-col pr-5">
                <SearchForm />

                {children}
            </div>
        </body>
        </html>
    );
}
