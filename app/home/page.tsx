'use client'

import { useSearchParams } from 'next/navigation'
import { useEffect } from "react"
import BottomMenu from "@/components/BottomMenu"
import QRCode from "@/components/home/QRCode"
import QRInfo from "@/components/home/QRInfo"
import { getDataFromQRCode } from "@/app/home/controller/home_controller"
import EMVQRField from "@/app/model/emv_field"
import MQTTClient from "@/services/mqtt-client"

export default function GenQr() {
    const searchParams = useSearchParams()
    const text = searchParams.get('text')

    useEffect(() => {


        const qrTopic = 'qr/transactions'

        if (text) {
            MQTTClient.publish(qrTopic, JSON.stringify({
                qrData: text,
                amount: getDataFromQRCode(text, EMVQRField.F54_TRANSACTION_AMOUNT),
                timestamp: new Date().toISOString()
            }))

            MQTTClient.subscribe(`${qrTopic}/status`, (message) => {
                const status = JSON.parse(message)
                console.log('Transaction status:', status)
                if (text) {
                    const working = new SpeechSynthesisUtterance(`Thanh toán thành công số tiền ${getDataFromQRCode(text, "54")} đồng`)
                    working.lang = 'vi-VN'
                    window.speechSynthesis.speak(working)
                }
            })
        }

        return () => {
            window.speechSynthesis.cancel()
            MQTTClient.unsubscribe(`${qrTopic}/status`)
        }
    }, [searchParams, text])

    return (
        <div className="grid bg-white grid-rows-[20px_1fr_20px] items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
                {text && <QRCode text={text} />}
                <QRInfo
                    amount={getDataFromQRCode(text!, EMVQRField.F54_TRANSACTION_AMOUNT)}
                />
                <BottomMenu />
            </main>
        </div>
    )
}

