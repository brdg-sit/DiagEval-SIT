import React, {useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import Chart1 from './Charts/step4/Chart1'
import Chart2 from './Charts/step4/Chart2'
import styles from './css/step4.module.css'
import stepStyles from './css/step-wrap.module.css'
import StepHeader from '../common/StepHeader'
import Data from "../data/Data";
import axios from 'axios'

function Step4() {
  const navigate = useNavigate()
  const location = useLocation();

  const [electricData, setElectricData] = useState({});
  const [gasData, setGasData] = useState({});

  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);
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

  const GetUserEnter= () => {
    var userEnter = {};
    userEnter["address"] = location.state.stateHistory[1].address;

    var north_axis = location.state.stateHistory[1].cdNorthAxis;
    var north_axis_code = 0;

    if(north_axis === "남남서(남동동)"){
      north_axis_code = 502;
    }
    else if(north_axis === "남서(남동)"){
      north_axis_code = 503;
    }
    else if(north_axis === "서남서(동남동)"){
      north_axis_code = 504;
    }
    else if(north_axis === "서(동)"){
      north_axis_code = 505;
    }
    //남
    else{
      north_axis_code = 501;
    }

    userEnter["cd_north_axis"] = north_axis_code;

    var usage_main = location.state.stateHistory[1].cdUsageMain;
    var usage_main_code = 0;

    if(usage_main === "업무시설"){
      usage_main_code = 701;
    }

    userEnter["cd_usage_main"] = usage_main_code;
    userEnter["usage_sub"] = location.state.stateHistory[1].usageSub;
    userEnter["year"] = location.state.stateHistory[1].year;
    userEnter["area"] = location.state.stateHistory[1].area;
    userEnter["wwr"] = location.state.stateHistory[1].wwr;
    userEnter["isetr_wwr"] = location.state.stateHistory[1].isEtrWwr;
    userEnter["aspect_ratio"] = location.state.stateHistory[1].aspectRatio;
    userEnter["isetr_aspect_ratio"] = location.state.stateHistory[1].isEtrAspectRatio;
    userEnter["area_etr"] = location.state.stateHistory[1].etrArea;
    userEnter["u_wall"] = location.state.stateHistory[2].uWall;
    userEnter["u_roof"] = location.state.stateHistory[2].uRoof;
    userEnter["u_floor"] = location.state.stateHistory[2].uFloor;
    userEnter["u_window"] = location.state.stateHistory[2].uWindow;
    userEnter["shgc"] = location.state.stateHistory[2].shgc;

    var eqmt = location.state.stateHistory[2].cdEqmt;
    var eqmt_code = 0;

    if(eqmt === "EHP"){
      eqmt_code = 401;
    }
    else{
      eqmt_code = 402
    }

    userEnter["cd_eqmt"] = eqmt_code;
    userEnter["effcy_heat"] = location.state.stateHistory[2].effcyHeat;
    userEnter["effcy_cool"] = location.state.stateHistory[2].effcyCool;

    var eqmt_light = location.state.stateHistory[2].cdEqmtLight;
    var eqmt_light_code = 0;

    if(eqmt_light === "LED(100%)"){
      eqmt_light_code = 301;
    }
    else if(eqmt_light === "LED(75%) 형광등(25%)"){
      eqmt_light_code = 302;
    }
    else if(eqmt_light === "LED(50%) 형광등(50%)"){
      eqmt_light_code = 303;
    }
    else if(eqmt_light === "LED(25%) 형광등(75%)"){
      eqmt_light_code = 304;
    }
    else{
      eqmt_light_code = 305;
    }

    userEnter["cd_eqmt_light"] = eqmt_light_code;
    userEnter["level_light"] = location.state.stateHistory[2].levelLight;
    userEnter["isetr_light"] = location.state.stateHistory[2].isetrLight;
    userEnter["isetr_u_wall"] = location.state.stateHistory[2].isetrUWall;
    userEnter["isetr_u_roof"] = location.state.stateHistory[2].isetrURoof;
    userEnter["isetr_u_floor"] = location.state.stateHistory[2].isetrUFloor;
    userEnter["isetr_u_window"] = location.state.stateHistory[2].isetrUWindow;
    userEnter["isetr_shgc"] = location.state.stateHistory[2].isetrShgc;
    userEnter["hur_wday"] = location.state.stateHistory[3].hurWday;
    userEnter["hur_wend"] = location.state.stateHistory[3].hurWend;
    userEnter["men_rsdt"] = location.state.stateHistory[3].menRsdt;
    userEnter["men_norsdt"] = location.state.stateHistory[3].menNorsdt;
    userEnter["temp_heat"] = location.state.stateHistory[3].tempHeat;
    userEnter["temp_cool"] = location.state.stateHistory[3].tempCool;

    var unitgas = typeVal;
    var unitgas_code = 0;

    if(typeVal === 'MJ'){
      unitgas_code = 201;
    }
    else if(typeVal ==='NM3'){
      unitgas_code = 202;
    }

    userEnter["cd_unitgas"] =  unitgas_code;

    return userEnter;
  }

  const baseuri = "https://sitapi.brdg.kr/api/sit/";
  // const baseuri = "https://localhost:7037/";

  const InsertEnergyTypeIntoDB = (id_etr, electricDict, gasDict) => {
    var energyType = {};

    energyType["id_etr"] = id_etr;
    energyType["unit_elec"] = 203;
    energyType["unit_gas"] = (typeVal == "MJ") ? 201 : 202
    energyType["elec_data"] = electricDict;
    energyType["gas_data"] = gasDict;

    try{
      var energyTypeValues = JSON.stringify(energyType);
      axios.post(baseuri + 'energytyp', energyTypeValues,
            { headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' } }
        ).then(response => {
          console.log(response.data);
        });
    }
    catch(error){
        console.error(error);
    }
  }

  const InsertEnergyUsageIntoDB = (id_etr, baseEC, electricDict, gasDict, isEHP) => {

    var energyUsage = {};

    if(isEHP){
      energyUsage["id_etr"] = id_etr;
      energyUsage["base_ec"] = baseEC;
      energyUsage["unit_elec"] = 203;
      energyUsage["unit_gas"] = (typeVal == "MJ") ? 201 : 202
      energyUsage["gas_data"] = gasDict;
      energyUsage["elec_data"] = electricDict;
      energyUsage["is_ehp"] = isEHP;
    }
    else{
      energyUsage["id_etr"] = id_etr;
      energyUsage["base_ec"] = baseEC;
      energyUsage["unit_elec"] = 203;
      energyUsage["unit_gas"] = (typeVal == "MJ") ? 201 : 202
      energyUsage["gas_data"] = gasDict;
      energyUsage["elec_data"] = electricDict;
      energyUsage["is_ehp"] = isEHP;
    }

    try{
      var energyUsageValues = JSON.stringify(energyUsage);
      axios.post(baseuri + 'energyusage', energyUsageValues,
            { headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' } }
        ).then(response => {
          console.log(response.data);
        });
    }
    catch(error){
        console.error(error);
    }
  }

  const GetBaseConsumption = (data) => {
    var dataKeys = Object.keys(data)
    var lowestEC = data[dataKeys[0]];

    for(var i=1; i<dataKeys.length; i++){
      if(data[dataKeys[i]] < lowestEC){
        lowestEC = data[dataKeys[i]];
      }
    }
    return lowestEC;
  }


  
  const OnNextButtonClick = (e) => {
    var userEnter = GetUserEnter();

    // 알고리즘 부분
    const men_rsdt = userEnter["men_rsdt"]
    const men_norsdt = userEnter["men_norsdt"]
    const area = userEnter["area"]
    // 1)재실밀도
    const occupancyA = men_rsdt / area;
    const occupancyB = men_norsdt / area / 8;
    const occupancy = occupancyA + occupancyB;
    // 2)기기발열량
    const pwr_eqmt = occupancyA * 250;
    // TBL_ML 인서트 할때 occupancy, pwr_eqmt 가져가기

    try{
      var userEnterValues = JSON.stringify(userEnter);
      axios.post(baseuri + 'userenter', userEnterValues,
            { headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' } }
        ).then(response => {
          var id_etr = response.data;

          var electricDict = {};
          var electricDataKeys = Object.keys(electricData)
          for(var i=0; i<electricDataKeys.length; i++){
            electricDict[electricDataKeys[i]] = electricData[electricDataKeys[i]];
          }

          var gasDict = {};
          var gasDataKeys = Object.keys(gasData)
          for(var i=0; i<gasDataKeys.length; i++){
            gasDict[gasDataKeys[i]] = gasData[gasDataKeys[i]];
          }

          InsertEnergyTypeIntoDB(id_etr, electricDict, gasDict);
          
          var cd_eqmt = location.state.stateHistory[2].cdEqmt;

          var baseEC = 0;

          if(cd_eqmt === "EHP"){
            var elecEC = GetBaseConsumption(electricData);
            InsertEnergyUsageIntoDB(id_etr, elecEC, electricDict, gasDict, true);
          }
          else{
            var gasEC = GetBaseConsumption(gasData);
            InsertEnergyUsageIntoDB(id_etr, gasEC, electricDict, gasDict, false);
          }

          navigate('/step5', {
            state: {
              codes: codes,
              defaults: defaults,
              stepNum: stepNum,
              stateHistory: location.state.stateHistory,
              electricData: electricData,
              gasData: gasData,
              typeVal: typeVal,
              idEtr: id_etr
            }
          })
        });
    }
    catch(error){
        console.error(error);
    }
  }

  //   가스사용량 단위 탭
  const [typeVal, setTypeVal] = useState('MJ')
  
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
                        typeVal === 'MJ'
                          ? styles.tabType_active
                          : styles.tabType
                      }
                      onClick={() => setTypeVal('MJ')}
                    >
                      MJ
                    </button>
                    <button
                      className={
                        typeVal !== 'MJ'
                          ? styles.tabType_active
                          : styles.tabType
                      }
                      onClick={() => setTypeVal('NM3')}
                    >
                      NM³
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
                          <span>{typeVal === 'MJ' ? 'MJ' : 'NM³'}</span>
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
              onClick={OnNextButtonClick}
            >
              다음으로
            </button>
          </div>
        </form>
      </section>
    </main>
  )
}

export default Step4;