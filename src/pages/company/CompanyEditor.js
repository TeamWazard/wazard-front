import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useImgsave } from "../../hooks/useImgsave";
import ceoIcon from "../../imgs/ceoIcon.svg";
import { useDispatch, useSelector } from "react-redux";
import { create, init, manageCompany } from "./../../redux-toolkit/createSlice";

const CompanyEditor = () => {
  const navigate = useNavigate();
  const imgRef = useRef();
  const [imgFile, saveImgFile] = useImgsave("", imgRef);
  const inputRef = useRef(null);
  const dispatch = useDispatch();

  const [company, setCompany] = useState({
    user_id: "",
    company_id: "",
    company_name: "",
    address: "",
    tel: "",
    salary_day: "",
    company_img: "",
  });

  const [phoneNumber, setPhoneNumber] = useState({
    tel1: "",
    tel2: "",
    tel3: "",
  });

  useEffect(() => {
    setCompany({
      ...company,
      tel: `${phoneNumber.tel1}-${phoneNumber.tel2}-${phoneNumber.tel3}`,
    });
  }, [phoneNumber]);

  const handlePhoneNumber = (e) => {
    const currentPhoneNum = e.target.value.replace(/[^0-9]/g, "");
    e.target.value = currentPhoneNum;

    setPhoneNumber({ ...phoneNumber, [e.target.name]: currentPhoneNum });
  };

  const handleChangeState = (e) => {
    {
      setCompany({
        ...company,
        [e.target.name]: e.target.value,
      });
    }
  };

  const onSubmit = () => {
    console.log(company);
    if (inputRef.current.value.trim() === "") {
      alert("칸을 다 입력해주세요.");
      return;
    } else {
      dispatch(
        create({
          user_id: company.user_id,
          company_name: company.company_name,
          address: company.address,
          tel: company.tel,
          salary_day: company.salary_day,
          company_img: company.company_img,
        })
      );
      navigate(-1);
    }
    // console.log(company);
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
                <input
                  ref={inputRef}
                  name="address"
                  onChange={handleChangeState}
                ></input>
              </div>
              <div className="editor_set">
                <label>전화번호 </label>
                <input
                  value={phoneNumber.tel1}
                  ref={inputRef}
                  name="tel1"
                  onChange={handlePhoneNumber}
                  maxLength="3"
                ></input>
                -
                <input
                  ref={inputRef}
                  name="tel2"
                  onChange={handlePhoneNumber}
                  maxLength="4"
                ></input>
                -
                <input
                  ref={inputRef}
                  name="tel3"
                  onChange={handlePhoneNumber}
                  maxLength="4"
                ></input>
              </div>
              <div className="editor_set">
                <label>월급날 </label>
                <select
                  name="salary_day"
                  onChange={handleChangeState}
                  ref={inputRef}
                >
                  <option value="">월급날을 선택하세요.</option>
                  {Array.from({ length: 31 }, (_, index) => (
                    <option key={index} value={index + 1}>
                      {index + 1}
                    </option>
                  ))}
                </select>{" "}
                일
              </div>
            </div>
          </div>
        </div>
        <div className="editor_company">
          <button className="save" onClick={onSubmit}>
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
