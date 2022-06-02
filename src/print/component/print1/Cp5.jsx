import React, { useEffect, useState } from 'react'
import styles from '../../css/print1/cp5.module.css'
import { Bar } from 'react-chartjs-2'
import { CategoryScale } from 'chart.js'
import Chart from 'chart.js/auto'

// not working not showing
Chart.register(CategoryScale)

function Cp5(props) {

  if(props.energyHeat.length > 0){
    var tableDataKeys = Object.keys(tableData[0]);

    for(var i=1; i<tableDataKeys.length; i++){
      tableData[0][tableDataKeys[i]] = props.energyHeat[i-1];
      tableData[1][tableDataKeys[i]] = props.energyCool[i-1];
      tableData[2][tableDataKeys[i]] = props.energyBaseElec[i-1];
      tableData[3][tableDataKeys[i]] = (props.energyBaseGas[i-1] !== undefined) ? parseFloat(props.energyBaseGas[i-1].toFixed(2)) : props.energyBaseGas; 
    }
  }

  const [loadHeat, setLoadHeat] = useState([]);
  const [loadCool, setLoadCool] = useState([]);
  const [loadBaseElec, setLoadBaseElec] = useState([]);
  const [loadBaseGas, setLoadBaseGas] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if(!isLoaded && props.energyHeat.length > 0){
      setLoadHeat(props.energyHeat);
      setLoadCool(props.energyCool);
      setLoadBaseElec(props.energyBaseElec);
      setLoadBaseGas(props.energyBaseGas);
      setIsLoaded(true);
    }
  });

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
        display: false,
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
        min: 0,
        ticks: {
          display: false,
        },
        scaleLabel: {
          display: false,
        },
      },

      X: {
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
    labels: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
    datasets: [
      {
        data: loadHeat, // 수치
        backgroundColor: '#F66060', // 각 막대 색
        barThickness: 8,
        barPercentage: 0.5,
        label: '난방',
        borderWidth: 1,
        fill: false,
        borderColor: 'rgba(255, 255, 255, 0)',
      },
      {
        data: loadCool, // 수치
        backgroundColor: '#80A4E7', // 각 막대 색
        barThickness: 8,
        barPercentage: 0.5,
        label: '냉방',
        borderWidth: 1,
        fill: false,
        borderColor: 'rgba(255, 255, 255, 0)',
      },
      {
        data: loadBaseElec, // 수치
        backgroundColor: '#B4BEC5', // 각 막대 색
        barThickness: 8,
        barPercentage: 0.5,
        label: '기저',
        borderWidth: 1,
        fill: false,
        borderColor: 'rgba(255, 255, 255, 0)',
      },
      {
        data: loadBaseGas, // 수치
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
          {tableData.map((i, key) => {
            return (
              <tr align="center" bgcolor="white">
                <th>{i.th}</th>
                <td>{i.t1}</td>
                <td>{i.t2}</td>
                <td>{i.t3}</td>
                <td>{i.t4}</td>
                <td>{i.t5}</td>
                <td>{i.t6}</td>
                <td>{i.t7}</td>
                <td>{i.t8}</td>
                <td>{i.t9}</td>
                <td>{i.t10}</td>
                <td>{i.t11}</td>
                <td>{i.t12}</td>
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
      th: "난방",
      t1: "00",
      t2: "00",
      t3: "00",
      t4: "00",
      t5: "00",
      t6: "00",
      t7: "00",
      t8: "00",
      t9: "00",
      t10: "00",
      t11: "00",
      t12: "00",
    },
    {
      th: "냉방",
      t1: "00",
      t2: "00",
      t3: "00",
      t4: "00",
      t5: "00",
      t6: "00",
      t7: "00",
      t8: "00",
      t9: "00",
      t10: "00",
      t11: "00",
      t12: "00",
    },
    {
      th: "기저",
      t1: "00",
      t2: "00",
      t3: "00",
      t4: "00",
      t5: "00",
      t6: "00",
      t7: "00",
      t8: "00",
      t9: "00",
      t10: "00",
      t11: "00",
      t12: "00",
    },
    {
      th: "급탕/취사",
      t1: "00",
      t2: "00",
      t3: "00",
      t4: "00",
      t5: "00",
      t6: "00",
      t7: "00",
      t8: "00",
      t9: "00",
      t10: "00",
      t11: "00",
      t12: "00",
    },
  ];
