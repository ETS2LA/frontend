"use client";

import localFont from "next/font/local";
import "./globals.css";
import CSRLayout from "./csr_layout";
import { AuthProvider } from "@/apis/auth";
import Script from "next/script";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export default function RootLayout({ children, } : Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
            <head>
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="icon" href="/favicon.ico" />
            </head>
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-sidebarbg overflow-hidden`}>
                <Script src="https://umami.ets2la.com/script.js" data-website-id="ca602362-299b-4222-9ea5-bbd2610488b3" onError={() => {}} />
                <AuthProvider>
                    <CSRLayout>{children}</CSRLayout>
                </AuthProvider>
            </body>
        </html>
    )
}
