import React from 'react'
import { Bar } from 'react-chartjs-2'

import { CategoryScale } from 'chart.js'
import Chart from 'chart.js/auto'
Chart.register(CategoryScale)

function Chart1() {
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
        max: 5,
        min: 0,
        ticks: {
          stepSize: 0.5,
        },
      },
    },

    // false : 사용자 정의 크기에 따라 그래프 크기가 결정됨.
    // true : 크기가 알아서 결정됨.
    maintainAspectRatio: true,
  }

  const data = {
    // 각 막대별 라벨
    labels: ['항목1', '항목2'],
    datasets: [
      {
        data: [1, 1], // 수치
        backgroundColor: '#F66060', // 각 막대 색
        barThickness: 18,
        barPercentage: 0.5,
        label: '난방',
        borderWidth: 1,
        fill: false,
        borderColor: 'rgba(255, 255, 255, 0)',
      },
      {
        data: [2, 2], // 수치
        backgroundColor: '#80A4E7', // 각 막대 색
        barThickness: 18,
        barPercentage: 0.5,
        label: '냉방',
        borderWidth: 1,
        fill: false,
        borderColor: 'rgba(255, 255, 255, 0)',
      },
      {
        data: [3, 3], // 수치
        backgroundColor: '#B4BEC5', // 각 막대 색
        barThickness: 18,
        barPercentage: 0.5,
        label: '기저',
        borderWidth: 1,
        fill: false,
        borderColor: 'rgba(255, 255, 255, 0)',
      },
    ],
  }

  return (
    <>
      <Bar data={data} options={options} height={300} />
    </>
  )
}

export default Chart1