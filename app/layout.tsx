import { ReactNode } from "react";
import { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";
import Navigation from "../components/Navigation";

const interTight = Inter_Tight({
    subsets: ["latin"],
    display: "swap",
});

export const metadata: Metadata = {
    title: "Rainier app",
};

type RootLayout = {
    children: ReactNode | ReactNode[]
}

export default function RootLayout({ children }: RootLayout) {
    return (
        <html lang="en" className={interTight.className}>
            <body className="bg-amber-50 pb-16 text-orange-600">
                <Navigation />
                <main>{children}</main>
            </body>
        </html>
    );
}
