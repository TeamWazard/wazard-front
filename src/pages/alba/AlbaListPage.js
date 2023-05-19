import Header from "components/Header";
import CompanyListView from "components/company/CompanyListView";

import "../../style/company/company.scss";
import "../../style/alba/albaCompanyList.scss";

function AlbaList() {
  return (
    <div className="company_list_page">
      <Header />
      <div className="company_list_wrapper">
        <div className="title">
          <h2>내가 알바중인 매장</h2>
        </div>

        <CompanyListView />
        <div className="alba-plus_company">
          <button>초대코드 입력하기</button>
        </div>
      </div>
    </div>
  );
}

export default AlbaList;
