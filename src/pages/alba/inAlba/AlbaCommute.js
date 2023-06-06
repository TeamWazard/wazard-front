import { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import HeaderAlba from "components/HeaderAlba";
import LeftMenuAlba from "components/LeftMenuAlba";
import moment from "moment";

import "../../../style/company/companyAlba.scss";
import "../../../style/components/Modal.scss";

const AlbaCommute = () => {
  const location = useLocation();
  const { id } = useParams();

  const [currentMonth, setCurrentMonth] = useState(moment());
  const aid = location.state && location.state.value; // 수정된 부분
  // console.log(id);
  const alba = localStorage.getItem("userName");

  //출근 기록
  const [employeesAttend, setEmployeesAttend] = useState([
    {
      id: 0,
      company_id: 1,
      name: "김민규",
      date: "2023-05-25",
      start_time: "08:59",
      end_time: "16:01",
      late: false,
      absent: false,
    },
    {
      id: 1,
      company_id: 1,
      name: "김민규2",
      date: "2023-05-26",
      start_time: "08:57",
      end_time: "16:03",
      late: false,
      absent: false,
    },
    {
      id: 2,
      company_id: 1,
      name: "김민규3",
      date: "2023-06-03",
      start_time: "09:00",
      end_time: "16:03",
      late: false,
      absent: false,
    },
    {
      id: 3,
      company_id: 1,
      name: "김민규3",
      date: "2023-06-04",
      start_time: "08:53",
      end_time: "16:02",
      late: false,
      absent: false,
    },
    {
      id: 4,
      company_id: 1,
      name: "김민규3",
      date: "2023-06-05",
      start_time: "09:12",
      end_time: "16:02",
      late: true,
      absent: false,
    },
    {
      id: 5,
      company_id: 1,
      name: "김민규3",
      date: "2023-06-07",
      start_time: "08:55",
      end_time: "16:00",
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

  return (
    <div className="companyAlba">
      <HeaderAlba />
      <div className="companyAlba-Wrapper">
        <LeftMenuAlba companyId={id} />
        <div className="alba-list-Wrapper">
          <div className="title">
            <h2>{alba}</h2>
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
                    </tr>
                  </>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlbaCommute;
