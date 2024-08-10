import React from "react";
import { Doughnut, Line } from "react-chartjs-2";
import {
    CategoryScale,
    Chart as ChartJS,
    LinearScale,
    LineElement,
    PointElement,
    Tooltip,
    Filler,
    ArcElement,
    Legend,
    plugins,
    scales
} from "chart.js";
import { getLast7Days } from "../../lib/features";
import { orange } from "@mui/material/colors";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, ArcElement);

const linearChartOptions = {
    responsive: true,
    plugins: {
        legend: {
            display: false,
        },
        title: {
            display: false
        },
    },
    scales: {
        x: {
            grid: {
                display: false
            },
        },
        y: {
            beginAtZero: true,
            grid: {
                display: false
            },
        },
    },
};

const labels = getLast7Days()

const LineChart = ({ value = [] }) => {
    const data = {
        labels,
        datasets: [{
            data: value,
            label: "Revenue",
            fill: true,
            backgroundColor: "rgba(75,12,192,0.3)",
            borderColor: "rgba(75,12,192,1)",
        }]
    }
    return <Line data={data} options={linearChartOptions} />
};

const doughnutChartOptions = {
    responsive: true,
    plugins: {
        legend: {
            display: false,
        },
    },
    cutout: 120
};

const DoughnutChart = ({ value = [], labels = [] }) => {
    const data = {
        labels,
        datasets: [
            {
                data: value,
                backgroundColor: ["rgba(75,12,92,1)", "rgb(255, 165, 0)"],
                borderColor: ["rgba(75,12,92,1)", "rgb(255, 165, 0)"],
                offset: 40
            }
        ]
    }
    return <Doughnut data={data} style={{ zIndex: 10 }} options={doughnutChartOptions} />
};

export { LineChart, DoughnutChart };
