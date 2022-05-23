import React from 'react'
import styles from '../../../css/print2/cp4n5n6.module.css'
import { Bar } from 'react-chartjs-2'
import { CategoryScale } from 'chart.js'
import Chart from 'chart.js/auto'
Chart.register(CategoryScale)

function Cp4() {
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
        max: 6,
        min: 0,
        ticks: {
          stepSize: 1,
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
          beginAtZero: true,
        },
        scaleLabel: {
          display: false,
        },

        grid: {
          display: false,
        },
      },
    },

    maintainAspectRatio: false,
    responsive: true,
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
        data: [1, 2, 3, 5, 0.5, 4, 3.5, 2, 3, 1, 5, 4.5], // 수치
        backgroundColor: '#80A4E7', // 각 막대 색
        barThickness: 6,
        barPercentage: 0.5,
        label: '난방',
        borderWidth: 1,
        fill: false,
        borderColor: 'rgba(255, 255, 255, 0)',
      },
      {
        data: [2, 3, 4, 2, 4, 3, 2, 1, 2, 3, 4, 5], // 수치
        backgroundColor: '#F18246', // 각 막대 색
        barThickness: 6,
        barPercentage: 0.5,
        label: '난방',
        borderWidth: 1,
        fill: false,
        borderColor: 'rgba(255, 255, 255, 0)',
      },
    ],
  }

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>월간 난방 사용량</h1>
      <div className={styles.chart_wrap}>
        <Bar data={data} options={options} />
      </div>

      <table className={styles.table_val} cellspacing="0">
        <thead>
          <tr align="center">
            <td></td>
            <th>1월</th>
            <th>2월</th>
            <th>3월</th>
            <th>4월</th>
            <th>5월</th>
            <th>6월</th>
            <th>7월</th>
            <th>8월</th>
            <th>9월</th>
            <th>10월</th>
            <th>11월</th>
            <th>12월</th>
          </tr>
        </thead>
        <tbody>
          <tr align="center" bgcolor="white">
            <th>사용량</th>
            <td>00</td>
            <td>00</td>
            <td>00</td>
            <td>00</td>
            <td>00</td>
            <td>00</td>
            <td>00</td>
            <td>00</td>
            <td>00</td>
            <td>00</td>
            <td>00</td>
            <td>00</td>
          </tr>
          <tr align="center" bgcolor="white">
            <th>일반</th>
            <td>00</td>
            <td>00</td>
            <td>00</td>
            <td>00</td>
            <td>00</td>
            <td>00</td>
            <td>00</td>
            <td>00</td>
            <td>00</td>
            <td>00</td>
            <td>00</td>
            <td>00</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Cp4
