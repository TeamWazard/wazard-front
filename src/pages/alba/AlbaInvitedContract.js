import { useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";

import Header from "components/Header";
import LeftMenuCeo from "components/LeftMenuCeo";

import "../../style/components/Contract.scss";
import "../../style/alba/albaStyle.scss";

function AlbaInvitedContract() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [alba, setAlba] = useState("______");
  const [store, setStore] = useState("______");
  const [workDateStart, setWorkDateStart] = useState("2022년 12월 12일");
  const [workDateEnd, setWorkDateEnd] = useState("2024년 12월 11일");
  const [address, setAddress] = useState(
    " 경기도 부천시 역곡동 역곡로 130번길 24 "
  );
  const [agreeMainContract, setAgreeMainContract] = useState("");
  const [agree_contract, setAgreeContract] = useState({
    contract1: null,
    contract2: null,
    contract3: null,
  });
  const agree_message = {
    contract: [
      { value: "agree", label: "동의합니다." },
      { value: "disagree", label: "동의하지 않습니다." },
    ],
  };

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

  const albalist = useSelector((state) => state.albalist);

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setWorkWeek((prevState) => ({ ...prevState, [name]: checked }));
  };

  const handleContractChange = (event, contract) => {
    setAgreeContract((prevAgreeContract) => ({
      ...prevAgreeContract,
      [contract]: event.target.value,
    }));
  };

  return (
    <div className="alba-wrapper">
      <Header />
      <div className="alba-noNavbar-wrapper">
        {/* <LeftMenuCeo companyId={id} /> */}
        <div className="list-Wrapper">
          <div className="contract">
            <div className="title">
              <h2>계약정보 조회</h2>
            </div>
            <div className="contract-Wrapper">
              <div className="ct-wrapper">
                <p>
                  <br />
                </p>
                <p>
                  <span style={{ textDecoration: "underline" }}>{alba}</span>{" "}
                  님과{" "}
                  <span style={{ textDecoration: "underline" }}>{store}</span>{" "}
                  의 계약
                </p>
                <p>
                  1. 근로 계약기간:{" "}
                  <span style={{ textDecoration: "underline" }}>
                    {workDateStart}
                  </span>{" "}
                  부터{" "}
                  <span style={{ textDecoration: "underline" }}>
                    {workDateEnd}
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
                      checked={workWeek.monday}
                      onChange={handleCheckboxChange}
                    />
                  </label>
                  <label>
                    화요일
                    <input
                      type="checkbox"
                      name="tuesday"
                      disabled="disabled"
                      checked={workWeek.tuesday}
                      onChange={handleCheckboxChange}
                    />
                  </label>
                  <label>
                    수요일
                    <input
                      type="checkbox"
                      name="wednesday"
                      disabled="disabled"
                      checked={workWeek.wednesday}
                      onChange={handleCheckboxChange}
                    />
                  </label>
                  <label>
                    목요일
                    <input
                      type="checkbox"
                      name="thursday"
                      disabled="disabled"
                      checked={workWeek.thursday}
                      onChange={handleCheckboxChange}
                    />
                  </label>
                  <label>
                    금요일
                    <input
                      type="checkbox"
                      name="friday"
                      disabled="disabled"
                      checked={workWeek.friday}
                      onChange={handleCheckboxChange}
                    />
                  </label>
                  <label>
                    토요일
                    <input
                      type="checkbox"
                      name="saturday"
                      disabled="disabled"
                      checked={workWeek.saturday}
                      onChange={handleCheckboxChange}
                    />
                  </label>
                  <label>
                    일요일
                    <input
                      type="checkbox"
                      name="sunday"
                      disabled="disabled"
                      checked={workWeek.sunday}
                      onChange={handleCheckboxChange}
                    />
                  </label>
                </p>
                <p>
                  4. 근로 시간:{" "}
                  <span style={{ textDecoration: "underline" }}>
                    {workTime}
                  </span>{" "}
                </p>
                <p>
                  5. 시급:{" "}
                  <span style={{ textDecoration: "underline" }}>{pay}</span> 원
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
            <div className="agree-radio">
              {agree_message.contract.map((option) => (
                <label key={option.value} className="agree-one">
                  <input
                    type="radio"
                    value={option.value}
                    onChange={(event) => setAgreeMainContract(option.value)}
                    checked={agreeMainContract === option.value}
                  />{" "}
                  <span>{option.label}</span>
                </label>
              ))}
            </div>
            {agreeMainContract === "disagree" ? (
              <div className="agree-textarea">
                <p>동의하지 않는 이유를 알려주세요</p>
                <textarea />
              </div>
            ) : (
              ""
            )}
          </div>

          <div className="agreement-contract">
            <div className="title contract-title">
              <h2>초대 약관 동의</h2>
            </div>

            <div className="agreement-contract-container">
              <div className="agreement-contract contract-1">
                <h3>
                  [필수] 근로자 당부 사항{" "}
                  <span className="red">(필수 항목)</span>
                </h3>
                <div className="agreement-contract-box">
                  <p>
                    <span className="title">
                      알바 계약을 시작할 때 몇 가지 당부할 사항을
                      알려드리겠습니다. 아래의 내용을 참고해주세요:{" "}
                    </span>
                    <br />
                    1. 근로계약서 확인: 알바 계약을 시작하기 전에 반드시
                    근로계약서를 자세히 확인해야 합니다. 근로조건, 근로시간,
                    임금, 근로장소 등과 관련된 모든 사항이 명확히 기재되어
                    있는지 확인해야 합니다. <br />
                    2. 근로시간과 휴식시간: 알바 계약에서 정해진 근로시간과
                    휴식시간을 엄수해야 합니다. 근로시간 외에도 휴식시간을
                    제대로 취하는 것은 근로생활의 건강과 안녕에 매우 중요합니다.{" "}
                    <br />
                    3. 근로자의 권리와 의무: 알바 계약으로 근로자로서의 권리와
                    의무를 가지게 됩니다. 알바자로서 정당한 권리를 요구하고
                    동시에 회사나 고용주에 대한 의무를 지켜야 합니다. <br />
                    4. 임금과 근로조건: 알바 계약에서 명시된 임금과 근로조건을
                    정확히 따라야 합니다. 근로시간 외에 추가 근무를 하게 될
                    경우, 그에 따른 임금과 근로조건에 대한 정책을 확인해야
                    합니다. <br />
                    5. 근로계약 기간과 해지 조항: 알바 계약의 시작일과 종료일,
                    그리고 계약 해지 조항에 대해 명확히 이해해야 합니다. 계약
                    종료일에 대한 사전 통보 기간이 요구되는지, 어떤 상황에서
                    어떻게 계약을 해지할 수 있는지 확인해야 합니다. <br />
                    6. 근로 환경과 안전: 알바를 하는 동안 안전한 근로 환경을
                    유지하기 위해 안전 규정을 준수해야 합니다. 작업 관련 위험
                    요소에 대한 교육을 받고, 안전 장비와 절차를 사용하여 안전을
                    유지해야 합니다.
                  </p>
                </div>
                <div className="agree-radio">
                  {agree_message.contract.map((option) => (
                    <label key={option.value}>
                      <input
                        type="radio"
                        value={option.value}
                        onChange={(event) =>
                          handleContractChange(event, "contract1")
                        }
                        checked={agree_contract.contract1 === option.value}
                      />{" "}
                      <span>{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div className="agreement-contract contract-2">
                <h3>
                  [필수] Wazard 태도 점수{" "}
                  <span className="red">(필수 항목)</span>
                </h3>
                <div className="agreement-contract-box">
                  <p>
                    태도점수 : Wazard에서는 근무자의 출근, 지각, 결근, 업주님의
                    평가 등을 태도점수에 반영하고 있습니다. 태도 점수는 근무자에
                    대한 평가 요소로 사용될 수 있으니 주의하시길 바랍니다.
                  </p>
                </div>
                <div className="agree-radio">
                  {agree_message.contract.map((option) => (
                    <label key={option.value} className="agree-one">
                      <input
                        type="radio"
                        value={option.value}
                        onChange={(event) =>
                          handleContractChange(event, "contract2")
                        }
                        checked={agree_contract.contract2 === option.value}
                      />{" "}
                      <span>{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div className="agreement-contract contract-2">
                <h3>
                  [필수] 분쟁 시 임금정보{" "}
                  <span className="red">(필수 항목)</span>
                </h3>
                <div className="agreement-contract-box">
                  <p>
                    고용노동부: 근무자와 고용자간의 임금문제가 발생할 시
                    wazard에서 사용되는 임금정보는 동의하에 제공드릴 수 있으나
                    이후에 발생하는 법적 문제는 따로 책임을 지지 않습니다.
                    <br />
                    고용노동부 신고: 국번없이 1350 (유료, 고용노동부
                    고객상담센터) <br />
                    https://minwon.moel.go.kr/minwon2008/petition/petition_list.do
                  </p>
                </div>
                <div className="agree-radio">
                  {agree_message.contract.map((option) => (
                    <label key={option.value} className="agree-one">
                      <input
                        type="radio"
                        value={option.value}
                        onChange={(event) =>
                          handleContractChange(event, "contract3")
                        }
                        checked={agree_contract.contract3 === option.value}
                      />{" "}
                      <span>{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="submit-agree">
            <button
              className="agree-btn"
              onClick={() => navigate("/alba_list")}
            >
              동의 완료
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AlbaInvitedContract;
