import { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

import Header from "components/Header";
import LeftMenuCeo from "components/LeftMenuCeo";
import Modal from "components/Modal";

import "../../../style/company/company.scss";

function CompanyQR() {
  const [date, setDate] = useState(new Date());
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [loginState, setLoginState] = useState(null);

  const { id } = useParams();

  // Clock
  useEffect(() => {
    const timerID = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(timerID);
    };
  }, []);

  const formattedTime = useMemo(() => {
    return date.toLocaleTimeString();
  }, [date]);

  const openModal = (loginState) => {
    setModalIsOpen(true);
    setLoginState(loginState);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setLoginState(null);
  };

  return (
    <div>
      <Header />
      <div className="company-main-wrapper">
        <LeftMenuCeo companyId={id} />
        <div className="qr-wrapper">
          <div className="title">
            <h2>알바생 출퇴근 기록</h2>
          </div>
          <div className="main">
            <div className="title">
              <h2 className="company-name">업장이름</h2>
            </div>
            <div className="qr-detail">
              <h2>{formattedTime}</h2>
            </div>
            <div className="btnContainer">
              <button
                className="btnAttendance"
                onClick={() => openModal("workOn")}
              >
                <p>출근</p>
              </button>
              <button
                className="btnOffWork"
                onClick={() => openModal("workOff")}
              >
                <p>퇴근</p>
              </button>
              <div className="modal-wrapper">
                <CSSTransition
                  in={modalIsOpen}
                  timeout={300}
                  classNames="alert"
                  unmountOnExit
                >
                  {/* {modalIsOpen && ( */}
                  <Modal
                    isOpen={modalIsOpen}
                    onClose={closeModal}
                    loginState={loginState}
                  />
                  {/* )} */}
                </CSSTransition>

                {/* {modalIsOpen && (
                  <Modal
                    isOpen={modalIsOpen}
                    onClose={closeModal}
                    loginState={loginState}
                  />
                )} */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompanyQR;
