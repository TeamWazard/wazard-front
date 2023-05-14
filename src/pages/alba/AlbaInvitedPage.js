import HeaderAlba from "components/HeaderAlba";

import "../../style/alba/albaStyle.scss";

function AlbaInvitedPage() {
  return (
    <div className="alba-noNavbar-wrapper">
      <HeaderAlba />
      <div className="alba-companyList-wrapper">
        <div className="title">
          <h2>운영중인 업장</h2>
        </div>
      </div>
    </div>
  );
}
export default AlbaInvitedPage;
