import { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import Header from "components/Header";
import LeftMenuCeo from "components/LeftMenuCeo";
import QRCode from "qrcode.react";
import "../../../style/company/company.scss";

function CompanyQR() {
  const [date, setDate] = useState(new Date());
  const [text, setText] = useState(
    "https://github.com/TeamWazard/wazard-front"
  );
  //const { id } = useParams();
  //   const company = useSelector((state) =>
  //     state.companies.find((company) => company.company_id === parseInt(id))
  //   );

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
        <LeftMenuCeo />
        <div className="qr-wrapper">
          <div className="title">
            <h2>QR코드 조회</h2>
          </div>
          <div className="main">
            {/* <h2 className="company-name">{company.company_name}</h2> */}
            <div>
              <QRCode value={text} size={200} />
            </div>
            <div className="qr-detail">
              <h2>{formattedTime}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompanyQR;
