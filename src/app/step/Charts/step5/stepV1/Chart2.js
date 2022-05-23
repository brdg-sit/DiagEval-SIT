import React from 'react'
import { Bar } from 'react-chartjs-2'

import { CategoryScale } from 'chart.js'
import Chart from 'chart.js/auto'
Chart.register(CategoryScale)

function Chart2(props) {

  const GetLoadHeatData = () => {
    var totalHeat = [];
    for(var i=0; i<props.energyUsage.length; i++){
      totalHeat.push(props.energyUsage[i].load_heat);
    }
    return totalHeat;
  }

  const GetLoadCoolData = () => {
    var totalCool = [];
    for(var i=0; i<props.energyUsage.length; i++){
      totalCool.push(props.energyUsage[i].load_cool);
    }
    return totalCool;
  }

  const GetLoadBaseElecData = () => {
    var totalBaseElec = [];
    for(var i=0; i<props.energyUsage.length; i++){
      totalBaseElec.push(props.energyUsage[i].load_baseElec);
    }
    return totalBaseElec;
  }

  const GetLoadBaseGasData = () => {
    var totalBaseGas = [];
    for(var i=0; i<props.energyUsage.length; i++){
      totalBaseGas.push(props.energyUsage[i].load_baseGas);
    }
    return totalBaseGas;
  }

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
        min: 0,
        ticks: {
          stepSize: 1,
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
        data: GetLoadHeatData(), // 수치
        backgroundColor: '#F66060', // 각 막대 색
        barThickness: 18,
        barPercentage: 0.5,
        label: '난방',
        borderWidth: 1,
        fill: false,
        borderColor: 'rgba(255, 255, 255, 0)',
      },
      {
        data: GetLoadCoolData(), // 수치
        backgroundColor: '#80A4E7', // 각 막대 색
        barThickness: 18,
        barPercentage: 0.5,
        label: '냉방',
        borderWidth: 1,
        fill: false,
        borderColor: 'rgba(255, 255, 255, 0)',
      },
      {
        data: GetLoadBaseElecData(), // 수치
        backgroundColor: '#B4BEC5', // 각 막대 색
        barThickness: 18,
        barPercentage: 0.5,
        label: '기저',
        borderWidth: 1,
        fill: false,
        borderColor: 'rgba(255, 255, 255, 0)',
      },
      {
        data: GetLoadBaseGasData(), // 수치
        backgroundColor: '#FBCE48', // 각 막대 색
        barThickness: 18,
        barPercentage: 0.5,
        label: '급탕/취사',
        borderWidth: 1,
        fill: false,
        borderColor: 'rgba(255, 255, 255, 0)',
      },
    ],
  }

  return (
    <>
      <Bar data={data} options={options} height={50} />
    </>
  )
}

export default Chart2
