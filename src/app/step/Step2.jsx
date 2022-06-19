import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import StepHeader from "../common/StepHeader";
import styles from "./css/step2.module.css";
import stepStyles from "./css/step-wrap.module.css";

function Step2() {
  const navigate = useNavigate();
  const location = useLocation();

  const [stepNum, setStepNum] = useState(2);
  const [isLoaded, setIsLoaded] = useState(false);
  const [stateHistory, setStateHistory] = useState(location.state.stateHistory);
  const [codes, setCodes] = useState(location.state.codes);
  const [defaults, setDefaults] = useState(location.state.defaults);
  const [yearUValues, setYearUValues] = useState(location.state.yearUValues);
  const [uWall, setUWall] = useState(location.state.uWall);
  const [uRoof, setURoof] = useState(location.state.uRoof);
  const [uFloor, setUFloor] = useState(location.state.uFloor);
  const [uWindow, setUWindow] = useState(location.state.uWindow);
  const [shgc, setShgc] = useState(location.state.shgc);
  const [uWallUser, setUWallUser] = useState(location.state.uWall);
  const [uRoofUser, setURoofUser] = useState(location.state.uRoof);
  const [uFloorUser, setUFloorUser] = useState(location.state.uFloor);
  const [uWindowUser, setUWindowUser] = useState(location.state.uWindow);
  const [shgcUser, setShgcUser] = useState(location.state.shgc);
  const [isetrUWall, setIsetrUWall] = useState(location.state.defaults.isetr_u_wall);
  const [isetrURoof, setIsetrURoof] = useState(location.state.defaults.isetr_u_roof);
  const [isetrUFloor, setIsetrUFloor] = useState(location.state.defaults.isetr_u_floor);
  const [isetrUWindow, setIsetrUWindow] = useState(location.state.defaults.isetr_u_window);
  const [isetrShgc, setIsetrShgc] = useState(location.state.defaults.isetr_shgc);
  const [cdEqmt, setCdEqmt] = useState(location.state.defaults.cd_eqmt);
  // Eqmt 하나로 운영 -- dukhyun
  //const [cdEqmtCool, setCdEqmtCool] = useState(codes[location.state.defaults.cd_eqmt_cool].name);
  const [effcyHeat, setEffcyHeat] = useState(location.state.defaults.effcy_heat);
  const [effcyCool, setEffcyCool] = useState(location.state.defaults.effcy_cool);
  const [cdEqmtLight, setCdEqmtLight] = useState(location.state.defaults.cd_eqmt_light);
  const [isetrLight, setIsetrLight] = useState(location.state.defaults.isetr_light);
  const [levelLight, setLevelLight] = useState(location.state.defaults.level_light);

  useEffect(() => {
    if (isLoaded !== true) {
      if (location.state.stepNum === 1) {
        location.state.stateHistory[1] = location.state;
        if (location.state.stateHistory[2] !== undefined) {
          RetrieveData(location.state.stateHistory[2], true);
        }
      }
      if (location.state.stepNum === 3) {
        location.state.stateHistory[3] = location.state;
        RetrieveData(location.state.stateHistory[2]);
      }
      setIsLoaded(true);
    }
  });

  const submit = (e) => {
    e.preventDefault();
  };

  const RetrieveData = (state, isFromStep1) => {
    setStateHistory(state.stateHistory);
    setIsetrUWall(state.isetrUWall);
    setIsetrURoof(state.isetrURoof);
    setIsetrUFloor(state.isetrUFloor);
    setIsetrUWindow(state.isetrUWindow);
    setIsetrShgc(state.isetrShgc);
    setCdEqmt(state.cdEqmt);
    setEffcyHeat(state.effcyHeat);
    setEffcyCool(state.effcyCool);
    setCdEqmtLight(state.cdEqmtLight);
    setIsetrLight(state.isetrLight);
    setLevelLight(state.levelLight);
    setUWall(state.uWall);
    setURoof(state.uRoof);
    setUFloor(state.uFloor);
    setUWindow(state.uWindow);
    setShgc(state.shgc);
    setUWallUser(state.uWallUser);
    setURoofUser(state.uRoofUser);
    setUFloorUser(state.uFloorUser);
    setUWindowUser(state.uWindowUser);
    setShgcUser(state.shgcUser);

    // if(!isFromStep1){
    //   setUWall(state.uWall);
    //   setURoof(state.uRoof);
    //   setUFloor(state.uFloor);
    //   setUWindow(state.uWindow);
    //   setShgc(state.shgc);
    // }
    // else{
    //   if(state.isetrUWall){
    //     setUWall(state.uWall);
    //   }
    //   if(state.isetrURoof){
    //     setURoof(state.uRoof);
    //   }
    //   if(state.isetrUFloor){
    //     setUFloor(state.uFloor);
    //   }
    //   if(state.isetrUWindow){
    //     setUWindow(state.uWindow);
    //   }
    //   if(state.isetrShgc){
    //     setShgc(state.shgc);
    //   }
    // }
  };

  // year 값에 따라 u_values 가져오기 기능 -- dukhyun
  // 1. 적용 못함
  // 2. step2 들어올때마다 무조건 적용하면 안됨
  // 3. [직접입력] 한 경우리면 그 값 재외하고 나머지 적용
  // const handleYearUValues = (y, u) => {
  //   console.log("handleYearUValues");
  //   const year = location.state.year;
  //   const uvals = location.state.yearUValues;

  //   for (let i = 0; i < uvals.length; i++) {
  //     const uval = u[i];
  //     if (uval.year_stt <= year && year <= uval.year_end) {
  //       setUWall(Number(uval.u_wall.toFixed(3)));
  //       setURoof(Number(uval.u_roof.toFixed(3)));
  //       setUFloor(Number(uval.u_floor.toFixed(3)));
  //       setUWindow(Number(uval.u_window.toFixed(3)));
  //       setShgc(Number(uval.shgc.toFixed(3)));
  //       break;
  //     }
  //   }
  // };

  const OnUWallChange = (e) => {
    setUWallUser(e.target.value);
  };

  const OnURoofChange = (e) => {
    setURoofUser(e.target.value);
  };

  const OnUFloorChange = (e) => {
    setUFloorUser(e.target.value);
  };

  const OnUWindowChange = (e) => {
    setUWindowUser(e.target.value);
  };

  const OnUShgcChange = (e) => {
    setShgcUser(e.target.value);
  };

  const OnCdEqmtChange = (e) => {
    if(e.target.value === "EHP"){
      setCdEqmt("401");
    }
    else{
      setCdEqmt("402");
    }
  };

  // Eqmt 하나로 운영 -- dukhyun
  //const OnCdEqmtCoolChange = (e) => {
  //  setCdEqmtCool(e.target.value);
  //}

  const OnEffcyHeatChange = (e) => {
    setEffcyHeat(e.target.value);
  };

  const OnEffcyCoolChange = (e) => {
    setEffcyCool(e.target.value);
  };

  const OnCdEqmtLightChange = (e) => {
    if(e.target.value === "LED(100%)"){
      setCdEqmtLight("301");
    }
    else if(e.target.value === "LED(75%) 형광등(25%)"){
      setCdEqmtLight("302");
    }
    else if(e.target.value === "LED(50%) 형광등(50%)"){
      setCdEqmtLight("303");
    }
    else if(e.target.value === "LED(25%) 형광등(75%)"){
      setCdEqmtLight("304");
    }
    else{
      setCdEqmtLight("305");
    }
  };

  const OnLevelLightChange = (e) => {
    setLevelLight(e.target.value);
  };

  const OnUWallCheckboxClick = (e) => {
    if (isetrUWall === 0) {
      setIsetrUWall(1);
    } else {
      setIsetrUWall(0);
    }
  };

  const OnURoofCheckboxClick = (e) => {
    if (isetrURoof === 0) {
      setIsetrURoof(1);
    } else {
      setIsetrURoof(0);
    }
  };

  const OnUFloorCheckboxClick = (e) => {
    if (isetrUFloor === 0) {
      setIsetrUFloor(1);
    } else {
      setIsetrUFloor(0);
    }
  };

  const OnUWindowCheckboxClick = (e) => {
    if (isetrUWindow === 0) {
      setIsetrUWindow(1);
    } else {
      setIsetrUWindow(0);
    }
  };

  const OnUShgcCheckboxClick = (e) => {
    if (isetrShgc === 0) {
      setIsetrShgc(1);
    } else {
      setIsetrShgc(0);
    }
  };

  const OnLevelLightCheckboxClick = (e) => {
    if (isetrLight === 0) {
      setIsetrLight(1);
    } else {
      setIsetrLight(0);
    }
  };

  return (
    <main className={stepStyles.step_wrapper}>
      <section className={stepStyles.step_container}>
        <StepHeader />
        <form className={styles.wrapper} onSubmit={submit}>
          <div className={styles.container}>
            {/* !!=== 구조체 성능 정보 ===!! */}
            <div className={styles.left_wrap}>
              <div className={styles.content_wrap}>
                <div className={styles.title_label}>
                  <aside />
                  구조체 성능 정보
                </div>

                {/* ==== 외관 열관류율 ==== */}
                <div className={styles.wrap_box}>
                  <label className={styles.title}>- 외벽 열관류율</label>
                  <div className={styles.input_wrap}>
                    <div className={styles.type_val}>
                      <p>{uWall}</p>
                      <span>W/㎡K</span>
                    </div>

                    <div className={styles.input_wrapper}>
                      <div className={styles.input_box_wrap}>
                        <input
                          type="checkbox"
                          id="check1"
                          checked={isetrUWall === 0 ? false : true}
                          onChange={() => console.log("")}
                        />
                        <label htmlFor="check1" onClick={OnUWallCheckboxClick}>
                          직접입력 :
                        </label>
                        <input
                          type="number"
                          disabled={isetrUWall === 0 ? true : false}
                          value={uWallUser}
                          placeholder="직접입력 하세요."
                          onChange={OnUWallChange}
                        />
                      </div>
                      <span>W/㎡K</span>
                    </div>
                  </div>
                </div>

                {/* ==== 지붕 열관류율 ==== */}
                <div className={styles.wrap_box}>
                  <label className={styles.title}>- 지붕 열관류율</label>
                  <div className={styles.input_wrap}>
                    <div className={styles.type_val}>
                      <p>{uRoof}</p>
                      <span>W/㎡K</span>
                    </div>

                    <div className={styles.input_wrapper}>
                      <div className={styles.input_box_wrap}>
                        <input
                          type="checkbox"
                          id="check2"
                          checked={isetrURoof === 0 ? false : true}
                          onChange={() => console.log("")}
                        />
                        <label htmlFor="check2" onClick={OnURoofCheckboxClick}>
                          직접입력 :
                        </label>
                        <input
                          type="number"
                          disabled={isetrURoof === 0 ? true : false}
                          value={uRoofUser}
                          placeholder="직접입력 하세요."
                          onChange={OnURoofChange}
                        />
                      </div>
                      <span>W/㎡K</span>
                    </div>
                  </div>
                </div>

                {/* ==== 바닥 열관류율 ==== */}
                <div className={styles.wrap_box}>
                  <label className={styles.title}>- 바닥 열관류율</label>
                  <div className={styles.input_wrap}>
                    <div className={styles.type_val}>
                      <p>{uFloor}</p>
                      <span>W/㎡K</span>
                    </div>

                    <div className={styles.input_wrapper}>
                      <div className={styles.input_box_wrap}>
                        <input
                          type="checkbox"
                          id="check3"
                          checked={isetrUFloor === 0 ? false : true}
                          onChange={() => console.log("")}
                        />
                        <label htmlFor="check3" onClick={OnUFloorCheckboxClick}>
                          직접입력 :
                        </label>
                        <input
                          type="number"
                          disabled={isetrUFloor === 0 ? true : false}
                          value={uFloorUser}
                          placeholder="직접입력 하세요."
                          onChange={OnUFloorChange}
                        />
                      </div>
                      <span>W/㎡K</span>
                    </div>
                  </div>
                </div>

                {/* ==== 창호 열관류율 ==== */}
                <div className={styles.wrap_box}>
                  <label className={styles.title}>- 창호 열관류율</label>
                  <div className={styles.input_wrap}>
                    <div className={styles.type_val}>
                      <p>{uWindow}</p>
                      <span>W/㎡K</span>
                    </div>

                    <div className={styles.input_wrapper}>
                      <div className={styles.input_box_wrap}>
                        <input
                          type="checkbox"
                          id="check4"
                          checked={isetrUWindow === 0 ? false : true}
                          onChange={() => console.log("")}
                        />
                        <label
                          htmlFor="check4"
                          onClick={OnUWindowCheckboxClick}
                        >
                          직접입력 :
                        </label>
                        <input
                          type="number"
                          disabled={isetrUWindow === 0 ? true : false}
                          value={uWindowUser}
                          placeholder="직접입력 하세요."
                          onChange={OnUWindowChange}
                        />
                      </div>
                      <span>W/㎡K</span>
                    </div>
                  </div>
                </div>

                {/* ==== 창호 SHGC ==== */}
                <div className={styles.wrap_box}>
                  <label className={styles.title}>- 창호 SHGC</label>
                  <div className={styles.input_wrap}>
                    <div className={styles.type_val}>
                      <p>{shgc}</p>
                    </div>

                    <div className={styles.input_wrapper}>
                      <div className={styles.input_box_wrap}>
                        <input
                          type="checkbox"
                          id="check5"
                          checked={isetrShgc === 0 ? false : true}
                          onChange={() => console.log("")}
                        />
                        <label htmlFor="check5" onClick={OnUShgcCheckboxClick}>
                          직접입력 :
                        </label>
                        <input
                          type="number"
                          disabled={isetrShgc === 0 ? true : false}
                          value={shgcUser}
                          placeholder="직접입력 하세요."
                          onChange={OnUShgcChange}
                        />
                      </div>
                      {/* <span>W/㎡K</span> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.right_wrap}>
              {/* !!=== 기계설비 정보 ===!! */}
              <div className={styles.content_wrap}>
                <div className={styles.title_label}>
                  <aside />
                  기계설비 정보 <span>(선택)</span>
                </div>

                {/* ==== 난방설비 ==== */}
                <div className={styles.wrap_box}>
                  <label className={styles.title}>- 난방설비</label>
                  <div className={styles.input_wrap2}>
                    <div className={styles.tab_box_wrap}>
                      <label className={styles.tab}>
                        <input
                          type="radio"
                          name="tab1"
                          value="EHP"
                          checked={cdEqmt === "401"}
                          onChange={OnCdEqmtChange}
                        />
                        <span>EHP</span>
                      </label>

                      <label className={styles.tab}>
                        <input
                          type="radio"
                          name="tab1"
                          value="중앙식"
                          checked={cdEqmt === "402"}
                          onChange={OnCdEqmtChange}
                        />
                        <span>중앙식</span>
                      </label>
                    </div>

                    <div className={styles.input_wrap_box2}>
                      <span>효율(COP) :</span>
                      <input
                        type="number"
                        value={effcyHeat}
                        placeholder="직접입력 하세요."
                        onChange={OnEffcyHeatChange}
                      />
                    </div>
                  </div>
                </div>

                {/* ==== 냉방설비 ==== */}
                <div className={styles.wrap_box}>
                  <label className={styles.title}>- 냉방설비</label>
                  <div className={styles.input_wrap2}>
                    <div className={styles.tab_box_wrap}>
                      <label className={styles.tab}>
                        <input
                          type="radio"
                          name="tab2"
                          value="EHP"
                          checked={cdEqmt === "401"}
                          onChange={OnCdEqmtChange}
                        />
                        <span>EHP</span>
                      </label>

                      <label className={styles.tab}>
                        <input
                          type="radio"
                          name="tab2"
                          value="중앙식"
                          checked={cdEqmt === "402"}
                          onChange={OnCdEqmtChange}
                        />
                        <span>중앙식</span>
                      </label>
                    </div>

                    <div className={styles.input_wrap_box2}>
                      <span>효율(COP) :</span>
                      <input
                        type="number"
                        value={effcyHeat}
                        placeholder="직접입력 하세요."
                        onChange={OnEffcyCoolChange}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* !!=== 조명설비 정보 ===!! */}
              <div className={styles.content_wrap}>
                <div className={styles.title_label}>
                  <aside />
                  조명설비 정보 <span>(선택)</span>
                </div>

                <div className={styles.tab_wrap}>
                  <label className={styles.tab}>
                    <input
                      type="radio"
                      name="tab"
                      value="형광등(100%)"
                      checked={cdEqmtLight === "305"}
                      onChange={OnCdEqmtLightChange}
                    />
                    <span>형광등 100%</span>
                  </label>

                  <label className={styles.tab}>
                    <input
                      type="radio"
                      name="tab"
                      value="LED(25%) 형광등(75%)"
                      checked={cdEqmtLight === "304"}
                      onChange={OnCdEqmtLightChange}
                    />
                    <span>
                      형광등 75%
                      <br /> LED 25%
                    </span>
                  </label>

                  <label className={styles.tab}>
                    <input
                      type="radio"
                      name="tab"
                      value="LED(50%) 형광등(50%)"
                      checked={cdEqmtLight === "303"}
                      onChange={OnCdEqmtLightChange}
                    />
                    <span>
                      형광등 50%
                      <br /> LED 50%
                    </span>
                  </label>

                  <label className={styles.tab}>
                    <input
                      type="radio"
                      name="tab"
                      value="LED(75%) 형광등(25%)"
                      checked={cdEqmtLight === "302"}
                      onChange={OnCdEqmtLightChange}
                    />
                    <span>
                      형광등 25%
                      <br /> LED 75%
                    </span>
                  </label>

                  <label className={styles.tab}>
                    <input
                      type="radio"
                      name="tab"
                      value="LED(100%)"
                      checked={cdEqmtLight === "301"}
                      onChange={OnCdEqmtLightChange}
                    />
                    <span>LED 100%</span>
                  </label>
                </div>

                <div className={styles.input_wrapper}>
                  <div className={styles.input_box_wrap}>
                    <input
                      type="checkbox"
                      id="tab"
                      checked={isetrLight === 0 ? false : true}
                      onChange={() => console.log("")}
                    />
                    <label htmlFor="tab" onClick={OnLevelLightCheckboxClick}>
                      직접입력 :
                    </label>
                    <input
                      type="number"
                      disabled={isetrLight === 0 ? true : false}
                      value={levelLight}
                      placeholder="직접입력 하세요."
                      onChange={OnLevelLightChange}
                    />
                  </div>
                  <span>W/㎡K</span>
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
                navigate("/step1", {
                  state: {
                    stepNum: stepNum,
                    stateHistory: location.state.stateHistory,
                    codes: codes,
                    defaults: defaults,
                    yearUValues: yearUValues,
                    uWall: uWall,
                    uRoof: uRoof,
                    uFloor: uFloor,
                    uWindow: uWindow,
                    shgc: shgc,
                    uWallUser: uWallUser,
                    uRoofUser: uRoofUser,
                    uFloorUser: uFloorUser,
                    uWindowUser: uWindowUser,
                    shgcUser: shgcUser,
                    isetrUWall: isetrUWall,
                    isetrURoof: isetrURoof,
                    isetrUFloor: isetrUFloor,
                    isetrUWindow: isetrUWindow,
                    isetrShgc: isetrShgc,
                    cdEqmt: cdEqmt,
                    //  Eqmtn 하나로 운영 -- dukhyun
                    //cdEqmtCool: cdEqmtCool,
                    effcyHeat: effcyHeat,
                    effcyCool: effcyCool,
                    cdEqmtLight: cdEqmtLight,
                    isetrLight: isetrLight,
                    levelLight: levelLight,
                  },
                })
              }
            >
              이전으로
            </button>
            <button
              className={styles.submit}
              onClick={() =>
                navigate("/step3", {
                  state: {
                    stepNum: stepNum,
                    stateHistory: location.state.stateHistory,
                    codes: codes,
                    defaults: defaults,
                    uWall: uWall,
                    uRoof: uRoof,
                    uFloor: uFloor,
                    uWindow: uWindow,
                    shgc: shgc,
                    uWallUser: uWallUser,
                    uRoofUser: uRoofUser,
                    uFloorUser: uFloorUser,
                    uWindowUser: uWindowUser,
                    shgcUser: shgcUser,
                    isetrUWall: isetrUWall,
                    isetrURoof: isetrURoof,
                    isetrUFloor: isetrUFloor,
                    isetrUWindow: isetrUWindow,
                    isetrShgc: isetrShgc,
                    cdEqmt: cdEqmt,
                    //  Eqmtn 하나로 운영 -- dukhyun
                    //cdEqmtCool: cdEqmtCool,
                    effcyHeat: effcyHeat,
                    effcyCool: effcyCool,
                    cdEqmtLight: cdEqmtLight,
                    isetrLight: isetrLight,
                    levelLight: levelLight,
                  },
                })
              }
            >
              다음으로
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}

export default Step2;