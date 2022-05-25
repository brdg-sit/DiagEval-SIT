import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./css/step5.module.css";
import stepStyles from "./css/step-wrap.module.css";
import StepHeader from "../common/StepHeader";
import StepV1 from "./step5-value/StepV1";
import StepV2 from "./step5-value/StepV2";
import StepV3 from "./step5-value/StepV3";
import axios from "axios";

function Step5() {
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
  const [energyUsage, setEnergyUsage] = useState({});
  const [energyUsageYrHeat, setEnergyUsageYrHeat] = useState({});
  const [energyUsageYrCool, setEnergyUsageYrCool] = useState({});
  const [energyUsageYrBC, setEnergyUsageYrBC] = useState({});
  const [energyUsageCO2Heat, setEnergyUsageCO2Heat] = useState({});
  const [energyUsageCO2Cool, setEnergyUsageCO2Cool] = useState({});
  const [energyUsageCO2BC, setEnergyUsageCO2BC] = useState({});
  const [energyUserML, setEnergyUserML] = useState({});
  const [energyStddML, setEnergyStddML] = useState({});
  const [energyUsageAvg, setEnergyUsageAvg] = useState({});
  const [idEtr, setIdEtr] = useState(location.state.idEtr);

  const baseuri = "https://sitapi.brdg.kr/api/sit/";
  // const baseuri = "https://localhost:7037/";

  useEffect(() => {
    if (isLoaded !== true) {
      location.state.stateHistory[4] = location.state;

      GetEnergyUsage();
      GetEnergyUserML();
      GetEnergyUsageAvg();

      setIsLoaded(true);
    }
  });

  const GetEnergyUsage = async () => {
    //console.log("idEtr", idEtr);
    try {
      axios
        .get(baseuri + "get-energyusage", {
          params: { id_etr: idEtr },
        })
        .then((response) => {
          console.log("response.data", response.data);
          // console.log("response.data[0]", response.data[0]);
          // console.log("response.data[1]", response.data[1]);
          // console.log("response.data[2]", response.data[2]);
          setEnergyUsage(response.data[0]);
          setEnergyUserML(response.data[1]);
          // setEnergyUsageYrHeat(response.data[1][0].yr_load_heat);
          // setEnergyUsageYrCool(response.data[1][0].yr_load_cool);
          // setEnergyUsageYrBC(response.data[1][0].yr_load_baseElec);
          // setEnergyUsageCO2Heat(response.data[1][0].yr_load_heat);
          // setEnergyUsageCO2Cool(response.data[1][0].yr_load_cool);
          // setEnergyUsageCO2BC(response.data[1][0].yr_load_baseElec);
          //setEnergyUsageCO2(response.data[2]);
        });
    } catch (error) {
      console.error(error);
    }
  };

  const GetEnergyUserML = async () => {
    //console.log("idEtr, area, eqmt", idEtr, area, eqmt)
    try {
      axios
        .get(baseuri + "get-energyusage-ml", {
          params: { id_etr: idEtr, area: area, eqmt: eqmt },
        })
        .then((response) => {
          setEnergyUserML(response.data);
          //console.log("GetEnergyUserML response.data", response.data)
        });
    } catch (error) {
      console.error(error);
    }
  };

  const GetEnergyStddML = async () => {
    try {
      axios
        .get(baseuri + "get-energyusage", {
          params: { id_etr: idEtr, is_sep: "3" },
        })
        .then((response) => {
          setEnergyStddML(response.data);
        });
    } catch (error) {
      console.error(error);
    }
  };

  const GetEnergyUsageAvg = async () => {
    try {
      axios
        .get(baseuri + "get-energyusage-avg", {
          params: { area: area, eqmt: eqmt, wday: wday, wend: wend },
        })
        .then((response) => {
          setEnergyUsageAvg(response.data);
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
            다음으로
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
                  stateHistory: stateHistory,
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
            {step === 1 && (
              <StepV2
                energyUsage={energyUsage}
                energyUserML={energyUserML}
                // energyUsageYrHeat={energyUsageYrHeat}
                // energyUsageYrCool={energyUsageYrHeat}
                // energyUsageYrBC={energyUsageYrHeat}
                // energyUsageCO2Heat={energyUsageCO2Heat}
                // energyUsageCO2Cool={energyUsageCO2Cool}
                // energyUsageCO2BC={energyUsageCO2BC}
              />
            )}
            {step === 2 && (
              <StepV3
                energyUsage={energyUsage}
                energyUsageAvg={energyUsageAvg}
              />
            )}
          </div>

          {/* ==== 버튼 영역 ==== */}
          <div className={styles.btn_wrap}>
            {handleBtn()}
            <button
              type="button"
              className={styles.printBtn}
              onClick={() =>
                  window.open(
                    "/print1",
                    "_blank",
                    "location=yes,height=1130,width=840,left=0,location=0,scrollbars=yes,status=yes"
                )
              }
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