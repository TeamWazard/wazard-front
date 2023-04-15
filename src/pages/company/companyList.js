import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { init, manageCompany } from "../../redux-toolkit/createSlice";
import { useSelector } from "react-redux";

import "../../style/company/company.scss";

const CompanyList = () => {
  const navigate = useNavigate();
  const companies = useSelector((state) => state.companies);
  // console.log(companies);

  return (
    <div className="company_list_page">
      <div className="company_list_wrapper">
        <div className="title">
          <h2>운영중인 업장</h2>
        </div>
        <div className="list">
          {companies.map((it) => (
            <div className="company_one">
              <div className="company_img">이미지: {it.img}</div>
              <div className="company_one_right">
                <div className="company_set">
                  <label>업장명</label>
                  {it.company_name}
                </div>
                <div className="company_set">
                  <label>주소</label>
                  {it.address}
                </div>
                <div className="company_set">
                  <label>전화번호</label>
                  {it.tel}
                </div>
                <div className="company_set">
                  <label>월급날</label>
                  {it.salary_day} 일
                </div>
              </div>
              <div className="company_one_btn">
                <button className="in">입장</button>
                <button className="edit">수정</button>
              </div>
            </div>
          ))}
        </div>
        <div className="plus_company">
          <button onClick={() => navigate("/company_editor")}>+</button>
        </div>
      </div>
    </div>
  );
};

export default CompanyList;
