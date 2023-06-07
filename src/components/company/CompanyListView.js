import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import people from "../../imgs/icons/people.svg";

import "../../style/company/company.scss";

function CompanyListView(prop) {
  const navigate = useNavigate();
  const companies = useSelector((state) => state.alba_company);

  return (
    <div className="list">
      {companies.map((it) => (
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
              <label>😀 업장 명</label>
              {it.name}
            </div>
            <div className="company_set">
              <label>📞 전화번호</label>
              {it.tel}
            </div>
            <div className="company_set">
              <label>🏢 주소</label>
              {it.address}
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
              className="alba-in"
              onClick={(e) => {
                navigate(`/alba_main/${it.id}`);
              }}
            >
              입장
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CompanyListView;
