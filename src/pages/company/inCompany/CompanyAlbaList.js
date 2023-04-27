import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";

import Header from "components/Header";
import LeftMenuCeo from "components/LeftMenuCeo";
import { manageCompany } from "../../../redux-toolkit/createSlice";

import "../../../style/company/companyAlba.scss";

const CompanyAlbaList = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const albalist = useSelector((state) => state.albalist);

  const [value, onChange] = useState(new Date());
  return (
    <div className="albaList">
      <Header />
      <div className="companyAlba-Wrapper">
        <LeftMenuCeo />
        <div className="list-Wrapper">
          <div className="title">
            <h2>알바생 관리</h2>
          </div>
          <div className="list">
            {albalist.map((it) => (
              <div className="company_one">
                <div className="company_one_right">
                  <div className="company_set">
                    <label>성명</label>
                    {it.user_name}
                  </div>
                  <div className="company_set">
                    <label>나이</label>
                    {it.user_age}
                  </div>
                  <div className="company_set">
                    <label>성별</label>
                    {it.user_gender}
                  </div>
                  <div className="company_set">
                    <label>거주지</label>
                    {it.address}
                  </div>
                  <div className="absent_btn">
                    <button className="absent_in">결석</button>
                  </div>
                  <div className="fire_btn">
                    <button className="fire_in">방출</button>
                  </div>
                  <div className="find_btn">
                    <button className="find_in">조회</button>
                  </div>
                </div>
                <div className="company_one_btn">
                  <button
                    className="in"
                    onClick={() => navigate(`/company_main/${it.company_id}`)}
                  >
                    계약정보수정
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyAlbaList;
