import "../App.scss";
import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import "../style/components/Header.scss";

const HeaderAlba = () => {
  const user = useSelector((state) => state.user);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const userName = user.userName;

  console.log(userName);

  const handleMouseEnter = () => {
    setIsDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownVisible(false);
  };
  return (
    <div className="topbar">
      <NavLink to="/alba_list">
        <div className="topTitle">Wazard</div>
      </NavLink>
      <div
        className="topMyPage"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {userName}님 환영합니다!
        {isDropdownVisible && (
          <div className="dropdown">
            <NavLink to="/my_account" className="dropdownItem">
              내 정보 관리
            </NavLink>
            <NavLink to="/logout" className="dropdownItem">
              로그아웃
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
};

export default HeaderAlba;
