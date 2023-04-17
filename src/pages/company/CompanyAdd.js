import "../../style/company/company.scss";
import Header from "../../components/Header";
import CompanySave from "components/company/CompanySave";

const CompanyAdd = () => {
  return (
    <div className="company_list_page">
      <Header />
      <div className="company_list_wrapper">
        <div className="title">
          <h2>업장 등록</h2>
        </div>
        <CompanySave mode="add" />
      </div>
    </div>
    // https://binaryjourney.tistory.com/64 API 이용 -> 참고예정
  );
};

export default CompanyAdd;
