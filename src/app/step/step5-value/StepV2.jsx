import React from "react";
import Chart1 from "../Charts/step5/stepV2/Chart1";
import styles from "../css/step5.module.css";
import waitIcon from "../../../@assets/step5/waitIcon.svg";
import Chart2 from "../Charts/step5/stepV2/Chart2";
import Chart3 from "../Charts/step5/stepV2/Chart3";

function StepV2(props) {

  const ShowAlertMessage = () => {
    
    var alertMessages = [];
    var hasAlert = false;
    var totalEnergyYr = props.energyYr.yr_load_heat + props.energyYr.yr_load_cool + props.energyYr.yr_load_baseElec;
    var totalEnergyML = props.energyMLYr.yr_load_heat + props.energyMLYr.yr_load_cool + props.energyMLYr.yr_load_baseElec;

    if(props.energyYr.yr_load_heat > props.energyMLYr.yr_load_heat){
      alertMessages.push(<p><img src={waitIcon} alt="" />&nbsp;&nbsp;&nbsp;참고 사용 행태를 갖고 있는 건물보다&nbsp;<span>난방 사용량이 {parseFloat(100-(props.energyMLYr.yr_load_heat/props.energyYr.yr_load_heat*100)).toFixed(2)}% 높습니다</span></p>);
      hasAlert = true;
    }

    if(props.energyYr.yr_load_cool > props.energyMLYr.yr_load_cool){
      alertMessages.push(<p><img src={waitIcon} alt="" />&nbsp;&nbsp;&nbsp;일반 사용자 행태를 갖고 있는 건물보다&nbsp;<span>냉방 사용량이 {parseFloat(100-(props.energyMLYr.yr_load_cool/props.energyYr.yr_load_cool*100)).toFixed(2)}% 높습니다</span></p>);
      hasAlert = true;
    }

    if(props.energyYr.yr_load_baseElec > props.energyMLYr.yr_load_baseElec){
      alertMessages.push(<p><img src={waitIcon} alt="" />&nbsp;&nbsp;&nbsp;일반 사용자 행태를 갖고 있는 건물보다&nbsp;<span>기저(기기/조명) 사용량이 {parseFloat(100-(props.energyMLYr.yr_load_baseElec/props.energyYr.yr_load_baseElec*100)).toFixed(2)}% 높습니다</span></p>);
      hasAlert = true;
    }

    if(totalEnergyYr > totalEnergyML){
      alertMessages.push(<p><img src={waitIcon} alt="" />&nbsp;&nbsp;&nbsp;일반 사용자 행태를 갖고 있는 건물보다&nbsp;<span>에너지 사용량 합계가 {parseFloat(100-(totalEnergyML/totalEnergyYr*100)).toFixed(2)}% 높습니다</span></p>);
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
        <div className={styles.stepV1_wrappper}>
          <div className={styles.title_wrap}>
            {/* <div className={styles.title_label}>
              <aside />
              연간 사용량
            </div> */}
            <div className={styles.title_label}>
              <aside />
              연간 에너지 사용량 (kWh)
            </div>
          </div>
          <div className={styles.title_wrap} style={{paddingLeft:"30px"}}>
            <div className={styles.title_label}>
              <aside />
              연간 CO2 배출량
            </div>
          </div>
        </div>

        {/* 차트 1/2 */}
        <ul className={styles.step1_chart_wrap}>
          <li>
            {/* <h2>연간 에너지 사용량 (kWh)</h2> */}
            <Chart1
              energyYrHeat={parseFloat(props.energyYr.yr_load_heat).toFixed(2)}
              energyYrCool={parseFloat(props.energyYr.yr_load_cool).toFixed(2)}
              energyYrBC={parseFloat(props.energyYr.yr_load_baseElec).toFixed(2)}
              energyMLYrHeat={parseFloat(props.energyMLYr.yr_load_heat).toFixed(2)}
              energyMLYrCool={parseFloat(props.energyMLYr.yr_load_cool).toFixed(2)}
              energyMLYrBC={parseFloat(props.energyMLYr.yr_load_baseElec).toFixed(2)}
            />
          </li>
          

          <li>            
            {/* <h2>연간 CO2 배출량</h2> */}
            <Chart2
              co2YrHeat={parseFloat(props.co2Yr.yr_co2_heat).toFixed(2)}
              co2YrCool={parseFloat(props.co2Yr.yr_co2_cool).toFixed(2)}
              co2YrBC={parseFloat(props.co2Yr.yr_co2_baseElec).toFixed(2)}
              co2MLYrHeat={parseFloat(props.co2MLYr.yr_co2_heat).toFixed(2)}
              co2MLYrCool={parseFloat(props.co2MLYr.yr_co2_cool).toFixed(2)}
              co2MLYrBC={parseFloat(props.co2MLYr.yr_co2_baseElec).toFixed(2)}
            />
          </li>
        </ul>

            
        <div className={styles.title_wrap} style={{marginLeft:'auto', justifyContent: 'center', paddingTop: '20px'}}>
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
              <th>참조 사용행태 건물</th>
              <td>{parseFloat(props.energyMLYr.yr_load_heat).toFixed(2)}</td>
              <td>{parseFloat(props.energyMLYr.yr_load_cool).toFixed(2)}</td>
              <td>{parseFloat(props.energyMLYr.yr_load_baseElec).toFixed(2)}</td>
              <td>{parseFloat(props.energyMLYr.yr_load_heat + props.energyMLYr.yr_load_cool + props.energyMLYr.yr_load_baseElec).toFixed(2)}</td>
            </tr>

            <tr align="center" bgcolor="white">
              <th rowSpan="2">C02 배출량</th>
              <th>분석건물</th>
              <td>{parseFloat((props.co2Yr.yr_co2_heat).toFixed(2))}</td>
              <td>{parseFloat((props.co2Yr.yr_co2_cool).toFixed(2))}</td>
              <td>{parseFloat((props.co2Yr.yr_co2_baseElec).toFixed(2))}</td>
              <td>{parseFloat((props.co2Yr.yr_co2_heat + props.co2Yr.yr_co2_cool + props.co2Yr.yr_co2_baseElec).toFixed(2))}</td>
            </tr>
            <tr align="center" bgcolor="white">
              <th>참조 사용행태 건물</th>
              <td>{parseFloat((props.co2MLYr.yr_co2_heat).toFixed(2))}</td>
              <td>{parseFloat((props.co2MLYr.yr_co2_cool).toFixed(2))}</td>
              <td>{parseFloat((props.co2MLYr.yr_co2_baseElec).toFixed(2))}</td>
              <td>{parseFloat((props.co2MLYr.yr_co2_heat + props.co2MLYr.yr_co2_cool + props.co2MLYr.yr_co2_baseElec).toFixed(2))}</td>
            </tr>
          </tbody>
        </table>
        <ShowAlertMessage/>
      </div>
      <div className={`${styles.step_wrap} ${styles.right_step_wrap}`}>
        <div className={styles.right_chart_wrap}>
          <div className={styles.title_label}>
            <aside />
            난방에너지 월간 사용량 <span>(kWh)</span>
          </div>
          <Chart3
            energy={props.energy.map((usg) => parseFloat(usg.load_heat).toFixed(2))}
            energyML={props.energyML.map((usg) => parseFloat(usg.load_heat).toFixed(2))}
          />
        </div>

        <div className={styles.right_chart_wrap}>
          <div className={styles.title_label}>
            <aside />
            냉방에너지 월간 사용량 <span>(kWh)</span>
          </div>
          <Chart3
            energy={props.energy.map((usg) => parseFloat(usg.load_cool).toFixed(2))}
            energyML={props.energyML.map((usg) => parseFloat(usg.load_cool).toFixed(2))}
          />
        </div>

        <div className={styles.right_chart_wrap}>
          <div className={styles.title_label}>
            <aside />
            기저(조명/사무용기기) 에너지 월간 사용량 <span>(kWh)</span>
          </div>
          <Chart3
            energy={props.energy.map((usg) => parseFloat(usg.load_baseElec).toFixed(2))}
            energyML={props.energyML.map((usg) => parseFloat(usg.load_baseElec).toFixed(2))}
          />
        </div>
      </div>
    </div>
  );
}

export default StepV2;

export const chartLabel = [
  { name: "난방", color: "#F66060" },
  { name: "냉방", color: "#6799F4" },
  { name: "기저", color: "#B4BEC5" },
];
