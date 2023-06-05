import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "../../components/Header";
import people from "../../imgs/icons/people.svg";
import "../../style/company/company.scss";
import axios from "axios";
import { useEffect } from "react";
import { getCompanies } from "utils/apis/companyAPI";

const CompanyList = () => {
  const navigate = useNavigate();
  const companies = useSelector((state) => state.companies);
  const user = useSelector((state) => state.user);
  console.log(user);
  async function handleGetCompanies() {
    try {
      const response = await getCompanies({
        email: user.email,
        accountId: user.accountId,
      });
      const data = response.data;
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    handleGetCompanies(); // 페이지 로드 시 함수 호출
  }, []);

  return (
    <div className="company_list_page">
      <Header />
      <div className="company_list_wrapper">
        <div className="title">
          <h2>운영중인 업장</h2>
        </div>
        <div className="list">
          {companies.length > 0 ? (
            companies.map((it) => (
              <div className="company_one">
                <div className="company_img_wrapper">
                  <img
                    src={it.company_img}
                    className="company_img"
                    alt="업장이미지"
                  />
                </div>
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
                      <img src={people} width="20" /> 업종
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
            ))
          ) : (
            <>
              <p className="notice">📣 업장을 등록해주세요!</p>
            </>
          )}
        </div>
        <div className="plus_company">
          <button onClick={() => navigate("/company_add")}>+</button>
        </div>
      </div>
    </div>
  );
};

export default CompanyList;
