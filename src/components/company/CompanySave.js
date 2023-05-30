import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useImgsave } from "hooks/UseImgSave";
import { CSSTransition } from "react-transition-group";
import { useDispatch, useSelector } from "react-redux";
import { create, edit, remove } from "../../redux-toolkit/createSlice";

import "../../style/company/company.scss";
import "../../style/components/Modal.scss";

import ceoIcon from "../../imgs/ceoIcon.svg";
import Post from "components/AddressPost";
import people from "../../imgs/icons/people.svg";

const CompanySave = ({ mode, id }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isEditMode = mode === "edit";
  const industries = [
    "학원/독서실 🏫",
    "마트/편의점 🏪",
    "프랜차이즈 😋",
    "음식점 🥘",
    "카페 ☕",
    "회사 🏨",
    "기타 🙋",
  ];

  const editCompany = useSelector((state) =>
    state.companies.find((company) => company.company_id === parseInt(id))
  );

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [company, setCompany] = useState(
    isEditMode
      ? editCompany
      : {
          user_id: "",
          company_name: "",
          zonecode: "",
          address: "",
          address_detail: "",
          tel: "",
          salary_day: "",
          company_img: "",
        }
  );

  // 미입력 확인(보류)
  const imgRef = useRef();
  const [imgFile, saveImgFile] = useImgsave(
    company.company_img || null,
    imgRef
  );

  const inputRefs = {
    companyNameInput: useRef(),
    addressInput: useRef(),
    tel1Input: useRef(),
    tel2Input: useRef(),
    tel3Input: useRef(),
    salaryDayInput: useRef(),
  };

  //주소

  const [popup, setPopup] = useState(false);

  const handleInput = (e) => {
    setCompany({
      ...company,
      [e.target.name]: e.target.value,
    });
  };

  const handleComplete = () => {
    setPopup(!popup);
  };

  const handlePopupClose = () => {
    setPopup(false); // Callback function to update the `popup` variable
    document.getElementById("detailedAddressInput").focus(); // Focus the detailed address input field
  };

  //전화번호
  const [phoneNumber, setPhoneNumber] = useState({
    tel1: "",
    tel2: "",
    tel3: "",
  });

  useEffect(() => {
    if (mode === "edit") {
      //수정 페이지인 경우
      const [telPart1, telPart2, telPart3] = editCompany.tel.split("-"); // 휴대폰 번호 불러오기
      setPhoneNumber({
        tel1: telPart1,
        tel2: telPart2,
        tel3: telPart3,
      });
    } else {
      //추가 페이지인 경우
    }
  }, [mode]);

  useEffect(() => {
    setCompany({
      ...company,
      tel: `${phoneNumber.tel1}-${phoneNumber.tel2}-${phoneNumber.tel3}`,
    });
  }, [phoneNumber]);

  // 전화번호 숫자만 입력 가능
  const handlePhoneNumber = (e) => {
    const currentPhoneNum = e.target.value.replace(/[^0-9]/g, "");
    e.target.value = currentPhoneNum;
    setPhoneNumber({ ...phoneNumber, [e.target.name]: currentPhoneNum });
  };

  // 정보 입력
  const handleChangeState = (e) => {
    {
      setCompany((prevCompany) => ({
        //prev 추가
        ...prevCompany,
        [e.target.name]: e.target.value,
      }));
    }
  };

  // 저장했을때
  const onSaveSubmit = () => {
    if (company.company_name === "") {
      inputRefs.companyNameInput.current.focus();
    }
    // else if (company.address === "") {
    //   inputRefs.addressInput.current.focus();
    // }
    else if (phoneNumber.tel1 === "") {
      inputRefs.tel1Input.current.focus();
    } else if (phoneNumber.tel2 === "") {
      inputRefs.tel2Input.current.focus();
    } else if (phoneNumber.tel3 === "") {
      inputRefs.tel3Input.current.focus();
    } else if (company.salary_day === "") {
      inputRefs.salaryDayInput.current.focus();
    } else {
      dispatch(create(company));
      console.log(company);
      navigate("/company_list");
    }
  };
  // 수정할때
  const onEditSubmit = () => {
    if (company.company_name === "") {
      inputRefs.companyNameInput.current.focus();
    }
    // else if (company.address === "") {
    //   inputRefs.addressInput.current.focus();
    // }
    else if (phoneNumber.tel1 === "") {
      inputRefs.tel1Input.current.focus();
    } else if (phoneNumber.tel2 === "") {
      inputRefs.tel2Input.current.focus();
    } else if (phoneNumber.tel3 === "") {
      inputRefs.tel3Input.current.focus();
    } else if (company.salary_day === "") {
      inputRefs.salaryDayInput.current.focus();
    } else {
      dispatch(edit({ id, company: company }));
      navigate("/company_list");
    }
  };

  //모달 창
  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  //업장 삭제
  const onRemoveCompany = (id) => {
    dispatch(remove({ id }));
    closeModal();
    navigate(-1);
  };

  return (
    <div>
      <div className="list">
        <div className="editor_wrapper">
          <div className="editor_img">
            <img src={imgFile ? imgFile : ceoIcon} alt="업장 이미지" />
            <label className="uploadImg" htmlFor="companyImg">
              이미지 업로드
            </label>
            <input
              name="image"
              id="companyImg"
              type="file"
              accept="image/*"
              ref={imgRef}
              onChange={(e) => {
                const file = e.target.files[0];
                setCompany((prevCompany) => ({
                  ...prevCompany,
                  company_img: URL.createObjectURL(file),
                }));
                saveImgFile(e); // Optionally, you can still call saveImgFile if it performs additional image saving logic
              }}
            />
          </div>
          <div className="editor_right">
            <div className="editor_set">
              <label>😀 업장명 </label>
              <input
                ref={inputRefs.companyNameInput}
                name="company_name"
                onChange={handleChangeState}
                value={company.company_name}
              />
            </div>
            <div className="editor_set">
              <label>🏢 주소 </label>

              <div className="address-search">
                <div className="address-search-1">
                  <label className="address-label">우편번호</label>
                  <input
                    className="user_enroll_text"
                    placeholder="우편번호"
                    type="text"
                    required={true}
                    name="zonecode"
                    onChange={handleInput}
                    value={company.zonecode}
                  />
                  <button className="searchAddress" onClick={handleComplete}>
                    우편번호 찾기
                  </button>
                </div>
                <div className="address-search-2">
                  <label className="address-label">주소 </label>
                  <input
                    className="user_enroll_text"
                    placeholder="주소"
                    type="text"
                    required={true}
                    name="address"
                    onChange={handleInput}
                    value={company.address}
                  />
                  <input
                    id="detailedAddressInput"
                    className="detailed-address-input"
                    placeholder="상세주소"
                    type="text"
                    required={true}
                    name="address_detail"
                    value={company.address_detail}
                    onChange={handleInput}
                  />
                </div>
                {popup && (
                  <Post
                    company={company}
                    setCompany={setCompany}
                    onComplete={handlePopupClose}
                    onClose={handlePopupClose} // Pass the close callback to the Post component
                  />
                )}
              </div>
            </div>
            <div className="editor_set tel">
              <label>📞 전화번호 </label>
              <input
                ref={inputRefs.tel1Input}
                name="tel1"
                onChange={handlePhoneNumber}
                maxLength="3"
                value={phoneNumber.tel1}
              />
              -
              <input
                ref={inputRefs.tel2Input}
                name="tel2"
                onChange={handlePhoneNumber}
                maxLength="4"
                value={phoneNumber.tel2}
              />
              -
              <input
                ref={inputRefs.tel3Input}
                name="tel3"
                onChange={handlePhoneNumber}
                maxLength="4"
                value={phoneNumber.tel3}
              />
            </div>
            <div className="editor_set">
              <label>💸 월급날 </label>
              <select
                name="salary_day"
                onChange={handleChangeState}
                ref={inputRefs.salaryDayInput}
                value={company.salary_day}
              >
                <option value="">월급날을 선택하세요.</option>
                {Array.from({ length: 31 }, (_, index) => (
                  <option key={index} value={index + 1}>
                    {index + 1}
                  </option>
                ))}
              </select>
              {"  "}일
            </div>
            <div className="editor_set">
              <label>
                <img src={people} width="20" /> 업종{" "}
              </label>
              <select
                name="company_type"
                onChange={handleChangeState}
                value={company.company_type}
              >
                <option value="">업종을 선택하세요.</option>
                {industries.map((industry) => (
                  <option key={industry} value={industry.toLowerCase()}>
                    {industry}
                  </option>
                ))}
              </select>{" "}
            </div>
          </div>
        </div>
      </div>
      <div className="editor_company">
        {!isEditMode ? (
          <div>
            <button className="save" onClick={onSaveSubmit}>
              저장
            </button>
            <button className="cancel" onClick={() => navigate(-1)}>
              취소
            </button>
          </div>
        ) : (
          <div>
            <button className="save" onClick={onEditSubmit}>
              수정
            </button>
            <button className="cancel" onClick={() => navigate(-1)}>
              취소
            </button>
            <button className="remove" onClick={() => openModal()}>
              삭제
            </button>
            <CSSTransition
              in={modalIsOpen}
              timeout={300}
              classNames="alert"
              unmountOnExit
            >
              <div className="modal">
                <div className="modal-content-confirm modal-content-base">
                  <div className="modal-title">
                    <h2>정말 삭제하시겠습니까?</h2>
                  </div>
                  <div className="modal-contents">
                    <p className="remove-company">
                      업장을 삭제할 시 업장에 알바중인 알바생 정보와
                      <br /> 업장정보를 볼 수 없습니다!
                    </p>
                  </div>
                  <div>
                    <button onClick={() => onRemoveCompany(company.company_id)}>
                      네
                    </button>
                    <button onClick={closeModal}>아니요</button>
                  </div>
                </div>
              </div>
            </CSSTransition>
          </div>
        )}
      </div>
    </div>
  );
};

export default CompanySave;
