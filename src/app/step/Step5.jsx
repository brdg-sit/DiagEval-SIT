import React, { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import styles from './css/step5.module.css'
import stepStyles from './css/step-wrap.module.css'
import StepHeader from '../common/StepHeader'
import StepV1 from './step5-value/StepV1'
import StepV2 from './step5-value/StepV2'
import StepV3 from './step5-value/StepV3'
import axios from 'axios'

function Step5() {
  const navigate = useNavigate();
  const location = useLocation();

  const [step, setStep] = useState(0);

  const [stepNum, setStepNum] = useState(5);
  const [isLoaded, setIsLoaded] = useState(false);
  const [codes, setCodes] = useState(location.state.codes);
  const [defaults, setDefaults] = useState(location.state.defaults);
  const [stateHistory, setStateHistory] = useState(location.state.stateHistory);

  const [area, setArea] = useState("");
  const [eqmt, setEqmt] = useState("");
  const [hurWday, setHurWday] = useState("");
  const [hurWend, setHurWend] = useState("");
  const [energyUsage, setEnergyUsage] = useState({});
  const [energyUserML, setEnergyUserML] = useState({});
  const [energyStddML, setEnergyStddML] = useState({});
  const [energyUsageAvg, setEnergyUsageAvg] = useState({});
  const [idEtr, setIdEtr] = useState(location.state.idEtr);

  const baseuri = "https://sitapi.brdg.kr/api/sit/";
  // const baseuri = "https://localhost:7037/";

  useEffect(() => {
    if(isLoaded !== true){
      GetEnergyUsage();
      GetEnergyUserML();
      GetEnergyStddML();
      setIsLoaded(true);
      location.state.stateHistory[4] = location.state;

      setArea(location.state.stateHistory[1].area)
      setEqmt(location.state.stateHistory[2].cdEqmt)
      setHurWday(location.state.stateHistory[3].hurWday)
      setHurWend(location.state.stateHistory[3].hurWend)
      
      GetEnergyUsageAvg();
    }
  });

  const GetEnergyUsage = async () => {
    try{
      axios.get(baseuri + 'get-energyusage', { 
        params: {id_etr:idEtr}
    })
      .then((response) => {
        setEnergyUsage(response.data);
      });
    }
    catch(error){
        console.error(error);
    }
  }

  const GetEnergyUserML = async () => {
    try{
      axios.get(baseuri + 'get-energyusage-ml', { 
        params: {id_etr:idEtr, area:area, eqmt:eqmt}
    })
      .then((response) => {
        setEnergyUserML(response.data);
      });
    }
    catch(error){
        console.error(error);
    }
  }

  const GetEnergyStddML = async () => {
    try{
      axios.get(baseuri + 'get-energyusage', { 
        params: {id_etr:idEtr, is_sep:"3"}
    })
      .then((response) => {
        setEnergyStddML(response.data);
      });
    }
    catch(error){
        console.error(error);
    }
  }

  const GetEnergyUsageAvg = async () => {
    try{
      axios.get(baseuri + 'get-energyusage-avg', { 
        params: {area:area, eqmt:eqmt, wday:hurWday, wend:hurWend}
    })
      .then((response) => {
        setEnergyUsageAvg(response.data);
      });
    }
    catch(error){
        console.error(error);
    }
  }

  const handleBtn = () => {
    if (step === 2) {
      return (
        <>
          <button
            type="submit"
            className={styles.backBtn}
            onClick={() => setStep(cur => cur - 1)}
          >
            이전으로
          </button>
          <button
            type="button"
            className={styles.submit}
            onClick={() => navigate('/')}
          >
            다음으로
          </button>
        </>
      )
    } else if (step === 1) {
      return (
        <>
          <button
            type="submit"
            className={styles.backBtn}
            onClick={() => setStep(cur => cur - 1)}
          >
            이전으로
          </button>
          <button
            type="button"
            className={styles.submit}
            onClick={() => setStep(cur => cur + 1)}
          >
            다음으로
          </button>
        </>
      )
    } else if (step === 0) {
      return (
        <>
          <button
            type="submit"
            className={styles.backBtn}
            onClick={() => {navigate('/step4', {
              state: {
                codes: codes,
                defaults: defaults,
                stepNum: stepNum,
                stateHistory: stateHistory
              }
            })}}
          >
            이전으로
          </button>
          <button
            type="button"
            className={styles.submit}
            onClick={() => setStep(cur => cur + 1)}
          >
            다음으로
          </button>
        </>
      )
    }
  }

  return (
    <main className={stepStyles.step_wrapper}>
      <section className={stepStyles.step_container}>
        <StepHeader />
        <div className={styles.wrapper}>
          <div className={styles.nav_wrap}>
            <nav className={step === 0 && styles.navActive}>
              에너지 사용량 분리분석 결과
            </nav>
            <nav className={step === 1 && styles.navActive}>
              일반 사용행태 비교분석 결과
            </nav>
            <nav className={step === 2 && styles.navActive}>
              유사건물 비교분석 결과
            </nav>
          </div>

          <div className={styles.view_wrapper}>
            {step === 0 && <StepV1 energyUsage={energyUsage} />}
            {step === 1 && <StepV2 energyUsage={energyUsage} energyUserML={energyUserML} />}
            {step === 2 && <StepV3 energyUsage={energyUsage} energyStddML={energyUsageAvg} />}
          </div>

          {/* ==== 버튼 영역 ==== */}
          <div className={styles.btn_wrap}>
            {handleBtn()}
            <button type="button" className={styles.printBtn}>
              결과물 출력
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Step5;