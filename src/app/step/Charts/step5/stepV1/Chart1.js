import React from 'react'
import { Bar } from 'react-chartjs-2'
import { CategoryScale } from 'chart.js'
import ChartDataLabels from 'chartjs-plugin-datalabels';
import Chart from 'chart.js/auto';

// not working not showing
Chart.register(CategoryScale, ChartDataLabels)

function Chart1() {
  const options = {
    indexAxis: 'y',
    elements: {
      bar: {
        borderWidth: 10,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      datalabels: {
        display: true,
        color: '#fff',
        anchor: 'end',
        clamp:false,
        align: "left"

      },
    },
    scales: {
      y: {
        max: 1,
        min: 0,
      },

      X: {
        max: 5,
        min: 0,
        ticks: {
          stepSize: 0.5,
        },
      },
    },
  }

  const data = {
    // 각 막대별 라벨
    labels: ['항목1'],
    datasets: [
      {
        data: [1], // 수치
        backgroundColor: '#F66060', // 각 막대 색
        barThickness: 24,

        label: '난방',
        borderWidth: 1,

        borderColor: 'rgba(255, 255, 255, 0)',
      },

      {
        data: [2], // 수치
        backgroundColor: '#80A4E7', // 각 막대 색
        barThickness: 24,
        label: '냉방',
        borderWidth: 1,

        borderColor: 'rgba(255, 255, 255, 0)',
      },

      {
        data: [3], // 수치
        backgroundColor: '#B4BEC5', // 각 막대 색
        barThickness: 24,
        label: '기저',
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0)',
      },

      {
        data: [4], // 수치
        backgroundColor: '#FBCE48', // 각 막대 색
        barThickness: 24,
        barPercentage: 0.5,
        label: '급탕/취사',
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0)',
      },
    ],
  }

  return (
    <>
      <Bar data={data} options={options} height={40} />
    </>
  )
}

export default Chart1
