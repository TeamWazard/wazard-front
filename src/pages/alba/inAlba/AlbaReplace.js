import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";

import HeaderAlba from "components/HeaderAlba";
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
      <HeaderAlba />
      <div className="Alba-Wrapper">
        <LeftMenuAlba companyId={id} />
        <div className="list-Wrapper">
          <div className="title">
            <h2>대타 기록</h2>
            <button
              className="btn_record"
              onClick={() => {
                navigate(`/alba_main/${id}/replace/form`);
              }}
            >
              기록하기
            </button>
          </div>
          <div className="list">
            {alba_replace.map((it) => (
              <div className="company_one">
                <div className="company_one_right">
                  <div className="company_set">
                    <label>기존근무자: </label>
                    {it.userName}
                  </div>
                  <div className="company_set">
                    <label>대체근무자: </label>
                    {it.replaceUser}
                  </div>
                  <div className="company_set_time">
                    <label>대타 시간:</label>
                    {it.checkDate}
                    <br />
                    {it.startTime}
                    {"-"}
                    {it.endTime}
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
