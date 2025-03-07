import React, { useEffect, useRef } from "react";
import Navigation from "../../../../Shared/Dashboard/Admin/NavigationAdmin.jsx";

import Chart from "chart.js/auto";

function ReservationAnalysis() {
    const monthlyChartRef = useRef(null);
    const monthlyChartInstance = useRef(null);
    const weeklyChartRef = useRef(null);
    const weeklyChartInstance = useRef(null);

    useEffect(() => {
        if (monthlyChartInstance.current) {
            monthlyChartInstance.current.destroy();
        }

        const ctx = monthlyChartRef.current.getContext("2d");
        monthlyChartInstance.current = new Chart(ctx, {
            type: "bar",
            data: {
                labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                datasets: [
                    {
                        label: "Total Reservations",
                        data: [1048, 987, 1037, 887, 786, 651, 744, 833, 938, 1056, 449, 950],
                        backgroundColor: [
                            "#025596",
                            "#b2ccdf",
                            "#6799c0",
                            "#2a70a6",
                        ],
                        borderColor: [
                           "#025596",
                            "#b2ccdf",
                            "#6799c0",
                            "#2a70a6",
                        ],
                        borderWidth: 2,
                        barPercentage: 0.9,
                        categoryPercentage: 0.6,
                    },
                ],
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
                scales: {
                    x: {
                        ticks: {
                            font: {
                                size: 18,
                            },
                            color: "#666",
                        },
                    },
                    y: {
                        beginAtZero: true,
                        ticks: {
                            font: {
                                size: 16, 
                            },
                            color: "#666",
                        },
                    },
                },
            },
        });

        return () => {
            if (monthlyChartInstance.current) {
                monthlyChartInstance.current.destroy();
            }
        };
        
    }, []);

    useEffect(() => {
        if (weeklyChartInstance.current) {
            weeklyChartInstance.current.destroy();
        }

        const ctx = weeklyChartRef.current.getContext("2d");
        weeklyChartInstance.current = new Chart(ctx, {
            type: "line",
            data: {
                labels: ["Monday", "Tuesday", "Wednesday", "Thursday","Friday", "Saturday", "Sunday"], 
                datasets: [
                    {
                        label: "Weekly Reservations",
                        data: [303, 288, 156, 305, 274, 307, 124],
                        backgroundColor: "#b2ccdf",
                        borderColor: "#025596",
                        borderWidth: 2,
                        fill: true,
                    },
                ],
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
                scales: {
                    x: {
                        ticks: {
                            font: {
                                size: 18,
                            },
                            color: "#666",
                        },
                    },
                    y: {
                        beginAtZero: true,
                        ticks: {
                            font: {
                                size: 16, 
                            },
                            color: "#666",
                        },
                    },
                },
            },
        });

        return () => {
            if (weeklyChartInstance.current) {
                weeklyChartInstance.current.destroy();
            }
        };
    }, []);

    return (
        <>
            <Navigation />
            <div id="content">
                <h1 className="page-name">Reservation Analysis</h1>
                <div className="card-container-reservation">
                    <div className="container text-center">
                        <div className="row">
                            <div className="col-sm">
                                <div className="card card-reservation">
                                    <div className="card-body card-body-reservation">
                                        <h4 className="card-title-reservation">Daily Reservations</h4>
                                        <p className="card-text-reservation">Number of reservations received through the system today</p>
                                        <div className="form-group">
                                            <label className="card-label-reservation" htmlFor="standard-reservation">64</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm">
                                <div className="card card-reservation">
                                    <div className="card-body card-body-reservation">
                                        <h4 className="card-title-reservation">Weekly Reservations</h4>
                                        <p className="card-text-reservation">Number of reservations received through the system this week</p>
                                        <div className="form-group">
                                            <label className="card-label-reservation" htmlFor="advanced-reservation">303</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm">
                                <div className="card card-reservation">
                                    <div className="card-body card-body-reservation">
                                        <h4 className="card-title-reservation">Monthly Reservations</h4>
                                        <p className="card-text-reservation">Number of reservations received through the system this month</p>
                                        <div className="form-group">
                                            <label className="card-label-reservation" htmlFor="premium-reservation">1033</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm">
                                <div className="card card-reservation">
                                    <div className="card-body card-body-reservation">
                                        <h4 className="card-title-reservation">Total Reservations</h4>
                                        <p className="card-text-reservation">Number of reservations received through the system total</p>
                                        <div className="form-group">
                                            <label className="card-label-reservation" htmlFor="premium-reservation">2126</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <h2 className="chart-title m-4 text-center">Weekly Customer Reservations <i>03/02 - 09/02</i></h2>
                <div className="chart-reservation-div">
                    <div className="chart-container chart-reservation-1">
                        <canvas className="canvas-2" ref={weeklyChartRef}></canvas>
                    </div>
                </div>
                <h2 className="chart-title m-4 text-center">Monthly Customer Reservations <i>2025</i></h2>
                <div className="chart-reservation-div">
                    <div className="chart-container chart-reservation-1">
                        <canvas className="canvas-1" ref={monthlyChartRef}></canvas>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ReservationAnalysis;
