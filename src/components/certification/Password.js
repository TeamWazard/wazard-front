import { useNavigate } from "react-router-dom";

const Password = () => {
  const navigate = useNavigate();
  return (
    <div className="mypage-main">
      <div className="title">
        <h2>내 정보 관리</h2>
      </div>
      <div className="mypage-pwd-container">
        <p> 본인 확인을 위해 비밀번호를 입력해주세요.</p>
        <div className="mypage-pwd-wrapper">
          <span>🔒PWD</span>
          <form className="submit">
            <input
              type="password"
              placeholder="숫자+영문자+특수문자조합 8자리 이상"
            ></input>
            <button
              onClick={() => {
                navigate("/my_account/edit");
              }}
            >
              확인
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Password;
