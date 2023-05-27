import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import HeaderAlba from "components/HeaderAlba";
import LeftMenuMyPage from "components/LeftMenuMyPage";

import "../../style/alba/albaRecord.scss";

const MyPageAlbaRecord = () => {
  const navigate = useNavigate();
  const alba_record = useSelector((state) => state.alba_record);

  const [averageScore, setAverageScore] = useState(0);

  useEffect(() => {
    // alba_record가 변경될 때마다 평균을 다시 계산
    const scores = alba_record.map((record) => record.score);
    const totalScore = scores.reduce((acc, score) => acc + score, 0);
    const average = totalScore / scores.length;
    setAverageScore(average);
  }, [alba_record]);
  const formattedAverage = averageScore.toFixed(1);

  return (
    <div>
      <HeaderAlba />
      <div className="albaRecord-Wrapper">
        <LeftMenuMyPage />
        <div className="companyBody-Wrapper">
          <div className="title">
            <p>종합 태도 점수</p>
          </div>
          <div className="attitude-score">
            <h2>태도 점수: {formattedAverage}</h2>
          </div>
          <div className="albaRecord-title">
            <p>과거 알바 기록</p>
          </div>
          <div className="list">
            {alba_record.map((it) => (
              <div className="company_one">
                <div className="company_img">이미지: {it.img}</div>
                <div className="company_one_right">
                  <div className="company_set">
                    <label>업장명</label>
                    {it.company_name}
                  </div>
                  <div className="company_set">
                    <label>주소</label>
                    {it.address}
                  </div>
                  <div className="company_set">
                    <label>전화번호</label>
                    {it.tel}
                  </div>
                </div>
                <div className="company_one_btn">
                  <button
                    className="in"
                    onClick={() => navigate(`/company_main/${it.company_id}`)}
                  >
                    조회
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPageAlbaRecord;
