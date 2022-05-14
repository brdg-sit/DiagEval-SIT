import React from 'react'
import styles from './common.module.css'
import logo from '../../@assets/logo.svg'
import { useLocation } from 'react-router-dom'

function StepHeader() {
  const location = useLocation()

  return (
    <header className={styles.header_wrap}>
      <div className={styles.title_wrap}>
        <img src={logo} alt="" />
        <h1>
          서울시 사용행태 정보 기반 <b>공공건축물 진단 프로그램</b>
        </h1>
      </div>

      <ul>
        <li
          className={
            location.pathname === '/step1'
              ? `${styles.active} ${styles.li_nav}`
              : styles.li_nav
          }
        >
          Step1. 건축물 정보 입력
        </li>
        <li
          className={
            location.pathname === '/step2'
              ? `${styles.active} ${styles.li_nav}`
              : styles.li_nav
          }
        >
          Step2. 성능 정보 입력
        </li>
        <li
          className={
            location.pathname === '/step3'
              ? `${styles.active} ${styles.li_nav}`
              : styles.li_nav
          }
        >
          Step3. 사용행태 정보 입력
        </li>
        <li
          className={
            location.pathname === '/step4'
              ? `${styles.active} ${styles.li_nav}`
              : styles.li_nav
          }
        >
          Step4. 건물 사용량 입력
        </li>
        <li
          className={
            location.pathname === '/step5'
              ? `${styles.active} ${styles.li_nav}`
              : styles.li_nav
          }
        >
          Step5. 진단 결과
        </li>
      </ul>
    </header>
  )
}

export default StepHeader
