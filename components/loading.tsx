// app/loading.tsx
export default function Loading() {
    return (
        <div className="flex items-center justify-center h-screen bg-blue-500 text-white">
            <h1>Loading...</h1>
            <div className="w-[428px] h-[926px] relative bg-[#333333] rounded-[30px] shadow">
                <div className="w-[428px] h-[926px] left-0 top-0 absolute bg-[#333333] rounded-[30px]"/>
                <div
                    className="w-[200px] h-[200px] left-[114px] top-[263px] absolute flex-col justify-start items-start flex">
                    <div className="w-[200px] h-[200px] relative">
                    </div>
                    <div className="w-[14.44px] h-[14.44px] bg-white rounded-full"/>
                </div>
            </div>
        </div>
    );
}
