import React, { useEffect, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import userIcon from "../../imgs/userIcon.svg";
import passwordIcon from "../../imgs/passwordIcon.svg";
import "./Login.scss";
import { loginAPI } from "utils/apis/authAPI";
import { useDispatch } from "react-redux";
import { login } from "redux-toolkit/userSlice";

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
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
  function onClickConfirmButton() {
    emailInput.current.focus();
    alert("로그인에 성공했습니다.");
    handleLoginAPI();
    // if (email === "" || password === "") {
    //   emailInput.current.focus();
    //   alert("로그인에 성공했습니다.");
    //   handleLoginAPI();
    // } else {
    //   alert("아이디, 비밀번호를 입력해주세요.");
    // }
  }

  async function handleLoginAPI() {
    try {
      const loginUSer = await loginAPI({
        email: email,
        password: password,
      });
      const savedAccessToken = localStorage.getItem("accessToken");
      dispatch(login(loginUSer));
      console.log(loginUSer);
      alert("로그인이 완료되었습니다.");
    } catch (error) {
      console.log(error);
      alert("로그인 오류");
    }
  }

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
              <Link to="/buttonchoose">SIGN UP</Link>
            </button>
          </div>
          <h3 className="hihi">Forgot your Email or Password ?</h3>
        </div>
      </div>
      {/* 버튼 */}
    </div>
  );
}
