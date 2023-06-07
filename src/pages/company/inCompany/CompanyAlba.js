import { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { CSSTransition } from "react-transition-group";

import Header from "components/Header";
import LeftMenuCeo from "components/LeftMenuCeo";
import moment from "moment";

import "../../../style/company/companyAlba.scss";
import "../../../style/components/Modal.scss";

const CompanyAlba = () => {
  const location = useLocation();
  const company_id = useParams();
  const id = location.state.value;
  const [currentMonth, setCurrentMonth] = useState(moment());
  // console.log(id);
  const alba = useSelector((state) =>
    state.albalist.find((alba) => alba.alba_id === parseInt(id))
  );
  //모달 이용
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  //출근 기록
  const [employeesAttend, setEmployeesAttend] = useState([
    {
      id: 0,
      company_id: 1,
      name: "김민규",
      date: "2023-05-02",
      start_time: "08:59",
      end_time: "16:01",
      late: false,
      absent: false,
    },
    {
      id: 1,
      company_id: 1,
      name: "김민규2",
      date: "2023-05-03",
      start_time: "08:59",
      end_time: "16:01",
      late: false,
      absent: false,
    },
    {
      id: 2,
      company_id: 1,
      name: "김민규3",
      date: "2023-06-03",
      start_time: "08:59",
      end_time: "16:01",
      late: false,
      absent: false,
    },
    // 알바생의 근무정보 추가
  ]);
  // 퇴근 기록
  const [employeesAbsent, setEmployeesAbsent] = useState([
    {
      id: 0,
      date: "2023-05-24",
      absent: true,
    },
  ]);

  function handlePrevMonth() {
    setCurrentMonth(currentMonth.clone().subtract(1, "month"));
  }

  function handleNextMonth() {
    setCurrentMonth(currentMonth.clone().add(1, "month"));
  }

  const filteredEmployeesAttend = employeesAttend.filter(
    (employee) => moment(employee.date).month() === currentMonth.month()
  );

  const filteredEmployeesAbsent = employeesAbsent.filter(
    (employee) => moment(employee.date).month() === currentMonth.month()
  );

  // 지각 버튼 변경
  function handleConfirm(action, employee) {
    handleLateToggleClick(employee);
    closeModal();
  }

  //지각 수정
  function handleLateToggleClick(employee) {
    const updatedEmployees = employeesAttend.map((emp) => {
      if (emp.id === employee.id) {
        return { ...emp, late: !emp.late };
      }
      return emp;
    });
    setEmployeesAttend(updatedEmployees);
  }

  //모달 창
  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="companyAlba">
      <Header />
      <div className="companyAlba-Wrapper">
        <LeftMenuCeo companyId={company_id} />
        <div className="alba-list-Wrapper">
          <div className="title">
            <h2>{alba.user_name}</h2>
          </div>
          <div className="month">
            <button onClick={handlePrevMonth}>{"<"}</button>
            <span>
              {currentMonth.format("YYYY")}년 {currentMonth.format("M")}월{" "}
            </span>
            <button onClick={handleNextMonth}>{">"}</button>
          </div>
          <div className="member">
            <div>
              <h3>출근 기록부</h3>
            </div>
            <table className="alba-work-table">
              <thead>
                <tr>
                  <th>날짜</th>
                  <th>요일</th>
                  <th>출근시간</th>
                  <th>퇴근시간</th>
                  <th>지각여부</th>
                  <th>지각버튼</th>
                </tr>
              </thead>
              <tbody>
                {filteredEmployeesAttend.map((employee) => (
                  <>
                    <tr key={employee.id}>
                      <td>{employee.date}</td>
                      <td>
                        {new Date(employee.date).toLocaleDateString("ko-KR", {
                          weekday: "long",
                        })}
                      </td>
                      <td>{employee.start_time}</td>
                      <td>{employee.end_time}</td>
                      <td>{employee.late ? "O" : "X"}</td>

                      <td>
                        {employee.late ? (
                          <button
                            className="lateBtnCancel"
                            onClick={() => handleLateToggleClick(employee)}
                          >
                            지각취소
                          </button>
                        ) : (
                          <button
                            className="lateBtn"
                            onClick={() => {
                              setSelectedEmployee(employee);
                              openModal();
                            }}
                          >
                            지각
                          </button>
                        )}
                      </td>
                    </tr>
                  </>
                ))}
                <CSSTransition
                  in={modalIsOpen}
                  timeout={300}
                  classNames="alert"
                  unmountOnExit
                >
                  <div className="modal">
                    <div className="modal-content-late modal-content-base">
                      <div className="modal-title">
                        <h2>지각 체크를 하시겠습니까?</h2>
                      </div>
                      <div className="modal-contents">
                        <p className="remove-company"></p>
                      </div>
                      <div className="button">
                        <button
                          className="yes"
                          onClick={() =>
                            handleConfirm("late", selectedEmployee)
                          }
                        >
                          네
                        </button>
                        <button className="no" onClick={closeModal}>
                          아니요
                        </button>
                      </div>
                    </div>
                  </div>
                </CSSTransition>
              </tbody>
            </table>
          </div>
          <div className="member-absent">
            <div>
              <h3>결근 기록부</h3>
            </div>
            <table className="alba-work-table">
              <thead>
                <tr>
                  <th>날짜</th>
                  <th>요일</th>
                </tr>
              </thead>
              <tbody>
                {filteredEmployeesAbsent.map((employee) => (
                  <tr key={employee.id}>
                    <td>{employee.date}</td>
                    <td>
                      {new Date(employee.date).toLocaleDateString("ko-KR", {
                        weekday: "long",
                      })}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyAlba;
