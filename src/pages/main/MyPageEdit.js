import HeaderAlba from "components/HeaderAlba";
import LeftMenuMyPage from "components/LeftMenuMyPage";
import "../../style/mypage/mypage.scss";
import { useEffect, useRef, useState } from "react";
import Radio from "components/Radio";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { MdOutlineDangerous } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function MyPageEdit() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "seoyoung7623@naver.com",
    password: "",
    passwordConfirm: "",
    name: "윤서영",
    gender: "female",
    birth: "2001-03-07",
    phone: {
      tel1: "010",
      tel2: "1234",
      tel3: "0987",
    },
  });
  const tel2Ref = useRef();
  const tel3Ref = useRef();
  // 버튼 선택
  const [isName, setIsName] = useState(false);
  const [isBirth, setIsBirth] = useState(false);
  const [isPhone, setIsPhone] = useState(false);
  const [isGender, setIsGender] = useState(false);

  //   오류메세지
  const [passwordMatchMessage, setPasswordMatchMessage] = useState("");

  //   비밀번호 확인
  const [isPassword, setIsPassword] = useState(false);
  useEffect(() => {
    if (user.password !== "" && user.password === user.passwordConfirm) {
      setPasswordMatchMessage(
        <>
          <AiFillSafetyCertificate color="rgba(159, 255, 100)" /> 비밀번호가
          일치합니다.
        </>
      );
      setIsPassword(true);
    } else if (user.password !== "" || user.passwordConfirm !== "") {
      setPasswordMatchMessage(
        <>
          <MdOutlineDangerous color="red" /> 비밀번호가 일치하지 않습니다.
        </>
      );
      setIsPassword(false);
    } else {
      setPasswordMatchMessage("");
      setIsPassword(false);
    }
  }, [user.passwordConfirm]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith("phone.")) {
      const phoneName = name.split(".")[1];
      setUser((prevUser) => ({
        ...prevUser,
        phone: {
          ...prevUser.phone,
          [phoneName]: value,
        },
      }));
      if (phoneName === "tel1" && value.length === 3) {
        tel2Ref.current.focus();
      } else if (phoneName === "tel2" && value.length === 4) {
        tel3Ref.current.focus();
      }
    } else {
      setUser((prevUser) => ({
        ...prevUser,
        [name]: value,
      }));
      if (name === "gender") {
        setIsGender(true);
      }
    }
  };

  return (
    <div>
      <HeaderAlba />
      <div className="mypage-nav-container">
        <LeftMenuMyPage />
        <div className="mypage-main">
          <div className="title">
            <h2>회원정보 수정</h2>
          </div>
          <div className="edit-container">
            <div className="edit-thing">
              <p className="person-title">개인정보 수정</p>
              <div className="thing1">
                <div className="edit-set">
                  <label>이메일</label>
                  <span>{user.email}</span>
                </div>
                <div className="edit-set">
                  <label>새 비밀번호</label>
                  <input
                    value={user.password}
                    name="password"
                    className="edit-input"
                    placeholder="숫자+영문자+특수문자조합 8자리 이상"
                    onChange={handleInputChange}
                    type="password"
                  />
                </div>
                <div className="edit-set">
                  <label>새 비밀번호 확인</label>
                  <input
                    value={user.passwordConfirm}
                    name="passwordConfirm"
                    className="edit-input"
                    placeholder="숫자+영문자+특수문자조합 8자리 이상"
                    onChange={handleInputChange}
                    type="password"
                  />
                  <p className="pwd-message">{passwordMatchMessage}</p>
                </div>
              </div>
              <div className="thing2">
                <div className="edit-set">
                  <label>이름</label>
                  {isName ? (
                    <>
                      <input
                        value={user.name}
                        name="name"
                        onChange={handleInputChange}
                        className="edit-input"
                      />
                      <button onClick={() => setIsName(false)} type="save">
                        완료
                      </button>
                    </>
                  ) : (
                    <>
                      <span>{user.name}</span>
                      <button onClick={() => setIsName(true)} type="change">
                        변경
                      </button>
                    </>
                  )}
                </div>
                <div className="edit-set">
                  <label>휴대폰 번호</label>
                  {isPhone ? (
                    <>
                      <input
                        value={user.phone.tel1}
                        name="phone.tel1"
                        onChange={handleInputChange}
                        className="tel1 tel"
                        maxLength={3}
                      />{" "}
                      -{" "}
                      <input
                        value={user.phone.tel2}
                        name="phone.tel2"
                        onChange={handleInputChange}
                        className="tel2 tel"
                        maxLength={4}
                        ref={tel2Ref}
                      />{" "}
                      -{" "}
                      <input
                        value={user.phone.tel3}
                        name="phone.tel3"
                        onChange={handleInputChange}
                        className="tel3 tel"
                        maxLength={4}
                        ref={tel3Ref}
                      />
                      <button onClick={() => setIsPhone(false)} type="save">
                        완료
                      </button>
                    </>
                  ) : (
                    <>
                      <span>
                        {user.phone.tel1}-{user.phone.tel2}-{user.phone.tel3}
                      </span>
                      <button onClick={() => setIsPhone(true)} type="change">
                        변경
                      </button>
                    </>
                  )}
                </div>
              </div>
              <div className="thing3">
                <div className="edit-set">
                  <label>성별</label>
                  <Radio
                    name="gender"
                    value="male"
                    onHandler={handleInputChange}
                    check={user.gender === "male"}
                  >
                    남성
                  </Radio>

                  <Radio
                    name="gender"
                    value="female"
                    onHandler={handleInputChange}
                    check={user.gender === "female"}
                  >
                    여성
                  </Radio>
                </div>
                <div className="edit-set">
                  <label>성년월일</label>
                  {isBirth ? (
                    <>
                      <input
                        value={user.birth}
                        type="date"
                        name="birth"
                        onChange={handleInputChange}
                        className="edit-input"
                      />
                      <button onClick={() => setIsBirth(false)} type="save">
                        완료
                      </button>
                    </>
                  ) : (
                    <>
                      <span>2001-03-07</span>
                      <button onClick={() => setIsBirth(true)} type="change">
                        변경
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
            <div className="submitBtn">
              <button
                className="save"
                onClick={() => {
                  navigate(-1); //test용
                }}
              >
                저장
              </button>
              <button
                className="cancel"
                onClick={() => {
                  navigate(-1);
                }}
              >
                취소
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyPageEdit;
