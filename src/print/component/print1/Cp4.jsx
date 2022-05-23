import React from 'react'
import styles from '../../css/print1/cp4.module.css'
import { Bar } from 'react-chartjs-2'
import { CategoryScale } from 'chart.js'
import ChartDataLabels from 'chartjs-plugin-datalabels'
import Chart from 'chart.js/auto'

// not working not showing
Chart.register(CategoryScale, ChartDataLabels)

function Cp4() {
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
        clamp: false,
        align: 'left',
      },
      tooltip: {
        enabled: false,
      },
    },

    animations: false,
    scales: {
      y: {
        max: 1,
        min: 0,
        scaleLabel: {
          display: false,
        },

        ticks: {
          font: {
            size: 10,
          },
        },

        grid: {
          display: false,
        },
      },

      X: {
        max: 5,
        min: 0,
        ticks: {
          stepSize: 0.5,
          font: {
            size: 9,
          },
        },
      },
    },
    maintainAspectRatio: false,
    responsive: true,
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
    <div className={styles.wrapper}>
      <h1>에너지 용도별 연간 사용량 분리 분석</h1>

      <ul className={styles.tag_wrap}>
        {chartLabel.map(i => {
          return (
            <li key={i}>
              <div style={{ background: `${i.color}` }} />
              {i.name}
            </li>
          )
        })}
      </ul>

      <div className={styles.chart_wrap}>
        <Bar data={data} options={options} />
      </div>
    </div>
  )
}

export default Cp4

export const chartLabel = [
  { name: '난방', color: '#F66060' },
  { name: '냉방', color: '#6799F4' },
  { name: '기저', color: '#B4BEC5' },
  { name: '급탕/취사', color: '#FBCE48' },
]
