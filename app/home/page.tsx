'use client'
import {useQRCode} from 'next-qrcode';
import BottomMenu from "@/components/BottomMenu";
import {useSearchParams} from 'next/navigation';
import {useEffect} from "react";

export default function GenQr() {
    const {Canvas} = useQRCode();
    const searchParams = useSearchParams();
    const getDataFromQRCode = (qr: string, field: string): string => {
        const content = sliceContent(qr)
        const fields = field.split(".")
        const subField = fields.length > 1 ? fields.slice(1).join(".") : null
        if (content.id === fields[0] && !subField) {
            return content.value
        }
        if (content.id === fields[0] && subField) {
            return getDataFromQRCode(content.value, subField)
        }
        return getDataFromQRCode(content.nextValue, fields.join("."))
    }
    const sliceContent = (content: string) => {
        const id = content.slice(0, 2)
        const length = Number(content.slice(2, 4))
        const value = content.slice(4, 4 + length)
        const nextValue = content.slice(4 + length)
        return {id, length, value, nextValue}
    }
    const text = searchParams.get('text');

    useEffect(() => {
        if(text){
            const working = new SpeechSynthesisUtterance(`Số tiền cần thanh toán ${getDataFromQRCode(text, "54")} đồng`);
            working.lang = 'vi-VN';
            window.speechSynthesis.speak(working)
        }
        return () => {
            window.speechSynthesis.cancel();

        };
    }, [searchParams]);
    return (
        <div
            className="grid bg-white grid-rows-[20px_1fr_20px] items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start ">

                <div className="border-black border-2 rounded-lg">
                    <Canvas
                        text={text!}
                        options={{
                            errorCorrectionLevel: 'M',
                            margin: 3,
                            scale: 4,
                            width: 200,

                        }}
                    />
                </div>
                <BottomMenu/>


            </main>
        </div>
    );
}
