import Navigation from "../components/Navigation";
import "./globals.css";
import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
            <body className="bg-orange-50 p-4">
                <>
                    <Navigation />
                    {children}
                </>
            </body>
        </html>
    );
}
