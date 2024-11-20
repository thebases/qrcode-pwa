"use client"
import localFont from "next/font/local";
import "./globals.css";
import {useEffect, useState} from "react";
import Loading from "@/components/loading";
import SplashScreen from "@/components/SplashScreen";

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

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    // const [isLoading, setIsLoading] = useState(true);
    // const [isSplashComplete, setIsSplashComplete] = useState(false);

    // useEffect(() => {
    //     const timer = setTimeout(() => setIsLoading(false), 2000); // Simulate loading
    //     return () => clearTimeout(timer);
    // }, []);
    return (
        <html lang="en">
        <head>
            <link rel="manifest" href="/manifest.json"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <meta name="theme-color" content="#1d4ed8"/>
            <link rel="apple-touch-icon" href="/icon-192x192.png"/>
            {/*<!-- Apple Touch Startup Image -->*/}
            <link rel="apple-touch-startup-image" href="/splash-screen-2048x2732.png" media="(device-width: 1024px)"/>
            <link rel="apple-touch-startup-image" href="/splash-screen-1668x2224.png" media="(device-width: 834px)"/>
            <link rel="apple-touch-startup-image" href="/splash-screen-1536x2048.png" media="(device-width: 768px)"/>
            {/*<!-- Add more resolutions for iOS devices -->*/}
            <meta name="apple-mobile-web-app-capable" content="yes"/>
            <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"/>
        </head>
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
        {children}
        {/*{!isSplashComplete ? (*/}
        {/*    <SplashScreen onFinish={() => setIsSplashComplete(true)} />*/}
        {/*): (children)}*/}
        </body>
        </html>
    );
}
