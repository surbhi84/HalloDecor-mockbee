import auth from "./auth.module.css";
import { Link } from "react-router-dom";

export function Signup() {
  return (
    <>
      <main className="flex-center">
        {/* <!-- sign up card --> */}
        <div
          className={`${auth["signup-card"]} ${auth["auth-card"]} flex-col flex-center gap-md`}
        >
          <h3 className={auth["auth-heading"]}>Sign up</h3>

          <label className={`flex-col gap-sm ${auth["full-width"]}`}>
            First Name
            <input
              type="text"
              className={`input-line ${auth["input-line"]}  ${auth["full-width"]}`}
            />
          </label>

          <label className={`flex-col gap-sm ${auth["full-width"]}`}>
            Last Name
            <input
              type="text"
              className={`input-line ${auth["input-line"]}  ${auth["full-width"]}`}
            />
          </label>

          <label className={`flex-col gap-sm ${auth["full-width"]}`}>
            Email id
            <input
              type="text"
              className={`input-line ${auth["input-line"]}  ${auth["full-width"]}`}
            />
          </label>

          <label className={`flex-col gap-sm ${auth["full-width"]}`}>
            Choose a password
            <div className="flex-row">
              <input
                type="password"
                className={`input-line ${auth["input-line"]}  ${auth["full-width"]}`}
              />
              <span className="pwd-eye">
                <i className="fas fa-eye-slash"></i>
              </span>
            </div>
          </label>

          <label className={`flex-col gap-sm ${auth["full-width"]}`}>
            Confirm password
            <div className="flex-row">
              <input
                type="password"
                className={`input-line ${auth["input-line"]}  ${auth["full-width"]}`}
              />
              <span className="pwd-eye">
                <i className="fas fa-eye-slash"></i>
              </span>
            </div>
          </label>

          <div className="flex-row spc-btwn">
            <label>
              <input type="checkbox" /> I accept all terms & conditions
            </label>
          </div>
          <button className="cart-btn full-width">Create New Account</button>
          <div>or</div>
          <Link
            to="/login"
            className="login text-link text-dec-none cursor-pointer"
          >
            Already have an account
          </Link>
        </div>
        {/* <!-- end of sign up card --> */}
      </main>
    </>
  );
}
