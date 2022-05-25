import React from 'react'
import Chart1 from '../Charts/step5/stepV2/Chart1'
import styles from '../css/step5.module.css'
import waitIcon from '../../../@assets/step5/waitIcon.svg'
import Chart2 from "../Charts/step5/stepV3/Chart2";
import Chart3 from "../Charts/step5/stepV3/Chart3";

function StepV3(props) {
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
            {chartLabel.map(i => {
              return (
                <li>
                  <div style={{ background: `${i.color}` }} />
                  {i.name}
                </li>
              )
            })}
          </ul>
        </div>
        {/* 차트 1/2 */}
        <ul className={styles.step1_chart_wrap}>
          <li>
            <h2>연간 에너지 사용량 (kWh)</h2>
              {/* <StepV3
                energyUsage={energyUsage}
                energyUsageAvg={energyUsageAvg}
                energyUsageYr={energyUsageYr}
                energyUsageAvgYr={energyUsageAvgYr}
                co2UsageYr={co2UsageYr}
                co2UsageAvgYr={co2UsageAvgYr}
              /> */}
            <Chart1 
              usageYrHeat={props.energyUsageYr.yr_load_heat}
              usageAvgYrHeat={props.energyUsageAvgYr.yr_load_heat}
              usageYrCool={props.energyUsageYr.yr_load_cool}
              usageAvgYrCool={props.energyUsageAvgYr.yr_load_cool}
              usageYrBC={props.energyUsageYr.yr_load_baseElec}  
              usageAvgYrBC={props.energyUsageAvgYr.yr_load_baseElec}    />
          </li>

          <li>
            <h2>연간 CO2 배출량</h2>
            <Chart2
              usageYrHeat={props.co2UsageYr.yr_co2_cool}
              usageAvgYrHeat={props.co2UsageAvgYr.yr_co2_cool}
              usageYrCool={props.co2UsageYr.yr_co2_baseElec}
              usageAvgYrCool={props.co2UsageAvgYr.yr_co2_baseElec}
              usageYrBC={props.co2UsageYr.yr_co2_heat} 
              usageAvgYrBC={props.co2UsageAvgYr.yr_co2_heat}   />
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
          <Chart3 energyUsage={props.energyUsage.map((usg) => usg.load_heat)} energyUsage2={props.energyUsageAvg.map((usg) => usg.load_heat)} />
        </div>

        <div className={styles.right_chart_wrap}>
          <div className={styles.title_label}>
            <aside />
            냉방 월간 사용량
          </div>
          <Chart3 energyUsage={props.energyUsage.map((usg) => usg.load_cool)} energyUsage2={props.energyUsageAvg.map((usg) => usg.load_cool)}/>
        </div>

        <div className={styles.right_chart_wrap}>
          <div className={styles.title_label}>
            <aside />
            기저(조명/사무용기기) 월간 사용량 <span>(kWh)</span>
          </div>
          <Chart3 energyUsage={props.energyUsage.map((usg) => usg.load_baseElec)} energyUsage2={props.energyUsageAvg.map((usg) => usg.load_baseElec)} />
        </div>
      </div>
    </div>
  )
}

export default StepV3

export const chartLabel = [
  { name: '난방', color: '#F66060' },
  { name: '냉방', color: '#6799F4' },
  { name: '기저', color: '#B4BEC5' },
]
