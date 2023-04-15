import Header from "components/Header";
import CompanySave from "components/company/CompanySave";
import { useLocation, useParams } from "react-router-dom";

const CompanyEdit = () => {
  const location = useLocation();
  const id = location.state.value;
  return (
    <div className="company_list_page">
      <Header />
      <div className="company_list_wrapper">
        <div className="title">
          <h2>업장 수정</h2>
        </div>
        <CompanySave mode="edit" id={id} />
      </div>
    </div>
    // https://binaryjourney.tistory.com/64 API 이용 -> 참고예정
  );
};

export default CompanyEdit;
