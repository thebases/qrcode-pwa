// app/splashscreen/3/page.tsx
"use client";

import { useRouter } from "next/navigation";

export default function SplashPage3() {
    const router = useRouter();

    return (
        <div className="flex items-center justify-center h-screen bg-purple-500 text-white">
            <div className="text-center">
                <h1 className="text-3xl font-bold">Get Started Now</h1>
                <button
                    onClick={() => router.push("/")}
                    className="mt-4 px-4 py-2 bg-gray-700 text-white rounded"
                >
                    Finish
                </button>
            </div>
        </div>
    );
}
