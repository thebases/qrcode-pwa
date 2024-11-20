// components/SplashScreen.tsx
import { useEffect, useState } from "react";

const SplashScreen = ({ onFinish }: { onFinish: () => void }) => {
    const [currentPage, setCurrentPage] = useState(0);

    const splashPages = [
        {
            id: 1,
            text: "Welcome to My App!",
            color: "bg-blue-500",
            image: "/welcome-image.png",
        },
        {
            id: 2,
            text: "Explore Features",
            color: "bg-green-500",
            image: "/features-image.png",
        },
        {
            id: 3,
            text: "Get Started Now",
            color: "bg-purple-500",
            image: "/get-started-image.png",
        },
    ];


    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentPage((prevPage) => {
                if (prevPage === splashPages.length - 1) {
                    clearInterval(interval);
                    onFinish(); // Notify parent when finished
                    return prevPage;
                }
                return prevPage + 1;
            });
        }, 2000); // Show each page for 2 seconds

        return () => clearInterval(interval);
    }, [onFinish, splashPages.length]);

    const handleNext = () => {
        if (currentPage === splashPages.length - 1) {
            onFinish(); // Finish splash screen
        } else {
            setCurrentPage((prevPage) => prevPage + 1);
        }
    };

    const handlePrev = () => {
        if (currentPage > 0) {
            setCurrentPage((prevPage) => prevPage - 1);
        }
    };

    return (
        <div className={`flex flex-col items-center h-screen ${splashPages[currentPage].color}`}>
            <h1 className="text-3xl font-bold">{splashPages[currentPage].text}</h1>
            <div className="mt-4 flex space-x-4">
                <button
                    onClick={handlePrev}
                    disabled={currentPage === 0}
                    className="px-4 py-2 bg-gray-700 text-white rounded"
                >
                    Previous
                </button>
                <button
                    onClick={handleNext}
                    className="px-4 py-2 bg-gray-700 text-white rounded"
                >
                    {currentPage === splashPages.length - 1 ? "Finish" : "Next"}
                </button>
            </div>
        </div>
    );
};

export default SplashScreen;
