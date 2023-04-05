import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import "../../style/company/company.scss";

// export const company_list

const CompanyList = () => {
  const navigate = useNavigate();
  const companys = [
    {
      company_id: "0",
      user_id: "0",
      company_name: "bhc",
      address: "경기도 부천시",
      tel: "02-3333-2323",
      company_img: null,
    },
    {
      company_id: "1",
      user_id: "0",
      company_name: "CU",
      address: "서울특별시 종로구 CU",
      tel: "02-3333-2323",
      company_img: null,
    },
  ];

  return (
    <div className="company_list_page">
      <div className="company_list_wrapper">
        <div className="title">
          <h2>운영중인 업장</h2>
        </div>
        <div className="list">
          {companys.map((it) => (
            <div className="company_one">
              <div className="company_img">이미지: {it.img}</div>
              <div className="company_one_right">
                <div>업장명: {it.company_name}</div>
                <div>주소: {it.address}</div>
                <div>전화번호: {it.tel}</div>
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
