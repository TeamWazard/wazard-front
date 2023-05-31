import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";

import Header from "components/Header";
import LeftMenuAlba from "components/LeftMenuAlba";
import "../../../style/alba/albaReplace.scss";

const AlbaReplace = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const { id } = useParams();

  const location = useLocation();
  const alba_replace = useSelector((state) => state.alba_replace);

  return (
    <div className="albaList">
      <Header />
      <div className="Alba-Wrapper">
        <LeftMenuAlba companyId={id} />
        <div className="list-Wrapper">
          <div className="title">
            <p>대타 기록</p>
            <button className="btn_record">기록하기</button>
          </div>
          <div className="list">
            {alba_replace.map((it) => (
              <div className="company_one">
                <div className="company_one_right">
                  <div className="company_set">
                    <label>기존근무자: </label>
                    {it.user}
                  </div>
                  <div className="company_set">
                    <label>대체근무자: </label>
                    {it.replace_user}
                  </div>
                  <div className="company_set_time">
                    <label>대타 시간:</label>
                    {it.time.year}년&nbsp;{it.time.month}월&nbsp;{it.time.date}
                    일
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlbaReplace;
