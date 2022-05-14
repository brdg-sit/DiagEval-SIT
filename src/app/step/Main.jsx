import React from 'react'
import styles from './css/main.module.css'
import logo from '../../@assets/logo.svg'
import img1 from '../../@assets/main/img1.svg'
import img2 from '../../@assets/main/img2.svg'
import img3 from '../../@assets/main/img3.svg'
import { useNavigate } from 'react-router-dom'

function Main() {
  const navigate = useNavigate()
  return (
    <main className={styles.wrapper}>
      <section className={styles.container}>
        <div className={styles.title_wrap}>
          <img src={logo} alt="" />
          <h1>
            서울시 사용행태 정보 기반
            <br />
            <b>공공건축물 진단 프로그램</b>
          </h1>
        </div>

        <ul className={styles.list_wrap}>
          {list.map((item, i) => {
            return (
              <li key={i}>
                <img src={item.img} alt="" />
                <h2>{item.t}</h2>
                <p>{item.n}</p>
              </li>
            )
          })}
        </ul>

        <button onClick={() => navigate('/step1')}>프로젝트 실행</button>
      </section>
    </main>
  )
}

export default Main

export const list = [
  {
    img: img1,
    t: 'Social',
    n: '예측 도구 활용을 통한 \n 노후건축물 분석이 가능한 시스템',
  },
  {
    img: img2,
    t: 'Technology',
    n: '재실행태를 고려한\n정확한 사용량 예측 시스템',
  },
  {
    img: img3,
    t: 'Economy',
    n: '일반인이 활용할 수 있는\n간단한 입력기반의 시스템',
  },
]
