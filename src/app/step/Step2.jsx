import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import StepHeader from '../common/StepHeader'
import styles from './css/step2.module.css'
import stepStyles from './css/step-wrap.module.css'

function Step2() {

  const location = useLocation();
  var step1States = location.state;

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
                      <p>1,047</p>
                      <span>W/㎡K</span>
                    </div>

                    <div className={styles.input_wrapper}>
                      <div className={styles.input_box_wrap}>
                        <input type="checkbox" id="check1" />
                        <label for="check1">직접입력 :</label>
                        <input type="number" placeholder="직접입력 하세요." />
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
                      <p>1,047</p>
                      <span>W/㎡K</span>
                    </div>

                    <div className={styles.input_wrapper}>
                      <div className={styles.input_box_wrap}>
                        <input type="checkbox" id="check2" />
                        <label for="check2">직접입력 :</label>
                        <input type="number" placeholder="직접입력 하세요." />
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
                      <p>1,047</p>
                      <span>W/㎡K</span>
                    </div>

                    <div className={styles.input_wrapper}>
                      <div className={styles.input_box_wrap}>
                        <input type="checkbox" id="check3" />
                        <label for="check3">직접입력 :</label>
                        <input type="number" placeholder="직접입력 하세요." />
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
                      <p>1,047</p>
                      <span>W/㎡K</span>
                    </div>

                    <div className={styles.input_wrapper}>
                      <div className={styles.input_box_wrap}>
                        <input type="checkbox" id="check4" />
                        <label for="check4">직접입력 :</label>
                        <input type="number" placeholder="직접입력 하세요." />
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
                      <p>0.719</p>
                    </div>

                    <div className={styles.input_wrapper}>
                      <div className={styles.input_box_wrap}>
                        <input type="checkbox" id="check5" />
                        <label for="check5">직접입력 :</label>
                        <input type="number" placeholder="직접입력 하세요." />
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
                        <input type="radio" name="tab1" />
                        <span>EHP</span>
                      </label>

                      <label className={styles.tab}>
                        <input type="radio" name="tab1" />
                        <span>중앙식</span>
                      </label>
                    </div>

                    <div className={styles.input_wrap_box2}>
                      <span>효율(COP) :</span>
                      <input type="number" placeholder="직접입력 하세요." />
                    </div>
                  </div>
                </div>

                {/* ==== 냉방설비 ==== */}
                <div className={styles.wrap_box}>
                  <label className={styles.title}>- 냉방설비</label>
                  <div className={styles.input_wrap2}>
                    <div className={styles.tab_box_wrap}>
                      <label className={styles.tab}>
                        <input type="radio" name="tab2" />
                        <span>EHP</span>
                      </label>

                      <label className={styles.tab}>
                        <input type="radio" name="tab2" />
                        <span>중앙식</span>
                      </label>
                    </div>

                    <div className={styles.input_wrap_box2}>
                      <span>효율(COP) :</span>
                      <input type="number" placeholder="직접입력 하세요." />
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
                    <input type="radio" name="tab" />
                    <span>형광등 100%</span>
                  </label>

                  <label className={styles.tab}>
                    <input type="radio" name="tab" />
                    <span>
                      형광등 75%
                      <br /> LED 25%
                    </span>
                  </label>

                  <label className={styles.tab}>
                    <input type="radio" name="tab" />
                    <span>
                      형광등 50%
                      <br /> LED 50%
                    </span>
                  </label>

                  <label className={styles.tab}>
                    <input type="radio" name="tab" />
                    <span>
                      형광등 25%
                      <br /> LED 75%
                    </span>
                  </label>

                  <label className={styles.tab}>
                    <input type="radio" name="tab" />
                    <span>LED 100%</span>
                  </label>
                </div>

                <div className={styles.input_wrapper}>
                  <div className={styles.input_box_wrap}>
                    <input type="checkbox" id="tab" />
                    <label for="tab">직접입력 :</label>
                    <input type="number" placeholder="직접입력 하세요." />
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
              onClick={() => navigate('/step3')}
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
