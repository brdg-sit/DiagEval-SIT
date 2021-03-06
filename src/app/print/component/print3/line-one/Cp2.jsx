import React from 'react'
import styles from '../../../css/print3/cp1n2.module.css'
import { Bar } from 'react-chartjs-2'
import { CategoryScale } from 'chart.js'
import Chart from 'chart.js/auto'
Chart.register(CategoryScale)

function Cp2(props) {
  const options = {
    plugins: {
      legend: {
        display: false,
      },
      datalabels: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
    animations: false,

    scales: {
      y: {
        min: 0,
        ticks: {
          display: false,
        },
        scaleLabel: {
          display: false,
        },
      },

      X: {
        ticks: {
          stepSize: 1,
          display: false,
        },
        scaleLabel: {
          display: false,
        },

        grid: {
          display: false,
        },
      },
    },

    // false : 사용자 정의 크기에 따라 그래프 크기가 결정됨.
    // true : 크기가 알아서 결정됨.
    maintainAspectRatio: false,
    responsive: true,
  }

  const data = {
    // 각 막대별 라벨
    labels: ['항목1', '항목2'],
    datasets: [
      {
        data: [parseFloat(props.co2Yr.yr_co2_heat).toFixed(2), parseFloat(props.co2AvgYr.yr_co2_heat).toFixed(2)], // 수치
        backgroundColor: '#F66060', // 각 막대 색
        barThickness: 10,
        barPercentage: 0.5,
        label: '난방',
        borderWidth: 1,
        fill: false,
        borderColor: 'rgba(255, 255, 255, 0)',
      },
      {
        data: [parseFloat(props.co2Yr.yr_co2_cool).toFixed(2), parseFloat(props.co2AvgYr.yr_co2_cool).toFixed(2)], // 수치
        backgroundColor: '#80A4E7', // 각 막대 색
        barThickness: 10,
        barPercentage: 0.5,
        label: '냉방',
        borderWidth: 1,
        fill: false,
        borderColor: 'rgba(255, 255, 255, 0)',
      },
      {
        data: [parseFloat(props.co2Yr.yr_co2_baseElec).toFixed(2), parseFloat(props.co2AvgYr.yr_co2_baseElec).toFixed(2)], // 수치
        backgroundColor: '#B4BEC5', // 각 막대 색
        barThickness: 10,
        barPercentage: 0.5,
        label: '기저',
        borderWidth: 1,
        fill: false,
        borderColor: 'rgba(255, 255, 255, 0)',
      },
    ],
  }

  return (
    <div>
      <h2 className={styles.title}>연간 Co2 배출량</h2>
      <div className={styles.chart_wrap}>
        <Bar data={data} options={options} />
      </div>
    </div>
  )
}

export default Cp2
