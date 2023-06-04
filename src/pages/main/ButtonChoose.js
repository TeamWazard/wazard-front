import pjIcon from "../../imgs/pjIcon.svg";
import ceoIcon from "../../imgs/ceoIcon.svg";
import "./ButtonChoose.scss";
import { useNavigate } from "react-router-dom";

const ButtonChoose = () => {
  const navigate = useNavigate();
  const onClickPJButton = () => {
    navigate("/signup", { state: { userType: "EMPLOYEE" } });
  };

  const onClickCEOButton = () => {
    navigate("/signup", { state: { userType: "EMPLOYER" } });
  };

  return (
    <div className="btnPageContainer">
      <div className="btnPageHeader">Welcome To Wazard</div>
      <div className="btnContainer">
        <button className="btnPJ" onClick={onClickPJButton}>
          <img src={pjIcon} />
          <h2 className="btnH2">개인</h2>
        </button>
        <button className="btnCEO" onClick={onClickCEOButton}>
          <img src={ceoIcon} />
          <h2 className="btnH2">기업</h2>
        </button>
      </div>
      <div className="btnPageFooter">가입 유형을 선택하세요!</div>
    </div>
  );
};

export default ButtonChoose;
