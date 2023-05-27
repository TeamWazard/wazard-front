import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";

const MenuLine = styled.div`
  background-color: #fefefe;
  border: 2px solid #4a53ff1a;
  width: 280px;
  height: 100vh;
`;

const MenuWrap = styled.div`
  width: 280px;
  height: 60px;
`;

const MenuTitle = styled.div`
  color: #4a52ff;
  text-align: center;
  font-size: 30px;
  font-weight: 900;
  padding-top: 30px;
  padding-bottom: 10px;
  padding-right: 40px;
`;

const MenuItem = styled.div`
  list-style: none;
  width: 260px\;
  height: 50px;
  font-size: 24px;
  color: #788cf2;
  padding-top: 10px;
  padding-left: 20px;

  ${({ isActive }) =>
    isActive &&
    `
    background-color: #f2f5fe;
    border-left-style: solid;
    border-color: #4a52ff;
    border-width: 6px;
    padding-left: 14px;
  `}
`;

const SubMenu = styled.div`
  display: flex;
  flex-direction: column;
  list-style: none;
  width: 260px;
  height: 120px;
  font-size: 22px;
  color: #788cf2;

  ${({ isActive }) =>
    isActive &&
    `
    background-color: #f2f5fe;
    border-left-style: solid;
    border-color: #4a52ff;
    border-width: 6px;
    padding-left: 14px;
    
  `}
`;

const SubMenuItem = styled.div`
  display: flex;
  flex-direction: column;
  list-style: none;
  width: 270px;
  height: 30px;
  font-size: 22px;
  color: #788cf2;
  padding-left: 10px;

  ${({ isActive }) =>
    isActive &&
    `
    background-color: #f2f5fe;
    
  `}
`;

const LeftMenuAlba = (props) => {
  const location = useLocation();
  const [showSubMenu, setShowSubMenu] = useState(false);
  const { companyId } = props;
  const handleSubMenuToggle = () => {
    setShowSubMenu(!showSubMenu);
  };

  useEffect(() => {
    // 로컬 스토리지에서 하위 메뉴의 열림/닫힘 상태를 가져와 설정합니다.
    const storedIsOpen = localStorage.getItem("showSubMenu");
    if (storedIsOpen) {
      setShowSubMenu(JSON.parse(storedIsOpen));
    }
  }, []);

  useEffect(() => {
    // 하위 메뉴의 열림/닫힘 상태가 변경될 때마다 로컬 스토리지에 저장합니다.
    localStorage.setItem("showSubMenu", JSON.stringify(showSubMenu));
  }, [showSubMenu]);

  return (
    <MenuLine>
      <MenuWrap>
        <NavLink to={`/alba_main/${companyId}`}>
          <MenuTitle>알바생 페이지</MenuTitle>
        </NavLink>

        <NavLink
          to={`/alba_main/${companyId}/contract`}
          className={
            location.pathname === `/alba_main/${companyId}/contract`
              ? "active"
              : ""
          }
        >
          <MenuItem
            isActive={location.pathname === `/alba_main/${companyId}/contract`}
          >
            계약 정보 조회
          </MenuItem>
        </NavLink>

        <NavLink
          to={`/albatest2`}
          className={location.pathname === `/albatest2` ? "active" : ""}
        >
          <MenuItem isActive={location.pathname === `/albatest2`}>
            월급 통계 조회
          </MenuItem>
        </NavLink>

        <NavLink
          to={`/albatest3`}
          className={location.pathname === `/albatest3` ? "active" : ""}
        >
          <MenuItem isActive={location.pathname === `/albatest3`}>
            대타 기록
          </MenuItem>
        </NavLink>

        <NavLink
          to={`/albatest3`}
          className={location.pathname === `/albatest3` ? "active" : ""}
        >
          <MenuItem isActive={location.pathname === `/albatest3`}>
            출퇴근 조회
          </MenuItem>
        </NavLink>
      </MenuWrap>
    </MenuLine>
  );
};

export default LeftMenuAlba;
