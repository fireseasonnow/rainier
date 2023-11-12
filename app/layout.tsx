import { ReactNode } from "react";
import { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";

const interTight = Inter_Tight({
    subsets: ["latin"],
    display: "swap",
});

export const metadata: Metadata = {
    title: "Rainier app",
};

export default function RootLayout({
    children,
}: {
    children: ReactNode
}) {
    return (
        <html lang="en" className={interTight.className}>
            <body>{children}</body>
        </html>
    );
}
