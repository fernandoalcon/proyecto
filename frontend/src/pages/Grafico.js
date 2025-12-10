import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function Grafico() {
  const data = {
    labels: ["Activos", "Eliminados"],
    datasets: [
      {
        label: "Libros",
        data: [12, 5],
        backgroundColor: ["#4CAF50", "#E53935"],
      },
    ],
  };

  return (
    <div style={{ width: "600px", margin: "40px auto", color: "white" }}>
      <h1>Gráfico de Libros</h1>
      <Bar data={data} />
    </div>
  );
}
