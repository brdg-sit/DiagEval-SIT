import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Chart1 from './Charts/step4/Chart1'
import Chart2 from './Charts/step4/Chart2'
import styles from './css/step4.module.css'
import stepStyles from './css/step-wrap.module.css'
import StepHeader from '../common/StepHeader'

function Step4() {
  const navigate = useNavigate()
  const submit = e => {
    e.preventDefault()
  }

  //   가스사용량 단위 탭
  const [typeVal, setTypeVal] = useState('mj')
  const valData = {
    val1: [
      { name: '01월', value: '' },
      { name: '02월', value: '' },
      { name: '03월', value: '' },
      { name: '04월', value: '' },
      { name: '05월', value: '' },
      { name: '06월', value: '' },
      { name: '07월', value: '' },
      { name: '08월', value: '' },
      { name: '09월', value: '' },
      { name: '10월', value: '' },
      { name: '11월', value: '' },
      { name: '12월', value: '' },
    ],
    val2: [
      { name: '01월', value: '' },
      { name: '02월', value: '' },
      { name: '03월', value: '' },
      { name: '04월', value: '' },
      { name: '05월', value: '' },
      { name: '06월', value: '' },
      { name: '07월', value: '' },
      { name: '08월', value: '' },
      { name: '09월', value: '' },
      { name: '10월', value: '' },
      { name: '11월', value: '' },
      { name: '12월', value: '' },
    ],
  }

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
                  {valData.val1.map((item, i) => {
                    return (
                      <li key={i}>
                        <p>{item.name}</p>

                        <div className={styles.valBox}>
                          <input type="number" placeholder="직접입력" />
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
                  {valData.val2.map((item, i) => {
                    return (
                      <li key={i}>
                        <p>{item.name}</p>

                        <div className={styles.valBox}>
                          <input type="number" placeholder="직접입력" />
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
                  <Chart1 />
                </div>
              </div>

              {/* !!===전기 사용량===!! */}
              <div className={styles.content_wrap}>
                <div className={styles.title_label}>
                  <aside />
                  냉난방 설정온도
                </div>

                <div className={styles.val_wrap}>
                  <Chart2 />
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
              onClick={() => navigate('/step5')}
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
