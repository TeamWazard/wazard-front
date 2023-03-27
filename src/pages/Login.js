import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import mainLogo from "../imgs/mainLogo.svg";

const User = {
  email: "jjjuyoa@gmail.com",
  pw: "!as990422",
};

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const [notAllow, setNotAllow] = useState(true);

  useEffect(() => {
    if (emailValid && passwordValid) {
      setNotAllow(false);
      return;
    }
    setNotAllow(true);
  }, [emailValid, passwordValid]);

  const handleEmail = (e) => {
    setEmail(e.target.value);
    const regex =
      /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    if (regex.test(e.target.value)) {
      setEmailValid(true);
    } else {
      setEmailValid(false);
    }
  };
  const handlePw = (e) => {
    setPassword(e.target.value);
    const regex =
      /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;
    if (regex.test(e.target.value)) {
      setPasswordValid(true);
    } else {
      setPasswordValid(false);
    }
  };
  const onClickConfirmButton = () => {
    if (email === User.email && password === User.password) {
      alert("로그인에 성공했습니다.");
    } else {
      alert("등록되지 않은 회원입니다.");
    }
  };

  return (
    <div className="all">
      <div className="backgroundTA1" />
      <div className="page">
        <div className="titleWrap">Wazard</div>
        <div className="contentWrap">
          <div className="inputContainer">
            <div className="inputWrap">
              <input
                className="input"
                type="text"
                placeholder="test@email.com"
                value={email}
                onChange={handleEmail}
              />
            </div>
            <div className="inputWrap" style={{ marginTop: "40px" }}>
              <input
                className="input"
                type="password"
                placeholder="영문, 숫자, 특수문자 포함 8자 이상"
                value={password}
                onChange={handlePw}
              />
            </div>
            <h3 className="hihi">Forgot your Email or Password ?</h3>
            <h3>Not a Member?</h3>
          </div>
          <div>
            <button
              onClick={onClickConfirmButton}
              disabled={notAllow}
              className="loginButton"
            >
              ENTER
            </button>
          </div>
        </div>
        {/* 버튼 */}
        <div className="signUpButtonContainer">
          <button
            onClick={onClickConfirmButton}
            disabled={notAllow}
            className="signUpButton"
          >
            sign up
          </button>
        </div>
      </div>
    </div>
  );
}
