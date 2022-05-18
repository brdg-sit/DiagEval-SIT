import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './css/step1.module.css'
import stepStyles from './css/step-wrap.module.css'
import StepHeader from '../common/StepHeader'
import SearchPostcode from '../common/Postcode'
import Popup from 'reactjs-popup'
import Data from '../data/Data'

function Step1() {

  const navigate = useNavigate()

  const [isLoaded, setIsLoaded] = useState(false);
  const [codes, setCodes] = useState({});
  const [address, setAddress] = useState('');
  const [cdNorthAxis, setCdNorthAxis] = useState('');
  const [selectedNorthAxis, setSelectedNorthAxis] = useState('');
  const [cdUsageMain, setCdUsageMain] = useState('');
  const [usageSub, setUsageSub] = useState('');
  const [year, setYear] = useState('');
  const [area, setArea] = useState('');
  const [cdWwr, setCdWwr] = useState('');
  const [isEtrWwr, setIsetrWwr] = useState(0);
  const [vaWwr, setVaWwr] = useState('');
  const [cdAspectRatio, setCdAspectRatio] = useState('');
  const [isEtrAspectRatio, setIsetrAspectRatio] = useState(0);
  const [vaAspectRatio, setVaAspectRatio] = useState('');

  

  useEffect(() => {
    if(isLoaded !== true){
      SetCodes();
      //코드 정보가 들어오면 기본값 세팅.
      if(Object.keys(codes).length > 0){
        SetDefaults()
        setIsLoaded(true);
      }
    }
  })

  const submit = e => {
    e.preventDefault()
  }

  const SetCodes = async() => {
    await Data.GetCodes()
    .then(codes => {
      var codeDict = {};
      for(var i=0; i<codes.data.length; i++){
        codeDict[codes.data[i].code] = codes.data[i];
      }
      setCodes(codeDict);
    });
  }

  const SetDefaults = async() => {
    await Data.GetDefaults()
    .then(defaults => {
      var data = defaults.data[0];
      setCdNorthAxis(codes[data.cd_north_axis].name);
      setSelectedNorthAxis(codes[data.cd_north_axis].name);
      setCdUsageMain(codes[data.cd_usage_main].name);
      setUsageSub(data.usage_sub);
      setYear(data.year);
      setArea(data.area);
      setCdWwr(codes[data.cd_wwr].name);
      setIsetrWwr(data.isetr_wwr);
      setVaWwr(data.va_wwr);
      setCdAspectRatio(codes[data.cd_aspect_ratio].name);
      setIsetrAspectRatio(data.isetr_aspect_ratio);
      setVaAspectRatio(data.va_aspect_ratio);
    })
  }

  const SearchPostcodeButton = (props) => (
    <Popup trigger={<button> 주소검색 </button>} position="right center">
      <SearchPostcode address={props.address} setAddress={props.setAddress}/>
    </Popup>
  );

  const OnNorthAxisClicked = e => {
    setSelectedNorthAxis(e.target.value);
  }

  const OnUsageSubChange = e => {
    setUsageSub(e.target.value);
  }

  const OnYearChange = e => {
    setYear(e.target.value);
  }

  const OnAreaChange = e => {
    setArea(e.target.value);
  }

  const OnCdWwrChange = e => {
    setCdWwr(e.target.value);
  }

  const OnWwrCheckboxClicked = e => {
    if(isEtrWwr === 0){
      setIsetrWwr(1);
    }
    else{
      setIsetrWwr(0);
    }
  }

  const OnVaWwrChange = e => {
    setVaWwr(e.target.value);
  }

  const OnCdAspectRatioChange = e => {
    setCdAspectRatio(e.target.value);
  }

  const OnAspectRatioCheckboxClicked = e => {
    if(isEtrAspectRatio === 0){
      setIsetrAspectRatio(1);
    }
    else{
      setIsetrAspectRatio(0);
    }
  }

  const OnVaAspectRatioChange = e => {
    setVaAspectRatio(e.target.value);
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
                  <input type="text" placeholder="주소를 검색하세요." value={address}/>
                  <SearchPostcodeButton address={address} setAddress={setAddress}/>
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
                    <input type="radio" name="tab" value="남" checked={selectedNorthAxis==='남'} onClick={OnNorthAxisClicked}/>
                    <span>남</span>
                  </label>

                  <label className={styles.tab}>
                  <input type="radio" name="tab" value="남남서 (남남동)" checked={selectedNorthAxis==='남남서 (남남동)'} onClick={OnNorthAxisClicked}/>
                    <span>남남서 (남남동)</span>
                  </label>

                  <label className={styles.tab}>
                  <input type="radio" name="tab" value="남서(남동)" checked={selectedNorthAxis==='남서(남동)'} onClick={OnNorthAxisClicked}/>
                    <span>남서(남동)</span>
                  </label>

                  <label className={styles.tab}>
                  <input type="radio" name="tab" value="서남서(동남동)" checked={selectedNorthAxis==='서남서(동남동)'} onClick={OnNorthAxisClicked}/>
                    <span>서남서(동남동)</span>
                  </label>

                  <label className={styles.tab}>
                  <input type="radio" name="tab" value="서(동)" checked={selectedNorthAxis==='서(동)'} onClick={OnNorthAxisClicked}/>
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
                  <input type="text" value={usageSub} placeholder="세부용도를 작성하세요." onChange={OnUsageSubChange}/>
                </div>
              </div>

              {/* ==== 건축물 준공연도 ==== */}
              <div className={styles.content_wrap}>
                <div className={styles.title_label}>
                  <aside />
                    건축물 준공연도
                </div>

                <div className={styles.input_wrap2}>
                  <input type="text" value={year} placeholder="준공연도를 작성하세요." onChange={OnYearChange}/>
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
                  <input type="number" value={area} placeholder="연면적을 직접입력" onChange={OnAreaChange}/>
                </div>
              </div>

              {/* ==== 건축물 연면적 ==== */}
              <div className={styles.content_wrap}>
                <div className={styles.title_label}>
                  <aside />
                  건축물 창면적비
                </div>

                <div className={styles.input_wrap3}>
                  <select value={cdWwr} onChange={OnCdWwrChange}>
                    <option value="20%">20%</option>
                    <option value="60%">60%</option>
                    <option value="80%">80%</option>
                  </select>
                  <div className={styles.input_box_wrap}>
                    <input type="checkbox" id="check1" />
                    <label htmlFor="check1" onClick={OnWwrCheckboxClicked}>직접입력 :</label> &nbsp;&nbsp;
                    <input type="number" value={vaWwr} disabled={isEtrWwr  === 0 ? true : false} placeholder="창면적비 직접입력" onChange={OnVaWwrChange}/>
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
                  <select value={cdAspectRatio} onChange={OnCdAspectRatioChange}>
                    <option value="1">1:1</option>
                    <option value="2">1:2</option>
                    <option value="3">1:3</option>
                  </select>
                  <div className={styles.input_box_wrap}>
                    <input type="checkbox" id="check2" />
                    <label htmlFor="check2" onClick={OnAspectRatioCheckboxClicked}>직접입력 :&nbsp;&nbsp;</label>
                    <input type="number" disabled={isEtrAspectRatio === 0 ? true : false} value={vaAspectRatio} placeholder="장면적비 뒷자리 직접입력" onChange={OnVaAspectRatioChange}/>
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
              onClick={() => navigate('/step2', {
                state:{
                  isLoaded: isLoaded,
                  codes: codes,
                  address: address,
                  cdNorthAxis: cdNorthAxis,
                  selectedNorthAxis: selectedNorthAxis,
                  cdUsageMain: cdUsageMain,
                  usageSub: usageSub,
                  year: year,
                  area: area,
                  cdWwr: cdWwr,
                  isEtrWwr: isEtrWwr,
                  vaWwr: vaWwr,
                  cdAspectRatio: cdAspectRatio,
                  isEtrAspectRatio: isEtrAspectRatio,
                  vaAspectRatio: vaAspectRatio
                }
              })}
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