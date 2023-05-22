import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";

import HeaderAlba from "components/HeaderAlba";
import LeftMenuMyPage from "components/LeftMenuMyPage";

import "../../style/alba/albaRecord.scss";

const MyPageAlbaRecord = () => {
  return (
    <div>
      <HeaderAlba />
      <div className="albaRecord-Wrapper">
        <LeftMenuMyPage />
        <div className="companyBody-Wrapper">
          <div className="title">
            <h2>종합 태도 점수</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPageAlbaRecord;
