"use client";
import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

interface PieChartProps {
  data: number[];
  labels: string[];
  bg: string[];
}

const PieChart: React.FC<PieChartProps> = ({ data, labels, bg }) => {
  const chartData = {
    labels: labels,
    datasets: [
      {
        data: data,
        backgroundColor: bg,
        hoverOffset: 4,
      },
    ],
  };
  return (
    <>
      <div className="mt-5 flex justify-between items-center">
        <div className="grid grid-cols-2 gap-3">
          <div>
            <p>Total Pesan Keluar</p>
            <p className="font-bold text-xl">{data[0]}</p>
          </div>
          <div>
            <p>Total Pesan Gagal</p>
            <p className="font-bold text-xl">{data[1]}</p>
          </div>
          <div>
            <p>Total Pesan Gagal</p>
            <p className="font-bold text-xl">{data[2]}</p>
          </div>
        </div>

        <div>
          <Pie data={chartData} />
        </div>
      </div>
    </>
  );
};

export default PieChart;
