"use client";
import {useZxing} from "react-zxing";
import QrSupport from "../assets/scan/qr_support.png"
import scan_section from "../assets/scan/scan-section.svg"
import scan_line from "../assets/scan/scan-line.svg"
import ChooseFrom from "../assets/scan/choose_from.png"
import Image from "next/image";
import {useRouter} from "next/navigation";

export default function Scan() {
    const router = useRouter()

    function parseEmvQr(qrData: string): Record<string, string> {
        const parsedData: Record<string, string> = {};
        let index = 0;

        while (index < qrData.length) {
            if (index + 2 > qrData.length) break;
            const tag = qrData.substring(index, index + 2);
            index += 2;

            if (index + 2 > qrData.length) break;
            const length = parseInt(qrData.substring(index, index + 2), 10);
            index += 2;

            if (index + length > qrData.length) break;
            const value = qrData.substring(index, index + length);
            index += length;

            parsedData[tag] = value;
        }

        return parsedData;
    }


    const {ref} = useZxing({
        onDecodeResult(result) {
            console.log(result)
            if (parseEmvQr(result.getText())) {
                router.push(`/home?text=${result.getText()}`);
            }

        },
    })


    return (
        <div className="flex flex-col items-center justify-center w-full h-screen  text-white bg-[#ffffff] gap-4"
             style={{
                 backgroundRepeat: 'no-repeat',
                 backgroundSize: 'cover',
                 backgroundPosition: 'center center',
             }}
        >
            <div className="w-full h-full relative flex flex-col  justify-center items-center backdrop-blur"
            >
                {/*<div className="w-full h-[926px]  bg-[#333333] rounded-[30px] bg-blur "/>*/}

                {/*<img className="w-[428px] h-[926px] left-0 top-0 absolute" src="/img/home.png" />*/}

                <div className="w-full h-full  left-[0px] top-[z0px] absolute ">
                    <video
                        className="w-full h-full object-cover"
                        ref={ref}
                    />

                </div>
            </div>

            <div className='absolute inset-0 flex  flex-col h-full w-full items-center justify-center'>
                <div className='absolute inset-0 flex  flex-col h-full w-full items-center justify-center'>
                    <Image src={QrSupport} className="px-10 pb-10" alt=''/>
                    <div className='relative h-[270px] overflow-hidden'>
                        <Image src={scan_section} alt=''/>
                        <div className='scan-swipe absolute'>
                            <Image src={scan_line} alt=''/>
                        </div>
                    </div>
                    <Image src={ChooseFrom} className="px-10 pt-10" alt=''/>
                </div>
            </div>
        </div>
    )
}