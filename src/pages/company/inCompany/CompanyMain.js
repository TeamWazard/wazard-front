import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import Calendar from "react-calendar";
import Header from "components/Header";
import LeftMenuCeo from "components/LeftMenuCeo";

import "../../../style/calendar/Calendar.scss";
import "./CompanyMain.scss";

const CompanyMain = (props) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const company = useSelector((state) =>
    state.companies.find((company) => company.company_id === parseInt(id))
  );
  console.log({ id });
  const [value, onChange] = useState(new Date());
  const members = [
    {
      user_id: 0,
      user_name: "윤서영",
      start_time: "12:58:29",
      end_time: "18:01:02",
    },
    {
      user_id: 1,
      user_name: "김정환",
      start_time: "18:00:02",
      end_time: "23:00:30",
    },
  ];

  //페이지 이동시 스크롤 제일 위로
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [navigate]);

  return (
    <div className="main">
      <Header />
      <div className="companyMain-wrapper">
        <LeftMenuCeo companyId={id} />
        <div className="calender-wrapper">
          <div className="title">
            <h3>{company.company_name}</h3>
          </div>
          <Calendar
            onChange={onChange}
            value={value}
            showNeighboringMonth={false}
            calendarType="US"
          />
          <div className="date">
            <div className="date-title">
              {value.toLocaleDateString()}
              <label>날에 근무한 알바생</label>
            </div>

            <div className="memberList">
              <div className="memberList-view">
                {members.map((member, index) => (
                  <div className="member">
                    <div className="number" key={index}>
                      {index + 1}
                    </div>
                    <div className="name">
                      <label>이름:</label>
                      {member.user_name}
                    </div>
                    <div className="time">
                      <div className="startTime">
                        <label>출근 시간:</label>
                        {member.start_time}
                      </div>
                      <div className="endTime">
                        <label>퇴근 시간:</label>
                        {member.end_time}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyMain;
