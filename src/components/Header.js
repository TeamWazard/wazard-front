import "../App.scss";
import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const Header = () => {
  return (
    <div className="topbar">
      <NavLink to="/company_list">
        <div className="topTitle">Wazard</div>
      </NavLink>
      <div className="topMyPage">ㅁㅁㅁㅁㅁ</div>
    </div>
  );
};

export default React.memo(Header);
