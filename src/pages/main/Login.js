import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import userIcon from "../../imgs/userIcon.svg";
import passwordIcon from "../../imgs/passwordIcon.svg";

const User = {
  email: "jjjuyoa@gmail.com",
  password: "!as990422",
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
    if (email === "") {
      emailInput.current.focus();
    } else if (email === User.email && password === User.password) {
      alert("로그인에 성공했습니다.");
    } else {
      alert("등록되지 않은 회원입니다.");
    }
  };

  const emailInput = useRef();
  const passwordInput = useRef();

  return (
    <div className="all">
      <div className="page">
        <div className="titleWrap">Wazard</div>
        <div className="contentWrap">
          <div className="subLogin">
            <img src={userIcon} alt="" />
            <h2>이메일</h2>
          </div>
          <div className="inputWrap">
            <input
              ref={emailInput}
              className="input"
              type="text"
              // placeholder="test@email.com"
              value={email}
              onChange={handleEmail}
            />
          </div>
          <div className="subLogin">
            <img src={passwordIcon} alt="" />
            <h2>비밀번호</h2>
          </div>
          <div className="inputWrap">
            <input
              ref={passwordInput}
              className="input"
              type="password"
              // placeholder="영문, 숫자, 특수문자 포함 8자 이상"
              value={password}
              onChange={handlePw}
            />
          </div>
          <div>
            <button
              onClick={onClickConfirmButton}
              disabled={notAllow}
              className="loginButton"
            >
              LOGIN
            </button>
          </div>
          <div className="signUpButtonContainer">
            <button className="signUpButton">
              <Link to="/signupchoose">SIGN UP</Link>
            </button>
          </div>
          <h3 className="hihi">Forgot your Email or Password ?</h3>
        </div>
      </div>
      {/* 버튼 */}
    </div>
  );
}
