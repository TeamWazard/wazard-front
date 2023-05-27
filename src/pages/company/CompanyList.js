import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "../../components/Header";
import people from "../../imgs/icons/people.svg";
import "../../style/company/company.scss";
import axios from "axios";
import { useEffect } from "react";

const CompanyList = () => {
  const navigate = useNavigate();
  const companies = useSelector((state) => state.companies);
  // async function getCompanies = await axios.get('')
  // useEffect(()=>{
  //   const getCompanies = async () =>{
  //     try{
  //       const response = await axios.get('')
  //     }
  //   }
  // })

  return (
    <div className="company_list_page">
      <Header />
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
                  <label>😀 업장명</label>
                  {it.company_name}
                </div>
                <div className="company_set">
                  <label>🏢 주소</label>
                  {it.address} {it.address_detail}
                </div>
                <div className="company_set">
                  <label>📞 전화번호</label>
                  {it.tel}
                </div>
                <div className="company_set">
                  <label>💸 월급날</label>
                  {it.salary_day} 일
                </div>
                <div className="company_set">
                  <label>
                    <img src={people} width="23" /> 업종
                  </label>
                  {it.company_type}
                </div>
              </div>
              <div className="company_one_btn">
                <button
                  className="in"
                  onClick={() => navigate(`/company_main/${it.company_id}`)}
                >
                  입장
                </button>
                <button
                  className="edit"
                  onClick={() => {
                    navigate(`/company_edit/`, {
                      state: { value: it.company_id },
                    });
                  }}
                >
                  수정
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="plus_company">
          <button onClick={() => navigate("/company_add")}>+</button>
        </div>
      </div>
    </div>
  );
};

export default CompanyList;
