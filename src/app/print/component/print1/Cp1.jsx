import React from 'react'
import styles from '../../css/print1/cp1.module.css'

function Cp1(props) {

  const userEnter = props.userEnter[0];

  var dataBox = {};

  if(userEnter !== undefined){
    dataBox = {
      data1: [
        { key: '주소', val: userEnter.address },
        { key: '건축물 용도', val: '업무시설, ' + userEnter.usage_sub },
        { key: '준공연도', val: userEnter.year , year: true },
        { key: '연면적', val: userEnter.area_etr },
        { key: '설비종류', val: (userEnter.cd_empt === '401') ? 'EHP' : '중앙식'},
      ],
  
      data2: [
        { key: '재실 스케쥴', val: '주중 ' + userEnter.hur_wday + 'h 근무, 주말 ' + ((userEnter.hur_wend == 0) ? '휴무' : userEnter.hur_wend + 'h 근무')},
        {
          key: '재실 인원',
          val1Key: '근무자\u00A0',
          val1: userEnter.men_rsdt,
          val1T: '명,\u00A0',
          val2Key: '방문자\u00A0',
          val2: userEnter.men_norsdt,
          val2T: '명',
        },
        {
          key: '냉난방 설정온도',
          val1Key: '난방\u00A0',
          val1: userEnter.temp_heat,
          val1T: '℃\u00A0',
          val2Key: '냉방\u00A0',
          val2: userEnter.temp_cool,
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
}

export default Cp1
