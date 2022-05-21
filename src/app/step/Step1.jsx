import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./css/step1.module.css";
import stepStyles from "./css/step-wrap.module.css";
import StepHeader from "../common/StepHeader";
import SearchPostcode from "../common/Postcode";
import Popup from "reactjs-popup";
import Data from "../data/Data";

function Step1() {
  const navigate = useNavigate();
  const location = useLocation();

  const [stepNum, setStepNum] = useState(1);
  const [isLoaded, setIsLoaded] = useState(false);
  const [stateHistory, setStateHistory] = useState({});
  const [codes, setCodes] = useState({});
  const [defaults, setDefaults] = useState({});
  const [yearUValues, setYearUValues] = useState([]);
  const [address, setAddress] = useState("");
  const [cdNorthAxis, setCdNorthAxis] = useState("");
  const [cdUsageMain, setCdUsageMain] = useState("");
  const [usageSub, setUsageSub] = useState("");
  const [year, setYear] = useState("");
  const [area, setArea] = useState("");
  const [etrArea, setEtrArea] = useState("");
  const [wwr, setWwr] = useState("");
  const [isEtrWwr, setIsetrWwr] = useState(0);
  const [aspectRatio, setAspectRatio] = useState("");
  const [isEtrAspectRatio, setIsetrAspectRatio] = useState(0);

  useEffect(() => {
    if (isLoaded !== true) {
      if (location.state !== null){
        location.state.stateHistory[2] = location.state;
        RetrieveData(location.state.stateHistory[1]);
        setIsLoaded(true);
      } else {
        SetCodes();
        //코드 정보가 들어오면 기본값 세팅.
        if (Object.keys(codes).length > 0) {
          SetDefaultData();
          SetYearUValues();
          setIsLoaded(true);
        }
      }
    }
  });

  const submit = (e) => {
    e.preventDefault();
  };

  const RetrieveData = (state) => {
    setStateHistory(state.stateHistory);
    setCodes(state.codes);
    setDefaults(state.defaults);
    setYearUValues(state.yearUValues);
    setAddress(state.address);
    setCdNorthAxis(state.cdNorthAxis);
    setCdUsageMain(state.cdUsageMain);
    setUsageSub(state.usageSub);
    setYear(state.year);
    setArea(state.area);
    setEtrArea(state.etrArea);
    setWwr(state.wwr);
    setIsetrWwr(state.isEtrWwr);
    setAspectRatio(state.aspectRatio);
    setIsetrAspectRatio(state.isEtrAspectRatio);
  };

  const SetCodes = async () => {
    await Data.GetCodes().then((codes) => {
      var codeDict = {};
      for (var i = 0; i < codes.data.length; i++) {
        codeDict[codes.data[i].code] = codes.data[i];
      }
      setCodes(codeDict);
    });
  };

  const SetDefaultData = async () => {
    await Data.GetDefaults().then((defaults) => {
      var data = defaults.data[0];
      setDefaults(data);
      setCdNorthAxis(codes[data.cd_north_axis].name);
      setCdUsageMain(codes[data.cd_usage_main].name);
      setUsageSub(data.usage_sub);
      setYear(data.year);
      setArea(data.area);
      setEtrArea(data.area_etr);
      setWwr(data.wwr);
      setAspectRatio(data.aspect_ratio);
      setIsetrWwr(data.isetr_wwr);
      setIsetrAspectRatio(data.isetr_aspect_ratio);
    });
  };

  const SetYearUValues = async () => {
    await Data.GetUValues().then((uvals) => {
      var datas = uvals.data;
      setYearUValues(datas);
    });
  };

  const SearchPostcodeButton = (props) => (
    <Popup trigger={<button> 주소검색 </button>} position="right center">
      <SearchPostcode address={props.address} setAddress={props.setAddress} />
    </Popup>
  );

  const OnCdNorthAxisChanged = (e) => {
    setCdNorthAxis(e.target.value);
  };

  const OnUsageSubChange = (e) => {
    setUsageSub(e.target.value);
  };

  const OnYearChange = (e) => {
    setYear(e.target.value);
  };

  // etrArea: 입력값, area: 범위에의한 변환 -- dukhyun
  // 화면에 보여지는 것은 etrArea로. ML에서는 area로.
  const OnAreaChange = (e) => {
    setEtrArea(e.target.value);
    setArea(handleArea(e.target.value));
  };
  const handleArea = (e) => {
    let area = 0;
    if (e < 1000) {
      area = 1000;
    } else if (1000 <= e && e < 3000) {
      area = 1904;
    } else if  (3000 <= e && e < 10000) {
      area = 5703;
    } else if  (e <= 10000) {
      area = 26565;
    }
    return area;
  };

  const OnWwrChange = (e) => {
    setWwr(e.target.value);
  };

  const OnAspectRatioChange = (e) => {
    setAspectRatio(e.target.value);
  };

  const OnWwrCheckboxClicked = (e) => {
    if (isEtrWwr === 0) {
      setIsetrWwr(1);
    } else {
      setIsetrWwr(0);
    }
  };

  const OnAspectRatioCheckboxClicked = (e) => {
    if (isEtrAspectRatio === 0) {
      setIsetrAspectRatio(1);
    } else {
      setIsetrAspectRatio(0);
    }
  };

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
                  <input
                    type="text"
                    placeholder="주소를 검색하세요."
                    value={address}
                    onChange={() => console.log("")}
                  />
                  <SearchPostcodeButton
                    address={address}
                    setAddress={setAddress}
                  />
                </div>
              </div>

              {/* ==== 건축물 범위 ==== */}
              <div className={styles.content_wrap}>
                <div className={styles.title_label}>
                  <aside />
                  건축물 방위 <span>(선택)</span>
                </div>

                <div className={styles.tab_wrap}>
                  <label className={styles.tab}>
                    <input
                      type="radio"
                      name="tab"
                      value="남"
                      checked={cdNorthAxis === "남"}
                      onChange={OnCdNorthAxisChanged}
                    />
                    <span>남</span>
                  </label>

                  <label className={styles.tab}>
                    <input
                      type="radio"
                      name="tab"
                      value="남남서 (남남동)"
                      checked={cdNorthAxis === "남남서 (남남동)"}
                      onChange={OnCdNorthAxisChanged}
                    />
                    <span>남남서 (남남동)</span>
                  </label>

                  <label className={styles.tab}>
                    <input
                      type="radio"
                      name="tab"
                      value="남서(남동)"
                      checked={cdNorthAxis === "남서(남동)"}
                      onChange={OnCdNorthAxisChanged}
                    />
                    <span>남서(남동)</span>
                  </label>

                  <label className={styles.tab}>
                    <input
                      type="radio"
                      name="tab"
                      value="서남서(동남동)"
                      checked={cdNorthAxis === "서남서(동남동)"}
                      onChange={OnCdNorthAxisChanged}
                    />
                    <span>서남서(동남동)</span>
                  </label>

                  <label className={styles.tab}>
                    <input
                      type="radio"
                      name="tab"
                      value="서(동)"
                      checked={cdNorthAxis === "서(동)"}
                      onChange={OnCdNorthAxisChanged}
                    />
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
                  <input
                    type="text"
                    value={usageSub}
                    placeholder="세부용도를 작성하세요."
                    onChange={OnUsageSubChange}
                  />
                </div>
              </div>

              {/* ==== 건축물 준공연도 ==== */}
              <div className={styles.content_wrap}>
                <div className={styles.title_label}>
                  <aside />
                  건축물 준공연도
                </div>

                <div className={styles.input_wrap2}>
                  <input
                    type="text"
                    value={year}
                    placeholder="준공연도를 입력하세요."
                    onChange={OnYearChange}
                  />
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

                <div className={styles.input_box_wrap2}>
                  <input
                    type="number"
                    value={etrArea}
                    placeholder="연면적을 입력하세요."
                    onChange={OnAreaChange}
                  />
                  <span>㎡</span>
                </div>
              </div>

              {/* ==== 건축물 연면적 ==== */}
              <div className={styles.content_wrap}>
                <div className={styles.title_label}>
                  <aside />
                  건축물 창면적비
                </div>

                <div className={styles.input_wrap3}>
                  <div className={styles.type_val}>
                    <p>60%</p>
                  </div>
                  <div className={styles.input_box_wrap}>
                    <input
                      type="checkbox"
                      id="check1"
                      checked={isEtrWwr === 0 ? false : true}
                      onChange={() => console.log("")}
                    />
                    <label htmlFor="check1" onClick={OnWwrCheckboxClicked}>
                      직접입력 :
                    </label>{" "}
                    &nbsp;&nbsp;
                    <input
                      type="number"
                      value={wwr}
                      disabled={isEtrWwr === 0 ? true : false}
                      placeholder="창면적비를 입력하세요."
                      onChange={OnWwrChange}
                    />
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
                  <div className={styles.type_val}>
                    <p>1:1.91</p>
                  </div>
                  <div className={styles.input_box_wrap}>
                    <input
                      type="checkbox"
                      checked={isEtrAspectRatio === 0 ? false : true}
                      id="check2"
                      onChange={() => console.log("")}
                    />
                    <label
                      htmlFor="check2"
                      onClick={OnAspectRatioCheckboxClicked}
                    >
                      직접입력 :&nbsp;&nbsp;
                    </label>
                    <span>1:</span>
                    <input
                      type="number"
                      disabled={isEtrAspectRatio === 0 ? true : false}
                      value={aspectRatio}
                      placeholder="장면적비의 뒷자리를 입력하세요."
                      onChange={OnAspectRatioChange}
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
              onClick={() =>
                navigate("/step2", {
                  state: {
                    stepNum: stepNum,
                    codes: codes,
                    defaults: defaults,
                    yearUValues: yearUValues,
                    stateHistory: stateHistory,
                    address: address,
                    cdNorthAxis: cdNorthAxis,
                    cdUsageMain: cdUsageMain,
                    usageSub: usageSub,
                    year: year,
                    area: area,
                    etrArea: etrArea,
                    wwr: wwr,
                    isEtrWwr: isEtrWwr,
                    aspectRatio: aspectRatio,
                    isEtrAspectRatio: isEtrAspectRatio,
                  },
                })
              }
            >
              다음으로
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}

export default Step1;
