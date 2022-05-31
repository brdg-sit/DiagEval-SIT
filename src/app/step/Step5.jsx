import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./css/step5.module.css";
import stepStyles from "./css/step-wrap.module.css";
import StepHeader from "../common/StepHeader";
import StepV1 from "./step5-value/StepV1";
import StepV2 from "./step5-value/StepV2";
import StepV3 from "./step5-value/StepV3";
import axios from "axios";
import Print1 from "../../print/Print1";
import cloneDeep from 'lodash.clonedeep';


function Step5() {

  const test = document.createElement('div');
  const navigate = useNavigate();
  const location = useLocation();

  const [step, setStep] = useState(0);

  const [stepNum, setStepNum] = useState(5);
  const [isLoaded, setIsLoaded] = useState(false);
  const [codes, setCodes] = useState(location.state.codes);
  const [defaults, setDefaults] = useState(location.state.defaults);
  const [stateHistory, setStateHistory] = useState(location.state.stateHistory);

  const [area, setArea] = useState(location.state.stateHistory[1].area);
  const [eqmt, setEqmt] = useState(location.state.stateHistory[2].cdEqmt);
  const [wday, setHurWday] = useState(location.state.stateHistory[3].hurWday);
  const [wend, setHurWend] = useState(location.state.stateHistory[3].hurWend);

  const [energy, setEnergy] = useState([]);
  const [energyML, setEnergyML] = useState([]);
  const [energyAvg, setEnergyAvg] = useState([]);
  const [co2Avg, setCo2Avg] = useState([]);

  const [energyYr, setEnergyYr] = useState({});
  const [energyMLYr, setEnergyMLYr] = useState({});
  const [energyAvgYr, setEnergyAvgYr] = useState({});

  const [co2Yr, setCo2Yr] = useState({});
  const [co2MLYr, setCo2MLYr] = useState({});
  const [co2AvgYr, setCo2AvgYr] = useState({});

  const [idEtr, setIdEtr] = useState(location.state.idEtr);

  const baseuri = "https://sitapi.brdg.kr/api/sit/";
  // const baseuri = "https://localhost:7037/";

  useEffect(() => {
    if (isLoaded !== true) {
      location.state.stateHistory[4] = location.state;
      location.state.stateHistory[4].submittedState = cloneDeep(location.state.submittedState);
      GetEnergyUsage();
      setIsLoaded(true);
    }
  });

  const GetEnergyUsage = async () => {
    try {
      axios
        .get(baseuri + "get-energyusage", {
          params: { id_etr: idEtr },
        })
        .then((response) => {
          // API에서 여러개 Tables로 가져옴
          // data순서에 따라 용도 확인
          // setEnergy 월별 사용자입력 에너지 (0)
          // setEnergyML 월별 일반사용형태 에너지 (1)
          // setEnergyAvg 월별 유사사례 평균치 에너지 (2)
          // setEnergyYr 연간 사용자입력 에너지 (3)
          // setEnergyMLYr 연간 일반사용형태 에너지 (4)
          // setCo2Avg 월별 유사사례 평균치 CO2 (5)
          // setCo2Yr 연간 사용자입력 CO2 (6)
          // setCo2MLYr 연간 일반사용형태 CO2 (7)

          setEnergy(response.data[0]);
          setEnergyML(response.data[1]);
          setEnergyAvg(response.data[2]);
          setEnergyYr(response.data[3][0]);
          setEnergyMLYr(response.data[4][0]);
          setCo2Avg(response.data[5]);
          setEnergyAvgYr({
            yr_load_heat: response.data[2].reduce(
              (a, v) => (a = a + v.load_heat),
              0
            ),
            yr_load_cool: response.data[2].reduce(
              (a, v) => (a = a + v.load_cool),
              0
            ),
            yr_load_baseElec: response.data[2].reduce(
              (a, v) => (a = a + v.load_baseElec),
              0
            ),
          });
          setCo2Yr(response.data[6][0]);
          setCo2MLYr(response.data[7][0]);
          setCo2AvgYr({
            yr_co2_heat: response.data[5].reduce(
              (a, v) => (a = a + v.co2_heat),
              0
            ),
            yr_co2_cool: response.data[5].reduce(
              (a, v) => (a = a + v.co2_cool),
              0
            ),
            yr_co2_baseElec: response.data[5].reduce(
              (a, v) => (a = a + v.co2_baseElec),
              0
            ),
          });
        });
    } catch (error) {
      console.error(error);
    }
  };

  // get-energyusage 으로 통일하여 운영 -- dukhyun
  const GetEnergyUserML = async () => {
    try {
      axios
        .get(baseuri + "get-energyusage-ml", {
          params: { id_etr: idEtr, area: area, eqmt: eqmt },
        })
        .then((response) => {
          setEnergyML(response.data);
        });
    } catch (error) {
      console.error(error);
    }
  };

  // get-energyusage 으로 통일하여 운영 -- dukhyun
  const GetEnergyUsageAvg = async () => {
    try {
      axios
        .get(baseuri + "get-energyusage-avg", {
          params: { area: area, eqmt: eqmt, wday: wday, wend: wend },
        })
        .then((response) => {
          setEnergyAvg(response.data);
        });
    } catch (error) {
      console.error(error);
    }
  };

  const handleBtn = () => {
    if (step === 2) {
      return (
        <>
          <button
            type="submit"
            className={styles.backBtn}
            onClick={() => setStep((cur) => cur - 1)}
          >
            이전으로
          </button>
          <button
            type="button"
            className={styles.submit}
            onClick={() => navigate("/")}
          >
            완료
          </button>
        </>
      );
    } else if (step === 1) {
      return (
        <>
          <button
            type="submit"
            className={styles.backBtn}
            onClick={() => setStep((cur) => cur - 1)}
          >
            이전으로
          </button>
          <button
            type="button"
            className={styles.submit}
            onClick={() => setStep((cur) => cur + 1)}
          >
            다음으로
          </button>
        </>
      );
    } else if (step === 0) {
      return (
        <>
          <button
            type="submit"
            className={styles.backBtn}
            onClick={() => {
              navigate("/step4", {
                state: {
                  codes: codes,
                  defaults: defaults,
                  stepNum: stepNum,
                  stateHistory: stateHistory
                },
              });
            }}
          >
            이전으로
          </button>
          <button
            type="button"
            className={styles.submit}
            onClick={() => setStep((cur) => cur + 1)}
          >
            다음으로
          </button>
        </>
      );
    }
  };

  const OnPrintResultClick = () => {
    if(step === 0){
      window.open(
        "/print1?id_etr=" + idEtr,
        "_blank",
        "location=yes,height=1130,width=840,left=0,location=0,scrollbars=yes,status=yes"
      )
    }
    else if(step === 1){
      window.open(
        "/print2?id_etr=" + idEtr,
        "_blank",
        "location=yes,height=1130,width=840,left=0,location=0,scrollbars=yes,status=yes"
      )
    }
    
  }

  return (
    <main className={stepStyles.step_wrapper}>
      <section className={stepStyles.step_container}>
        <StepHeader />
        <div className={styles.wrapper}>
          <div className={styles.nav_wrap}>
            <nav className={step === 0 ? styles.navActive : ""}>
              에너지 사용량 분리분석 결과
            </nav>
            <nav className={step === 1 ? styles.navActive : ""}>
              일반 사용행태 비교분석 결과
            </nav>
            <nav className={step === 2 ? styles.navActive : ""}>
              유사건물 비교분석 결과
            </nav>
          </div>

          <div className={styles.view_wrapper}>
            {step === 0 && <StepV1 energy={energy} energyYr={energyYr} />}
            {step === 1 && (
              <StepV2
                energy={energy}
                energyML={energyML}
                energyYr={energyYr}
                energyMLYr={energyMLYr}
                co2Yr={co2Yr}
                co2MLYr={co2MLYr}
              />
            )}
            {step === 2 && (
              <StepV3
                energy={energy} // 사용자입력-월
                energyAvg={energyAvg} // 유사평균-월
                energyYr={energyYr} // 사용자입력-년
                energyAvgYr={energyAvgYr} // 유사평균-년
                co2Yr={co2Yr} // 사용자입력CO2-년
                co2AvgYr={co2AvgYr} // 유사평균CO2-년
              />
            )}
          </div>

          {/* ==== 버튼 영역 ==== */}
          <div className={styles.btn_wrap}>
            {handleBtn()}
            <button
              type="button"
              className={styles.printBtn}
              onClick={OnPrintResultClick}
            >
              결과물 출력
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Step5;
