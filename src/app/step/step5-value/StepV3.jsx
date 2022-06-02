import React from "react";
import Chart1 from "../Charts/step5/stepV3/Chart1";
import styles from "../css/step5.module.css";
import waitIcon from "../../../@assets/step5/waitIcon.svg";
import Chart2 from "../Charts/step5/stepV3/Chart2";
import Chart3 from "../Charts/step5/stepV3/Chart3";

function StepV3(props) {

  const ShowAlertMessage = () => {
    
    var alertMessages = [];
    var hasAlert = false;

    if(parseFloat(props.energyYr.yr_load_heat).toFixed(2) > parseFloat(props.energyAvgYr.yr_load_heat).toFixed(2)){
      alertMessages.push(<p><img src={waitIcon} alt="" />&nbsp;&nbsp;&nbsp;유사건물 보다&nbsp;<span>난방 사용량이 높습니다</span></p>);
      hasAlert = true;
    }

    if(parseFloat(props.energyYr.yr_load_cool).toFixed(2) > parseFloat(props.energyAvgYr.yr_load_cool).toFixed(2)){
      alertMessages.push(<p><img src={waitIcon} alt="" />&nbsp;&nbsp;&nbsp;유사건물 보다&nbsp;<span>냉방 사용량이 높습니다</span></p>);
      hasAlert = true;
    }

    if(parseFloat(props.energyYr.yr_load_baseElec).toFixed(2) > parseFloat(props.energyAvgYr.yr_load_baseElec).toFixed(2)){
      alertMessages.push(<p><img src={waitIcon} alt="" />&nbsp;&nbsp;&nbsp;유사건물 보다&nbsp;<span>전기 사용량이 높습니다</span></p>);
      hasAlert = true;
    }

    if(hasAlert){
      return (  
        <div className={styles.info_desk_wrap}>
          {alertMessages}
        </div>
      );
    }
    else{
      return (  
        <div className={styles.info_desk_wrap_no_alert}>
          <p>평균 에너지 사용량보다 절약하고 있습니다.</p>
        </div>
      );
    }
  }

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
                <li key={i.name} >
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
            <Chart1
              energyYrHeat={parseFloat(props.energyYr.yr_load_heat).toFixed(2)}
              energyAvgYrHeat={parseFloat(props.energyAvgYr.yr_load_heat).toFixed(2)}
              energyYrCool={parseFloat(props.energyYr.yr_load_cool).toFixed(2)}
              energyAvgYrCool={parseFloat(props.energyAvgYr.yr_load_cool).toFixed(2)}
              energyYrBC={parseFloat(props.energyYr.yr_load_baseElec).toFixed(2)}
              energyAvgYrBC={parseFloat(props.energyAvgYr.yr_load_baseElec).toFixed(2)}
            />
          </li>

          <li>
            <h2>연간 CO2 배출량</h2>
            <Chart2
              co2YrHeat={parseFloat(props.co2Yr.yr_co2_cool).toFixed(2)}
              co2AvgYrHeat={parseFloat(props.co2AvgYr.yr_co2_cool).toFixed(2)}
              co2YrCool={parseFloat(props.co2Yr.yr_co2_baseElec).toFixed(2)}
              co2AvgYrCool={parseFloat(props.co2AvgYr.yr_co2_baseElec).toFixed(2)}
              co2YrBC={parseFloat(props.co2Yr.yr_co2_heat).toFixed(2)}
              co2AvgYrBC={parseFloat(props.co2AvgYr.yr_co2_heat).toFixed(2)}
            />
          </li>
        </ul>

        {/* 좌측차트 */}
        <table className={styles.table_val} cellSpacing="0">
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
              <th rowSpan="2">에너지 사용량</th>
              <th>분석건물</th>
              <td>{parseFloat(props.energyYr.yr_load_heat).toFixed(2)}</td>
              <td>{parseFloat(props.energyYr.yr_load_cool).toFixed(2)}</td>
              <td>{parseFloat(props.energyYr.yr_load_baseElec).toFixed(2)}</td>
              <td>{parseFloat(props.energyYr.yr_load_heat + props.energyYr.yr_load_cool + props.energyYr.yr_load_baseElec).toFixed(2)}</td>
            </tr>
            <tr align="center" bgcolor="white">
              <th>일반 사용행태 건물</th>
              <td>{parseFloat(props.energyAvgYr.yr_load_heat).toFixed(2)}</td>
              <td>{parseFloat(props.energyAvgYr.yr_load_cool).toFixed(2)}</td>
              <td>{parseFloat(props.energyAvgYr.yr_load_baseElec).toFixed(2)}</td>
              <td>{parseFloat(props.energyAvgYr.yr_load_heat + props.energyAvgYr.yr_load_cool + props.energyAvgYr.yr_load_baseElec).toFixed(2)}</td>
            </tr>

            <tr align="center" bgcolor="white">
              <th rowSpan="2">C02 배출량</th>
              <th>분석건물</th>
              <td>{parseFloat(props.co2Yr.yr_co2_heat).toFixed(2)}</td>
              <td>{parseFloat(props.co2Yr.yr_co2_cool).toFixed(2)}</td>
              <td>{parseFloat(props.co2Yr.yr_co2_baseElec).toFixed(2)}</td>
              <td>{parseFloat(props.co2Yr.yr_co2_heat + props.co2Yr.yr_co2_cool + props.co2Yr.yr_co2_baseElec).toFixed(2)}</td>
            </tr>
            <tr align="center" bgcolor="white">
              <th>일반 사용행태 건물</th>
              <td>{parseFloat(props.co2AvgYr.yr_co2_heat).toFixed(2)}</td>
              <td>{parseFloat(props.co2AvgYr.yr_co2_cool).toFixed(2)}</td>
              <td>{parseFloat(props.co2AvgYr.yr_co2_baseElec).toFixed(2)}</td>
              <td>{parseFloat(props.co2AvgYr.yr_co2_heat + props.co2AvgYr.yr_co2_cool + props.co2AvgYr.yr_co2_baseElec).toFixed(2)}</td>
            </tr>
          </tbody>
        </table>
        <ShowAlertMessage/>
      </div>
      <div className={`${styles.step_wrap} ${styles.right_step_wrap}`}>
        <div className={styles.right_chart_wrap}>
          <div className={styles.title_label}>
            <aside />
            난방 월간 사용량
          </div>
          <Chart3
            energy={props.energy.map((usg) => parseFloat(usg.load_heat).toFixed(2))}
            energyAvg={props.energyAvg.map((usg) => parseFloat(usg.load_heat).toFixed(2))}
          />
        </div>

        <div className={styles.right_chart_wrap}>
          <div className={styles.title_label}>
            <aside />
            냉방 월간 사용량
          </div>
          <Chart3
            energy={props.energy.map((usg) => parseFloat(usg.load_cool).toFixed(2))}
            energyAvg={props.energyAvg.map((usg) => parseFloat(usg.load_cool).toFixed(2))}
          />
        </div>

        <div className={styles.right_chart_wrap}>
          <div className={styles.title_label}>
            <aside />
            기저(조명/사무용기기) 월간 사용량 <span>(kWh)</span>
          </div>
          <Chart3
            energy={props.energy.map((usg) => parseFloat(usg.load_baseElec).toFixed(2))}
            energyAvg={props.energyAvg.map((usg) => parseFloat(usg.load_baseElec).toFixed(2))}
          />
        </div>
      </div>
    </div>
  );
}

export default StepV3;

export const chartLabel = [
  { name: "난방", color: "#F66060" },
  { name: "냉방", color: "#6799F4" },
  { name: "기저", color: "#B4BEC5" },
];
