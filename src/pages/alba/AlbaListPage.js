import { useNavigate } from "react-router-dom";
import HeaderAlba from "components/HeaderAlba";
import CompanyListView from "components/company/CompanyListView";

import "../../style/company/company.scss";
import "../../style/alba/albaCompanyList.scss";
import Footer from "components/Footer";
import Footer_2 from "components/Footer_2";

function AlbaList() {
  const navigate = useNavigate();
  return (
    <div className="company_list_page">
      <HeaderAlba />
      <div className="company_list_wrapper">
        <div className="title">
          <h2>내가 알바중인 매장</h2>
        </div>

        <CompanyListView />
        <div className="alba-plus_company">
          <button
            onClick={() => {
              navigate("/alba_invited");
            }}
          >
            초대코드 입력하기
          </button>
        </div>
      </div>
      <Footer_2 />
    </div>
  );
}

export default AlbaList;
