import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";

import Header from "components/Header";
import LeftMenuCeo from "components/LeftMenuCeo";
import { manageCompany } from "../../../redux-toolkit/createSlice";

import "../../../style/company/companyAlba.scss";

const CompanyAlbaList = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const albalist = useSelector((state) => state.albalist);

  const [value, onChange] = useState(new Date());
  return (
    <div className="albaList">
      <Header />
      <div className="companyAlba-Wrapper">
        <LeftMenuCeo companyId={id} />
        <div className="list-Wrapper">
          <div className="title">
            <h2>알바생 관리</h2>
          </div>
          <div className="list">
            {albalist.map((it) => (
              <div className="company_one">
                <div className="company_one_right">
                  <div className="company_info">
                    <div className="company_set">
                      <label>성명:</label>
                      {it.user_name}
                    </div>
                    <div className="company_set">
                      <label>나이:</label>
                      {it.user_birth}
                    </div>
                    <div className="company_set">
                      <label>성별:</label>
                      {it.user_gender}
                    </div>
                    <div className="company_set">
                      <label>거주지:</label>
                      {it.address}
                    </div>
                    <div className="company_set">
                      <label>휴대폰 번호:</label>
                      {it.user_number}
                    </div>
                    <div className="company_set">
                      <label>입사일:</label>
                      {it.user_join}
                    </div>
                  </div>
                  <div className="company_btn_all">
                    <div className="fire_btn">
                      <button className="fire_in">방출</button>
                    </div>
                    <div
                      className="find_btn"
                      onClick={() => {
                        console.log(it);
                        navigate(
                          `/company_main/${it.company_id}/alba_list/${it.alba_id}`,
                          {
                            state: { value: it.alba_id },
                          }
                        );
                      }}
                    >
                      <button
                        className="find_in"
                        // onClick={() => {
                        //   console.log(it);
                        //   navigate(
                        //     `/company_main/${it.company_id}/alba_list/${it.alba_id}`,
                        //     {
                        //       state: { value: it.alba_id },
                        //     }
                        //   );
                        // }}
                      >
                        조회
                      </button>
                    </div>
                  </div>
                </div>
                <div className="company_one_btn">
                  <button
                    className="in"
                    onClick={() =>
                      navigate(
                        `/company_main/${it.company_id}/alba_list/contract/${it.user_id}`,
                        {
                          state: { prop1: it.company_id, prop2: it.user_id },
                        }
                      )
                    }
                  >
                    계약정보조회
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyAlbaList;
