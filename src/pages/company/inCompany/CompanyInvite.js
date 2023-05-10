import Header from "components/Header";
import LeftMenuCeo from "components/LeftMenuCeo";
import { useState } from "react";

import "../../../style/company/company.scss";

const CompanyInvite = () => {
  const [userEmail, setUserEmail] = useState("");
  const [isValid, setIsValid] = useState(false);

  const validateEmail = (input) => {
    const regex =
      /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    return regex.test(input);
  };

  const handlesubmit = () => {
    const isValidEmail = validateEmail(userEmail);

    if (!isValidEmail) {
      window.confirm("이메일 형식이 잘못되었습니다.");
    } else {
      const result = window.confirm(`"${userEmail}" 이 맞나요?`);
      if (result) {
        window.confirm("전송이 완료되었습니다.");
        console.log("전송이 완료되었습니다.");
      }
    }
  };

  return (
    <div>
      <Header />
      <div className="company-main-wrapper">
        <LeftMenuCeo />
        <div className="invite-wrapper">
          <div className="title">
            <h2>알바생 초대</h2>
          </div>
          <div className="main">
            <h3>
              초대할 알바생의 <b>email 주소</b>를 입력하세요.
            </h3>
            <div className="emailform">
              <div className="email-wrapper">
                <input
                  type="email"
                  value={userEmail}
                  onChange={(e) => {
                    setUserEmail(e.target.value);
                  }}
                  placeholder="ex) wazard123@gmail.com ..."
                />
              </div>
              <div className="btn-wrapper">
                <button onClick={handlesubmit}>초대하기</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyInvite;
