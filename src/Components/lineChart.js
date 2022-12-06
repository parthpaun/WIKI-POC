import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Line Chart",
    },
  },
};

const labels = ["Day1", "Day2", "Day3", "Day4", "Day5", "Day6", "Day7"];

export const data = {
  labels,
  datasets: [
    {
      label: "Search item 1",
      data: [500, 20, 100, 12, 25, 200, 400],
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Search item 2",
      data: [25, 30 , 200, 650, 750, 650, 100],
      backgroundColor: "rgba(20, 25, 170, 0.72)",
    },
    {
      label: "Search item 3",
      data: [100, 700, 60, 200, 110, 330, 440],
      backgroundColor: "rgba(255, 165, 0, 1)",
    },
    {
      label: "Search item 4",
      data: [30, 170, 500, 120, 300, 510, 126],
      backgroundColor: "rgba(170, 20, 20, 0.72)",
    },
  ],
};

const LineChart = () => {
  return <Line options={options} data={data} />;
};

export default LineChart;
