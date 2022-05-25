import React, {useEffect, useState } from 'react'
import { Bar } from "react-chartjs-2";

import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";
Chart.register(CategoryScale);

function Chart3(props) {

  const options = {
    plugins: {
      legend: {
        display: false,
      },
      datalabels: {
        display: false,
      },
    },
    scales: {
      y: {
        min: 0,
        ticks: {
          stepSize: 1,
        },
      },
    },

    // false : 사용자 정의 크기에 따라 그래프 크기가 결정됨.
    // true : 크기가 알아서 결정됨.
    maintainAspectRatio: true,
  };

  const data = {
    // 각 막대별 라벨
    labels: [
      "1월",
      "2월",
      "3월",
      "4월",
      "5월",
      "6월",
      "7월",
      "8월",
      "9월",
      "10월",
      "11월",
      "12월",
    ],
    datasets: [
      {
        data: props.energyUsage, // 수치
        backgroundColor: "#80A4E7", // 각 막대 색
        barThickness: 18,
        barPercentage: 0.5,
        label: "난방",
        borderWidth: 1,
        fill: false,
        borderColor: "rgba(255, 255, 255, 0)",
      },
      {
        data: props.energyUsage2, // 수치
        backgroundColor: "#F18246", // 각 막대 색
        barThickness: 18,
        barPercentage: 0.5,
        label: "난방",
        borderWidth: 1,
        fill: false,
        borderColor: "rgba(255, 255, 255, 0)",
      },
    ],
  };

  return (
    <>
      <Bar data={data} options={options} height={100} />
    </>
  );
}

export default Chart3;