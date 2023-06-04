import { useState, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./SignUpChoose.scss";

import Radio from "./../../components/Radio";
import axios from "axios";

const SignUpChoose = () => {
  const location = useLocation();
  const userType = location.state.userType;
  const navigate = useNavigate();

  // 회원가입 입력 값
  const [email, setEmail] = useState("");
  const [emailCheck, setEmailCheck] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [birth, setBirth] = useState("");
  const [phoneNumber, setPhoneNumber] = useState({
    fstNum: "",
    secNum: "",
    thrNum: "",
  });
  const [authenticationCode, setAuthenticationCode] = useState("");

  // console.log(userType);

  const emailInput = useRef();
  const emailCheckInput = useRef();
  const passwordInput = useRef();
  const passwordConfirmInput = useRef();
  const nameInput = useRef();
  const birthinput = useRef();
  const genderInput = useRef();
  const phoneNumInput_1 = useRef();
  const phoneNumInput_2 = useRef();
  const phoneNumInput_3 = useRef();

  //유효성 검사
  const [isEmail, setIsEmail] = useState(false);
  const [isEmailCheck, setIsEmailCheck] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [isConfirmPassword, setIsConfirmPassword] = useState(false);
  const [isName, setIsName] = useState(false);
  const [isGender, setIsGender] = useState(false);
  const [isBirth, setIsBirth] = useState(false);
  const [isPhoneNum_1, setIsPhoneNum_1] = useState(false);
  const [isPhoneNum_2, setIsPhoneNum_2] = useState(false);
  const [isPhoneNum_3, setIsPhoneNum_3] = useState(false);

  // 오류 메세지
  const [emailMessage, setEmailMessage] = useState("");
  const [emailCheckMessage, setEmailCheckMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [passwordConfirmMessage, setPasswordConfirmMessage] = useState("");
  const [nameMessage, setNameMessage] = useState("");
  const [genderMessage, setGenderMessage] = useState("");

  //API 회원가입
  const registeraxios = () => {
    const config = { "Content-Type": "application/json" };
    axios
      .post(
        "http://wazard.shop:9000/account/join",
        {
          email: email,
          password: password,
          userName: name,
          gender: gender,
          birth: birth,
          phoneNumber: `${phoneNumber.fstNum}-${phoneNumber.secNum}-${phoneNumber.thrNum}`,
          role: userType,
        },
        config
      )
      .then((response) => {
        console.log(response);
        alert("회원가입성공");
        if ((response.status = 200)) {
          return navigate(-1);
        }
      })
      .catch((err) => {
        alert("회원가입이 되지 않았습니다.");
        console.log(err);
      });
  };
  //API 이메일 인증
  const emailauth = () => {
    const config = { "Content-Type": "application/json" };
    axios
      .post(
        "http://wazard.shop:9000/mail/auth",
        {
          email: email,
        },
        config
      )
      .then((response) => {
        setEmailMessage("이메일을 전송하였습니다.");
        setAuthenticationCode(response.data.authenticationCode);
      })
      .catch((err) => {
        setEmailMessage("이메일 전송에 실패하였습니다.");
        // console.log(err);
      });
  };

  const onEmailHandler = (e) => {
    const currentEmail = e.target.value;
    setEmail(currentEmail);
    const emailRegExp =
      /^[A-Za-z0-9_]+[A-Za-z0-9]*[@]{1}[A-Za-z0-9]+[A-Za-z0-9]*[.]{1}[A-Za-z]{1,3}$/;
    if (!emailRegExp.test(currentEmail)) {
      setIsEmail(false);
    } else {
      setIsEmail(true);
    }
  };

  const onEmailCheckHandler = (e) => {
    const currentEmailCheck = e.target.value;
    setEmailCheck(currentEmailCheck);
  };

  const onPassWordHandler = (e) => {
    const currentPassword = e.target.value;
    setPassword(currentPassword);
    const passwordRegExp =
      /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/;
    if (!passwordRegExp.test(currentPassword)) {
      setPasswordMessage(
        "숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요."
      );
      setIsPassword(false);
    } else {
      setIsPassword(true);
      setPasswordMessage("");
    }
  };

  const onConfirmPassWordHandler = (e) => {
    const currentPasswordConfirm = e.target.value;
    setConfirmPassword(currentPasswordConfirm);
    if (password !== currentPasswordConfirm) {
      setIsConfirmPassword(false);
      setPasswordConfirmMessage("비밀번호가 다릅니다.");
    } else {
      setIsConfirmPassword(true);
      setPasswordConfirmMessage("");
    }
  };

  const onNameHandler = (event) => {
    const currentName = event.target.value;
    setName(currentName);

    if (currentName.length < 2 || currentName.length > 5) {
      setIsName(false);
    } else {
      setNameMessage("");
      setIsName(true);
    }
  };

  const onGenderHandler = (e) => {
    const currentGender = e.target.value;
    setGender(currentGender);
    setIsGender(true);
  };

  const onPhoneNumberHandler_1 = (e) => {
    const currentPhoneNum = e.target.value.replace(/[^0-9]/g, "");
    e.target.value = currentPhoneNum;
    setPhoneNumber({
      ...phoneNumber,
      [e.target.name]: currentPhoneNum,
    });
    setIsPhoneNum_1(currentPhoneNum.length === 3);
  };

  const onPhoneNumberHandler_2 = (e) => {
    const currentPhoneNum = e.target.value.replace(/[^0-9]/g, "");
    e.target.value = currentPhoneNum;
    setPhoneNumber({
      ...phoneNumber,
      [e.target.name]: currentPhoneNum,
    });
    setIsPhoneNum_2(currentPhoneNum.length === 4);
  };

  const onPhoneNumberHandler_3 = (e) => {
    const currentPhoneNum = e.target.value.replace(/[^0-9]/g, "");
    e.target.value = currentPhoneNum;
    setPhoneNumber({
      ...phoneNumber,
      [e.target.name]: currentPhoneNum,
    });
    setIsPhoneNum_3(currentPhoneNum.length === 4);
  };

  //이메일 코드 전송
  const handledClickEmailBtn = (e) => {
    if (isEmail === false) {
      setEmailMessage("이메일형식이 올바르지 않습니다.");
    } else {
      setEmailMessage("");
      // alert("이메일 전송 완료 (api실행 x)");
      emailauth();
    }
  };

  // 이메일 인증 코드 확인
  const handledClickEmailCheckBtn = (e) => {
    if (authenticationCode !== "" && emailCheck === authenticationCode) {
      setIsEmailCheck(true);
      setEmailCheckMessage("✅ 이메일 인증이 성공적으로 완료되었습니다.");
    } else {
      setEmailCheckMessage("인증번호가 올바르지 않습니다.");
    }
  };

  const onSubmitHandler = (event) => {
    if (isGender === false) {
      setGenderMessage("성별을 선택해주세요.");
    } else {
      setGenderMessage("");
    }
    if (
      isEmail === true &&
      isEmailCheck === true &&
      isConfirmPassword == true &&
      isName === true &&
      isGender === true &&
      isBirth === true
    ) {
      alert("회원가입 완료");
      // console.log({
      //   email: email,
      //   password: password,
      //   userName: name,
      //   gender: gender,
      //   birth: birth,
      //   phoneNumber: `${phoneNumber.fstNum}-${phoneNumber.secNum}-${phoneNumber.thrNum}`,
      //   role: userType,
      // });
      // registeraxios();
      event.preventDefault();
    }
    if (isEmail === false) {
      emailInput.current.focus();
      return;
    } else if (isEmailCheck === false) {
      emailCheckInput.current.focus();
      return;
    } else if (isPassword === false) {
      passwordInput.current.focus();
      return;
    } else if (isConfirmPassword === false) {
      passwordConfirmInput.current.focus();
      return;
    } else if (isName === false) {
      nameInput.current.focus();
      return;
    } else if (isBirth === false) {
      birthinput.current.focus();
    } else if (isPhoneNum_1 === false) {
      phoneNumInput_1.current.focus();
      return;
    } else if (isPhoneNum_2 === false) {
      phoneNumInput_2.current.focus();
      return;
    } else if (isPhoneNum_3 === false) {
      phoneNumInput_3.current.focus();
      return;
    }

    // let body = {
    //   email: email,
    //   password: password,
    //   name: name,
    //   gender:gender,
    //   birth: birth,
    //   phoneNumber:phoneNumber
    // };

    // dispatch(registerUser(body)).then((response) => {
    //   if (response.payload.success) {
    //     navigate("/");
    //   } else {
    //     alert("Failed to sign up");
    //   }
    // });
  };

  return (
    <div className="all">
      <div className="signUpPage">
        <div className="title">
          <h2>Welcome To Wazard</h2>
        </div>
        <div className="RegisterForm">
          <div className="Form">
            <div className="registerLabel">
              <label>이메일</label>
            </div>
            <input
              className="refisterInputInBtn"
              ref={emailInput}
              type="email"
              value={email}
              placeholder="wazard123@email.com"
              onChange={onEmailHandler}
            />{" "}
            <button className="button_send" onClick={handledClickEmailBtn}>
              {" "}
              이메일 인증
            </button>
          </div>
          {isEmail ? (
            <p className="message-succes">{emailMessage}</p>
          ) : (
            <p className="message">{emailMessage}</p>
          )}

          <div className="Form">
            <div className="registerLabel">
              <label>이메일 인증번호</label>
            </div>
            <input
              ref={emailCheckInput}
              className="refisterInputInBtn"
              onChange={onEmailCheckHandler}
              value={emailCheck}
            />{" "}
            <button className="button_send" onClick={handledClickEmailCheckBtn}>
              인증 확인
            </button>
          </div>
          {isEmailCheck ? (
            <p className="message-succes">{emailCheckMessage}</p>
          ) : (
            <p className="message">{emailCheckMessage}</p>
          )}

          <div className="Form">
            <div className="registerLabel">
              <label>비밀번호</label>
            </div>
            <input
              className="refisterInput"
              ref={passwordInput}
              onChange={onPassWordHandler}
              type="password"
            />
          </div>
          <p className="message">{passwordMessage}</p>
          <div className="Form">
            <div className="registerLabel">
              <label>비밀번호 확인</label>
            </div>
            <input
              className="refisterInput"
              ref={passwordConfirmInput}
              onChange={onConfirmPassWordHandler}
              type="password"
            />
          </div>
          <p className="message">{passwordConfirmMessage}</p>
          <div className="Form">
            <div className="registerLabel">
              <label>이름</label>
            </div>
            <input
              className="refisterInput"
              ref={nameInput}
              onChange={onNameHandler}
              placeholder="2글자이상 5글자 이하"
            />
          </div>
          <p className="message">{nameMessage}</p>
          <div className="Form">
            <div className="registerLabel">
              <label>성별</label>
            </div>
            <div className="gender_wapper">
              <div className="gender_male">
                <Radio
                  name="genderCheck"
                  value="MALE"
                  onHandler={onGenderHandler}
                >
                  남성
                </Radio>
              </div>
              <div className="gender_female">
                <Radio
                  name="genderCheck"
                  value="FEMALE"
                  onHandler={onGenderHandler}
                >
                  여성
                </Radio>
              </div>
            </div>
          </div>
          <p className="message">{genderMessage}</p>
          <div className="Form">
            <div className="registerLabel">
              <label>생년 월 일</label>
            </div>
            <input
              ref={birthinput}
              type="date"
              value={birth}
              onChange={(e) => {
                setBirth(e.target.value);
                setIsBirth(true);
              }}
            />
          </div>
          <div className="Form">
            <div className="registerLabel">
              <label>휴대폰 번호</label>
            </div>

            <div className="tel_wapper">
              <input
                ref={phoneNumInput_1}
                className="tel"
                name="fstNum"
                onChange={onPhoneNumberHandler_1}
                maxLength={3}
              />{" "}
              -{" "}
              <input
                ref={phoneNumInput_2}
                className="tel"
                name="secNum"
                onChange={onPhoneNumberHandler_2}
                maxLength={4}
              />{" "}
              -{" "}
              <input
                ref={phoneNumInput_3}
                className="tel"
                name="thrNum"
                onChange={onPhoneNumberHandler_3}
                maxLength={4}
              />
            </div>
          </div>
          <div className="navegateButton">
            <button className="startBtn" onClick={onSubmitHandler}>
              START
            </button>
            <button className="startCancelBtn" onClick={() => navigate("/")}>
              가입취소
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpChoose;
