import CompanySave from "components/company/CompanySave";
import { useLocation, useParams } from "react-router-dom";

const CompanyEdit = () => {
  const location = useLocation();
  const id = location.state.value;
  return (
    <div className="company_list_page">
      <CompanySave mode="edit" id={id} />
    </div>
    // https://binaryjourney.tistory.com/64 API 이용 -> 참고예정
  );
};

export default CompanyEdit;
