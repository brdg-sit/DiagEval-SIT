import React from 'react'
import styles from '../../../css/print2/cp3.module.css'
import waitIcon from '../../../../../@assets/print/waitIcon.svg'

function Cp3(props) {
  const ShowAlertMessage = () => {
    
    var alertMessages = [];
    var hasAlert = false;
    var totalEnergyYr = props.energyYr.yr_load_heat + props.energyYr.yr_load_cool + props.energyYr.yr_load_baseElec;
    var totalEnergyML = props.energyMLYr.yr_load_heat + props.energyMLYr.yr_load_cool + props.energyMLYr.yr_load_baseElec;

    if(props.energyYr.yr_load_heat > props.energyMLYr.yr_load_heat){
      alertMessages.push(<p><img src={waitIcon} alt="" />&nbsp;&nbsp;&nbsp;참고 사용행태를 갖고 있는 건물보다&nbsp;<span>난방 사용량이 {parseFloat(100-(props.energyMLYr.yr_load_heat/props.energyYr.yr_load_heat*100)).toFixed(2)}% 높습니다</span></p>);
      hasAlert = true;
    }

    if(props.energyYr.yr_load_cool > props.energyMLYr.yr_load_cool){
      alertMessages.push(<p><img src={waitIcon} alt="" />&nbsp;&nbsp;&nbsp;참고 사용행태를 갖고 있는 건물보다&nbsp;<span>냉방 사용량이 {parseFloat(100-(props.energyMLYr.yr_load_cool/props.energyYr.yr_load_cool*100)).toFixed(2)}% 높습니다</span></p>);
      hasAlert = true;
    }

    if(props.energyYr.yr_load_baseElec > props.energyMLYr.yr_load_baseElec){
      alertMessages.push(<p><img src={waitIcon} alt="" />&nbsp;&nbsp;&nbsp;참고 사용행태를 갖고 있는 건물보다&nbsp;<span>기저(기기/조명) 사용량이 {parseFloat(100-(props.energyMLYr.yr_load_baseElec/props.energyYr.yr_load_baseElec*100)).toFixed(2)}% 높습니다</span></p>);
      hasAlert = true;
    }

    if(totalEnergyYr > totalEnergyML){
      alertMessages.push(<p><img src={waitIcon} alt="" />&nbsp;&nbsp;&nbsp;참고 사용행태를 갖고 있는 건물보다&nbsp;<span>에너지 사용량 합계가 {parseFloat(100-(totalEnergyML/totalEnergyYr*100)).toFixed(2)}% 높습니다</span></p>);
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
    <div className={styles.wrapper} style={{marginTop: '-32px'}}>
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
            <th rowSpan="2">
              에너지
              <br />
              사용량
            </th>
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
            <th rowSpan="2">
              C02 <br />
              배출량
            </th>
            <th>분석건물</th>
            <td>{parseFloat(props.co2Yr.yr_co2_heat).toFixed(2)}</td>
            <td>{parseFloat(props.co2Yr.yr_co2_cool).toFixed(2)}</td>
            <td>{parseFloat(props.co2Yr.yr_co2_baseElec).toFixed(2)}</td>
            <td>{parseFloat(props.co2Yr.yr_co2_heat + props.co2Yr.yr_co2_cool + props.co2Yr.yr_co2_baseElec).toFixed(2)}</td>
          </tr>
          <tr align="center" bgcolor="white">
            <th>참조 사용행태 건물</th>
            <td>{parseFloat(props.co2MLYr.yr_co2_heat).toFixed(2)}</td>
            <td>{parseFloat(props.co2MLYr.yr_co2_cool).toFixed(2)}</td>
            <td>{parseFloat(props.co2MLYr.yr_co2_baseElec).toFixed(2)}</td>
            <td>{parseFloat(props.co2MLYr.yr_co2_heat + props.co2MLYr.yr_co2_baseElec + props.co2MLYr.yr_co2_baseElec).toFixed(2)}</td>
          </tr>
        </tbody>
      </table>
      <ShowAlertMessage/>
    </div>
  )
}

export default Cp3
