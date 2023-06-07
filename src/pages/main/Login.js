import { useEffect, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import userIcon from "../../imgs/userIcon.svg";
import passwordIcon from "../../imgs/passwordIcon.svg";
import axios from "axios";
import "./Login.scss";
import { getUser } from "../../redux-toolkit/userSlice";
import { loginAPI } from "utils/apis/authAPI";

export default function Login() {
  const [user, setUser] = useState({
    accountId: 1,
    email: "",
    userName: "",
    role: "", // EMPLOYEE
    accessToken: "",
  });

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const [notAllow, setNotAllow] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  localStorage.removeItem("accountId");
  localStorage.removeItem("email");
  localStorage.removeItem("userName");
  localStorage.removeItem("accessToken");

  useEffect(() => {
    if (emailValid && passwordValid) {
      setNotAllow(false);
      return;
    }
    setNotAllow(true);
  }, [emailValid, passwordValid]);

  const inputRefs = {
    emailInput: useRef(),
    passwordInput: useRef(),
  };

  //로그인 일단 200번 띄움
  // <<<<<<< HEAD
  async function handleLoginAPI() {
    try {
      const response = await loginAPI({
        email: email,
        password: password,
        // =======
        //   const loginAxios = () => {
        //     const config = { "Content-Type": "application/json" };
        //     axios
        //       .post(
        //         "http://wazard.shop:9000/account/login",
        //         {
        //           email: email,
        //           password: password,
        //         },
        //         config
        //       )
        //       .then((response) => {
        //         console.log(response);
        //         if (response.status === 200) {
        //           const userData = {
        //             accountId: response.data.accountId,
        //             email: response.data.email,
        //             userName: response.data.userName,
        //             role: response.data.role,
        //           };
        //           dispatch(getUser(userData));
        //           localStorage.setItem("accountId", response.data.accountId);
        //           localStorage.setItem("email", response.data.email);
        //           localStorage.setItem("userName", response.data.userName);
        //           localStorage.setItem("accessToken", response.data.accessToken);
        //           alert(`${response.data.userName}님 어서오세요!`);

        //           if (response.data.role === "EMPLOYER") {
        //             navigate(`/company_list`);
        //           } else if (response.data.role === "EMPLOYEE") {
        //             navigate(`/alba_list`);
        //           }
        //         }
        //       })
        //       .catch((err) => {
        //         alert("이메일, 비밀번호를 확인해주세요.");
        //         console.log(err);
        // >>>>>>> 5163c0150c3a96a90a49fc424d5c43805b6ca743
      });
      if (response.status === 200) {
        dispatch(getUser(response));
        alert(`${response.data.userName}님 어서오세요!`);
        if (response.data.role === "EMPLOYER") {
          navigate(`/company_list`);
        } else if (response.data.role === "EMPLOYEE") {
          navigate(`/alba_list`);
        }
      }
    } catch (error) {
      alert("이메일, 비밀번호를 확인해주세요.");
      console.log(error);
    }
  }

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
    handleLoginAPI();
    // if (email === "") {
    //   inputRefs.emailInput.current.focus();
    // } else if (password === "") {
    //   inputRefs.passwordInput.current.focus();
    // } else if (email === user.email && password === user.password) {
    //   console.log(email);
    //   console.log(password);
    //   alert("로그인에 성공했습니다.");
    // } else {
    //   alert("등록되지 않은 회원입니다.");
    // }
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
              ref={inputRefs.emailInput}
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
              ref={inputRefs.passwordInput}
              className="input"
              type="password"
              value={password}
              onChange={handlePw}
            />
          </div>
          <div>
            <button
              onClick={onClickConfirmButton}
              // disabled={notAllow}
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
