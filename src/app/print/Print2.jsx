import React, { useRef, useState, useEffect } from 'react'
import { useNavigate, useLocation } from "react-router-dom";
import styles from './css/print2.module.css'
import axios from "axios";
// 리액트 프린트 라이브러리 사용
import ReactToPrint from 'react-to-print'
import titleIcon from '../../@assets/print/title-icon.svg'
import logo from '../../@assets/print/logo.svg'
import printIcon from '../../@assets/print/print-icon.svg'
import cpIcon1 from '../../@assets/print/print-cp2-icon1.svg'
import cpIcon2 from '../../@assets/print/print-cp2-icon2.svg'
import Cp1 from './component/print2/line-one/Cp1'
import Cp2 from './component/print2/line-one/Cp2'
import Cp3 from './component/print2/line-one/Cp3'
import Cp4 from './component/print2/line-one/Cp4'
import Cp5 from './component/print2/line-one/Cp5'
import Cp6 from './component/print2/line-one/Cp6'

function Print2() {
  const printRef = useRef(null)

  const location = useLocation();

  const [energy, setEnergy] = useState([]);
  const [energyML, setEnergyML] = useState([]);

  const [energyYr, setEnergyYr] = useState({});
  const [energyMLYr, setEnergyMLYr] = useState({});

  const [co2Yr, setCo2Yr] = useState({});
  const [co2MLYr, setCo2MLYr] = useState({});

  const [isLoaded, setIsLoaded] = useState(false);

  const baseuri = "https://sitapi.brdg.kr/api/sit/";

  useEffect(() => {
    if(!isLoaded){
      const urlParams = new URLSearchParams(window.location.search);
      var idEtr = urlParams.get('id_etr')
      GetEnergyUsage(idEtr);
      setIsLoaded(true);
    }
  })

  const GetEnergyUsage = async (idEtr) => {
    try {
      axios
        .get(baseuri + "get-energyusage", {
          params: { id_etr: idEtr },
        })
        .then((response) => {
          // API에서 여러개 Tables로 가져옴
          // data순서에 따라 용도 확인
          // setEnergy 월별 사용자입력 에너지 (0)
          // setEnergyML 월별 참조 사용행태 에너지 (1)
          // setEnergyYr 연간 사용자입력 에너지 (3)
          // setEnergyMLYr 연간 참조 사용행태 에너지 (4)
          // setCo2Yr 연간 사용자입력 CO2 (6)
          // setCo2MLYr 연간 참조 사용행태 CO2 (7)

          setEnergy(response.data[0]);
          setEnergyML(response.data[1]);
          setEnergyYr(response.data[3][0]);
          setEnergyMLYr(response.data[4][0]);
          setCo2Yr(response.data[6][0]);
          setCo2MLYr(response.data[7][0]);
        });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className={styles.wrapper} id="print2" ref={printRef}>
      <div className={styles.container}>
        {/* ==== 전체 타이틀 ==== */}
        <div className={styles.title_wrap}>
          <img src={titleIcon} alt="" />
          <h1>
            <span>서울시 사용행태 정보 기반</span>
            <br />
            공공건축물 진단 보고서
          </h1>
        </div>
        {/* ==== 섹션1 박스 ==== */}
        <div className={styles.sec_title_wrap}>
          <h2>
            <img src={cpIcon1} alt="" />
            참조 사용행태 비교분석 결과 연간 사용량 비교
          </h2>
        </div>

        {/* 컴포넌트 첫줄 */}
        <div className={styles.cp_wrapper}>
          <h1>연간 사용량 비교분석 결과</h1>
          <div className={styles.cp1_wrap}>
            <div className={styles.cp_chart_wrap}>
              <Cp1 energyYr={energyYr} energyMLYr={energyMLYr}/> <Cp2 co2Yr={co2Yr} co2MLYr={co2MLYr}/>
            </div>
            <Cp3
              energyYr={energyYr}
              energyMLYr={energyMLYr}
              co2Yr={co2Yr}
              co2MLYr={co2MLYr}
            />
          </div>

          
        </div>

        {/* ==== 섹션2 박스 ==== */}
        <div className={styles.sec_title_wrap}>
          <h2>
            <img src={cpIcon2} alt="" />
            참조 사용행태 비교분석 결과 월간 사용량 비교
          </h2>
        </div>

        <div className={styles.cp_wrapper}>
          <div className={styles.cp2_wrap}>
            <Cp4 
              energy={energy.map((usg) => parseFloat((usg.load_heat).toFixed(2)))}
              energyML={energyML.map((usg) => parseFloat((usg.load_heat).toFixed(2)))}
            />
          </div>
          <div className={styles.cp2_wrap}>
            <Cp5 
              energy={energy.map((usg) => parseFloat((usg.load_cool).toFixed(2)))}
              energyML={energyML.map((usg) => parseFloat((usg.load_cool).toFixed(2)))}
            /> 
          </div>
          <div className={styles.cp2_wrap}>
            <Cp6
              energy={energy.map((usg) => parseFloat((usg.load_baseElec).toFixed(2)))}
              energyML={energyML.map((usg) => parseFloat((usg.load_baseElec).toFixed(2)))}
            />
          </div>
        </div>

        {/* ==== 프린트 버튼 ==== */}
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

        <div className={styles.page_number}>2page</div>
        <img src={logo} alt="" className={styles.logo} />
      </div>
    </section>
  )
}

export default Print2
