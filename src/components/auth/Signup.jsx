import auth from "./auth.module.css";
import { Link } from "react-router-dom";

export function Signup() {
  return (
    <>
      <main className="flex-center">
        <div
          className={`${auth["signup-card"]} ${auth["auth-card"]} flex-col flex-center gap-md`}
        >
          <h3 className={auth["auth-heading"]}>Sign up</h3>

          {["First Name", "Last Name", "Email id"].map((label) => (
            <label className={`flex-col gap-sm full-width`}>
              {label}
              <input
                type="text"
                className={`input-line ${auth["input-line"]}  full-width`}
              />
            </label>
          ))}

          {["Choose a password", "Confirm password"].map((label) => (
            <label className={`flex-col gap-sm full-width`}>
              {label}
              <div className="flex-row">
                <input
                  type="password"
                  className={`input-line full-width ${auth["input-line"]} `}
                />
                <span className="pwd-eye">
                  <i className="fas fa-eye-slash"></i>
                </span>
              </div>
            </label>
          ))}

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
      </main>
    </>
  );
}
