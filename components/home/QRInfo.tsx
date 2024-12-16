interface QRInfoProps {
    amount: string;

}

export default function QRInfo({
                                   amount,

                               }: QRInfoProps) {
    return (
        <div className="max-w-md p-6 space-y-4 font-sans">
            <div className="flex justify-between items-center">
                <span className="text-gray-500">Amount : </span>
                <span className="text-indigo-600 font-medium"> {amount}</span>
            </div>
        </div>
    )
}
