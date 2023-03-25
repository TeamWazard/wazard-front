import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import blueLogo from "../imgs/blueLogo.png";

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
  const handlePassword = (e) => {
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
    <div className="bodyBackground">
      <div className="page">
        {/* <div className="titleWrap">WAZARD</div> */}
        <div className="titleImage">
          <img src={blueLogo} alt="Logo" width="100" height="100" />
        </div>

        <div className="contentWrap">
          {/* <div className="inputTitle">이메일 주소</div> */}
          <div className="inputWrap">
            <input
              className="input"
              type="text"
              placeholder="example@email.com"
              value={email}
              onChange={handleEmail}
            />
          </div>
          {/* <div className="errorMessageWrap">
            {!emailValid && email.length > 0 && (
              <div>올바른 이메일을 입력해주세요.</div>
            )}
          </div> */}

          {/* <div style={{ marginTop: "26px" }} className="inputTitle">
          비밀번호
        </div> */}
          <div className="inputWrap">
            <input
              className="input"
              type="password"
              placeholder="영문, 숫자, 특수문자 포함 8자 이상"
              value={password}
              onChange={handlePassword}
            />
          </div>
          {/* <div className="errorMessageWrap">
            {!passwordValid && password.length > 0 && (
              <div color="black">
                영문, 숫자, 특수문자 포함 8자 이상 입력해주세요.
              </div>
            )}
          </div> */}
        </div>

        <div className="btnDiv">
          <button
            onClick={onClickConfirmButton}
            disabled={notAllow}
            className="bottomButton"
          >
            Login
          </button>
          <div className="signUpBtn">
            <Link to="/signup">아직 웨이자드에 가입하지 않으셨나요?</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
