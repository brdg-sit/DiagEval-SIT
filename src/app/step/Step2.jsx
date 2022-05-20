import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from 'react-router-dom'
import StepHeader from '../common/StepHeader'
import styles from './css/step2.module.css'
import stepStyles from './css/step-wrap.module.css'

function Step2() {

  const navigate = useNavigate()
  const location = useLocation();

  const [step1States, setStep1States] = useState(location.state);
  const [codes, setCodes] = useState(location.state.codes);
  const [defaults, setDefaults] = useState(location.state.defaults);
  const [uWall, setUWall] = useState(location.state.defaults.u_wall);
  const [uRoof, setURoof] = useState(location.state.defaults.u_roof);
  const [uFloor, setUFloor] = useState(location.state.defaults.u_floor);
  const [uWindow, setUWindow] = useState(location.state.defaults.u_window);
  const [shgc, setShgc] = useState(location.state.defaults.shgc);
  const [isetrUWall, setIsetrUWall] = useState(location.state.defaults.isetr_u_wall);
  const [isetrURoof, setIsetrURoof] = useState(location.state.defaults.isetr_u_roof);
  const [isetrUFloor, setIsetrUFloor] = useState(location.state.defaults.isetr_u_floor);
  const [isetrUWindow, setIsetrUWindow] = useState(location.state.defaults.isetr_u_window); 
  const [isetrShgc, setIsetrShgc] = useState(location.state.defaults.isetr_shgc);
  const [cdEqmt, setCdEqmt] = useState(codes[location.state.defaults.cd_eqmt].name);
  // Eqmt 하나로 운영 -- dukhyun
  //const [cdEqmtCool, setCdEqmtCool] = useState(codes[location.state.defaults.cd_eqmt_cool].name);
  const [effcyHeat, setEffcyHeat] = useState(location.state.defaults.effcy_heat);
  const [effcyCool, setEffcyCool] = useState(location.state.defaults.effcy_cool);
  const [cdEqmtLight, setCdEqmtLight] = useState(codes[location.state.defaults.cd_eqmt_light].name);
  const [isetrLight, setIsetrLight] = useState(location.state.defaults.isetr_light);
  const [levelLight, setLevelLight] = useState(location.state.defaults.level_light);

  useEffect(() => {
    console.log(defaults);
  });
  
  const submit = e => {
    e.preventDefault()
  }

  const OnUWallChange = (e) => {
    setUWall(e.target.value);
  }

  const OnURoofChange = (e) => {
    setURoof(e.target.value);
  }

  const OnUFloorChange = (e) => {
    setUFloor(e.target.value);
  }

  const OnUWindowChange = (e) => {
    setUWindow(e.target.value);
  }

  const OnUShgcChange = (e) => {
    setShgc(e.target.value);
  }

  const OnCdEqmtChange = (e) => {
    setCdEqmt(e.target.value);
  }

  // Eqmt 하나로 운영 -- dukhyun
  //const OnCdEqmtCoolChange = (e) => {
  //  setCdEqmtCool(e.target.value);
  //}

  const OnEffcyHeatChange = (e) => {
    setEffcyHeat(e.target.value);
  }

  const OnEffcyCoolChange = (e) => {
    setEffcyCool(e.target.value);
  }

  const OnCdEqmtLightChange = (e) => {
    setCdEqmtLight(e.target.value);
  };

  const OnLevelLightChange = (e) => {
    setLevelLight(e.target.value);
  }

  const OnUWallCheckboxClick = (e) => {
    if (isetrUWall === 0) {
      setIsetrUWall(1);
    } else {
      setIsetrUWall(0);
    }
  }

  const OnURoofCheckboxClick = (e) => {
    if (isetrURoof === 0) {
      setIsetrURoof(1);
    } else {
      setIsetrURoof(0);
    }
  }

  const OnUFloorCheckboxClick = (e) => {
    if (isetrUFloor === 0) {
      setIsetrUFloor(1);
    } else {
      setIsetrUFloor(0);
    }
  }

  const OnUWindowCheckboxClick = (e) => {
    if (isetrUWindow === 0) {
      setIsetrUWindow(1);
    } else {
      setIsetrUWindow(0);
    }
  }

  const OnUShgcCheckboxClick = (e) => {
    if (isetrShgc === 0) {
      setIsetrShgc(1);
    } else {
      setIsetrShgc(0);
    }
  }

  const OnLevelLightCheckboxClick = (e) => {
    if (isetrLight === 0) {
      setIsetrLight(1);
    } else {
      setIsetrLight(0);
    }
  }

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
                  <label className={styles.title}>- 외벽 열관류울</label>
                  <div className={styles.input_wrap}>
                    <div className={styles.type_val}>
                      <p>{uWall}</p>
                      <span>W/㎡K</span>
                    </div>

                    <div className={styles.input_wrapper}>
                      <div className={styles.input_box_wrap}>
                        <input type="checkbox" id="check1" />
                        <label htmlFor="check1" onClick={OnUWallCheckboxClick}>직접입력 :</label>
                        <input
                          type="number"
                          disabled={isetrUWall === 0 ? true : false}
                          value={uWall}
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
                  <label className={styles.title}>- 지붕 열관류울</label>
                  <div className={styles.input_wrap}>
                    <div className={styles.type_val}>
                      <p>{uRoof}</p>
                      <span>W/㎡K</span>
                    </div>

                    <div className={styles.input_wrapper}>
                      <div className={styles.input_box_wrap}>
                        <input type="checkbox" id="check2" />
                        <label htmlFor="check2" onClick={OnURoofCheckboxClick}>직접입력 :</label>
                        <input
                          type="number"
                          disabled={isetrURoof === 0 ? true : false}
                          value={uRoof}
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
                        <input type="checkbox" id="check3" />
                        <label htmlFor="check3" onClick={OnUFloorCheckboxClick}>직접입력 :</label>
                        <input
                          type="number"
                          disabled={isetrUFloor === 0 ? true : false}
                          value={uFloor}
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
                        <input type="checkbox" id="check4" />
                        <label htmlFor="check4" onClick={OnUWindowCheckboxClick}>직접입력 :</label>
                        <input
                          type="number"
                          disabled={isetrUWindow === 0 ? true : false}
                          value={uWindow}
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
                        <input type="checkbox" id="check5" />
                        <label htmlFor="check5" onClick={OnUShgcCheckboxClick}>직접입력 :</label>
                        <input
                          type="number"
                          disabled={isetrShgc === 0 ? true : false}
                          value={shgc}
                          placeholder="직접입력 하세요."
                          onChange={OnUShgcChange}
                        />
                      </div>
                      <span>W/㎡K</span>
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
                          checked={cdEqmt === "EHP"}
                          onChange={OnCdEqmtChange}
                        />
                        <span>EHP</span>
                      </label>

                      <label className={styles.tab}>
                        <input
                          type="radio"
                          name="tab1"
                          value="중앙식"
                          checked={cdEqmt === "중앙식"}
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
                          checked={cdEqmt === "EHP"}
                          onChange={OnCdEqmtChange}
                        />
                        <span>EHP</span>
                      </label>

                      <label className={styles.tab}>
                        <input
                          type="radio"
                          name="tab2"
                          value="중앙식"
                          checked={cdEqmt === "중앙식"}
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
                      checked={cdEqmtLight === "형광등(100%)"}
                      onChange={OnCdEqmtLightChange}
                    />
                    <span>
                      형광등 100%
                    </span>
                  </label>

                  <label className={styles.tab}>
                    <input
                      type="radio"
                      name="tab"
                      value="LED(25%) 형광등(75%)"
                      checked={cdEqmtLight === "LED(25%) 형광등(75%)"}
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
                      checked={cdEqmtLight === "LED(50%) 형광등(50%)"}
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
                      checked={cdEqmtLight === "LED(75%) 형광등(25%)"}
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
                      checked={cdEqmtLight === "LED(100%)"}
                      onChange={OnCdEqmtLightChange}
                    />
                    <span>LED 100%</span>
                  </label>
                </div>

                <div className={styles.input_wrapper}>
                  <div className={styles.input_box_wrap}>
                    <input type="checkbox" id="tab" />
                    <label htmlFor="tab" onClick={OnLevelLightCheckboxClick}>직접입력 :</label>
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
              onClick={() => navigate(-1)}
            >
              이전으로
            </button>
            <button
              className={styles.submit}
              onClick={() => 
                navigate('/step3', {
                state: {
                  step1States: step1States,
                  codes: codes,
                  defaults: defaults,
                  uWall: uWall,
                  uRoof: uRoof,
                  uFloor: uFloor,
                  uWindow: uWindow,
                  shgc: shgc,
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
                  levelLight: levelLight
                }
              })
            }
            >
              다음으로
            </button>
          </div>
        </form>
      </section>
    </main>
  )
}

export default Step2
