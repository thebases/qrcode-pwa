'use client'

import { useSearchParams } from 'next/navigation'
import { useEffect } from "react"
import BottomMenu from "@/components/BottomMenu"
import QRCode from "@/components/home/QRCode"
import QRInfo from "@/components/home/QRInfo"
import { getDataFromQRCode } from "@/app/home/controller/home_controller"
import EMVQRField from "@/app/model/emv_field";

export default function GenQr() {
    const searchParams = useSearchParams()
    const text = searchParams.get('text')

    useEffect(() => {
        if (text) {
            const working = new SpeechSynthesisUtterance(`Số tiền cần thanh toán ${getDataFromQRCode(text, "54")} đồng`)
            working.lang = 'vi-VN'
            window.speechSynthesis.speak(working)
        }
        return () => {
            window.speechSynthesis.cancel()
        }
    }, [searchParams])

    return (
        <div className="grid bg-white grid-rows-[20px_1fr_20px] items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
                {text && <QRCode text={text} />}
                <QRInfo
                    amount={getDataFromQRCode(text! , EMVQRField.F54_TRANSACTION_AMOUNT)}
                />
                <BottomMenu />
            </main>
        </div>
    )
}

