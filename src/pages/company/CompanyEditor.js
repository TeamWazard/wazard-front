import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useImgsave } from "./../../hooks/UseImgSave";
import ceoIcon from "../../imgs/ceoIcon.svg";

const CompanyEditor = () => {
  const navigate = useNavigate();
  const imgRef = useRef();
  const [imgFile, saveImgFile] = useImgsave("", imgRef);

  const [company, setCompany] = useState({
    user_id: "",
    company_id: "",
    company_name: "",
    address: "",
    tel: "",
    salary_day: "",
    company_img: "",
  });

  const handleChangeState = (e) => {
    setCompany({
      ...company,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="company_list_page">
      <div className="company_list_wrapper">
        <div className="title">
          <h2>업장 등록</h2>
        </div>
        <div className="list">
          <div className="editor_wrapper">
            <div className="editor_img">
              <img src={imgFile ? imgFile : ceoIcon} alt="프로필 이미지" />
              <label className="uploadImg" htmlFor="companyImg">
                이미지 업로드
              </label>
              <input
                id="companyImg"
                type="file"
                accept="image/*"
                ref={imgRef}
                onChange={saveImgFile}
              />
            </div>
            <div className="editor_right">
              <div className="editor_set">
                <label>업장명 </label>
                <input name="company_name" onChange={handleChangeState}></input>
              </div>
              <div className="editor_set">
                <label>주소 </label>
                <input name="address" onChange={handleChangeState}></input>
              </div>
              <div className="editor_set">
                <label>전화번호 </label>
                <input name="tel" onChange={handleChangeState}></input>
              </div>
              <div className="editor_set">
                <label>월급날 </label>
                <input
                  type="date"
                  name="salary_day"
                  onChange={handleChangeState}
                ></input>
              </div>
            </div>
          </div>
        </div>
        <div className="editor_company">
          <button
            className="save"
            onClick={() => {
              console.log(company);
            }}
          >
            저장
          </button>
          <button className="cancel" onClick={() => navigate(-1)}>
            취소
          </button>
        </div>
      </div>
    </div>
  );
};

export default CompanyEditor;
