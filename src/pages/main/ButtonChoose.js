import pjIcon from "../../imgs/pjIcon.svg";
import ceoIcon from "../../imgs/ceoIcon.svg";

const ButtonChoose = () => {
  const onClickPJButton = () => {};

  const onClickCEOButton = () => {};

  return (
    <div className="btnPageContainer">
      <div className="btnPageHeader">Welcome To Wazard</div>
      <div className="btnContainer">
        <button className="btnPJ">
          <div></div>
        </button>
        <button className="btnCEO">
          <h2>기업</h2>
        </button>
      </div>
      <div className="btnPageFooter">가입 유형을 선택하세요!</div>
    </div>
  );
};

export default ButtonChoose;
