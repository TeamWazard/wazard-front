import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";

import HeaderAlba from "components/HeaderAlba";

import "../../../style/company/companyAlba.scss";
import LeftMenuAlba from "components/LeftMenuAlba";

const AlbaContract = (props) => {
  const dispatch = useDispatch();
  const albaContract = useSelector((state) => state.alba_contract);
  const week = useSelector((state) => state.alba_contract.week);
  const navigate = useNavigate();
  const { id } = useParams();
  const [alba, setAlba] = useState("______");
  const [store, setStore] = useState("______");
  const [workDateStart, setWorkDateStart] = useState("2022년 12월 12일");
  const [workDateEnd, setWorkDateEnd] = useState("2024년 12월 11일");
  const [address, setAddress] = useState(
    " 경기도 부천시 역곡동 역곡로 130번길 24 "
  );

  const location = useLocation();

  const [workWeek, setWorkWeek] = useState({
    monday: false,
    tuesday: true,
    wednesday: false,
    thursday: true,
    friday: false,
    saturday: false,
    sunday: false,
  });
  const [workTime, setWorkTime] = useState(" 09:00 - 18:00 ");
  const [pay, setPay] = useState("9500");

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setWorkWeek((prevState) => ({ ...prevState, [name]: checked }));
  };

  return (
    <div className="albaList">
      <HeaderAlba />
      <div className="companyAlba-Wrapper">
        <LeftMenuAlba companyId={id} />
        <div className="list-Wrapper">
          <div className="title">
            <h2>계약정보 조회</h2>
          </div>
          <div className="contract-Wrapper">
            <div className="ct-wrapper">
              <p>
                <br />
              </p>
              <p>
                <span style={{ textDecoration: "underline" }}>
                  {albaContract.user_name}
                </span>{" "}
                님과{" "}
                <span style={{ textDecoration: "underline" }}>
                  {albaContract.company_name}
                </span>{" "}
                의 계약
              </p>
              <p>
                1. 근로 계약기간:{" "}
                <span style={{ textDecoration: "underline" }}>
                  {albaContract.contract_start}
                </span>{" "}
                부터{" "}
                <span style={{ textDecoration: "underline" }}>
                  {albaContract.contract_end}
                </span>{" "}
                까지
              </p>
              <p>
                2. 근무 장소:{" "}
                <span style={{ textDecoration: "underline" }}>{address}</span>{" "}
              </p>
              <p>
                3. 근무 요일: 매주{" "}
                {/* <span style={{ textDecoration: "underline" }}>{workWeek}</span>{" "} */}
                <label>
                  월요일
                  <input
                    type="checkbox"
                    name="monday"
                    disabled="disabled"
                    checked={week[0]}
                    onChange={handleCheckboxChange}
                  />
                </label>
                <label>
                  화요일
                  <input
                    type="checkbox"
                    name="tuesday"
                    disabled="disabled"
                    checked={week[1]}
                    onChange={handleCheckboxChange}
                  />
                </label>
                <label>
                  수요일
                  <input
                    type="checkbox"
                    name="wednesday"
                    disabled="disabled"
                    checked={week[2]}
                    onChange={handleCheckboxChange}
                  />
                </label>
                <label>
                  목요일
                  <input
                    type="checkbox"
                    name="thursday"
                    disabled="disabled"
                    checked={week[3]}
                    onChange={handleCheckboxChange}
                  />
                </label>
                <label>
                  금요일
                  <input
                    type="checkbox"
                    name="friday"
                    disabled="disabled"
                    checked={week[4]}
                    onChange={handleCheckboxChange}
                  />
                </label>
                <label>
                  토요일
                  <input
                    type="checkbox"
                    name="saturday"
                    disabled="disabled"
                    checked={week[5]}
                    onChange={handleCheckboxChange}
                  />
                </label>
                <label>
                  일요일
                  <input
                    type="checkbox"
                    name="sunday"
                    disabled="disabled"
                    checked={week[6]}
                    onChange={handleCheckboxChange}
                  />
                </label>
              </p>
              <p>
                4. 근로 시간:{" "}
                <span style={{ textDecoration: "underline" }}>
                  {albaContract.time}
                </span>{" "}
              </p>
              <p>
                5. 시급:{" "}
                <span style={{ textDecoration: "underline" }}>
                  {albaContract.salary}
                </span>{" "}
                원
              </p>
              <p>
                6. 연차유급휴가
                <br />- 연차 유급휴가는 근로기준법에서 정하는 바에 따라 부여함
              </p>
              <p>
                7. 기타
                <br />- 이 계약에 정함이 없는 사항은 근로기준법령에 의함
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlbaContract;
