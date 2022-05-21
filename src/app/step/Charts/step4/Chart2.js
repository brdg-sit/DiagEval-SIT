import React from 'react'
import { Bar } from 'react-chartjs-2'
import { CategoryScale } from 'chart.js'
import Chart from 'chart.js/auto'
Chart.register(CategoryScale)

function Chart2(props) {
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
        data: 
        [
          props.gasData["01월"], 
          props.gasData["02월"], 
          props.gasData["03월"], 
          props.gasData["04월"], 
          props.gasData["05월"], 
          props.gasData["06월"], 
          props.gasData["07월"], 
          props.gasData["08월"], 
          props.gasData["09월"], 
          props.gasData["10월"], 
          props.gasData["11월"], 
          props.gasData["12월"]
        ], // 수치
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
