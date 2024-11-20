// app/splashscreen/2/page.tsx
"use client";

import { useRouter } from "next/navigation";

export default function SplashPage2() {
    const router = useRouter();

    return (
        <div className="flex items-center justify-center h-screen bg-green-500 text-white">
            <div className="text-center">
                <h1 className="text-3xl font-bold">Explore Features</h1>
                <button
                    onClick={() => router.push("/splashscreen/3")}
                    className="mt-4 px-4 py-2 bg-gray-700 text-white rounded"
                >
                    Next
                </button>
            </div>
        </div>
    );
}
