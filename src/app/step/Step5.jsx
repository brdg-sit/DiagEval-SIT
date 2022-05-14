import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './css/step5.module.css'
import stepStyles from './css/step-wrap.module.css'
import StepHeader from '../common/StepHeader'
import StepV1 from './step5-value/StepV1'
import StepV2 from './step5-value/StepV2'
import StepV3 from './step5-value/StepV3'

function Step5() {
  const [step, setStep] = useState(0)
  const navigate = useNavigate()

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
            onClick={() => navigate(-1)}
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
            {step === 0 && <StepV1 />}
            {step === 1 && <StepV2 />}
            {step === 2 && <StepV3 />}
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

export default Step5
