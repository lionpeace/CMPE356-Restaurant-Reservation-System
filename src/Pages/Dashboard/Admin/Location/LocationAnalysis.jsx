import React, { useEffect, useRef } from "react";
import Navigation from "../../../../Shared/Dashboard/Admin/NavigationAdmin.jsx";

import Chart from "chart.js/auto";

function LocationAnalysis() {
    const chartRef = useRef(null);
    const chartInstance = useRef(null);

    const locations = [
        { id: 1, city: "Istanbul, Turkey", restaurantCount: 143 },
        { id: 2, city: "Ankara, Turkey", restaurantCount: 85 },
        { id: 3, city: "İzmir, Turkey", restaurantCount: 120 },
        { id: 4, city: "Bursa, Turkey", restaurantCount: 75 },
        { id: 5, city: "Antalya, Turkey", restaurantCount: 95 },
        { id: 6, city: "Adana, Turkey", restaurantCount: 60 },
        { id: 7, city: "Gaziantep, Turkey", restaurantCount: 110 },
        { id: 8, city: "Konya, Turkey", restaurantCount: 70 },
        { id: 9, city: "Mersin, Turkey", restaurantCount: 50 },
        { id: 10, city: "Kayseri, Turkey", restaurantCount: 65 },
        { id: 11, city: "Sakarya, Turkey", restaurantCount: 40 },
        { id: 12, city: "Eskişehir, Turkey", restaurantCount: 55 },
        { id: 13, city: "Trabzon, Turkey", restaurantCount: 45 },
        { id: 14, city: "Samsun, Turkey", restaurantCount: 30 },
        { id: 15, city: "Kocaeli, Turkey", restaurantCount: 80 },
        { id: 16, city: "Denizli, Turkey", restaurantCount: 0 }
    ];

    useEffect(() => {
        if (chartInstance.current) {
            chartInstance.current.destroy();
        }

        const ctx = chartRef.current.getContext("2d");
        chartInstance.current = new Chart(ctx, {
            type: "doughnut",
            data: {
                labels: locations.map(cuisine => cuisine.city),
                datasets: [{
                    label: 'Location Distribution',
                    data: locations.map(cuisine => cuisine.restaurantCount),
                    backgroundColor: [
                        "#025596",
                        "#b2ccdf",
                        "#6799c0",
                        "#2a70a6",
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
    }, [locations]);

    return (
        <>
            <Navigation />
            <div id="content">
                <h1 className="page-name">Location Analysis</h1>
                <div className="chart-location-div">
                    <div className="chart-container chart-location-1">
                        <canvas ref={chartRef}></canvas>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LocationAnalysis;