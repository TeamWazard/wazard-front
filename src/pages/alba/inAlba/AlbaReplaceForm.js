import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useState, useRef } from "react";
import HeaderAlba from "components/HeaderAlba";
import LeftMenuAlba from "components/LeftMenuAlba";
import "../../../style/alba/albaReplace.scss";
import { addReplace } from "../../../redux-toolkit/albaModule/AlbaReplaceSlice";

const AlbaReplaceForm = () => {
  const [info, setInfo] = useState({
    userName: "김민규",
    replaceUser: "",
    startTime: "",
    endTime: "",
    checkDate: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();

  const alba_replace = useSelector((state) => state.alba_replace);

  const inputRefs = {
    replaceUserInput: useRef(),
    startTimeInput: useRef(),
    endTimeInput: useRef(),
    checkDateInput: useRef(),
  };

  // const startHandleChange = (e) => {
  //   const inputTime = e.target.value;
  //   // 시간 유효성 검사 등을 수행할 수 있습니다.

  //   console.log(inputTime);
  //   setInfo(inputTime);
  // };
  const userHandleChange = (e) => {
    {
      setInfo((prevInfo) => ({
        ...prevInfo,
        [e.target.name]: e.target.value,
      }));
    }
  };

  // const startHandleChange = (e) => {
  //   const inputTime = e.target.value;
  //   setInfo((prevInfo) => ({
  //     ...prevInfo,
  //     startTime: inputTime,
  //   }));
  // };

  // const endHandleChange = (e) => {
  //   const inputTime = e.target.value;
  //   setInfo((prevInfo) => ({
  //     ...prevInfo,
  //     endTime: inputTime,
  //   }));
  // };

  // const dateHandleChange = (e) => {
  //   const inputTime = e.target.value;
  //   setInfo((prevInfo) => ({
  //     ...prevInfo,
  //     checkDate: inputTime,
  //   }));
  //   console.log({ info });
  // };

  const onClickSave = () => {
    if (info.replaceUser === "") {
      inputRefs.replaceUserInput.current.focus();
    } else if (info.startTime === "") {
      inputRefs.startTimeInput.current.focus();
    } else if (info.endTime === "") {
      inputRefs.endTimeInput.current.focus();
    } else if (info.checkDate === "") {
      inputRefs.checkDateInput.current.focus();
    } else {
      dispatch(addReplace(info));
      console.log({ info });
      navigate(`/alba_main/${id}/replace`);
    }
  };

  return (
    <div className="albaList">
      <HeaderAlba />
      <div className="Alba-Wrapper">
        <LeftMenuAlba companyId={id} />
        <div className="list-Wrapper">
          <div className="title">
            <h2>대타 기록하기</h2>
          </div>
          <div className="form-Wrapper">
            <div className="line">
              <label>기존 근무자</label>&nbsp;&nbsp;
              {info.userName}
            </div>
            <div className="line">
              <label>대체 근무자</label>
              <input
                className="input_box"
                name="replaceUser"
                ref={inputRefs.replaceUserInput}
                value={info.replaceUser}
                onChange={userHandleChange}
              ></input>
            </div>
            <div className="line">
              <label>시간 선택</label>
              <input
                ref={inputRefs.startTimeInput}
                className="time"
                name="startTime"
                type="time"
                // pattern="[0-2][0-9]:[0-5][0-9]"
                placeholder="00:00"
                value={info.startTime}
                onChange={userHandleChange}
              />
              &nbsp;&nbsp;{"-"}&nbsp;&nbsp;
              <input
                ref={inputRefs.endTimeInput}
                className="time"
                name="endTime"
                type="time"
                // pattern="[0-2][0-9]:[0-5][0-9]"
                placeholder="00:00"
                value={info.endTime}
                onChange={userHandleChange}
              />
            </div>
            <div className="line">
              <label>날짜 선택</label>&nbsp;
              <input
                ref={inputRefs.checkDateInput}
                name="checkDate"
                type="date"
                value={info.checkDate}
                onChange={userHandleChange}
              ></input>
            </div>
            <button className="btn_record" onClick={onClickSave}>
              기록하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlbaReplaceForm;
