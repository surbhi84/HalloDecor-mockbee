import { useState } from "react";
import auth from "./auth.module.css";
import { Link, useNavigate } from "react-router-dom";
import { postUserSignup } from "api.js";
import { Error } from "../Error";
import { useSignup } from "./signupReducer";
import { users } from "backend/db/users";

export function Signup() {
  const [isPwdVisible, setIsPwdVisible] = useState(false);
  const [isConfirmPwdVisible, setIsConfirmPwdVisible] = useState(false);
  const [error, setError] = useState("");
  const [signupInfo, signupDispatch] = useSignup();
  const navigate = useNavigate();

  async function onClickSignupHandler() {
    try {
      await postUserSignup(signupInfo);
      setError("");
      navigate("/products");
    } catch (err) {
      setError(err.response.data.message);
    }
  }

  return (
    <>
      <main className="flex-center">
        <div
          className={`${auth["signup-card"]} ${auth["auth-card"]} flex-col flex-center gap-md`}
        >
          <h3 className={auth["auth-heading"]}>Sign up</h3>
          {[
            {
              label: "First Name",
              type: "FIRSTNAME",
              value: signupInfo.firstName,
            },
            {
              label: "Last Name",
              type: "LASTNAME",
              value: signupInfo.lastName,
            },
            { label: "Email id", type: "EMAIL", value: signupInfo.email },
          ].map(({ label, type, value }) => (
            <label className={`flex-col gap-sm full-width`} key={label}>
              {label}
              <input
                type="text"
                className={`input-line ${auth["input-line"]}  full-width`}
                value={value}
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
              value: signupInfo.password,
              setter: setIsPwdVisible,
            },
            {
              label: "Confirm password",
              type: "CONFIRMPWD",
              bool: isConfirmPwdVisible,
              value: signupInfo.confirmPwd,
              setter: setIsConfirmPwdVisible,
            },
          ].map(({ label, type, bool, value, setter }) => (
            <label className={`flex-col gap-sm full-width`} key={label}>
              {label}
              <div className="flex-row">
                <input
                  type={bool ? "text" : "password"}
                  value={value}
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
                defaultChecked={signupInfo.tAC}
                onChange={(e) => {
                  signupDispatch({ type: "TAC" });
                }}
              />
              I accept all terms & conditions
            </label>
          </div>
          <button
            className="cart-btn full-width"
            onClick={onClickSignupHandler}
            disabled={
              signupInfo.password !== signupInfo.confirmPwd || !signupInfo.tAC
            }
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
          {error !== "" && <Error err={error} />}
        </div>
      </main>
    </>
  );
}
