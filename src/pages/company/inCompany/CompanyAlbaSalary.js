import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";

import Header from "components/Header";
import LeftMenuCeo from "components/LeftMenuCeo";
import { manageCompany } from "../../../redux-toolkit/createSlice";

import "../../../style/company/companyAlba.scss";

const CompanyAlbaSalary = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const albasalary = useSelector((state) => state.albasalary);

  const [value, onChange] = useState(new Date());
  console.log(albasalary);
  return (
    <div className="albaList">
      <Header />
      <div className="companyAlbaSalary-Wrapper">
        <LeftMenuCeo companyId={id} />
        <div className="salaryList-Wrapper">
          <div className="title">
            <h2>알바생 급여</h2>
          </div>

          <div className="salary">
            {albasalary.map((it) => (
              <div className="company_one">
                <div className="company_one_right">
                  <div className="company_set">
                    <label>이름: </label>
                    {it.user_name}
                    <label> </label>
                  </div>
                  <div className="company_set">
                    <label>이번 달 누적시간: </label>
                    {it.accumulate_time}
                    <label>시간</label>
                  </div>
                  <div className="company_set">
                    <label>시급: </label>
                    {it.hourly_wage}
                    <label>원</label>
                  </div>
                  <div className="company_set">
                    <label>이번 달 급여: </label>
                    {it.accumulate_salary}
                    <label>원</label>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyAlbaSalary;
