import auth from "./auth.module.css";
import { Link } from "react-router-dom";
import { useReducer, useState } from "react";

export function Signup() {
  const [signupInfo, signupDispatch] = useReducer(signup, {
    firstName: "",
    lastName: "",
    email: "",
    pwd: "",
    confirmPwd: "",
    tAC: false,
  });

  function signup(state, { type, payload }) {
    switch (type) {
      case "FIRSTNAME":
        return { ...state, firstName: payload };
      case "LASTNAME":
        return { ...state, lastName: payload };
      case "EMAIL":
        return { ...state, email: payload };
      case "PWD":
        return { ...state, pwd: payload };
      case "CONFIRMPWD":
        return { ...state, confirmPwd: payload };
      case "TAC":
        return { ...state, tAc: !state.tAc };
    }
  }

  function postUser(firstName, lastName, email, pwd) {}

  const [isPwdVisible, setIsPwdVisible] = useState(false);
  const [isConfirmPwdVisible, setIsConfirmPwdVisible] = useState(false);

  return (
    <>
      <main className="flex-center">
        <div
          className={`${auth["signup-card"]} ${auth["auth-card"]} flex-col flex-center gap-md`}
        >
          <h3 className={auth["auth-heading"]}>Sign up</h3>

          {[
            { label: "First Name", type: "FIRSTNAME" },
            { label: "Last Name", type: "LASTNAME" },
            { label: "Email id", type: "EMAIL" },
          ].map(({ label, type }) => (
            <label className={`flex-col gap-sm full-width`}>
              {label}
              <input
                type="text"
                className={`input-line ${auth["input-line"]}  full-width`}
                onChange={(e) => {
                  signupDispatch({ type: type, payload: e.target.value });
                }}
              />
            </label>
          ))}

          {[
            {
              label: "Choose a password",
              type: "PWD",
              bool: isPwdVisible,
              setter: setIsPwdVisible,
            },
            {
              label: "Confirm password",
              type: "CONFIRMPWD",
              bool: isConfirmPwdVisible,
              setter: setIsConfirmPwdVisible,
            },
          ].map(({ label, type, bool, setter }) => (
            <label className={`flex-col gap-sm full-width`}>
              {label}
              <div className="flex-row">
                <input
                  type={bool ? "text" : "password"}
                  className={`input-line full-width ${auth["input-line"]} `}
                  onChange={(e) => {
                    signupDispatch({ type: type, payload: e.target.value });
                  }}
                />
                <span
                  className="pwd-eye"
                  onClick={() => {
                    setter((p) => !p);
                  }}
                >
                  <i className="fas fa-eye-slash"></i>
                </span>
              </div>
            </label>
          ))}

          <div className="flex-row spc-btwn">
            <label>
              <input
                type="checkbox"
                onChange={(e) => {
                  signupDispatch({ type: "TAC" });
                }}
              />
              I accept all terms & conditions
            </label>
          </div>
          <button
            className="cart-btn full-width"
            onClick={() => {
              console.log(
                signupInfo.firstName,
                signupInfo.lastName,
                signupInfo.email,
                signupInfo.pwd,
                signupInfo.confirmPwd,
                signupInfo.tAc
              );
              postUser(
                signupInfo.firstName,
                signupInfo.lastName,
                signupInfo.email,
                signupInfo.pwd
              );
            }}
          >
            Create New Account
          </button>
          <div>or</div>
          <Link
            to="/login"
            className="login text-link text-dec-none cursor-pointer"
          >
            Already have an account
          </Link>
        </div>
      </main>
    </>
  );
}
