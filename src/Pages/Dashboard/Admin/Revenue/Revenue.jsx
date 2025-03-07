import React, { useEffect, useRef } from "react";
import Navigation from "../../../../Shared/Dashboard/Admin/NavigationAdmin.jsx";

import Chart from "chart.js/auto";

function Revenue() {
    const chartRef = useRef(null);
    const chartInstance = useRef(null);

    const planRevenue = [
        { id: 1, plan: "Standard Plan Total", restaurantCount: 969 },
        { id: 2, plan: "Advanced Plan Total", restaurantCount: 800 },
        { id: 3, plan: "Premium Plan Total", restaurantCount: 1029 }
    ];

    useEffect(() => {
        if (chartInstance.current) {
            chartInstance.current.destroy();
        }

        const ctx = chartRef.current.getContext("2d");
        chartInstance.current = new Chart(ctx, {
            type: "doughnut",
            data: {
                labels: planRevenue.map(planRevenue => planRevenue.plan),
                datasets: [{
                    label: 'Plan',
                    data: planRevenue.map(planRevenue => planRevenue.restaurantCount),
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
    }, [planRevenue]);

    return (
        <>
            <Navigation />
            <div id="content">
                <h1 className="page-name">Revenue</h1>
                <div className="card-container-revenue">
                    <div className="container text-center">
                        <div className="row">
                            <div className="col-sm">
                                <div className="card card-revenue">
                                    <div className="card-body card-body-revenue">
                                        <h4 className="card-title-revenue">Standard Plan Customers</h4>
                                        <p className="card-text-revenue">Number of customers with Standard Plan | <b>$19</b></p>  
                                        <div className="form-group">
                                            <label className="card-label-revenue" htmlFor="advanced-revenue">51</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm">
                                <div className="card card-revenue">
                                    <div className="card-body card-body-revenue">
                                        <h4 className="card-title-revenue">Advanced Plan Customers</h4>
                                        <p className="card-text-revenue">Number of customers with Advanced Plan | <b>$25</b></p>
                                        <div className="form-group">
                                            <label className="card-label-revenue" htmlFor="advanced-revenue">32</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm">
                                <div className="card card-revenue">
                                    <div className="card-body card-body-revenue">
                                        <h4 className="card-title-revenue">Premium Plan Customers</h4>
                                        <p className="card-text-revenue">Number of customers with Premium Plan | <b>$49</b></p>
                                        <div className="form-group">
                                            <label className="card-label-revenue" htmlFor="advanced-revenue">21</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm">
                                <div className="card card-revenue">
                                    <div className="card-body card-body-revenue">
                                        <h4 className="card-title-revenue">Number of Customers</h4>
                                        <p className="card-text-revenue">Number of active customers</p>
                                        <div className="form-group">
                                            <label className="card-label-revenue" htmlFor="standard-revenue">104</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container text-center">
                    <div className="chart-revenue-div">
                        <h2 className="chart-revenue-title">Revenue ($)</h2>
                        <div className="chart-container chart-revenue-1">
                            <canvas className="canvas-2" ref={chartRef}></canvas>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Revenue;
