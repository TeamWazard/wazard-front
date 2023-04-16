import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";

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
  const [value, onChange] = useState(new Date());

  return (
    <div className="main">
      <Header />
      <div className="companyMain-wrapper">
        <LeftMenuCeo />
        <div className="calender-wrapper">
          <Calendar onChange={onChange} value={value} />
          <div className="date">
            <div className="title">
              {value.toLocaleDateString()}
              <label>날에 근무한 알바생</label>
            </div>

            <div className="memberList"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyMain;
