import styles from "./BarChart.module.css";
import { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function BarChart() {
  const [chartData, setchartData] = useState({
    datasets: [],
  });

  const [chartOptions, setchartOptions] = useState({});

  useEffect(() => {
    setchartData({
      labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      datasets: [
        {
          label: "Sales $",
          data: [10000, 42542, 33345, 14567, 19345, 17567, 22345],
          borderColor: "rgba(53, 163, 163, 235)",
          backgroundColor: "rgba(53, 163, 235, 0.4)",
        },
      ],
    });

    setchartOptions({
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "Daily Revenue",
        },
      },
      maintainAspectRatio: false,
      responsive: true,
    });
  }, []);

  return (
    <>
      <main className={styles.main}>
        <Bar data={chartData} options={chartOptions} />
      </main>
    </>
  );
}
