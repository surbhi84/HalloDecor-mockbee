import auth from "./auth.module.css";
import "css/common.css";
import { Link, useNavigate } from "react-router-dom";
import { useReducer, useState } from "react";
import { postUserLogin } from "../../api";
import { useUserData } from "../../hooks/context/userDataContext";
import { Error } from "components";

export function Login() {
  const [isPwdVisible, setIsPwdVisible] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { userDataDispatch } = useUserData();

  const [loginInfo, loginInfoDispatch] = useReducer(login, {
    email: "adarshbalika@gmail.com",
    password: "adarshBalika123",
    rememberMe: false,
  });

  function login(state, { type, payload }) {
    switch (type) {
      case "EMAIL":
        return { ...state, email: payload };
      case "PWD":
        return { ...state, password: payload };
      case "REMEMBER":
        return { ...state, rememberMe: !state.rememberMe };
    }
  }

  return (
    <>
      <main className="flex-center">
        <div
          className={`${auth["login-card "]} ${auth["auth-card"]} flex-col flex-center gap-md`}
        >
          <h3 className={auth["auth-heading"]}>Login</h3>

          <label className={`flex-col gap-sm full-width`}>
            Enter your email id
            <input
              type="text"
              value={loginInfo.email}
              className={`full-width input-line ${auth["input-line"]} `}
              onChange={(e) => {
                loginInfoDispatch({ type: "EMAIL", payload: e.target.value });
              }}
            />
          </label>

          <label className={`flex-col gap-sm full-width`}>
            Enter password
            <div className="flex-row">
              <input
                type={isPwdVisible ? "text" : "password"}
                value={loginInfo.password}
                className={`full-width input-line ${auth["input-line"]}  `}
                onChange={(e) => {
                  loginInfoDispatch({ type: "PWD", payload: e.target.value });
                }}
              />
              <span
                className="pwd-eye"
                onClick={() => {
                  setIsPwdVisible((p) => !p);
                }}
              >
                <i className="fas fa-eye-slash"></i>
              </span>
            </div>
          </label>

          <div className={`flex-row spc-btwn full-width`}>
            <label>
              <input
                type="checkbox"
                onChange={() => {
                  loginInfoDispatch({ type: "REMEMBER" });
                }}
              />{" "}
              Remember me
            </label>

            <a href="#" className="footer-link">
              Forgot your password?
            </a>
          </div>

          <button
            className="cart-btn full-width"
            onClick={async () => {
              try {
                let response = await postUserLogin(loginInfo);
                setError("");
                userDataDispatch({ type: "LOGIN", payload: response.data });
                navigate("/products");
              } catch (err) {
                setError(err.response.data.message);
              }
            }}
          >
            Login
          </button>
          <div>or</div>

          <Link
            to="/signup"
            className="sign-up text-link text-dec-none cursor-pointer"
          >
            Create New Account
          </Link>
          {error !== "" && <Error err={error} setError={setError} />}
        </div>
      </main>
    </>
  );
}
