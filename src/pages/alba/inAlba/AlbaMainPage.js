import HeaderAlba from "components/HeaderAlba";
import LeftMenuAlba from "components/LeftMenuAlba";
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

  return (
    <div className="alba-wrapper">
      <HeaderAlba />
      <div className="alba-navbar-wrapper">
        <LeftMenuAlba />
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
              />
            </div>
            <div className="date">
              <div className="date-title">
                {value.toLocaleDateString()}
                <label>날 근무 현황</label>
              </div>
              <div className="date-contents">
                <span>알바 기록이 없습니다.</span>
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
