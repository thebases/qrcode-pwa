// app/splashscreen/1/page.tsx
"use client";

import {useRouter} from "next/navigation";
import Qr from "@/public/svg/bi_qr-code-scan.svg"
import Image from "next/image";

export default function SplashPage1() {
    const router = useRouter();

    return (
        <div className="flex flex-col items-center justify-center w-full h-screen  text-white bg-[#333333] gap-4">
            <div className="w-[160px] h-[160px] relative top-[-96px]">
                <Image src={Qr} alt={""}/>
            </div>
            <div className="absolute flex flex-col text-center  bottom-16 ">

                <h1 className="text-3xl font-bold">Welcome to My App!</h1>

                <button
                    onClick={() => router.push("/home")}
                    className="mt-4 px-4 py-2 bg-gray-700 text-white rounded bg-[#fdb623]"
                >
                    Next
                </button>
            </div>
        </div>

    );
}
