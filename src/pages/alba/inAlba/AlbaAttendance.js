import HeaderAlba from "components/HeaderAlba";
import LeftMenuAlba from "components/LeftMenuAlba";
import { useState } from "react";
import moment from "moment";
import axios from "axios";

function AlbaAttendance() {
  const [currentMonth, setCurrentMonth] = useState(moment());
  const [employeesAttend, setEmployeesAttend] = useState([
    //출근 기록
    {
      id: 0,
      date: "2023-05-02",
      start_time: "08:59",
      end_time: "16:01",
      late: false,
    },
    {
      id: 1,
      date: "2023-05-03",
      start_time: "08:59",
      end_time: "16:01",
      late: false,
    },
    {
      id: 2,
      date: "2023-05-23",
      start_time: "08:53",
      end_time: "16:01",
      late: false,
    },
    {
      id: 3,
      date: "2023-06-01",
      start_time: "08:50",
      end_time: "16:02",
      late: false,
    },
    // 알바생의 근무정보 추가
  ]);

  const [employeesAbsent, setEmployeesAbsent] = useState([
    //퇴근 기록
    {
      id: 0,
      date: "2023-05-24",
      absent: true,
    },
  ]);

  //서버 api test
  // axios.get("http://localhost:8080/company/own/0").then(function (response) {
  //   console.log(response);
  // });

  // async function getData() {
  //   try {
  //     //응답 성공
  //     const response = await axios.get("http://localhost:8080/company/own/0", {
  //       params: {
  //         //url 뒤에 붙는 param id값
  //         accountId: 0,
  //       },
  //     });
  //     console.log(response);
  //   } catch (error) {
  //     //응답 실패
  //     console.error(error);
  //   }
  // }

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
    <div className="alba-wrapper">
      <HeaderAlba />
      <div className="alba-navbar-wrapper">
        <LeftMenuAlba />
        <div className="alba-list-Wrapper">
          <div className="title">
            <h2>김민규</h2> {/* 본인이름 */}
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
}

export default AlbaAttendance;
