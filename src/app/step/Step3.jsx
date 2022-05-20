import React, { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import styles from './css/step3.module.css'
import stepStyles from './css/step-wrap.module.css'
import StepHeader from '../common/StepHeader'

function Step3() {
  const navigate = useNavigate()
  const location = useLocation();

  const [step1States, setStep1States] = useState(location.state.step1States);
  const [step2States, setStep2States] = useState(location.state);
  const [codes, setCodes] = useState(location.state.codes);
  const [defaults, setDefaults] = useState(location.state.defaults);
  const [hurWday, setHurWday] = useState(''+location.state.defaults.hur_wday);
  const [hurWend, setHurWend] = useState(''+location.state.defaults.hur_wend);
  const [allDay, setAllDay] = useState("0");
  const [menRsdt, setMenRsdt] = useState(location.state.defaults.men_rsdt);
  const [menNorsdt, setMenNorsdt] = useState(location.state.defaults.men_norsdt);
  const [tempCool, setTempCool] = useState(location.state.defaults.temp_cool);
  const [tempHeat, setTempHeat] = useState(location.state.defaults.temp_heat);

  const submit = e => {
    e.preventDefault()
  }

  const OnHurWdayChange = (e) => {
    if(allDay === "1"){
      setAllDay("0");
      setHurWend(''+location.state.defaults.hur_wend)
    }
    setHurWday(e.target.value);
  }

  const OnHurWendChange = (e) => {
    if(allDay === "1"){
      setAllDay("0");
      setHurWday(''+location.state.defaults.hur_wday)
    }
    setHurWend(e.target.value);
  }

  const OnMenRsdtChange = (e) => {
    setMenRsdt(e.target.value);
  }

  const OnMenNorsdtChange = (e) => {
    setMenNorsdt(e.target.value);
  }

  const OnTempCoolChange = (e) => {
    setTempCool(e.target.value);
  }

  const OnTempHeatChange = (e) => {
    setTempHeat(e.target.value);
  }

  const OnSetAlldayClick = (e) => {
    if(e.target.value === "0"){
      setAllDay("1");
      setHurWday("");
      setHurWend("");
    }
    else{
      setAllDay("0");
      setHurWday(''+location.state.defaults.hur_wday);
      setHurWend(''+location.state.defaults.hur_wend);
    }
  }

  return (
    <main className={stepStyles.step_wrapper}>
      <section className={stepStyles.step_container}>
        <StepHeader />
        <form className={styles.wrapper} onSubmit={submit}>
          <div className={styles.container}>
            <div className={styles.left_wrap}>
              {/* !!===재실 스케줄 (근무자) ===!! */}
              <div className={styles.content_wrap}>
                <div className={styles.title_label}>
                  <aside />
                  재실 스케줄 (근무자)
                </div>

                <div className={styles.wrap_box}>
                  <label className={styles.title}>
                    - 주중 스케줄 (월요일~금요일)
                  </label>
                  <div className={styles.input_wrap}>
                    <div className={styles.tab_box_wrap}>
                      <label className={styles.tab}>
                        <input
                          type="radio"
                          name="tab1"
                          value="8"
                          checked={hurWday === "8"}
                          onChange={OnHurWdayChange}
                        />
                        <span>8H 근무</span>
                      </label>

                      <label className={styles.tab}>
                        <input
                          type="radio"
                          name="tab1"
                          value="10"
                          checked={hurWday === "10"}
                          onChange={OnHurWdayChange}
                        />
                        <span>10H 근무</span>
                      </label>

                      <label className={styles.tab}>
                        <input
                          type="radio"
                          name="tab1"
                          value="12"
                          checked={hurWday === "12"}
                          onChange={OnHurWdayChange}
                        />
                        <span>12H 근무</span>
                      </label>
                    </div>
                  </div>
                </div>

                <div className={styles.wrap_box}>
                  <label className={styles.title}>- 주말 스케줄 (토요일)</label>
                  <div className={styles.input_wrap}>
                    <div className={styles.tab_box_wrap}>
                      <label className={styles.tab}>
                        <input
                          type="radio"
                          name="tab2"
                          value="0"
                          checked={hurWend === "0"}
                          onChange={OnHurWendChange}
                        />
                        <span>휴무</span>
                      </label>

                      <label className={styles.tab}>
                        <input
                          type="radio"
                          name="tab2"
                          value="4"
                          checked={hurWend === "4"}
                          onChange={OnHurWendChange}
                        />
                        <span>4H 근무</span>
                      </label>

                      <label className={styles.tab}>
                        <input
                          type="radio"
                          name="tab2"
                          value="8"
                          checked={hurWend === "8"}
                          onChange={OnHurWendChange}
                        />
                        <span>8H 근무</span>
                      </label>
                    </div>
                  </div>
                </div>

                <div className={styles.wrap_box}>
                  <label className={styles.title}>
                    - 전일 스케줄 <span>(선택 시 주중/주말 선택 불필요)</span>
                  </label>
                  <div className={styles.input_wrap}>
                    <div className={styles.tab_box_wrap}>
                      <label className={`${styles.tab} ${styles.tab2}`}>
                        <input
                          type="radio"
                          name="tab3"
                          value={allDay}
                          checked={allDay === "1"}
                          onClick={OnSetAlldayClick}
                          onChange={() => console.log('')}
                        />
                        <span>주중~주말 24H 근무</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.right_wrap}>
              {/* !!=== 재실 인원 ===!! */}
              <div className={styles.content_wrap}>
                <div className={styles.title_label}>
                  <aside />
                  재실 인원
                </div>

                <div className={styles.wrap_box}>
                  <label className={styles.title}>상주인원 (근무자)</label>
                  <div className={styles.input_box_wrap}>
                    <input type="number" 
                      placeholder="직접입력"
                      value={menRsdt}
                      onChange={OnMenRsdtChange}
                    />
                    <span>명</span>
                  </div>
                </div>

                <div className={styles.wrap_box}>
                  <label className={styles.title}>비상주인원 (방문자)</label>
                  <div className={styles.input_box_wrap}>
                    <input type="number" 
                      placeholder="직접입력"
                      value={menNorsdt}
                      onChange={OnMenNorsdtChange}
                    />
                    <span>명</span>
                  </div>
                </div>
              </div>

              {/* !!=== 냉난방 설정온도 ===!! */}
              <div className={styles.content_wrap}>
                <div className={styles.title_label}>
                  <aside />
                  냉난방 설정온도
                </div>

                <div className={styles.wrap_box}>
                  <label className={styles.title}>냉방설정온도(24℃~ 28℃)</label>
                  <div className={styles.input_box_wrap}>
                    <input type="number" 
                      placeholder="직접입력"
                      value={tempCool}
                      onChange={OnTempCoolChange}
                    />
                    <span>℃</span>
                  </div>
                </div>

                <div className={styles.wrap_box}>
                  <label className={styles.title}>난방설정온도(18℃~ 22℃)</label>
                  <div className={styles.input_box_wrap}>
                    <input type="number" 
                      placeholder="직접입력"
                      value={tempHeat}
                      onChange={OnTempHeatChange}
                    />
                    <span>℃</span>
                  </div>
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
                navigate('/step4', {
                state: {
                  step1States: step1States,
                  step2States: step2States,
                  codes: codes,
                  defaults: defaults,
                  hurWday: hurWday,
                  hurWend: hurWend,
                  allDay: allDay,
                  menRsdt: menRsdt,
                  menNorsdt: menNorsdt,
                  tempCool: tempCool,
                  tempHeat: tempHeat
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

export default Step3
