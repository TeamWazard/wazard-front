import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { init } from "../../../redux-toolkit/createSlice";

import { useState } from "react";
import Calendar from "react-calendar";
// import "react-calendar/dist/Calendar.css";
import "../../../style/calendar/Calendar.scss";

const CompanyMain = (props) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const company = useSelector((state) =>
    state.companies.find((company) => company.company_id === parseInt(id))
  );
  const [value, onChange] = useState(new Date());

  return (
    <div className="company_list_page">
      <Calendar onChange={onChange} value={value} />
    </div>
  );
};

export default CompanyMain;
