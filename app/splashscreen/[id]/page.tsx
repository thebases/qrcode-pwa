// app/splashscreen/[id]/page.tsx
"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

const splashPages = [
    { id: 1, text: "Welcome to My App!", color: "bg-blue-500" },
    { id: 2, text: "Explore Features", color: "bg-green-500" },
    { id: 3, text: "Get Started Now", color: "bg-purple-500" },
];

export default function SplashPage({ params }: { params: { id: string } }) {
    const router = useRouter();
    const pageId = parseInt(params.id, 10);
    const currentPage = splashPages.find((page) => page.id === pageId);

    useEffect(() => {
        if (localStorage.getItem("splashSeen")) {
            router.push("/");
        }
    }, [router]);

    const handleNext = () => {
        if (pageId < splashPages.length) {
            router.push(`/splashscreen/${pageId + 1}`);
        } else {
            localStorage.setItem("splashSeen", "true");
            router.push("/");
        }
    };

    if (!currentPage) {
        router.push("/"); // Redirect to home if the page doesn't exist
        return null;
    }

    return (
        <div
            className={`flex items-center justify-center h-screen text-white ${currentPage.color}`}
        >
            <div className="text-center">
                <h1 className="text-3xl font-bold">{currentPage.text}</h1>
                <button
                    onClick={handleNext}
                    className="mt-4 px-4 py-2 bg-gray-700 text-white rounded"
                >
                    {pageId === splashPages.length ? "Finish" : "Next"}
                </button>
            </div>
        </div>
    );
}
