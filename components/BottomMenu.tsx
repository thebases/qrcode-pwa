"use client"
import QrScanIcon from "@/public/svg/qr_scan.svg"
import QrIcon from "@/public/svg/qr.svg"
import History from "@/public/svg/history.svg"
import Image from "next/image";

const BottomMenu: React.FC = () => {
    return (
        <div
            className="fixed bottom-0 max-w-[428px] w-full h-[80px] bg-[#333333] text-white flex justify-around items-center py-4 shadow-lg">
            {/*<!-- Generate Button -->*/}
            <div className="flex flex-col items-center">
                <div className="text-lg">
                    <Image src={QrIcon} alt={""}/>
                </div>
                <span className="text-sm">Generate</span>
            </div>

            {/*<!-- Scan Button -->*/}
            <div className="flex flex-col items-center relative top-[-32px]">
                <div
                    className="w-[70px] h-[70px] flex flex-auto items-center justify-center p-3 rounded-full text-black   "
                    style={{
                        boxShadow: "0px 0px 12px 2px #FDB623;",
                        borderRadius: "44px",
                        backgroundColor: "#FDB623"
                    }}
                >
                    <Image src={QrScanIcon} alt={""}/>
                </div>
                <span className="text-sm">Scan</span>
            </div>

            {/*<!-- History Button -->*/}
            <div className="flex flex-col items-center">
                <div className="text-lg">
                    <Image src={History} alt={""}/>
                </div>
                <span className="text-sm">History</span>
            </div>
        </div>
    )
}

export default BottomMenu;