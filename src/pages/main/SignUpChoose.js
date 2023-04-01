import { useState, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./SignUpChoose.scss";

const SignUpChoose = () => {
  const location = useLocation();
  const userType = location.state.userType;
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [emailCheck, setEmailCheck] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [securityNumber, setSecurityNumber] = useState({
    frontNum: "",
    backNum: "",
  });
  const [phoneNumber, setPhoneNumber] = useState({
    fstNum: "",
    secNum: "",
    thrNum: "",
  });

  console.log(userType);

  const emailInput = useRef();
  const emailCheckInput = useRef();
  const passwordInput = useRef();
  const passwordConfirmInput = useRef();
  const nameInput = useRef();
  const securityNumInput_1 = useRef();
  const securityNumInput_2 = useRef();
  const phoneNumInput_1 = useRef();
  const phoneNumInput_2 = useRef();
  const phoneNumInput_3 = useRef();

  //유효성 검사
  const [isEmail, setIsEmail] = useState(false);
  const [isEmailCheck, setIsEmailCheck] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [isConfirmPassword, setIsConfirmPassword] = useState(false);
  const [isName, setIsName] = useState(false);
  const [isSecurityNum_1, setIsSecurityNum_1] = useState(false);
  const [isSecurityNum_2, setIsSecurityNum_2] = useState(false);
  const [isPhoneNum_1, setIsPhoneNum_1] = useState(false);
  const [isPhoneNum_2, setIsPhoneNum_2] = useState(false);
  const [isPhoneNum_3, setIsPhoneNum_3] = useState(false);

  // 오류 메세지
  const [emailMessage, setEmailMessage] = useState("");
  const [emailCheckMessage, setEmailCheckMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [passwordConfirmMessage, setPasswordConfirmMessage] = useState("");
  const [nameMessage, setNameMessage] = useState("");

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
    //이메일 인증번호 체크 필요
  };

  const onPassWordHandler = (e) => {
    const currentPassword = e.target.value;
    setPassword(currentPassword);
    const passwordRegExp =
      /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,20}$/;
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

  const onSecurityNumHandler = (e) => {
    const currentSN = e.target.value.replace(/[^0-9]/g, "");
    e.target.value = currentSN;
    setSecurityNumber({ ...securityNumber, [e.target.value]: currentSN });
    setIsSecurityNum_1(e.target.name === "frontNum" && currentSN.length === 6);
  };

  const onSecurityNumHandler_2 = (e) => {
    const currentSN = e.target.value.replace(/[^0-9]/g, "");
    e.target.value = currentSN;
    setSecurityNumber({ ...securityNumber, [e.target.name]: currentSN });
    setIsSecurityNum_2(currentSN.length === 1);
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

  const handledClickEmailBtn = (e) => {
    if (isEmail === false) {
      setEmailMessage("이메일형식이 올바르지 않습니다.");
    } else {
      setEmailMessage("");
    }
  };

  const handledClickEmailCheckBtn = (e) => {
    // 인증 번호 확인
    setEmailCheckMessage("인증번호가 올바르지 않습니다.");
  };

  const onSubmitHandler = (event) => {
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
    } else if (isSecurityNum_1 === false) {
      securityNumInput_1.current.focus();
      return;
    } else if (isSecurityNum_2 === false) {
      securityNumInput_2.current.focus();
      return;
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
    event.preventDefault();

    // let body = {
    //   email: email,
    //   name: name,
    //   password: password,
    //   birth: birth
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
        <div>
          <h2>Welcome To Wazard</h2>
        </div>
        <div className="RegisterForm">
          <div className="Form">
            <label className="registerLabel">이메일</label>
            <input
              className="refisterInputInBtn"
              ref={emailInput}
              type="email"
              value={email}
              placeholder="test@email.com"
              onChange={onEmailHandler}
            />{" "}
            <button
              className="button_send"
              size="sm"
              textColor="pupple"
              onClick={handledClickEmailBtn}
            >
              {" "}
              이메일 인증
            </button>
          </div>
          <p className="message">{emailMessage}</p>
          <div className="Form">
            <label className="registerLabel">이메일 인증번호</label>
            <input ref={emailCheckInput} className="refisterInputInBtn" />{" "}
            <button
              className="button_send"
              size="sm"
              textColor="pupple"
              onClick={handledClickEmailCheckBtn}
            >
              인증 확인
            </button>
          </div>
          <p className="message">{emailCheckMessage}</p>
          <div className="Form">
            <label className="registerLabel">비밀번호</label>
            <input
              className="refisterInput"
              ref={passwordInput}
              onChange={onPassWordHandler}
              type="password"
            />
          </div>
          <p className="message">{passwordMessage}</p>
          <div className="Form">
            <label className="registerLabel">비밀번호 확인</label>
            <input
              className="refisterInput"
              ref={passwordConfirmInput}
              onChange={onConfirmPassWordHandler}
              type="password"
            />
          </div>
          <p className="message">{passwordConfirmMessage}</p>
          <div className="Form">
            <label className="registerLabel">이름</label>
            <input
              className="refisterInput"
              ref={nameInput}
              onChange={onNameHandler}
              placeholder="2글자이상 5글자 이하"
            />
          </div>
          <p className="message">{nameMessage}</p>
          <div className="Form">
            <label className="registerLabel">주민등록번호</label>
            <input
              ref={securityNumInput_1}
              className="InputSecurityNumber"
              name="frontNum"
              onChange={onSecurityNumHandler}
              maxLength={6}
            />{" "}
            -{" "}
            <input
              ref={securityNumInput_2}
              name="backNum"
              className="InputSecurityNumber_back"
              onChange={onSecurityNumHandler_2}
              maxLength={1}
            />
            <p className="InputSecurityNumber_back_password">******</p>
          </div>
          <div className="Form">
            <label className="registerLabel">휴대폰 번호</label>
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
          <div className="navegateButton">
            <button className="startBtn" onClick={onSubmitHandler}>
              START
            </button>
            <button className="startCancelBtn" onClick={() => navigate(-1)}>
              가입취소
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpChoose;
