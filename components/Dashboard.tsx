"use client"
import { Responsive, WidthProvider } from "react-grid-layout";
import "react-grid-layout/css/styles.css";

const ResponsiveGridLayout = WidthProvider(Responsive);

const Dashboard: React.FC = () => {
    const layout = [
        { i: "widget1", x: 0, y: 0, w: 1, h: 2 },
        { i: "widget2", x: 1, y: 0, w: 1, h: 2 },
        { i: "widget3", x: 2, y: 0, w: 1, h: 2 },
    ];

    return (
        <ResponsiveGridLayout
            className="layout"
            layouts={{ lg: layout }}
            breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480 }}
            cols={{ lg: 12, md: 10, sm: 6, xs: 4 }}
            rowHeight={30}
        >
            <div key="widget1" className="bg-blue-500 text-white p-4">Widget 1</div>
            <div key="widget2" className="bg-green-500 text-white p-4">Widget 2</div>
            <div key="widget3" className="bg-red-500 text-white p-4">Widget 3</div>
        </ResponsiveGridLayout>
    );
};

export default Dashboard;
