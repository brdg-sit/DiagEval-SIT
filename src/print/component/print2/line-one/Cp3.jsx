import React from 'react'
import styles from '../../../css/print2/cp3.module.css'
import waitIcon from '../../../../@assets/print/waitIcon.svg'

function Cp3() {
  return (
    <div className={styles.wrapper}>
      {/* 좌측차트 */}
      <table className={styles.table_val} cellspacing="0">
        <thead>
          <tr align="center">
            <td></td>
            <td></td>
            <th>난방</th>
            <th>냉방</th>
            <th>기저</th>
            <th>합계</th>
          </tr>
        </thead>
        <tbody>
          <tr align="center" bgcolor="white">
            <th rowspan="2">
              에너지
              <br />
              사용량
            </th>
            <th>분석건물</th>
            <td>00</td>
            <td>00</td>
            <td>00</td>
            <td>00</td>
          </tr>
          <tr align="center" bgcolor="white">
            <th>일반 사용행태 건물</th>
            <td>00</td>
            <td>00</td>
            <td>00</td>
            <td>00</td>
          </tr>

          <tr align="center" bgcolor="white">
            <th rowspan="2">
              C02 <br />
              배출량
            </th>
            <th>분석건물</th>
            <td>00</td>
            <td>00</td>
            <td>00</td>
            <td>00</td>
          </tr>
          <tr align="center" bgcolor="white">
            <th>일반 사용행태 건물</th>
            <td>00</td>
            <td>00</td>
            <td>00</td>
            <td>00</td>
          </tr>
        </tbody>
      </table>

      <div className={styles.info_desk_wrap}>
        <img src={waitIcon} alt="" />
        <p>
          표준 사용자 행태를 갖고 있는 건물보다&nbsp;
          <span>난방 사용량이 높습니다</span>
        </p>
      </div>
    </div>
  )
}

export default Cp3
