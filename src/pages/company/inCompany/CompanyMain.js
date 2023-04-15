import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { init } from "../../../redux-toolkit/createSlice";
import { useState } from "react";

import Calendar from "react-calendar";
import Header from "components/Header";
import LeftMenuCeo from "components/LeftMenuCeo";

import "../../../style/calendar/Calendar.scss";
import "style/company/company_main_calender.scss";

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
        <div className="ceoMainBody">
          <Calendar onChange={onChange} value={value} />
        </div>
      </div>
    </div>
  );
};

export default CompanyMain;
