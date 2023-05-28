import HeaderAlba from "components/HeaderAlba";
import LeftMenuMyPage from "components/LeftMenuMyPage";
import Password from "components/certification/Password";
import "../../style/mypage/mypage.scss";

const MyPageCertification = () => {
  return (
    <div>
      <div>
        <HeaderAlba />
        <div className="mypage-nav-container">
          <LeftMenuMyPage />
          <Password />
        </div>
      </div>
    </div>
  );
};

export default MyPageCertification;
