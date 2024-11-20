// app/splashscreen/1/page.tsx
"use client";

import {useRouter} from "next/navigation";
import Scanner from "@/public/svg/scanner.svg"
import Bg from "@/public/svg/bg-blur.svg"
import Image from "next/image";
import BottomMenu from "@/components/BottomMenu";

export default function Home() {
    const router = useRouter();

    return (
        <div className="flex flex-col items-center justify-center w-full h-screen  text-white bg-[#ffffff] gap-4"
            style={{backgroundImage: 'url("/img/home.jpg")',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center center',}}
        >
            <div className="w-full h-screen relative flex flex-col  justify-center items-center backdrop-blur"
           >
                {/*<div className="w-full h-[926px]  bg-[#333333] rounded-[30px] bg-blur "/>*/}

                {/*<img className="w-[428px] h-[926px] left-0 top-0 absolute" src="/img/home.png" />*/}

                <div className="w-full h-[240px]  left-[0px] top-[0px] absolute ">
                    <Image className="w-full h-screen left-0 top-[0px] absolute "
                           src={Bg} alt={""}/>
                    <Image src={Scanner} alt={""} className={" left-0 top-[0px] absolute"}  width={240} height={320}/>

                </div>
            </div>


            <BottomMenu/>
        </div>

    );
}
