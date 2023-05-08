import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import Header from "components/Header";
import LeftMenuCeo from "components/LeftMenuCeo";
import moment from "moment";

import "../../../style/company/companyAlba.scss";

const CompanyAlba = () => {
  const location = useLocation();
  const id = location.state.value;
  const [currentMonth, setCurrentMonth] = useState(moment());
  // console.log(id);
  const alba = useSelector((state) =>
    state.albalist.find((alba) => alba.alba_id === parseInt(id))
  );
  // console.log(alba);
  const [employees, setEmployees] = useState([
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

  function handlePrevMonth() {
    setCurrentMonth(currentMonth.clone().subtract(1, "month"));
  }

  function handleNextMonth() {
    setCurrentMonth(currentMonth.clone().add(1, "month"));
  }

  const filteredEmployees = employees.filter(
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
    const updatedEmployees = employees.map((emp) => {
      if (emp.id === employee.id) {
        return { ...emp, late: !emp.late };
      }
      return emp;
    });
    setEmployees(updatedEmployees);
  }

  //결석 수정
  function handleAbsentToggleClick(employee) {
    const updatedEmployees = employees.map((emp) => {
      if (emp.id === employee.id) {
        return { ...emp, absent: !emp.absent };
      }
      return emp;
    });
    setEmployees(updatedEmployees);
  }

  return (
    <div className="companyAlba">
      <Header />
      <div className="companyAlba-Wrapper">
        <LeftMenuCeo />
        <div className="list-Wrapper">
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
            <table className="alba-work-table">
              <thead>
                <tr>
                  <th>날짜</th>
                  <th>요일</th>
                  <th>출근시간</th>
                  <th>퇴근시간</th>
                  <th>지각여부</th>
                  <th>결석여부</th>
                  <th>지각버튼</th>
                  <th>결석버튼</th>
                </tr>
              </thead>
              <tbody>
                {filteredEmployees.map((employee) => (
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
                    <td>{employee.absent ? "O" : "X"}</td>
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
                    <td>
                      {employee.absent ? (
                        <button
                          className="absentBtnCancel"
                          onClick={() => handleAbsentToggleClick(employee)}
                        >
                          결석취소
                        </button>
                      ) : (
                        <button
                          className="absentBtn"
                          onClick={() => handleConfirm("absent", employee)}
                        >
                          결석
                        </button>
                      )}
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
