import React, { useRef, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import axios from "axios";
import styles from './css/print1.module.css'
import titleIcon from '../../@assets/print/title-icon.svg'
import logo from '../../@assets/print/logo.svg'
import printIcon from '../../@assets/print/print-icon.svg'
import cpIcon1 from '../../@assets/print/print-cp-icon1.svg'
import cpIcon2 from '../../@assets/print/print-cp-icon2.svg'
// 리액트 프린트 라이브러리 사용
import ReactToPrint from 'react-to-print'
import Cp1 from './component/print1/Cp1'
import Cp2 from './component/print1/Cp2'
import Cp3 from './component/print1/Cp3'
import Cp4 from './component/print1/Cp4'
import Cp5 from './component/print1/Cp5'

function Print1() {
  const printRef = useRef(null)
  //const printRef = null;

  const [energy, setEnergy] = useState([]);
  const [energyYr, setEnergyYr] = useState([]);
  const [energyType, setEnergyType] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    if(!isLoaded){
      const urlParams = new URLSearchParams(window.location.search);
      let idEtr = urlParams.get('id_etr');
      GetEnergyType(idEtr);
      GetEnergyUsage(idEtr);
      
      setIsLoaded(true);
    }
  })

  const GetEnergyType = async (idEtr) => {
    try {
      axios
        .get("https://sitapi.brdg.kr/api/sit/get-energytyp", {
          params: { id_etr: idEtr},
        })
        .then((response) => {
          setEnergyType(response.data);
        });
    } catch (error) {
      console.error(error);
    }
  };

  const GetEnergyUsage = async (idEtr) => {
    try {
      axios
        .get("https://sitapi.brdg.kr/api/sit/get-energyusage", {
          params: { id_etr: idEtr},
        })
        .then((response) => {
          setEnergy(response.data[0]);
          setEnergyYr(response.data[3][0]);
        });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <section className={styles.wrapper} id="print1" ref={printRef}>
        <div className={styles.container}>
          {/* 전체 타이틀 */}
          <div className={styles.title_wrap}>
            <img src={titleIcon} alt="" />
            <h1>
              <span>서울시 사용행태 정보 기반</span>
              <br />
              공공건축물 진단 보고서
            </h1>
          </div>

          {/* 섹션1 박스 */}
          <div className={styles.sec_title_wrap}>
            <h2>
              <img src={cpIcon1} alt="" />
              건축물 현황
            </h2>
          </div>
          <Cp1 />
          <div className={styles.sec1_cp_wrap}>
            <h3>고지서 정보</h3>
            <div className={styles.cp_wrap}>
              <Cp2 energy = {energyType}/>
              <Cp3 energy = {energyType} />
            </div>
          </div>

          {/* 섹션2 박스 */}
          <div className={styles.sec_title_wrap}>
            <h2>
              <img src={cpIcon2} alt="" />
              에너지 사용량 분리분석 결과
            </h2>
          </div>
          <div className={styles.sec2_cp_wrap}>
            <Cp4 energy = {energyYr}/>
            <Cp5
              energyHeat={energy.map((usg) => usg.load_heat)}
              energyCool={energy.map((usg) => usg.load_cool)}
              energyBaseElec={energy.map((usg) => usg.load_baseElec)}
              energyBaseGas={energy.map((usg) => parseFloat(usg.load_baseGas.toFixed(2)))}
            />
          </div>

          {/* 프린트 버튼 */}
          <ReactToPrint
            trigger={() => (
              <button className={styles.print_btn}>
                <div className={styles.btn_wrap}>
                  <img src={printIcon} alt="" />
                  인쇄하기
                </div>
              </button>
            )}
            content={() => printRef.current}
          />

          <div className={styles.page_number}>1page</div>
          <img src={logo} alt="" className={styles.logo} />
        </div>
      </section>
    </>
  )
}

export default Print1
