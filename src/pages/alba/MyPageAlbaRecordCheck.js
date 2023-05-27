import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import HeaderAlba from "components/HeaderAlba";
import LeftMenuMyPage from "components/LeftMenuMyPage";

import "../../style/alba/albaRecord.scss";

const MyPageAlbaRecordCheck = () => {
  const navigate = useNavigate();
  const alba_record = useSelector((state) => state.alba_record);
  const { id } = useParams();
  const selectedRecord = alba_record.find(
    (record) => record.company_id === parseInt(id)
  );

  console.log(selectedRecord);
  console.log(selectedRecord.address);
  console.log(selectedRecord.tel);

  return (
    <div>
      <HeaderAlba />
      <div className="albaRecord-Wrapper">
        <LeftMenuMyPage />
        <div className="companyBody-Wrapper">
          <div className="title">
            <p>상세 조회</p>
          </div>
          <div className="listCheck">
            <div className="company_one">
              <div className="company_one_right">
                <div className="company_img">이미지: {selectedRecord.img}</div>
                <div className="company_set">
                  <label>업장명: </label>
                  {selectedRecord.company_name}
                </div>
                <div className="company_set">
                  <label>업장 주소: </label>
                  {selectedRecord.address}
                </div>
                <div className="company_set">
                  <label>업장 전화번호: </label>
                  {selectedRecord.tel}
                </div>
                <div className="company_set">
                  <label> 지각: </label>
                  {selectedRecord.late}
                </div>
                <div className="company_set">
                  <label>무단결근: </label>
                  {selectedRecord.absent}
                </div>
                <div className="company_set">
                  <label>평점: </label>
                  {selectedRecord.score}
                </div>
                <div className="company_set">
                  <label>근무기간: </label>
                  {selectedRecord.alba_start}~{selectedRecord.alba_end}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPageAlbaRecordCheck;
