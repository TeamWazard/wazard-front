import Header from "components/Header";
import LeftMenuCeo from "components/LeftMenuCeo";
import { useState } from "react";
import Calendar from "react-calendar";
import styled from "styled-components";

import "./CompanyMain.scss";

const CompanyAlba = () => {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <Header />
      <div className="companyAlba-Wrapper">
        <LeftMenuCeo />
        {/* <h1>알바생 조회 화면</h1> */}
        <Calendar
          onChange={onChange}
          value={value}
          showNeighboringMonth={false}
          calendarType="US"
        />
      </div>
    </div>
  );
};

export default CompanyAlba;
