import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useImgsave } from "hooks/UseImgSave";
import ceoIcon from "../../imgs/ceoIcon.svg";
import { useDispatch, useSelector } from "react-redux";
import { create, edit } from "../../redux-toolkit/createSlice";
import "../../style/company/company.scss";
import AddressPost from "components/AddressPost";

const CompanySave = ({ mode, onSave, id }) => {
  const navigate = useNavigate();
  const imgRef = useRef();
  const [imgFile, saveImgFile] = useImgsave("", imgRef);
  const inputRefs = {
    companyNameInput: useRef(),
    addressInput: useRef(),
    tel1Input: useRef(),
    tel2Input: useRef(),
    tel3Input: useRef(),
    salaryDayInput: useRef(),
  };
  const dispatch = useDispatch();
  const companyId = useRef(2);
  const editCompany = useSelector((state) =>
    state.companies.find((company) => company.company_id === parseInt(id))
  );
  const [address, setAddress] = useState("");

  const handleAddressChange = (addr) => {
    setAddress(addr);
    console.log(address);
  };

  const [company, setCompany] = useState(
    editCompany || {
      user_id: "",
      company_id: "",
      company_name: "",
      address: "",
      tel: "",
      salary_day: "",
      company_img: "",
    }
  );

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
    if (company.company_name === "") {
      inputRefs.companyNameInput.current.focus();
    } else if (company.address === "") {
      inputRefs.addressInput.current.focus();
    } else if (phoneNumber.tel1 === "") {
      inputRefs.tel1Input.current.focus();
    } else if (phoneNumber.tel2 === "") {
      inputRefs.tel2Input.current.focus();
    } else if (phoneNumber.tel3 === "") {
      inputRefs.tel3Input.current.focus();
    } else if (company.salary_day === "") {
      inputRefs.salaryDayInput.current.focus();
    } else {
      if (mode === "add") {
        dispatch(
          create({
            company_id: companyId.current,
            user_id: company.user_id,
            company_name: company.company_name,
            address: company.address,
            tel: company.tel,
            salary_day: company.salary_day,
            company_img: company.company_img,
          })
        );
      } else if (mode === "edit") {
        dispatch(
          edit({
            company_id: company.company_id,
            user_id: company.user_id,
            company_name: company.company_name,
            address: company.address,
            tel: company.tel,
            salary_day: company.salary_day,
            company_img: company.company_img,
          })
        );
      }

      companyId.current += 1;
      navigate(-1);
    }
  };
  console.log(company);
  return (
    <div>
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
              <input
                ref={inputRefs.companyNameInput}
                name="company_name"
                onChange={handleChangeState}
              ></input>
            </div>
            <div className="editor_set">
              <label>주소 </label>
              <AddressPost name="address" />
            </div>
            {/* {message !== "" && <p>{message}</p>} */}
            <div className="editor_set">
              <label>전화번호 </label>
              <input
                value={phoneNumber.tel1}
                ref={inputRefs.tel1Input}
                name="tel1"
                onChange={handlePhoneNumber}
                maxLength="3"
              ></input>
              -
              <input
                ref={inputRefs.tel2Input}
                name="tel2"
                onChange={handlePhoneNumber}
                maxLength="4"
              ></input>
              -
              <input
                ref={inputRefs.tel3Input}
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
                ref={inputRefs.salaryDayInput}
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
  );
};

export default CompanySave;
