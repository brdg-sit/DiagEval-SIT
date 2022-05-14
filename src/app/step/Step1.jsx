import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './css/step1.module.css'
import stepStyles from './css/step-wrap.module.css'
import StepHeader from '../common/StepHeader'

function Step1() {
  const navigate = useNavigate()

  const submit = e => {
    e.preventDefault()
  }
  return (
    <main className={stepStyles.step_wrapper}>
      <section className={stepStyles.step_container}>
        <StepHeader />
        <form className={styles.wrapper} onSubmit={submit}>
          <div className={styles.container}>
            <div className={styles.left_wrap}>
              {/* ==== 건축물 주소 ==== */}
              <div className={styles.content_wrap}>
                <div className={styles.title_label}>
                  <aside />
                  건축물 주소
                </div>
                <div className={styles.input_wrap}>
                  <input type="text" placeholder="주소를 검색하세요." />
                  <button type="button">주소검색</button>
                </div>
              </div>

              {/* ==== 건축물 범위 ==== */}
              <div className={styles.content_wrap}>
                <div className={styles.title_label}>
                  <aside />
                  건축물 범위 <span>(선택)</span>
                </div>

                <div className={styles.tab_wrap}>
                  <label className={styles.tab}>
                    <input type="radio" name="tab" />
                    <span>남</span>
                  </label>

                  <label className={styles.tab}>
                    <input type="radio" name="tab" />
                    <span>남남서 (남남동)</span>
                  </label>

                  <label className={styles.tab}>
                    <input type="radio" name="tab" />
                    <span>남서(남동)</span>
                  </label>

                  <label className={styles.tab}>
                    <input type="radio" name="tab" />
                    <span>서남서(동남동)</span>
                  </label>

                  <label className={styles.tab}>
                    <input type="radio" name="tab" />
                    <span>서(동)</span>
                  </label>
                </div>
              </div>

              {/* ==== 건축물 용도 ==== */}
              <div className={styles.content_wrap}>
                <div className={styles.title_label}>
                  <aside />
                  건축물 용도
                </div>

                <div className={styles.input_wrap2}>
                  <select>
                    <option>업무시설</option>
                  </select>
                  <input type="text" placeholder="세부용도를 작성하세요." />
                </div>
              </div>

              {/* ==== 건축물 준공연도 ==== */}
              <div className={styles.content_wrap}>
                <div className={styles.title_label}>
                  <aside />
                  건축물 준공연도
                </div>

                <div className={styles.input_wrap2}>
                  <input type="text" placeholder="준공연도를 작성하세요." />
                </div>
              </div>
            </div>

            <div className={styles.right_wrap}>
              {/* ==== 건축물 연면적 ==== */}
              <div className={styles.content_wrap}>
                <div className={styles.title_label}>
                  <aside />
                  건축물 연면적
                </div>

                <div className={styles.input_box_wrap}>
                  직접입력 :&nbsp;&nbsp;
                  <input type="number" placeholder="연면적을 직접입력" />
                </div>
              </div>

              {/* ==== 건축물 연면적 ==== */}
              <div className={styles.content_wrap}>
                <div className={styles.title_label}>
                  <aside />
                  건축물 창면적비
                </div>

                <div className={styles.input_wrap3}>
                  <select>
                    <option>20%</option>
                    <option>60%</option>
                    <option>80%</option>
                  </select>
                  <div className={styles.input_box_wrap}>
                    <input type="checkbox" id="check1" />
                    <label for="check1">직접입력 :</label> &nbsp;&nbsp;
                    <input type="number" placeholder="창면적비 직접입력" />
                  </div>
                </div>
              </div>

              {/* ==== 건축물 연면적 ==== */}
              <div className={styles.content_wrap}>
                <div className={styles.title_label}>
                  <aside />
                  건축물 장단변비
                </div>

                <div className={styles.input_wrap3}>
                  <select>
                    <option>1:1</option>
                    <option>1:2</option>
                    <option>1:3</option>
                  </select>
                  <div className={styles.input_box_wrap}>
                    <input type="checkbox" id="check2" />
                    <label for="check2">직접입력 :&nbsp;&nbsp;</label>
                    <span>1:</span>
                    <input
                      type="number"
                      placeholder="장면적비 뒷자리 직접입력"
                    />
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
              onClick={() => navigate('/step2')}
            >
              다음으로
            </button>
          </div>
        </form>
      </section>
    </main>
  )
}

export default Step1
