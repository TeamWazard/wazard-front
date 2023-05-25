import { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import Header from "components/Header";
import LeftMenuCeo from "components/LeftMenuCeo";
import "../../../style/company/company.scss";

function CompanyQR() {
  const [date, setDate] = useState(new Date());

  const { id } = useParams();

  useEffect(() => {
    const timerID = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(timerID);
    };
  }, []);

  const formattedTime = useMemo(() => {
    return date.toLocaleTimeString();
  }, [date]);

  return (
    <div>
      <Header />
      <div className="company-main-wrapper">
        <LeftMenuCeo companyId={id} />
        <div className="qr-wrapper">
          <div className="title">
            <h2>알바생 출퇴근 기록</h2>
          </div>
          <div className="main">
            <div className="title">
              <h2 className="company-name">업장명</h2>
            </div>
            <div className="qr-detail">
              <h2>{formattedTime}</h2>
            </div>
            <div className="btnContainer">
              <button className="btnAttendance">
                <p>출근</p>
              </button>
              <button className="btnOffWork">
                <p>퇴근</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompanyQR;
