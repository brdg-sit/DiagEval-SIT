import React from 'react'
import { Bar } from 'react-chartjs-2'
import { CategoryScale } from 'chart.js'
import ChartDataLabels from 'chartjs-plugin-datalabels';
import Chart from 'chart.js/auto';

// not working not showing
Chart.register(CategoryScale, ChartDataLabels)

function Chart1(props) {

  const GetLoadHeatData = () => {
    var totalHeat = 0;
    for(var i=0; i<props.energyUsage.length; i++){
      totalHeat += props.energyUsage[i].load_heat;
    }
    return [totalHeat];
  }

  const GetLoadCoolData = () => {
    var totalCool = 0;
    for(var i=0; i<props.energyUsage.length; i++){
      totalCool += props.energyUsage[i].load_cool;
    }
    return [totalCool];
  }

  const GetLoadBaseElecData = () => {
    var totalBaseElec = 0;
    for(var i=0; i<props.energyUsage.length; i++){
      totalBaseElec += props.energyUsage[i].load_baseElec;
    }
    return [totalBaseElec];
  }

  const GetLoadBaseGasData = () => {
    var totalBaseGas = 0;
    for(var i=0; i<props.energyUsage.length; i++){
      totalBaseGas += props.energyUsage[i].load_baseGas;
    }
    return [totalBaseGas];
  }

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
        clamp:false,
        align: "left"

      },
    },
    scales: {
      y: {
        max: 1,
        min: 0,
      },

      X: {
        min: 0,
        ticks: {
          stepSize: 0.5,
        },
      },
    },
    maintainAspectRatio: true,
  }

  const data = {
    // 각 막대별 라벨
    labels: ['항목1'],
    datasets: [
      {
        data: GetLoadHeatData(), // 수치
        backgroundColor: '#F66060', // 각 막대 색
        barThickness: 24,

        label: '난방',
        borderWidth: 1,

        borderColor: 'rgba(255, 255, 255, 0)',
      },

      {
        data: GetLoadCoolData(), // 수치
        backgroundColor: '#80A4E7', // 각 막대 색
        barThickness: 24,
        label: '냉방',
        borderWidth: 1,

        borderColor: 'rgba(255, 255, 255, 0)',
      },

      {
        data: GetLoadBaseElecData(), // 수치
        backgroundColor: '#B4BEC5', // 각 막대 색
        barThickness: 24,
        label: '기저',
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0)',
      },

      {
        data: GetLoadBaseGasData(), // 수치
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
    <>
      <Bar data={data} options={options} height={40} />
    </>
  )
}

export default Chart1
