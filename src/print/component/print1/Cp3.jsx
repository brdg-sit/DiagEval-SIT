import React, { useRef, useEffect, useState } from 'react'
import styles from '../../css/print1/cp2n3.module.css'
import { Bar } from 'react-chartjs-2'
import { CategoryScale } from 'chart.js'
import Chart from 'chart.js/auto'
Chart.register(CategoryScale)

function Cp3(props) {

  const [elec, setElec] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const GetElec = () => {
    var elec = [];
    for(const key in props.energy){
      elec.push(props.energy[key].load_elec);
    }
    return elec;
  }

  useEffect(()=>{
    var elec = GetElec();
    if(elec.length > 0 && !isLoaded){
      var tableDataKeys = Object.keys(tableData.val[0]);

      for(var i=1; i<tableDataKeys.length; i++){
        tableData.val[0][tableDataKeys[i]] = elec[0];
      }
      setElec(elec);
      setIsLoaded(true);
    }
  })

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
        data: elec, // 수치
        backgroundColor: '#80A4E7', // 각 막대 색
        barThickness: 6,
        barPercentage: 0.5,
        label: '',
      },
    ],
  }
  return (
    <div className={styles.wrapper}>
      <h1>전기</h1>
      <div className={styles.chart_wrap}>
        <Bar data={data} options={options} height={100} />
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
            {tableData.val.map((i) => {
              return (
                <tr align="center" bgcolor="white" key={i.th}>
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
              );
            })}
          </tbody>
      </table>
    </div>
  )
}

export default Cp3

export const tableData ={
  val:[
    {
      th: "사용량",
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
    }]
  }
