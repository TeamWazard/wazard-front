import Header from "components/Header";
import { useNavigate, useParams } from "react-router-dom";
import LeftMenuCeo from "components/LeftMenuCeo";
import { useEffect, useState } from "react";

import "../../../style/company/company.scss";

const CompanyInvite = () => {
  const [userEmail, setUserEmail] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [isState, setIsState] = useState(true);
  const invite_user = [
    {
      id: 0,
      name: "김민규",
      email: "hello123@naver.com",
      code: "24DW4Y89",
      state: "대기",
    },
    {
      id: 1,
      name: "윤서영",
      email: "seoyoung7623@naver.com",
      code: "DE32S5DU",
      state: "거절",
    },
  ];
  useEffect(() => {}, [invite_user]);

  const validateEmail = (input) => {
    const regex =
      /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    return regex.test(input);
  };

  const { id } = useParams();

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
        <LeftMenuCeo companyId={id} />
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
          <div className="waitlist-container">
            <div className="title">
              <h2>초대 대기 목록</h2>
            </div>
            <div className="waitlist-wrapper">
              {invite_user.map((user) => (
                <div className="waitlist-main">
                  <div className="waitlist-set">
                    <div className="waitlist-things">
                      <div className="name waitlist-one">
                        <label className="value">이름</label>
                        <label>{user.name}</label>
                      </div>
                      <div className="email waitlist-one">
                        <label className="value">이메일</label>
                        <label>{user.email}</label>
                      </div>
                      <div className="inviteCode waitlist-one">
                        <label className="value">초대코드</label>
                        <label>{user.code}</label>
                      </div>
                    </div>
                    <div className="invite-state">
                      {user.state === "대기" && (
                        <label className="wait state">대기</label>
                      )}
                      {user.state === "거절" && (
                        <label className="disagee state">거절</label>
                      )}
                    </div>
                  </div>
                  {user.state == "거절" && (
                    <div className="contract-wrapper">
                      <button>계약정보 수정</button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyInvite;
