import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";

import Header from "components/Header";
import LeftMenuCeo from "components/LeftMenuCeo";

import "../../../style/company/companyAlba.scss";
import { CSSTransition } from "react-transition-group";

const CompanyInviteContract = (props) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [alba, setAlba] = useState("______");
  const [store, setStore] = useState("______");
  const [workDateStart, setWorkDateStart] = useState("2022년 12월 12일");
  const [workDateEnd, setWorkDateEnd] = useState("2024년 12월 11일");
  const [address, setAddress] = useState(
    " 경기도 부천시 역곡동 역곡로 130번길 24 "
  );
  const [workWeek, setWorkWeek] = useState({
    monday: false,
    tuesday: true,
    wednesday: false,
    thursday: true,
    friday: false,
    saturday: false,
    sunday: false,
  });
  const [workTime, setWorkTime] = useState(" 09:00 - 18:00 ");
  const [pay, setPay] = useState("9500");
  const [email, setEmail] = useState("");
  const [emailConfirm, setEmailConfirm] = useState(null);

  const albalist = useSelector((state) => state.albalist);

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setWorkWeek((prevState) => ({ ...prevState, [name]: checked }));
  };

  const handleCheckEmail = (e) => {
    setEmailConfirm(true);
    closeModal();
    setModalIsOpenCheck(true);

    // if (!validateEmail(email)) {
    //   setEmailConfirm(false);
    // } else {
    //   setEmailConfirm(true);
    //   navigate("/company_main/0/invite");
    // }
  };

  // 이메일 타당성
  // const validateEmail = (input) => {
  //   const regex =
  //     /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
  //   return regex.test(input);
  // };

  //모달 이용
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalIsOpenCheck, setModalIsOpenCheck] = useState(false);

  //모달 창
  const openModal = () => {
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="albaList">
      <Header />
      <div className="companyAlba-Wrapper">
        <LeftMenuCeo companyId={id} />
        <div className="list-Wrapper">
          <div className="title">
            <h2>계약정보 조회</h2>
          </div>
          <div className="contract-Wrapper">
            <div className="ct-wrapper">
              <p>
                <br />
              </p>
              <p>
                <span style={{ textDecoration: "underline" }}>{alba}</span> 님과{" "}
                <span style={{ textDecoration: "underline" }}>{store}</span> 의
                계약
              </p>
              <p>
                1. 근로 계약기간:{" "}
                <input
                  type="text"
                  value={workDateStart}
                  onChange={(e) => {
                    setWorkDateStart(e.target.value);
                  }}
                />
                부터{" "}
                <input
                  type="text"
                  value={workDateEnd}
                  onChange={(e) => {
                    setWorkDateEnd(e.target.value);
                  }}
                />
                까지
              </p>
              <p>
                2. 근무 장소:{" "}
                <input
                  type="text"
                  value={address}
                  onChange={(e) => {
                    setAddress(e.target.value);
                  }}
                />
              </p>
              <p>
                3. 근무 요일: 매주{" "}
                {/* <span style={{ textDecoration: "underline" }}>{workWeek}</span>{" "} */}
                <label>
                  월요일
                  <input
                    type="checkbox"
                    name="monday"
                    checked={workWeek.monday}
                    onChange={handleCheckboxChange}
                  />
                </label>
                <label>
                  화요일
                  <input
                    type="checkbox"
                    name="tuesday"
                    checked={workWeek.tuesday}
                    onChange={handleCheckboxChange}
                  />
                </label>
                <label>
                  수요일
                  <input
                    type="checkbox"
                    name="wednesday"
                    checked={workWeek.wednesday}
                    onChange={handleCheckboxChange}
                  />
                </label>
                <label>
                  목요일
                  <input
                    type="checkbox"
                    name="thursday"
                    checked={workWeek.thursday}
                    onChange={handleCheckboxChange}
                  />
                </label>
                <label>
                  금요일
                  <input
                    type="checkbox"
                    name="friday"
                    checked={workWeek.friday}
                    onChange={handleCheckboxChange}
                  />
                </label>
                <label>
                  토요일
                  <input
                    type="checkbox"
                    name="saturday"
                    checked={workWeek.saturday}
                    onChange={handleCheckboxChange}
                  />
                </label>
                <label>
                  일요일
                  <input
                    type="checkbox"
                    name="sunday"
                    checked={workWeek.sunday}
                    onChange={handleCheckboxChange}
                  />
                </label>
              </p>
              <p>
                4. 근로 시간:{" "}
                <input
                  type="text"
                  value={workTime}
                  onChange={(e) => {
                    setWorkTime(e.target.value);
                  }}
                />{" "}
              </p>
              <p>
                5. 시급:{" "}
                <input
                  type="text"
                  value={pay}
                  onChange={(e) => {
                    setPay(e.target.value);
                  }}
                />{" "}
                원
              </p>
              <p>
                6. 연차유급휴가
                <br />- 연차 유급휴가는 근로기준법에서 정하는 바에 따라 부여함
              </p>
              <p>
                7. 기타
                <br />- 이 계약에 정함이 없는 사항은 근로기준법령에 의함
              </p>
            </div>
          </div>

          <div className="cc">
            <button className="invite-btn" onClick={openModal}>
              이메일 입력
            </button>
          </div>
          {/* 이메일 입력 */}
          <CSSTransition
            in={modalIsOpen}
            timeout={300}
            classNames="alert"
            unmountOnExit
          >
            <div className="modal">
              <div className="modal-content-contract modal-content-base">
                <div className="modal-title">
                  <h2>초대할 알바생의 이메일을 입력하세요.</h2>
                </div>
                <div className="modal-contents">
                  <p>계약정보나 이메일에 틀린것이 없는지 확인해주세요.</p>
                  <input
                    className="email-input"
                    placeholder="wazard123@gmail.com"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                  {/* {!emailConfirm ? <p>이메일 형식이 옳바르지않습니다</p> : ""} */}
                </div>
                <div className="button">
                  <button className="yes" onClick={handleCheckEmail}>
                    초대
                  </button>
                  <button className="no" onClick={closeModal}>
                    취소
                  </button>
                </div>
              </div>
            </div>
          </CSSTransition>
          <CSSTransition
            in={modalIsOpenCheck}
            timeout={300}
            classNames="alert"
            unmountOnExit
          >
            <div className="modal">
              <div className="modal-content-contract-check modal-content-base">
                <div className="modal-title">
                  <h2>전송완료</h2>
                </div>
                <div className="modal-contents">
                  <p>초대코드 전송이 완료되었습니다.</p>
                </div>
                <div className="button">
                  <button
                    className="yes"
                    onClick={() => {
                      setModalIsOpenCheck(false);
                      navigate("/company_main/0/invite");
                    }}
                  >
                    확인
                  </button>
                </div>
              </div>
            </div>
          </CSSTransition>
        </div>
      </div>
    </div>
  );
};

export default CompanyInviteContract;
