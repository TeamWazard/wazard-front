import HeaderAlba from "components/HeaderAlba";
import LeftMenuAlba from "components/LeftMenuAlba";
import moment from "moment";
import { useState } from "react";
import Calendar from "react-calendar";
import { RiErrorWarningLine } from "react-icons/ri";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function AlbaMainPage() {
  const { id } = useParams();
  const alba_company = useSelector((state) =>
    state.alba_company.find((company) => company.id === parseInt(id))
  );
  const [value, onChange] = useState(new Date());
  const [view, setView] = useState(0);
  const albaAttendance = useSelector((state) => state.alba_attendance);
  const albaDays = albaAttendance.filter((alba) => {
    return alba.date === moment(value).format("YYYY-MM-DD");
  });
  return (
    <div className="alba-wrapper">
      <HeaderAlba />
      <div className="alba-navbar-wrapper">
        <LeftMenuAlba companyId={id} />
        <div className="main">
          <div className="main-container">
            <div className="title">
              <h2>{alba_company.name}</h2>
            </div>
            <div className="calender-wrapper">
              <Calendar
                onChange={onChange}
                value={value}
                showNeighboringMonth={false}
                calendarType="US"
                tileContent={({ date, view }) => {
                  if (
                    albaAttendance.filter(
                      (x) => x.date === moment(date).format("YYYY-MM-DD")
                    )[0]
                  ) {
                    return <div className="work-completed">출근😊</div>;
                  }
                }}
              />
            </div>
            <div className="date">
              <div className="date-title">
                {value.toLocaleDateString()}
                <label>날 근무 현황</label>
              </div>
              <div className="date-contents">
                {albaDays.length > 0 ? (
                  albaDays.map((alba, index) => (
                    <div key={index} className="alba-parttime">
                      <span className="number">{index + 1} .</span>
                      <span className="start">
                        <b>출근시간: </b>
                        {alba.start}
                      </span>
                      <span className="end">
                        <b>퇴근시간: </b>
                        {alba.end}
                      </span>
                    </div>
                  ))
                ) : (
                  <p>알바 기록이 없습니다.</p>
                )}
                {/* {albaDays.map((alba) => (
                  <div key={alba.id}>
                    <p>Date: {alba.date}</p>
                    <p>Value: {alba.start}</p>
                  </div>
                ))} */}
              </div>
            </div>
            <div className="salary-wrapper">
              <div className="salary-box">
                <h3>이번달 누적 수익</h3>
                <span>100,500 원</span>
              </div>
              <div className="salary-box">
                <h3>
                  이번달 예상 수익{" "}
                  <RiErrorWarningLine
                    onMouseOver={() => setView(1)}
                    onMouseOut={() => setView(0)}
                  />
                </h3>

                <span>513,000 원</span>
                {view ? (
                  <p>
                    <b>결석, 지각, 대타</b> 등의 이유로 실제 수익은 달라질수
                    있습니다.
                  </p>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AlbaMainPage;
