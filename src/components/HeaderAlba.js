import "../App.scss";
import React, { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "../style/components/Header.scss";

const HeaderAlba = () => {
  const user = useSelector((state) => state.user);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const navigate = useNavigate();

  console.log(localStorage.getItem("userName"));

  const handleMouseEnter = () => {
    setIsDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownVisible(false);
  };

  const logoutHandleChange = () => {
    localStorage.clear();
    navigate("/");
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
        {localStorage.getItem("userName")}님 환영합니다!
        {isDropdownVisible && (
          <div className="dropdown">
            <NavLink to="/my_account/password" className="dropdownItem">
              내 정보 관리
            </NavLink>
            <div className="dropdownItem" onClick={logoutHandleChange}>
              로그아웃
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HeaderAlba;
