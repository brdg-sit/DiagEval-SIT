import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './css/step3.module.css'
import stepStyles from './css/step-wrap.module.css'
import StepHeader from '../common/StepHeader'

function Step3() {
  const navigate = useNavigate()
  const [weekdaySelect, setWeekdaySelect] = useState()
  const [weekendSelect, setWeekendSelect] = useState()
  const [allday, setAllday] = useState()

  const submit = e => {
    e.preventDefault()
  }

  const resetWeekSelect = () => {
    setWeekdaySelect(null)
    setWeekendSelect(null)
  }

  const resetAllDay24H = () => {
    setAllday(null)
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
                          value="weekday8H"
                          checked={weekdaySelect === 'weekday8H'}
                          onChange={e => {
                            setWeekdaySelect(e.target.value)
                            resetAllDay24H()
                          }}
                        />
                        <span>8H 근무</span>
                      </label>

                      <label className={styles.tab}>
                        <input
                          type="radio"
                          name="tab1"
                          value="weekday10H"
                          checked={weekdaySelect === 'weekday10H'}
                          onChange={e => {
                            setWeekdaySelect(e.target.value)
                            resetAllDay24H()
                          }}
                        />
                        <span>10H 근무</span>
                      </label>

                      <label className={styles.tab}>
                        <input
                          type="radio"
                          name="tab1"
                          value="weekday12H"
                          checked={weekdaySelect === 'weekday12H'}
                          onChange={e => {
                            setWeekdaySelect(e.target.value)
                            resetAllDay24H()
                          }}
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
                          value="weekendOff"
                          checked={weekendSelect === 'weekendOff'}
                          onChange={e => {
                            setWeekendSelect(e.target.value)
                            resetAllDay24H()
                          }}
                        />
                        <span>휴무</span>
                      </label>

                      <label className={styles.tab}>
                        <input
                          type="radio"
                          name="tab2"
                          value="weekend4H"
                          checked={weekendSelect === 'weekend4H'}
                          onChange={e => {
                            setWeekendSelect(e.target.value)
                            resetAllDay24H()
                          }}
                        />
                        <span>4H 근무</span>
                      </label>

                      <label className={styles.tab}>
                        <input
                          type="radio"
                          name="tab2"
                          value="weekend8H"
                          checked={weekendSelect === 'weekend8H'}
                          onChange={e => {
                            setWeekendSelect(e.target.value)
                            resetAllDay24H()
                          }}
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
                          value="allDay24H"
                          checked={allday === 'allDay24H'}
                          onChange={e => {}}
                          onClick={e => {
                            resetWeekSelect()

                            if (allday === 'allDay24H') {
                              setAllday(null)
                            } else {
                              setAllday('allDay24H')
                            }
                          }}
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
                    <input type="number" placeholder="직접입력" />
                    <span>명</span>
                  </div>
                </div>

                <div className={styles.wrap_box}>
                  <label className={styles.title}>비상주인원 (방문자)</label>
                  <div className={styles.input_box_wrap}>
                    <input type="number" placeholder="직접입력" />
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
                  <label className={styles.title}>냉방설정온도(18℃~ 22℃)</label>
                  <div className={styles.input_box_wrap}>
                    <input type="number" placeholder="직접입력" />
                    <span>℃</span>
                  </div>
                </div>

                <div className={styles.wrap_box}>
                  <label className={styles.title}>난방설정온도(24℃~ 28℃)</label>
                  <div className={styles.input_box_wrap}>
                    <input type="number" placeholder="직접입력" />
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
              onClick={() => navigate('/step4')}
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
