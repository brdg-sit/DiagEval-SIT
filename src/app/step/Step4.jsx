import React, {useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import Chart1 from './Charts/step4/Chart1'
import Chart2 from './Charts/step4/Chart2'
import styles from './css/step4.module.css'
import stepStyles from './css/step-wrap.module.css'
import StepHeader from '../common/StepHeader'
import Data from "../data/Data";

function Step4() {
  const navigate = useNavigate()
  const location = useLocation();

  const [electricData, setElectricData] = useState({});
  const [gasData, setGasData] = useState({});

  const [, updateState] = React.useState();
  //const forceUpdate = React.useCallback(() => updateState({}), []);
  const [stepNum, setStepNum] = useState(4);
  const [isLoaded, setIsLoaded] = useState(false);
  const [codes, setCodes] = useState(location.state.codes);
  const [defaults, setDefaults] = useState(location.state.defaults);
  const [stateHistory, setStateHistory] = useState(location.state.stateHistory);
  
  //TBL_USER_ENTER 에 삽입하는 값.
  const [idElec, setIdElect] = useState(location.state.defaults.id);
  const [idGas, setIdGas] = useState(location.state.defaults.id);
  const [cdUnitgas, setCdUnitGas] = useState(location.state.defaults.cd_unitgas);
  const [idEnt, setIdEnt] = useState(location.state.defaults.id);

  //TBL_LOAD_ENERGY 에 삾입하는 값.
  const [typEngy, setTypEngy] = useState();
  const [mnth, setMnth] = useState();
  const [load, setLoad] = useState();
  const [unit, setUnit] = useState();

  useEffect(() => {
    if (isLoaded !== true) {
      if(location.state.stepNum === 3){
        location.state.stateHistory[3] = location.state;
        if(location.state.stateHistory[4] != undefined){
          RetrieveData(location.state.stateHistory[4]);
        }
        else{
          const electricTemplate = {
            '01월': 0,
            '02월': 0,
            '03월': 0,
            '04월': 0,
            '05월': 0,
            '06월': 0,
            '07월': 0,
            '08월': 0,
            '09월': 0,
            '10월': 0,
            '11월': 0,
            '12월': 0
          }

          const gasTemplate = {
            '01월': 0,
            '02월': 0,
            '03월': 0,
            '04월': 0,
            '05월': 0,
            '06월': 0,
            '07월': 0,
            '08월': 0,
            '09월': 0,
            '10월': 0,
            '11월': 0,
            '12월': 0
          }

          setElectricData(electricTemplate);
          setGasData(gasTemplate);
        }
      }
      if(location.state.stepNum === 5){
        RetrieveData(location.state.stateHistory[4]);
      }
      setIsLoaded(true);
    }
  });

  const submit = e => {
    e.preventDefault()
  }

  const RetrieveData = (state) => {
    setStateHistory(state.stateHistory);
    setElectricData(state.electricData);
    setGasData(state.gasData);
    setTypeVal(state.typeVal);
  }

  const OnElectricConsumptionChange = (e) => {
    electricData[e.target.name] = parseInt(e.target.value, 10);
    updateState({});
  }

  const OnGasConsumptionChange = (e) => {
    gasData[e.target.name] = parseInt(e.target.value, 10);
    updateState({});
  }

  const OnNextButtonClick = (e) => {

    Data.InsertEnergyUsage();

    navigate('/step5', {
      state: {
        codes: codes,
        defaults: defaults,
        stepNum: stepNum,
        stateHistory: location.state.stateHistory,
        electricData: electricData,
        gasData: gasData,
        typeVal: typeVal
      }
    })
  }

  //   가스사용량 단위 탭
  const [typeVal, setTypeVal] = useState('mj')
  
  return (
    <main className={stepStyles.step_wrapper}>
      <section className={stepStyles.step_container}>
        <StepHeader />
        <form className={styles.wrapper} onSubmit={submit}>
          <div className={styles.container}>
            <div className={styles.left_wrap}>
              {/* !!=== 전기 사용량 ===!! */}
              <div className={styles.content_wrap}>
                <div className={styles.title_label}>
                  <aside />
                  전기 사용량
                </div>

                <ul className={styles.val_wrap}>
                  {Object.keys(electricData).map((item, i) => {
                    return (
                      <li key={i}>
                        <p>{item}</p>
                        <div className={styles.valBox}>
                          <input type="number" name={item} value={electricData[item]} onChange={OnElectricConsumptionChange} placeholder="직접입력" />
                          <span>kWh</span>
                        </div>
                      </li>
                    )
                  })}
                </ul>
              </div>

              {/* !!=== 가스 사용량 ===!! */}
              <div className={styles.content_wrap}>
                <div className={styles.title_wrap}>
                  <div className={styles.title_label}>
                    <aside />
                    가스 사용량
                  </div>

                  <div className={styles.choice_wrap}>
                    <button
                      className={
                        typeVal === 'mj'
                          ? styles.tabType_active
                          : styles.tabType
                      }
                      onClick={() => setTypeVal('mj')}
                    >
                      mJ
                    </button>
                    <button
                      className={
                        typeVal !== 'mj'
                          ? styles.tabType_active
                          : styles.tabType
                      }
                      onClick={() => setTypeVal('m3')}
                    >
                      m³
                    </button>
                  </div>
                </div>

                <ul className={styles.val_wrap}>
                  {Object.keys(gasData).map((item, i) => {
                    return (
                      <li key={i}>
                        <p>{item}</p>

                        <div className={styles.valBox}>
                          <input type="number" name={item} value={gasData[item]} onChange={OnGasConsumptionChange} placeholder="직접입력" />
                          <span>{typeVal === 'mj' ? 'mJ' : 'm³'}</span>
                        </div>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>

            <div className={styles.right_wrap}>
              {/* !!===전기 사용량===!! */}
              <div className={styles.content_wrap}>
                <div className={styles.title_label}>
                  <aside />
                  전기 월별 사용량
                </div>

                <div className={styles.val_wrap}>
                  <Chart1 electricData={electricData}/>
                </div>
              </div>

              {/* !!===전기 사용량===!! */}
              <div className={styles.content_wrap}>
                <div className={styles.title_label}>
                  <aside />
                  월별 가스 사용량
                </div>

                <div className={styles.val_wrap}>
                  <Chart2 gasData={gasData}/>
                </div>
              </div>
            </div>
          </div>

          {/* ==== 버튼 영역 ==== */}
          <div className={styles.btn_wrap}>
            <button
              type="submit"
              className={styles.backBtn}
              onClick={() =>
                navigate('/step3', {
                state: {
                  codes: codes,
                  defaults: defaults,
                  stepNum: stepNum,
                  stateHistory: location.state.stateHistory,
                  electricData: electricData,
                  gasData: gasData,
                  typeVal: typeVal
                }
              })}
            >
              이전으로
            </button>
            <button
              className={styles.submit}
              onClick={() => OnNextButtonClick}
            >
              다음으로
            </button>
          </div>
        </form>
      </section>
    </main>
  )
}

export default Step4
