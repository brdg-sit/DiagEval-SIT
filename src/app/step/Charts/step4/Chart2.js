import React from 'react'
import { Bar } from 'react-chartjs-2'
import { CategoryScale } from 'chart.js'
import Chart from 'chart.js/auto'
Chart.register(CategoryScale)

function Chart2() {
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
        max: 6,
        min: 0,
        ticks: {
          stepSize: 0,
        },
      },
    },

    // false : 사용자 정의 크기에 따라 그래프 크기가 결정됨.
    // true : 크기가 알아서 결정됨.
    maintainAspectRatio: true,
  }

  const data = {
    // 각 막대별 라벨
    labels: [
      '1월',
      '2월',
      '3월',
      '4월',
      '5월',
      '6월',
      '7월',
      '8월',
      '9월',
      '10월',
      '11월',
      '12월',
    ],
    datasets: [
      {
        data: [1, 5.5, 3, 5, 3.5, 6, 3.5, 2, 3, 1, 2, 4.5], // 수치
        backgroundColor: '#E87A5F', // 각 막대 색
        barThickness: 12,
        barPercentage: 0.5,
        label: '',
      },
    ],
  }

  return (
    <>
      <Bar data={data} options={options} height={100} />
    </>
  )
}

export default Chart2
