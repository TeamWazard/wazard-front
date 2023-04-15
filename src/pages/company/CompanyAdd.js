import "../../style/company/company.scss";
import Header from "../../components/Header";
import CompanySave from "components/company/CompanySave";

const CompanyAdd = () => {
  return (
    <div className="company_list_page">
      <Header />
      <CompanySave mode="add" />
    </div>
    // https://binaryjourney.tistory.com/64 API 이용 -> 참고예정
  );
};

export default CompanyAdd;
