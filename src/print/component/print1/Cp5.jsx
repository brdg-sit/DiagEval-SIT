import React from 'react'
import styles from '../../css/print1/cp5.module.css'
import { Bar } from 'react-chartjs-2'
import { CategoryScale } from 'chart.js'
import Chart from 'chart.js/auto'

// not working not showing
Chart.register(CategoryScale)

function Cp5() {
  const options = {
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
        max: 5,
        min: 0,
        ticks: {
          stepSize: 0.5,
          font: {
            size: 9,
          },
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
    labels: ['항목1', '항목2', '항목3', '항목4'],
    datasets: [
      {
        data: [1, 1, 1, 1], // 수치
        backgroundColor: '#F66060', // 각 막대 색
        barThickness: 8,
        barPercentage: 0.5,
        label: '난방',
        borderWidth: 1,
        fill: false,
        borderColor: 'rgba(255, 255, 255, 0)',
      },
      {
        data: [2, 2, 2, 2], // 수치
        backgroundColor: '#80A4E7', // 각 막대 색
        barThickness: 8,
        barPercentage: 0.5,
        label: '냉방',
        borderWidth: 1,
        fill: false,
        borderColor: 'rgba(255, 255, 255, 0)',
      },
      {
        data: [3, 3, 3, 3], // 수치
        backgroundColor: '#B4BEC5', // 각 막대 색
        barThickness: 8,
        barPercentage: 0.5,
        label: '기저',
        borderWidth: 1,
        fill: false,
        borderColor: 'rgba(255, 255, 255, 0)',
      },
      {
        data: [4, 4, 4, 4], // 수치
        backgroundColor: '#FBCE48', // 각 막대 색
        barThickness: 8,
        barPercentage: 0.5,
        label: '급탕/취사',
        borderWidth: 1,
        fill: false,
        borderColor: 'rgba(255, 255, 255, 0)',
      },
    ],
  }
  return (
    <div className={styles.wrapper}>
      <h1>
        에너지 용도별 연간 사용량 분리 분석&nbsp;<span>(kwh)</span>
      </h1>

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
          {tableData.map((item, key) => {
            return (
              <tr align="center" bgcolor="white">
                <th>{item.th}</th>
                <td>{item.jan}</td>
                <td>{item.feb}</td>
                <td>{item.mar}</td>
                <td>{item.apr}</td>
                <td>{item.may}</td>
                <td>{item.jun}</td>
                <td>{item.july}</td>
                <td>{item.aug}</td>
                <td>{item.sept}</td>
                <td>{item.oct}</td>
                <td>{item.nove}</td>
                <td>{item.dec}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Cp5

export const chartLabel = [
  { name: '난방', color: '#F66060' },
  { name: '냉방', color: '#6799F4' },
  { name: '기저', color: '#B4BEC5' },
  { name: '급탕/취사', color: '#FBCE48' },
]

export const tableData = [
  {
    th: '난방',
    jan: '00',
    feb: '00',
    mar: '00',
    apr: '00',
    may: '00',
    jun: '00',
    july: '00',
    aug: '00',
    sept: '00',
    oct: '00',
    nove: '00',
    dec: '00',
  },
  {
    th: '냉방',
    jan: '00',
    feb: '00',
    mar: '00',
    apr: '00',
    may: '00',
    jun: '00',
    july: '00',
    aug: '00',
    sept: '00',
    oct: '00',
    nove: '00',
    dec: '00',
  },
  {
    th: '기저',
    jan: '00',
    feb: '00',
    mar: '00',
    apr: '00',
    may: '00',
    jun: '00',
    july: '00',
    aug: '00',
    sept: '00',
    oct: '00',
    nove: '00',
    dec: '00',
  },
  {
    th: '급탕\n취사',
    jan: '00',
    feb: '00',
    mar: '00',
    apr: '00',
    may: '00',
    jun: '00',
    july: '00',
    aug: '00',
    sept: '00',
    oct: '00',
    nove: '00',
    dec: '00',
  },
]
