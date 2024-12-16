'use client'

import { useQRCode } from 'next-qrcode'

interface QRCodeProps {
    text: string
}

export default function QRCode({ text }: QRCodeProps) {
    const { Canvas } = useQRCode()

    return (
        <div className="border-black border-2 rounded-lg">
            <Canvas
                text={text}
                options={{
                    errorCorrectionLevel: 'M',
                    margin: 3,
                    scale: 4,
                    width: 200,
                }}
            />
        </div>
    )
}

