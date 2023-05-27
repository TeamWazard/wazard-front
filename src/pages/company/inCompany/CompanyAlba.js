import { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import Header from "components/Header";
import LeftMenuCeo from "components/LeftMenuCeo";
import moment from "moment";

import "../../../style/company/companyAlba.scss";

const CompanyAlba = () => {
  const location = useLocation();
  const company_id = useParams();
  const id = location.state.value;
  const [currentMonth, setCurrentMonth] = useState(moment());
  // console.log(id);
  const alba = useSelector((state) =>
    state.albalist.find((alba) => alba.alba_id === parseInt(id))
  );
  // console.log(alba);
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
      name: "김민규",
      date: "2023-05-03",
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

  // 경고창
  function handleConfirm(action, employee) {
    if (action === "late") {
      const result = window.confirm("지각체크를 하시겠습니까?");
      if (result) handleLateToggleClick(employee);
    } else {
      const result = window.confirm("결석체크를 하시겠습니까?");
      if (result) handleAbsentToggleClick(employee);
    }
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

  //결석 수정
  function handleAbsentToggleClick(employee) {
    const updatedEmployees = employeesAbsent.map((emp) => {
      if (emp.id === employee.id) {
        return { ...emp, absent: !emp.absent };
      }
      return emp;
    });
    setEmployeesAbsent(updatedEmployees);
  }

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
                            handleConfirm("late", employee);
                          }}
                        >
                          지각
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
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
