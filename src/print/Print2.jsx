import React, { useRef } from 'react'
import styles from './css/print2.module.css'
// 리액트 프린트 라이브러리 사용
import ReactToPrint from 'react-to-print'
import titleIcon from '../@assets/print/title-icon.svg'
import logo from '../@assets/print/logo.svg'
import printIcon from '../@assets/print/print-icon.svg'
import cpIcon1 from '../@assets/print/print-cp2-icon1.svg'
import cpIcon2 from '../@assets/print/print-cp2-icon2.svg'
import Cp1 from './component/print2/line-one/Cp1'
import Cp2 from './component/print2/line-one/Cp2'
import Cp3 from './component/print2/line-one/Cp3'
import Cp4 from './component/print2/line-one/Cp4'
import Cp5 from './component/print2/line-one/Cp5'
import Cp6 from './component/print2/line-one/Cp6'

function Print2() {
  const printRef = useRef(null)
  return (
    <section className={styles.wrapper} id="print1" ref={printRef}>
      <div className={styles.container}>
        {/* ==== 전체 타이틀 ==== */}
        <div className={styles.title_wrap}>
          <img src={titleIcon} alt="" />
          <h1>
            <span>서울시 사용행태 정보 기반</span>
            <br />
            공공건축물 진단 보고서
          </h1>
        </div>
        {/* ==== 섹션1 박스 ==== */}
        <div className={styles.sec_title_wrap}>
          <h2>
            <img src={cpIcon1} alt="" />
            일반 사용행태 비교분석 결과
          </h2>
        </div>

        {/* 컴포넌트 첫줄 */}
        <div className={styles.cp_wrapper}>
          <h1>연간 사용량 비교분석 결과</h1>
          <div className={styles.cp1_wrap}>
            <div className={styles.cp_chart_wrap}>
              <Cp1 /> <Cp2 />
            </div>
            <Cp3 />
          </div>

          <div className={styles.cp2_wrap}>
            <Cp4 /> <Cp5 /> <Cp6 />
          </div>
        </div>

        {/* ==== 섹션2 박스 ==== */}
        <div className={styles.sec_title_wrap}>
          <h2>
            <img src={cpIcon2} alt="" />
            유사건물 비교분석 결과
          </h2>
        </div>

        {/* ==== 프린트 버튼 ==== */}
        <ReactToPrint
          trigger={() => (
            <button className={styles.print_btn}>
              <div className={styles.btn_wrap}>
                <img src={printIcon} alt="" />
                인쇄하기
              </div>
            </button>
          )}
          content={() => printRef.current}
        />

        <div className={styles.page_number}>2page</div>
        <img src={logo} alt="" className={styles.logo} />
      </div>
    </section>
  )
}

export default Print2
