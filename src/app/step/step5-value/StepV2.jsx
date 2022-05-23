import React, { useEffect, useState } from "react";
import Chart1 from "../Charts/step5/stepV2n3/Chart1";
import styles from "../css/step5.module.css";
import waitIcon from "../../../@assets/step5/waitIcon.svg";
import Chart2 from "../Charts/step5/stepV2n3/Chart2";

function StepV2(props) {
  const [loadHeatData, setLoadHeatData] = useState([]);
  const [loadCoolData, setLoadCoolData] = useState([]);
  const [loadBaseElecData, setLoadBaseElecData] = useState([]);

  //   useEffect(() => {
  //  //GetLoadHeatData();
  //   //   GetLoadCoolData();
  //   //   GetLoadBaseElecData();
  //     console.log("loadHeatData", loadHeatData);
  //   }
  //   );

  const GetLoadHeatData = () => {
    var totalHeat = [];
    for (var i = 0; i < props.energyUsage.length; i++) {
      totalHeat.push(props.energyUsage[i].load_heat);
    }
    setLoadHeatData(totalHeat);
  };

  const GetLoadCoolData = () => {
    var totalCool = [];
    for (var i = 0; i < props.energyUsage.length; i++) {
      totalCool.push(props.energyUsage[i].load_cool);
    }
    setLoadCoolData(totalCool);
  };

  const GetLoadBaseElecData = () => {
    var totalBaseElec = [];
    for (var i = 0; i < props.energyUsage.length; i++) {
      totalBaseElec.push(props.energyUsage[i].load_baseElec);
    }
    setLoadBaseElecData(totalBaseElec);
  };

  return (
    <div className={styles.stepV_wrappper}>
      {/* 좌측  */}
      <div className={styles.step_wrap}>
        <div className={styles.title_wrap}>
          <div className={styles.title_label}>
            <aside />
            연간 사용량
          </div>

          <ul className={styles.tag_wrap}>
            {chartLabel.map((i) => {
              return (
                <li>
                  <div style={{ background: `${i.color}` }} />
                  {i.name}
                </li>
              );
            })}
          </ul>
        </div>
        {/* 차트 1/2 */}
        <ul className={styles.step1_chart_wrap}>
          <li>
            <h2>연간 에너지 사용량 (kWh)</h2>
            <Chart1 />
          </li>

          <li>
            <h2>연간 CO2 배출량</h2>
            <Chart1 />
          </li>
        </ul>

        {/* 좌측차트 */}
        <table className={styles.table_val} cellspacing="0">
          <thead>
            <tr align="center">
              <td></td>
              <td></td>
              <th>난방</th>
              <th>냉방</th>
              <th>기저</th>
              <th>합계</th>
            </tr>
          </thead>
          <tbody>
            <tr align="center" bgcolor="white">
              <th rowspan="2">에너지 사용량</th>
              <th>분석건물</th>
              <td>00</td>
              <td>00</td>
              <td>00</td>
              <td>00</td>
            </tr>
            <tr align="center" bgcolor="white">
              <th>일반 사용행태 건물</th>
              <td>00</td>
              <td>00</td>
              <td>00</td>
              <td>00</td>
            </tr>

            <tr align="center" bgcolor="white">
              <th rowspan="2">C02 배출량</th>
              <th>분석건물</th>
              <td>00</td>
              <td>00</td>
              <td>00</td>
              <td>00</td>
            </tr>
            <tr align="center" bgcolor="white">
              <th>일반 사용행태 건물</th>
              <td>00</td>
              <td>00</td>
              <td>00</td>
              <td>00</td>
            </tr>
          </tbody>
        </table>

        <div className={styles.info_desk_wrap}>
          <img src={waitIcon} alt="" />
          <p>
            표준 사용자 행태를 갖고 있는 건물보다&nbsp;
            <span>난방 사용량이 높습니다</span>
          </p>
        </div>
      </div>
      <div className={`${styles.step_wrap} ${styles.right_step_wrap}`}>
        <div className={styles.right_chart_wrap}>
          <div className={styles.title_label}>
            <aside />
            난방 월간 사용량
          </div>
          <Chart2 energyUsage={props.energyUsage.map((usg) => usg.load_heat)} energyUsage2={props.energyUserML.map((usg) => usg.load_heat)} />
        </div>

        <div className={styles.right_chart_wrap}>
          <div className={styles.title_label}>
            <aside />
            냉방 월간 사용량
          </div>
          <Chart2 energyUsage={props.energyUsage.map((usg) => usg.load_cool)} energyUsage2={props.energyUserML.map((usg) => usg.load_cool)}/>
        </div>

        <div className={styles.right_chart_wrap}>
          <div className={styles.title_label}>
            <aside />
            기저(조명/사무용기기) 월간 사용량 <span>(kWh)</span>
          </div>
          <Chart2 energyUsage={props.energyUsage.map((usg) => usg.load_baseElec)} energyUsage2={props.energyUserML.map((usg) => usg.load_baseElec)} />
        </div>
      </div>
    </div>
  );
}

export default StepV2;

export const chartLabel = [
  { name: '난방', color: '#F66060' },
  { name: '냉방', color: '#6799F4' },
  { name: '기저', color: '#B4BEC5' },
];