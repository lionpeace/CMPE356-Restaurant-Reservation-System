import React, { useEffect, useRef } from "react";
import Navigation from "../../../../Shared/Dashboard/Admin/NavigationAdmin.jsx";
import Chart from "chart.js/auto";

function CuisineAnalysis() {
    const chartRef = useRef(null);
    const chartInstance = useRef(null);

    const cuisines = [
        { id: 1, cuisineName: "Turkish Food", restaurantCount: 143 },
        { id: 2, cuisineName: "Italian Food", restaurantCount: 123 },
        { id: 3, cuisineName: "Mexican Food", restaurantCount: 98 },
        { id: 4, cuisineName: "Chinese Food", restaurantCount: 87 },
        { id: 5, cuisineName: "Indian Food", restaurantCount: 76 },
        { id: 6, cuisineName: "Japanese Food", restaurantCount: 65 },
        { id: 7, cuisineName: "Thai Food", restaurantCount: 54 },
        { id: 8, cuisineName: "Greek Food", restaurantCount: 43 },
        { id: 9, cuisineName: "French Food", restaurantCount: 32 },
        { id: 10, cuisineName: "Korean Food", restaurantCount: 21 },
        { id: 11, cuisineName: "Vietnamese Food", restaurantCount: 10 },
        { id: 12, cuisineName: "Spanish Food", restaurantCount: 9 },
        { id: 13, cuisineName: "Lebanese Food", restaurantCount: 8 },
        { id: 14, cuisineName: "American Food", restaurantCount: 7 },
        { id: 15, cuisineName: "German Food", restaurantCount: 6 },
        { id: 16, cuisineName: "Russian Food", restaurantCount: 5 },
        { id: 17, cuisineName: "Brazilian Food", restaurantCount: 4 },
        { id: 18, cuisineName: "Argentinian Food", restaurantCount: 3 },
        { id: 19, cuisineName: "Portuguese Food", restaurantCount: 2 },
        { id: 20, cuisineName: "African Food", restaurantCount: 1 }
    ];

    useEffect(() => {
        if (chartInstance.current) {
            chartInstance.current.destroy();
        }

        const ctx = chartRef.current.getContext("2d");
        chartInstance.current = new Chart(ctx, {
            type: "doughnut",
            data: {
                labels: cuisines.map(cuisine => cuisine.cuisineName),
                datasets: [{
                    label: 'Cuisine Distribution',
                    data: cuisines.map(cuisine => cuisine.restaurantCount),
                    backgroundColor: [
                        'rgb(255, 99, 132)',
                        'rgb(255, 205, 86)',
                        'rgb(75, 192, 192)',
                        'rgb(153, 102, 255)',
                        'rgb(255, 159, 64)',
                        'rgb(199, 199, 199)',
                        'rgb(83, 102, 255)',
                        'rgb(255, 99, 71)',
                        'rgb(60, 179, 113)',
                        'rgb(255, 215, 0)',
                        'rgb(138, 43, 226)',
                        'rgb(255, 140, 0)',
                        'rgb(0, 191, 255)',
                        'rgb(255, 20, 147)',
                        'rgb(34, 139, 34)',
                        'rgb(255, 69, 0)',
                        'rgb(75, 0, 130)',
                        'rgb(255, 228, 181)',
                        'rgb(0, 128, 128)'
                    ],
                    hoverOffset: 4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false,
                        labels: {
                            font: {
                                size: 18,
                                family: "Arial",
                                weight: "bold",
                            },
                            color: "#333",
                        },
                    },
                    tooltip: {
                        titleFont: { size: 18 },
                        bodyFont: { size: 18 },
                        backgroundColor: "rgba(0,0,0,0.7)",
                        titleColor: "#fff",
                        bodyColor: "#ddd",
                    },
                },
            },
        });

        return () => {
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }
        };
    }, [cuisines]);

    return (
        <>
            <Navigation/>
            <div id="content">
                <h1 className="page-name">Cuisine Analysis</h1>
                <div className="chart-restaurant-div">
                    <div className="chart-container chart-restaurant-1">
                        <canvas ref={chartRef}></canvas>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CuisineAnalysis;