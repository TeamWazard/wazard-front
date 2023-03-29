import { useState, useRef } from "react";
import "./SignUpChoose.scss";
import Button_test from "../../components/Button_test";
import Input from "../../components/Input";
import styled from "styled-components";

const InputTel = styled(Input)`
  width: 50px;
`;

const SignUpChoose = () => {
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

  const emailInput = useRef();
  const passwordInput = useRef();
  const passwordConfirmInput = useRef();
  const nameInput = useRef();
  const securityNumInput = useRef();
  const phoneNumInput = useRef();

  //유효성 검사
  const [isEmail, setIsEmail] = useState(false);
  const [isEmailCheck, setIsEmailCheck] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [isConfirmPassword, setIsConfirmPassword] = useState(false);
  const [isName, setIsName] = useState(false);
  const [isSecurityNum, setIsSecurityNum] = useState(false);
  const [isPhoneNum, setIsPhoneNum] = useState(false);

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
    setSecurityNumber({
      ...securityNumber,
      [e.target.name]: currentSN,
    });
  };

  const onPhoneNumberHandler = (e) => {
    const currentPhoneNum = e.target.value.replace(/[^0-9]/g, "");
    e.target.value = currentPhoneNum;
    setPhoneNumber({
      ...phoneNumber,
      [e.target.name]: currentPhoneNum,
    });
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
    } else if (isPassword === false) {
      passwordInput.current.focus();
      return;
    } else if (isConfirmPassword === false) {
      passwordConfirmInput.current.focus();
      return;
    } else if (isName === false) {
      nameInput.current.focus();
      return;
    } else if (isSecurityNum === false) {
      securityNumInput.current.focus();
      return;
    } else if (isPhoneNum === false) {
      phoneNumInput.current.focus();
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
    <div className="bodyBackground">
      <div className="page">
        <h2>Welcome To Wazard</h2>
        <div className="RegisterForm">
          <div className="emailForm">
            <label className="registerLabel">이메일</label>
            <input
              ref={emailInput}
              type="email"
              value={email}
              onChange={onEmailHandler}
            />
            <Button_test
              size="sm"
              textColor="pupple"
              onClick={handledClickEmailBtn}
            >
              이메일 인증
            </Button_test>
            <p className="message">{emailMessage}</p>
          </div>
          <div className="emailCheckForm">
            <label className="registerLabel">이메일 인증번호</label>
            <input />{" "}
            <Button_test
              size="sm"
              textColor="pupple"
              onClick={handledClickEmailCheckBtn}
            >
              인증 확인
            </Button_test>
            <p className="message">{emailCheckMessage}</p>
          </div>
          <div className="passwordForm">
            <label className="registerLabel">비밀번호</label>
            <input
              ref={passwordInput}
              onChange={onPassWordHandler}
              type="password"
            />
            <p className="message">{passwordMessage}</p>
          </div>
          <div className="confirmPasswordForm">
            <label className="registerLabel">비밀번호 확인</label>
            <input
              ref={passwordConfirmInput}
              onChange={onConfirmPassWordHandler}
              type="password"
            />
            <p className="message">{passwordConfirmMessage}</p>
          </div>
          <div className="nameForm">
            <label className="registerLabel">이름</label>
            <input ref={nameInput} onChange={onNameHandler} />
            <p className="message">{nameMessage}</p>
          </div>
          <div className="securityNumberForm">
            <label className="registerLabel">주민등록번호</label>
            <input
              ref={securityNumInput}
              className="InputSecurityNumber"
              name="frontNum"
              onChange={onSecurityNumHandler}
            />{" "}
            -{" "}
            <input
              type="password"
              name="backNum"
              className="InputSecurityNumber"
              onChange={onSecurityNumHandler}
            />
          </div>
          <div className="phoneNumForm">
            <label className="registerLabel">휴대폰 번호</label>
            <input
              className="tel"
              name="fstNum"
              onChange={onPhoneNumberHandler}
            />{" "}
            -{" "}
            <input
              className="tel"
              name="secNum"
              onChange={onPhoneNumberHandler}
            />{" "}
            -{" "}
            <input
              className="tel"
              name="thrNum"
              onChange={onPhoneNumberHandler}
            />
          </div>
          <Button_test size="lg" textColor="pupple" onClick={onSubmitHandler}>
            START
          </Button_test>
          {/* <InputTel onChange={onPhoneNumberHandler} name="thrNum" /> */}
        </div>
      </div>
    </div>
  );
};

export default SignUpChoose;
