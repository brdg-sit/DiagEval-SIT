import React from 'react'
import styles from '../../css/print1/cp1.module.css'

function Cp1(props) {
  const dataBox = {
    data1: [
      { key: '주소', val: '서울시 마곡동 공항대로 212' },
      { key: '건축물 용도', val: '업무시설,세부용도' },
      { key: '준공연도', val: '2016', year: true },
      { key: '연면적', val: '4,216' },
      { key: '설비종류', val: '4,216', m2: true },
    ],

    data2: [
      { key: '재실 스케쥴', val: '주중 8h 근무, 주말 휴무' },
      {
        key: '재실 인원',
        val1Key: '근무자\u00A0',
        val1: 200,
        val1T: '명,\u00A0',
        val2Key: '방문자\u00A0',
        val2: 200,
        val2T: '명',
      },
      {
        key: '냉난방 설정온도',
        val1Key: '난방\u00A0',
        val1: 20,
        val1T: '℃\u00A0',
        val2Key: '냉방\u00A0',
        val2: 30,
        val2T: '℃',
      },
    ],
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.cp_wrap}>
        <h1>일반현황</h1>
        <ul>
          {dataBox.data1.map((item, i) => {
            return (
              <li key={i}>
                <h2>{item.key}</h2>
                <p>
                  {item.val}
                  {item.year && <span>년</span>}
                  {item.m2 && <span>m2</span>}
                </p>
              </li>
            )
          })}
        </ul>
      </div>
      <div className={styles.cp_wrap}>
        <h1>재실정보</h1>
        <ul>
          {dataBox.data2.map((item, i) => {
            return (
              <li key={i}>
                <h2>{item.key}</h2>
                <p>
                  {item.val}
                  {item.val1Key}
                  {item.val1}
                  {item.val1T}
                  {item.val2Key}
                  {item.val2}
                  {item.val2T}
                </p>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default Cp1
