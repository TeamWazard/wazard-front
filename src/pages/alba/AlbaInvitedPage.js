import { useState, useRef } from "react";
import HeaderAlba from "components/HeaderAlba";

import "../../style/alba/albaStyle.scss";
import Footer from "components/Footer";

function AlbaInvitedPage() {
  const [codes, setCodes] = useState(["", "", "", "", "", "", "", ""]);
  const inputRefs = useRef([]);

  const handleChange = (event, index) => {
    const { value } = event.target;
    const newCodes = [...codes];
    newCodes[index] = value.slice(0, 1); // Limit each input to 1 character
    setCodes(newCodes);

    if (value.length === 1 && index < codes.length - 1) {
      const nextInput = inputRefs.current[index + 1];
      nextInput.focus();
    }
  };

  return (
    <div className="alba-wrapper">
      <HeaderAlba />
      <div className="alba-noNavbar-wrapper">
        <div className="alba-companyList-wrapper">
          <div className="title">
            <h2>초대코드 입력</h2>
          </div>
          <div className="invited-container">
            <div className="info">
              <p>본인의 이메일에서 사장님의 초대메일을 확인 할 수 있습니다!</p>
            </div>
            <div className="invited-code">
              {codes.map((code, index) => (
                <input
                  className="code-input"
                  key={index}
                  type="text"
                  value={code}
                  onChange={(event) => handleChange(event, index)}
                  maxLength={1}
                  ref={(el) => (inputRefs.current[index] = el)}
                />
              ))}
              <button className="submit">초대받기</button>
            </div>
          </div>
        </div>
        {/* <Footer /> */}
      </div>
      <Footer />
    </div>
  );
}
export default AlbaInvitedPage;
